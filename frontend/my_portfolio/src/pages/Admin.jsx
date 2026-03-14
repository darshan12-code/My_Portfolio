import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowBigRight, Plus } from 'lucide-react';

import { useAuth } from '../contexts/AuthContext';
import { blogAPI, caseStudyAPI, contactAPI, uploadAPI } from '../services/apis';
import MagneticButton from '../components/ui/MagneticButton';
import CardSkeleton from '../components/ui/CardSkeleton';
import EmptyState from '../components/ui/EmptyState';
import MessageModal from '../components/admin/MessageModal';

// ← Split admin components
import AdminContentCard from '../components/admin/AdminContentCard';
import ContentModal from '../components/admin/ContentModal';
import PreviewModal from '../components/admin/PreviewModal';
import {
  Page, Sidebar, NavSection, SideLink, SideDot, SideLabelText, CountPill,
  MainContent, PageTitleBlock, PageTitle, TitleAccent, TitleSub,
  ActionRow, CreateBtn, GridWrap, CardGrid, GridFog,
  EmptyStateWrap, Pagination, PageInfo, PaginationSep,
  MobileTabBar, MobileTab, MobileTabLabel, MobileTabCount, MobileTabIcon,
} from '../components/admin/adminStyles';

const ITEMS_PER_PAGE = 9;

const Portal = ({ children }) => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const node = el.current;
    node.setAttribute('id', 'modal-portal');
    document.body.appendChild(node);
    return () => { if (document.body.contains(node)) document.body.removeChild(node); };
  }, []);
  return createPortal(children, el.current);
};

const SCHEMAS = {
  blogs: [
    { name: 'title' }, { name: 'excerpt' }, { name: 'category' },
    { name: 'content_type' }, { name: 'content' }, { name: 'is_published' },
  ],
  cases: [
    { name: 'title' }, { name: 'summary' }, { name: 'category' },
    { name: 'tech_stack' }, { name: 'github_url' }, { name: 'live_url' },
    { name: 'thumbnail' }, { name: 'company_project' }, { name: 'content' },
    { name: 'is_published' },
  ],
  messages: [{ name: 'name' }, { name: 'email' }, { name: 'message' }],
};

const BOOLEAN_FIELDS = new Set(['is_published', 'company_project']);

const TAB_CONFIG = [
  { key: 'blogs',    label: 'Blogs',    color: '#FF2D6B', icon: '📝' },
  { key: 'cases',    label: 'Cases',    color: '#3B82F6', icon: '📁' },
  { key: 'messages', label: 'Messages', color: '#00E89D', icon: '💬' },
];

