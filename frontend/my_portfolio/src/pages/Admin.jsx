import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil, Trash2, ArrowBigLeft, ArrowBigRight,
  Plus, Eye, Save, X, Terminal,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { blogAPI, caseStudyAPI, contactAPI, uploadAPI } from "../services/apis";
import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";
import RichEditor from "../components/ui/RichEditor";
import AdminCardSkeleton from "../components/ui/AdminCardSkeleton";
import EmptyState from "../components/ui/EmptyState";
import { getCategoryColor } from "../utils/categoryColors";
import Tilt from "react-parallax-tilt";


const ITEMS_PER_PAGE = 9;

/* ── Portal: renders children directly into document.body ── */
const Portal = ({ children }) => {
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    const node = el.current;
    node.setAttribute("id", "modal-portal");
    document.body.appendChild(node);
    return () => { if (document.body.contains(node)) document.body.removeChild(node); };
  }, []);
  return createPortal(children, el.current);
};

/* ── Main component ── */
const Admin = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [cases, setCases] = useState([]);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const savedScrollY = useRef(0);
  const theme = useTheme();
  const schemas = {
    blogs: [
      { name: "title",        label: "Blog Title",   type: "text"     },
      { name: "excerpt",      label: "Excerpt",      type: "textarea" },
      { name: "category",     label: "Category",     type: "text"     },
      { name: "content_type", label: "Editor Type",  type: "radio"    },
      { name: "content",      label: "Blog Content", type: "editor"   },
      { name: "is_published", label: "Publish",      type: "checkbox" },
    ],
    cases: [
      { name: "title",           label: "Project Title",       type: "text"      },
      { name: "summary",         label: "Summary",             type: "textarea"  },
      { name: "category",        label: "Category",            type: "text"      },
      { name: "tech_stack",      label: "Tech Stack",          type: "text"      },
      { name: "github_url",      label: "Github URL",          type: "text"      },
      { name: "live_url",        label: "Live URL",            type: "text"      },
      { name: "thumbnail",       label: "Thumbnail",           type: "thumbnail" },
      { name: "company_project", label: "Company Project",     type: "checkbox"  },
      { name: "content",         label: "Case Study Content",  type: "editor"    },
      { name: "is_published",    label: "Publish",             type: "checkbox"  },
    ],
    messages: [
      { name: "name",    label: "Name",    type: "text"     },
      { name: "email",   label: "Email",   type: "text"     },
      { name: "message", label: "Message", type: "textarea" },
    ],
  };

 
  useEffect(() => {
    const open = showForm || showPreview;
    if (open) {
      savedScrollY.current = window.scrollY;
      Object.assign(document.body.style, {
        overflow: "hidden",
        position: "fixed",
        top:      `-${savedScrollY.current}px`,
        left:     "0",
        right:    "0",
      });
    } else {
      Object.assign(document.body.style, {
        overflow: "", position: "", top: "", left: "", right: "",
      });
      if (savedScrollY.current > 0) {
        window.scrollTo(0, savedScrollY.current);
        savedScrollY.current = 0;
      }
    }
    return () => {
      Object.assign(document.body.style, {
        overflow: "", position: "", top: "", left: "", right: "",
      });
    };
  }, [showForm, showPreview]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [b, c, m] = await Promise.all([
        blogAPI.getAll(1, 100),
        caseStudyAPI.getAll(1, 100),
        contactAPI.getAll(1, 100),
      ]);
      setBlogs(b.data.data    || []);
      setCases(c.data.data    || []);
      setMessages(m.data.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => { setPage(1);  }, [tab]);

  const dataset    = tab === "blogs" ? blogs : tab === "cases" ? cases : messages;
  const start      = (page - 1) * ITEMS_PER_PAGE;
  const paginated  = dataset.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const closeForm = () => { setShowForm(false); setEditItem(null); setFormData({}); };

  // Fields that must always be boolean regardless of what the API returns
  const BOOLEAN_FIELDS = new Set(["is_published", "company_project"]);

  const openCreate = () => {
    setEditItem(null);
    const empty = {};
    schemas[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name)) empty[name] = name === "is_published" ? true : false;
      else if (name === "content_type") empty[name] = "rich";
      else empty[name] = "";
    });
    setFormData(empty);
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    const filtered = {};
    schemas[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name)) {
        // Coerce to boolean — handles 0/1, "true"/"false", null, undefined from API
        filtered[name] = Boolean(item[name]);
      } else {
        filtered[name] = item[name] ?? "";
      }
    });
    if (tab === "blogs") filtered.content_type = item.content_type || "rich";
    setFormData(filtered);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (tab === "blogs") {
        editItem
          ? await blogAPI.update(editItem.id, { ...formData })
          : await blogAPI.create({ ...formData });
      }
      if (tab === "cases") {
        const fd = new FormData();
        ["title","summary","content","category","tech_stack","github_url","live_url","thumbnail"]
          .forEach((k) => fd.append(k, formData[k] || ""));
        fd.append("company_project", formData.company_project ? "true" : "false");
        fd.append("is_published",    formData.is_published    ? "true" : "false");
        editItem
          ? await caseStudyAPI.update(editItem.id, fd)
          : await caseStudyAPI.create(fd);
      }
      closeForm();
      fetchData();
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    if (tab === "blogs") await blogAPI.delete(id);
    if (tab === "cases") await caseStudyAPI.delete(id);
    fetchData();
  };

  const previewText = (text = "") =>
    text.replace(/<[^>]+>/g, "").slice(0, 130) + (text.length > 130 ? "…" : "");

  const uploadMediaToCloudinary = async (file, type) => {
    try {
      const res = await uploadAPI.uploadMedia(file, type);
      return res.data.files[0]?.url || null;
    } catch (err) { console.error("Upload error:", err); return null; }
  };

  const renderField = (key, value) => {
    if (key === "content" && (tab === "blogs" || tab === "cases")) {
      if (tab === "cases" || formData.content_type === "rich") {
        return (
          <EditorBlock key={key}>
            <FLabel>Content</FLabel>
            <RichEditor
              value={value || ""}
              onChange={(html) => setFormData((p) => ({ ...p, content: html }))}
              uploadMediaToCloudinary={uploadMediaToCloudinary}
            />
          </EditorBlock>
        );
      }
      return (
        <FGroup key={key} $full>
          <FLabel>{formData.content_type === "html" ? "HTML Content" : "Plain Text"}</FLabel>
          <FTextarea value={value || ""} onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
        </FGroup>
      );
    }

    if (key === "thumbnail") {
      return (
        <FGroup key={key}>
          <FLabel>Thumbnail</FLabel>
          <FFileInput type="file" accept="image/*" onChange={async (e) => {
            const file = e.target.files[0]; if (!file) return;
            setFormData((p) => ({ ...p, thumbnail: URL.createObjectURL(file) }));
            const url = await uploadMediaToCloudinary(file, "image");
            if (url) setFormData((p) => ({ ...p, thumbnail: url }));
          }} />
          {formData.thumbnail && (
            <ThumbPreview>
              <img src={formData.thumbnail} alt="thumb" onError={(e) => { e.target.style.display = "none"; }} />
            </ThumbPreview>
          )}
        </FGroup>
      );
    }

    if (key === "content_type") {
      if (tab !== "blogs") return null;
      return (
        <RadioBlock key={key}>
          <FLabel>Editor Type</FLabel>
          <RadioRow>
            {[["text","Plain Text"],["rich","Rich Editor"],["html","HTML"]].map(([opt, lbl]) => (
              <RadioChip key={opt} type="button" $active={value === opt}
                onClick={() => setFormData({ ...formData, content_type: opt })}>
                {lbl}
              </RadioChip>
            ))}
          </RadioRow>
        </RadioBlock>
      );
    }

    if (typeof value === "boolean") {
      return (
        <ToggleRow key={key}>
          <FLabel style={{ marginBottom: 0 }}>{key.replaceAll("_", " ")}</FLabel>
          <Toggle>
            <input type="checkbox" checked={value}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })} />
            <ToggleTrack />
          </Toggle>
        </ToggleRow>
      );
    }

    if (key === "summary" || key === "excerpt") {
      return (
        <FGroup key={key} $full>
          <FLabel>{key.replace("_", " ")}</FLabel>
          <FTextarea value={value || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
        </FGroup>
      );
    }

    return (
      <FGroup key={key}>
        <FLabel>{key.replace(/_/g, " ")}</FLabel>
        <FInput value={value || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
      </FGroup>
    );
  };

const TAB_CONFIG = [
  { key: "blogs",    label: "Blogs",    color: "#FF2D6B", icon: "📝", count: blogs.length    },
  { key: "cases",    label: "Cases",    color: "#3B82F6", icon: "📁", count: cases.length    },
  { key: "messages", label: "Messages", color: "#00E89D", icon: "💬", count: messages.length },
];

  return (
    <>
      <Page>
        
      <Sidebar>
    
        <NavSection>
          {TAB_CONFIG.map(({ key, label, count, color }) => (
            <SideLink key={key} $active={tab === key} onClick={() => setTab(key)}>
              <SideDot style={{ background: color, opacity: tab === key ? 1 : 0.35 }} />
              <SideLabelText>{label}</SideLabelText>
              <CountPill $active={tab === key} style={tab === key ? { background: color } : {}}>
                {count}
              </CountPill>
            </SideLink>
          ))}
        </NavSection>
      </Sidebar>

        {/* ── Main ── */}
             
      <MainContent>
      

          <PageTitleBlock>
          
            <PageTitle>Command<TitleAccent> Centre</TitleAccent></PageTitle>
            <TitleSub>Welcome back, <strong>{user?.name || "Admin"}</strong>. Manage your content below.</TitleSub>
          </PageTitleBlock>

          {tab !== "messages" && (
            <ActionRow>
              <CreateBtn onClick={openCreate}>
                <Plus size={15} />
                New {tab === "blogs" ? "Blog Post" : "Case Study"}
              </CreateBtn>
            </ActionRow>
          )}

          <GridWrap>
            <CardGrid>
              {loading ? (
                <AdminCardSkeleton count={6} />
              ) : paginated.length === 0 ? (
                <EmptyStateWrap>
                  <EmptyState
                    icon={tab === "blogs" ? "📝" : tab === "cases" ? "📁" : "💬"}
                    title={`No ${tab} yet`}
                    message={
                      tab === "messages"
                        ? "When visitors send you messages they'll appear here."
                        : `Create your first ${tab === "blogs" ? "blog post" : "case study"} to get started.`
                    }
                    action={
                      tab !== "messages" ? (
                        <CreateBtn onClick={openCreate}>
                          <Plus size={15} />
                          New {tab === "blogs" ? "Blog Post" : "Case Study"}
                        </CreateBtn>
                      ) : null
                    }
                  />
                </EmptyStateWrap>
              ) : (
                paginated.map((item, i) => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}>
                     <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: "14px", transformStyle: "preserve-3d", height: "100%" }}
    >
                    <Card>
                      <CardShimmerBar />
                      <CardHeader>
                        <CardTitle>{item.title || item.name || "(no title)"}</CardTitle>
                        {tab !== "messages" && (
                          <CardActions>
                            <IconBtn type="button" onClick={() => openEdit(item)} title="Edit">
                              <Pencil size={13} />
                            </IconBtn>
                            <IconBtn type="button" $danger onClick={() => handleDelete(item.id)} title="Delete">
                              <Trash2 size={13} />
                            </IconBtn>
                          </CardActions>
                        )}
                      </CardHeader>
                      <CardBody>
                          {(tab === "blogs" || tab === "cases") && (
                            <>
                              <ChipsRow>
                                {(() => {
                                  const categories = (item.category || "—")
                                    .split(",")
                                    .map(cat => cat.trim())
                                    .filter(Boolean);

                                  const displayCategories = categories.slice(0, 2);
                                  const remainingCount = categories.length - 2;

                                  return (
                                    <>
                                      {displayCategories.map((cat, i) => (
                                        <CategoryChip key={i} $c={getCategoryColor(cat, theme.mode)}>
                                          {cat}
                                        </CategoryChip>
                                      ))}
                                      
                                      {remainingCount > 0 && (
                                        <CategoryChip $c={getCategoryColor('', theme.mode)}>
                                          +{remainingCount}
                                        </CategoryChip>
                                      )}
                                    </>
                                  );
                                })()}
                              </ChipsRow>
                              
                              <CardPreview>
                                {tab === "blogs" 
                                  ? previewText(item.excerpt || item.content) 
                                  : previewText(item.summary)
                                }
                              </CardPreview>
                            </>
                          )}

                         {tab === "messages" && (
                            <>
                              <CategoryChip $variant="email">
                                {item.email}
                              </CategoryChip>
                              <CardPreview>{previewText(item.message)}</CardPreview>
                            </>
                          )}

                          {tab === "projects" && (
                            <CardPreview>{previewText(item.description)}</CardPreview>  
                          )}
                        </CardBody>
                      {tab !== "messages" && (
                        <CardStatusRow>
                          <StatusDot $on={item.is_published} />
                          <span>{item.is_published ? "Published" : "Draft"}</span>
                        </CardStatusRow>
                      )}
                    </Card>
                    </Tilt>
                  </motion.div>
                ))
              )}
            </CardGrid>
            {!loading && paginated.length >= 6 && <GridFog />}
          </GridWrap>

          {!loading && totalPages > 1 && (
            <Pagination>
              <MagneticButton variant="nav" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                <ArrowBigLeft size={18} />
              </MagneticButton>
              <PageInfo><strong>{page}</strong><PaginationSep>/</PaginationSep>{totalPages}</PageInfo>
              <MagneticButton variant="nav" size="sm" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                <ArrowBigRight size={18} />
              </MagneticButton>
            </Pagination>
          )}
        </MainContent>
      </Page>
   {/* // ── Mobile bottom tab bar ── */}
    <MobileTabBar>
      {TAB_CONFIG.map(({ key, label, color, icon, count }) => (
        <MobileTab key={key} $active={tab === key} $color={color} onClick={() => setTab(key)}>
          <MobileTabIcon $active={tab === key} $color={color}>{icon}</MobileTabIcon>
          <MobileTabLabel $active={tab === key}>{label}</MobileTabLabel>
          {count > 0 && (
            <MobileTabCount $color={color}>{count > 99 ? "99+" : count}</MobileTabCount>
          )}
        </MobileTab>
      ))}
    </MobileTabBar>
      {/* ══ FORM MODAL via Portal — truly viewport-fixed ══ */}
      <Portal>
        <AnimatePresence>
          {showForm && (
            <Overlay as={motion.div}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}>
              <ModalCard as={motion.div}
                initial={{ scale: 0.94, opacity: 0, y: 30 }}
                animate={{ scale: 1,    opacity: 1, y: 0  }}
                exit={{    scale: 0.94, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <ModalTitle>{editItem ? `✏️ Edit ${tab}` : `✨ New ${tab}`}</ModalTitle>
                  <ModalCloseBtn type="button" onClick={closeForm}><X size={15} /></ModalCloseBtn>
                </ModalHeader>
                <FormBody>
                  <FormGrid>
                    {Object.entries(formData).map(([key, value]) => renderField(key, value))}
                  </FormGrid>
                </FormBody>
                <ModalFooter>
                  <ModalBtn type="button" $v="preview" onClick={() => setShowPreview(true)}><Eye size={14} /> Preview</ModalBtn>
                  <ModalBtn type="button" $v="save" onClick={handleSave} disabled={saving}><Save size={14} /> {saving ? "Saving…" : "Save"}</ModalBtn>
                  <ModalBtn type="button" $v="cancel" onClick={closeForm}><X size={14} /> Cancel</ModalBtn>
                </ModalFooter>
              </ModalCard>
            </Overlay>
          )}
        </AnimatePresence>
      </Portal>

      {/* ══ PREVIEW MODAL via Portal ══ */}
      <Portal>
        <AnimatePresence>
          {showPreview && (
            <Overlay as={motion.div}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }} onClick={() => setShowPreview(false)}>
              <PreviewCard as={motion.div}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1,    opacity: 1  }}
                exit={{    scale: 0.94, opacity: 0  }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <ModalTitle>Preview</ModalTitle>
                  <ModalCloseBtn type="button" onClick={() => setShowPreview(false)}><X size={15} /></ModalCloseBtn>
                </ModalHeader>
                <PreviewBody>
                  <PreviewTitle>{formData.title}</PreviewTitle>

                  {formData.category && (
                    <PreviewBadgeRow>
                      {formData.category.split(",").map(cat => cat.trim()).filter(Boolean).map((cat, i) => (
                        <PreviewCategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                          {cat}
                        </PreviewCategoryBadge>
                      ))}
                    </PreviewBadgeRow>
                  )}

                  {formData.tech_stack && (
                    <PreviewTagsRow>
                      {formData.tech_stack.split(",").map(t => t.trim()).filter(Boolean).map((tag, i) => (
                        <PreviewTag key={i}>{tag}</PreviewTag>
                      ))}
                    </PreviewTagsRow>
                  )}

                  <PreviewContent dangerouslySetInnerHTML={{ __html: formData.content }} />
                </PreviewBody>
              </PreviewCard>
            </Overlay>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default Admin;

/* ═══════════════════════════════════ STYLES ══════════════════════════════════ */


const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  padding: 4rem 2.5rem 5rem;

  @media (max-width: 1024px) { padding: 2rem 1.5rem 4rem; }

  @media (max-width: 768px) {
    padding: calc(64px + 1.5rem) 1rem calc(64px + 1rem);
  }
`;

const PageTitleBlock = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.6rem;
`;

const TitleAccent = styled.span`
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TitleSub = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const ActionRow = styled.div`
  margin-bottom: 1.75rem;
`;

const CreateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.62rem 1.4rem;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadowPinkHover};
  }
`;

const GridWrap = styled.div`
  position: relative;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.2rem;
  padding-bottom: 0.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const shimmerMove = keyframes`
  0%   { background-position: -200% 0 }
  100% { background-position:  200% 0 }
`;










const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  /* ── uniform height layout ── */
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCardHover};
    transform: translateY(-2px);
  }
`;

const CardBody = styled.div`
  font-size: 0.85rem;
  flex: 1;                /* grows to fill space between header and status row */
  min-height: 0;          /* prevents flex blowout */
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;      /* no wrap — chips stay on one line */
  gap: 4px;
  margin-bottom: 6px;
  overflow: hidden;       /* hides any overflow if chips are somehow too wide */
`;
const CategoryChip = styled.span`
  display: inline-block;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;

  /* Email Variant Logic */
  background: ${({ $variant, theme }) => 
    $variant === 'email' ? theme.colors.accentBlueBg : (props => props.$c?.bg || 'rgba(255,255,255,0.06)')};
  
  border: 1px solid ${({ $variant, theme }) => 
    $variant === 'email' ? theme.colors.accentBlueBg : (props => props.$c?.border || 'rgba(255,255,255,0.12)')};
  
  /* Make sure text is visible against gradient, or use standard color */
  color: ${({ $variant,theme, $c }) => 
    $variant === 'email' ?  theme.colors.codeText : ($c?.text || '#9BA1B0')};
`;

const CardPreview = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0;
  flex: 1;

  /* clamp to exactly 2 lines always */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardShimmerBar = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: ${({ theme }) => theme.colors.gradientShimmer};
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s;
  animation: ${shimmerMove} 2.5s linear infinite;
  ${Card}:hover & { opacity: 1; }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 0.93rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.3;
  flex: 1;
  margin: 0;
`;

const CardActions = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`;

const IconBtn = styled.button`
  border: none;
  background: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDangerBg : theme.colors.bgGlassLight};
  color: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDanger : theme.colors.textSecondary};
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerBgHover : theme.colors.borderHover};
    color: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerLight : "#fff"};
    transform: scale(1.1);
  }
`;

const CardStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const blinkAnim = keyframes`0%,100%{opacity:1}50%{opacity:0.3}`;
const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $on, theme }) => $on ? theme.colors.accentGreen : theme.colors.textTertiary};
  animation: ${({ $on }) => $on ? blinkAnim : "none"} 2.5s ease-in-out infinite;
`;

const GridFog = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 90px;
  background: linear-gradient(to bottom, transparent 0%, ${({ theme }) => theme.colors.bgPrimary} 100%);
  pointer-events: none;
  z-index: 2;
`;

const EmptyStateWrap = styled.div`
  grid-column: 1 / -1;
`;

const Pagination = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const PaginationSep = styled.span`
  opacity: 0.35;
  margin: 0 0.3rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: ${({ theme }) => theme.colors.overlayBg};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  @media (max-width: 480px) { padding: 0; align-items: flex-end; }
`;

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;
  max-width: 880px;
  max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};
  @media (max-width: 480px) {
    width: 100vw;
    max-height: 96vh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const ModalHeader = styled.div`
  flex-shrink: 0;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 0.97rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;

const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentPinkFocus};
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

const FormBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 22px 24px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 3px;
  }
  @media (max-width: 480px) { padding: 16px; }
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 480px) { padding: 12px 16px; & > * { flex: 1; min-width: 80px; } }
`;

const ModalBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  /* Save */
  ${({ $v, theme }) => $v === "save" && `
    background: ${theme.colors.gradientPinkBlue};
    color:#fff;
    &:hover {
      box-shadow: ${theme.colors.shadowBlueBtnHover};
      transform: translateY(-1px);
    }
  `}

  /* Preview */
  ${({ $v, theme }) => $v === "preview" && `
    background: ${theme.colors.accentBlueBg};
    color: ${theme.colors.accentBlue};
    border: 1px solid ${theme.colors.accentBlueBorder};
    &:hover { background: ${theme.colors.accentBlueBgHover}; }
  `}

  /* Cancel */
  ${({ $v, theme }) => $v === "cancel" && `
    background: ${theme.colors.surfaceSubtle};
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.borderSubtle};
    &:hover {
      background: ${theme.colors.bgGlassLight};
      color: ${theme.colors.textPrimary};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: ${({ $full }) => $full ? "1 / -1" : "auto"};
`;

const FLabel = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const FInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
  }
`;

const FTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
  }
`;

const FFileInput = styled.input`
  padding: 9px 12px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  transition: border-color 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentPink}; }
`;

const ThumbPreview = styled.div`
  margin-top: 8px;
  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;

const RadioBlock = styled.div`grid-column: 1 / -1;`;
const RadioRow = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

const RadioChip = styled.button`
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 0.82rem;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBg : theme.colors.bgTertiary};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBorder : theme.colors.borderDefault};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.codeText : theme.colors.textSecondary};
  transition: all 0.15s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentBlue}; }
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 42px; height: 24px;
  cursor: pointer;
  input { opacity: 0; width: 0; height: 0; position: absolute; }
  input:checked + span { background: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  input:checked + span::before { transform: translateY(-50%) translateX(18px); }
`;

const ToggleTrack = styled.span`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: background 0.3s;
  &::before {
    content: "";
    position: absolute;
    width: 18px; height: 18px;
    left: 2px; top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    box-shadow: 0 1px 4px ${({ theme }) => theme.colors.overlayBg};
  }
`;

const EditorBlock = styled.div`grid-column: 1 / -1;`;

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: min(880px, 92vw);
  max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModalPreview};
  @media (max-width: 480px) {
    width: 100vw;
    max-height: 96vh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const PreviewBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem 3rem;
  @media (max-width: 480px) { padding: 1.25rem; }
`;

const PreviewTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PreviewBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

const PreviewTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.75rem;
`;

const PreviewTag = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%)'
      : 'linear-gradient(90deg, rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%)'
  };
  border: 0.5px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255,45,107,0.28)' : 'rgba(232,23,74,0.22)'
  };
  color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1A1A2E'};
`;


const PreviewCategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
`;

const PreviewContent = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin: 1rem 0;
  }
  h2, h3 { color: ${({ theme }) => theme.colors.textPrimary}; margin: 1.5rem 0 0.75rem; }
  p { margin-bottom: 1.2rem; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow-x: auto;
    font-size: 0.875rem;
    color:${({ theme }) => theme.colors.codeText};
  }
  code {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4.5rem;
  }
`;

const Sidebar = styled.aside`
  width: 15rem;
  flex-shrink: 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 1.25rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) { width: 200px; }
  @media (max-width: 768px) { display: none; }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SideLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBorder : "transparent"};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBg : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const SideDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: opacity 0.2s;
`;

const SideLabelText = styled.span`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
`;

const CountPill = styled.span`
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${({ $active, theme }) => $active ? "" : theme.colors.bgGlassLight};
  color: ${({ $active, theme }) => $active ? "#fff" : "inherit"};
  font-weight: 700;
  min-width: 20px;
  text-align: center;
`;

const MobileTabBar = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.bgTertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    height: 64px;
    padding: 0 8px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
`;

const MobileTab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%; right: 20%;
    height: 2px;
    border-radius: 0 0 3px 3px;
    background: ${({ $color }) => $color || "#FF2D6B"};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.18s;
  }

  &:active { background: ${({ theme }) => theme.colors.surfaceSubtle}; }
`;

const MobileTabLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  transition: color 0.18s;
`;

const MobileTabCount = styled.span`
  position: absolute;
  top: 6px;
  right: calc(50% - 18px);
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: ${({ $color }) => $color || "#FF2D6B"};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

const MobileTabIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  color: ${({ $active, $color, theme }) =>
    $active ? ($color || theme.colors.accentPink) : theme.colors.textTertiary};
  transition: color 0.18s;
`;