const Admin = () => {
  const { user } = useAuth();
  const [tab, setTab]               = useState('blogs');
  const [blogs, setBlogs]           = useState([]);
  const [cases, setCases]           = useState([]);
  const [messages, setMessages]     = useState([]);
  const [page, setPage]             = useState(1);
  const [showForm, setShowForm]     = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [editItem, setEditItem]     = useState(null);
  const [formData, setFormData]     = useState({});
  const [saving, setSaving]         = useState(false);
  const [loading, setLoading]       = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const savedScrollY = useRef(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    const open = showForm || showPreview;
    if (open) {
      savedScrollY.current = window.scrollY;
      Object.assign(document.body.style, {
        overflow: 'hidden', position: 'fixed',
        top: `-${savedScrollY.current}px`, left: '0', right: '0',
      });
    } else {
      Object.assign(document.body.style, { overflow: '', position: '', top: '', left: '', right: '' });
      if (savedScrollY.current > 0) {
        window.scrollTo(0, savedScrollY.current);
        savedScrollY.current = 0;
      }
    }
    return () => Object.assign(document.body.style, { overflow: '', position: '', top: '', left: '', right: '' });
  }, [showForm, showPreview]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [b, c, m] = await Promise.all([
        blogAPI.getAll(1, 100),
        caseStudyAPI.getAll(1, 100),
        contactAPI.getAll(1, 100),
      ]);
      setBlogs(b.data.data || []);
      setCases(c.data.data || []);
      setMessages(m.data.data || []);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => { setPage(1); }, [tab]);

  const dataset    = tab === 'blogs' ? blogs : tab === 'cases' ? cases : messages;
  const paginated  = dataset.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const closeForm = () => { setShowForm(false); setEditItem(null); setFormData({}); };

  const openCreate = () => {
    setEditItem(null);
    const empty = {};
    SCHEMAS[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name)) empty[name] = name === 'is_published';
      else if (name === 'content_type') empty[name] = 'rich';
      else empty[name] = '';
    });
    setFormData(empty);
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    const filtered = {};
    SCHEMAS[tab].forEach(({ name }) => {
      filtered[name] = BOOLEAN_FIELDS.has(name) ? Boolean(item[name]) : (item[name] ?? '');
    });
    if (tab === 'blogs') filtered.content_type = item.content_type || 'rich';
    setFormData(filtered);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (tab === 'blogs') {
        editItem ? await blogAPI.update(editItem.id, formData) : await blogAPI.create(formData);
      }
      if (tab === 'cases') {
        const fd = new FormData();
        ['title','summary','content','category','tech_stack','github_url','live_url','thumbnail']
          .forEach(k => fd.append(k, formData[k] || ''));
        fd.append('company_project', formData.company_project ? 'true' : 'false');
        fd.append('is_published',    formData.is_published    ? 'true' : 'false');
        editItem ? await caseStudyAPI.update(editItem.id, fd) : await caseStudyAPI.create(fd);
      }
      closeForm();
      fetchData();
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    if (tab === 'blogs') await blogAPI.delete(id);
    if (tab === 'cases') await caseStudyAPI.delete(id);
    fetchData();
  };

  const uploadMedia = async (file, type) => {
    try {
      const res = await uploadAPI.uploadMedia(file, type);
      return res.data.files[0]?.url || null;
    } catch { return null; }
  };

  const tabCounts = { blogs: blogs.length, cases: cases.length, messages: messages.length };

  return (
    <>
      <Page>
        <Sidebar>
          <NavSection>
            {TAB_CONFIG.map(({ key, label, color }) => (
              <SideLink key={key} $active={tab === key} onClick={() => setTab(key)}>
                <SideDot style={{ background: color, opacity: tab === key ? 1 : 0.35 }} />
                <SideLabelText>{label}</SideLabelText>
                <CountPill $active={tab === key} style={tab === key ? { background: color } : {}}>
                  {tabCounts[key]}
                </CountPill>
              </SideLink>
            ))}
          </NavSection>
        </Sidebar>

        <MainContent>
          <PageTitleBlock>
            <PageTitle>Command<TitleAccent> Centre</TitleAccent></PageTitle>
            <TitleSub>Welcome back, <strong>{user?.name || 'Admin'}</strong>. Manage your content below.</TitleSub>
          </PageTitleBlock>

          {tab !== 'messages' && (
            <ActionRow>
              <CreateBtn onClick={openCreate}>
                <Plus size={15} />
                New {tab === 'blogs' ? 'Blog Post' : 'Case Study'}
              </CreateBtn>
            </ActionRow>
          )}

          <GridWrap>
            <CardGrid>
              {loading ? (
                <CardSkeleton count={6} />
              ) : paginated.length === 0 ? (
                <EmptyStateWrap>
                  <EmptyState
                    icon={tab === 'blogs' ? '📝' : tab === 'cases' ? '📁' : '💬'}
                    title={`No ${tab} yet`}
                    message={
                      tab === 'messages'
                        ? 'When visitors send you messages they\'ll appear here.'
                        : `Create your first ${tab === 'blogs' ? 'blog post' : 'case study'} to get started.`
                    }
                    action={tab !== 'messages' ? (
                      <CreateBtn onClick={openCreate}>
                        <Plus size={15} /> New {tab === 'blogs' ? 'Blog Post' : 'Case Study'}
                      </CreateBtn>
                    ) : null}
                  />
                </EmptyStateWrap>
              ) : (
                paginated.map((item, i) => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    {/* ← AdminContentCard handles all card rendering */}
                  <AdminContentCard
                    item={item}
                    tab={tab}
                    onEdit={openEdit}
                    onDelete={handleDelete}
                    onMessageClick={tab === 'messages' ? setSelectedMessage : undefined}
                  />
                  </motion.div>
                ))
              )}
            </CardGrid>
            {!loading && paginated.length >= 6 && <GridFog />}
          </GridWrap>

          {!loading && totalPages > 1 && (
            <Pagination>
              <MagneticButton variant="nav" size="sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                <ArrowBigLeft size={18} />
              </MagneticButton>
              <PageInfo><strong>{page}</strong><PaginationSep>/</PaginationSep>{totalPages}</PageInfo>
              <MagneticButton variant="nav" size="sm" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>
                <ArrowBigRight size={18} />
              </MagneticButton>
            </Pagination>
          )}
        </MainContent>
      </Page>

      <MobileTabBar>
        {TAB_CONFIG.map(({ key, label, color, icon }) => (
          <MobileTab key={key} $active={tab === key} $color={color} onClick={() => setTab(key)}>
            <MobileTabIcon $active={tab === key} $color={color}>{icon}</MobileTabIcon>
            <MobileTabLabel $active={tab === key}>{label}</MobileTabLabel>
            {tabCounts[key] > 0 && (
              <MobileTabCount $color={color}>
                {tabCounts[key] > 99 ? '99+' : tabCounts[key]}
              </MobileTabCount>
            )}
          </MobileTab>
        ))}
      </MobileTabBar>

      {/* ← ContentModal handles create/edit */}
      <Portal>
        <ContentModal
          isOpen={showForm}
          editItem={editItem}
          tab={tab}
          formData={formData}
          setFormData={setFormData}
          saving={saving}
          onSave={handleSave}
          onClose={closeForm}
          onPreview={() => setShowPreview(true)}
          uploadMedia={uploadMedia}
        />
      </Portal>

      {/* ← PreviewModal handles preview */}
      <Portal>
        <PreviewModal
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          formData={formData}
        />
      </Portal>

      <Portal>
        <MessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
        </Portal>
    </>
  );
};

export default Admin;