import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "../../media";
import { Pencil, Trash2, ArrowBigLeft,ArrowBigRight  } from "lucide-react";

import { useAuth } from "../contexts/AuthContext";
import { blogAPI, caseStudyAPI, contactAPI } from "../services/apis";

import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";

const ITEMS_PER_PAGE = 10;

const Admin = () => {
  const { user } = useAuth();

  const [tab, setTab] = useState("blogs");

  const [blogs, setBlogs] = useState([]);
  const [cases, setCases] = useState([]);
  const [messages, setMessages] = useState([]);

  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("id");
  const [sortDir, setSortDir] = useState("asc");

  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
const schemas = {
  blogs: ["id","title","slug","excerpt","content","is_published","created_at"],
  cases: ["id","title","slug","summary","content","tech_stack","github_url","live_url","is_published","created_at"],
  messages: ["id","name","email","message","created_at"]
};


  const fetchData = async () => {
    const [b, c, m] = await Promise.all([
      blogAPI.getAll(1, 100),
      caseStudyAPI.getAll(1, 100),
      contactAPI.getAll(1, 100),
    ]);

    setBlogs(b.data.data || []);
    setCases(c.data.data || []);
    setMessages(m.data.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dataset =
    tab === "blogs" ? blogs : tab === "cases" ? cases : messages;

  const sorted = [...dataset].sort((a, b) => {
    const v1 = a[sortKey];
    const v2 = b[sortKey];

    if (v1 > v2) return sortDir === "asc" ? 1 : -1;
    if (v1 < v2) return sortDir === "asc" ? -1 : 1;
    return 0;
  });

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = sorted.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const sortColumn = (key) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const openCreate = () => {
  setEditItem(null);

  const schema = dataset[0] || {};

  const empty = {};

  Object.keys(schema).forEach((key) => {
    if (key === "id" || key === "created_at") return;

    if (typeof schema[key] === "boolean") empty[key] = true;
    else empty[key] = "";
  });

  setFormData(empty);

  setShowForm(true);
};

  const openEdit = (item) => {
    setEditItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (tab === "blogs") {
      editItem
        ? await blogAPI.update(editItem.id, formData)
        : await blogAPI.create(formData);
    } else {
      editItem
        ? await caseStudyAPI.update(editItem.id, formData)
        : await caseStudyAPI.create(formData);
    }

    setShowForm(false);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete item?")) return;

    if (tab === "blogs") await blogAPI.delete(id);
    else await caseStudyAPI.delete(id);

    fetchData();
  };
const columns = dataset.length
  ? Object.keys(dataset[0])
  : schemas[tab];
  return (
    <Page>
      <Sidebar>
        <SideLink onClick={() => setTab("blogs")}>
          Blogs ({blogs.length})
        </SideLink>

        <SideLink onClick={() => setTab("cases")}>
          Case Studies ({cases.length})
        </SideLink>

        <SideLink onClick={() => setTab("messages")}>
          Messages ({messages.length})
        </SideLink>
      </Sidebar>

      <Content>
        <SectionHeader title="ADMIN DASHBOARD" number="⚡" />

        <Welcome>
          Welcome <Accent>{user?.name}</Accent>
        </Welcome>

        {tab !== "messages" && (
          <ActionRow>
            <MagneticButton onClick={openCreate}>
              + Create {tab === "blogs" ? "Blog" : "Case Study"}
            </MagneticButton>
          </ActionRow>
        )}

        <AnimatePresence>
  {showForm && (
    <ModalOverlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowForm(false)}
    >
      <ModalCard
        as={motion.div}
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{editItem ? "Edit Item" : "Create Item"}</h3>

        {Object.entries(formData).map(([key, value]) => {
          if (typeof value === "boolean") {
            return (
              <CheckboxRow key={key}>
                <label>{key}</label>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [key]: e.target.checked,
                    })
                  }
                />
              </CheckboxRow>
            );
          }

          if (
            key.includes("content") ||
            key.includes("excerpt") ||
            key.includes("summary")
          ) {
            return (
              <Textarea
                key={key}
                placeholder={key}
                value={value || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [key]: e.target.value,
                  })
                }
              />
            );
          }

          return (
            <Input
              key={key}
              placeholder={key}
              value={value || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [key]: e.target.value,
                })
              }
            />
          );
        })}

        <ButtonRow>
          <MagneticButton variant="edit" onClick={handleSave}>
            Save
          </MagneticButton>

          <MagneticButton onClick={() => setShowForm(false)}>
            Cancel
          </MagneticButton>
        </ButtonRow>
      </ModalCard>
    </ModalOverlay>
  )}
</AnimatePresence>

        <TableWrapper>
          <StyledTable>
                <thead>
                  <tr>
                    {columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}

                    {tab !== "messages" && <ActionHeader>Actions</ActionHeader>}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((row) => (
                    <tr key={row.id}>
                      {columns.map((key) => (
                        <td key={key} title={String(row[key] ?? "")}>
                          {String(row[key] ?? "")}
                        </td>
                      ))}

                      {tab !== "messages" && (
                        <ActionCell>
                          <div style={{ display: "flex", gap: "0.5rem" }}>
                            <MagneticButton variant="edit" size="sm" onClick={() => openEdit(row)}>
                              <Pencil size={16} />
                            </MagneticButton>

                            <MagneticButton variant="delete" size="sm" onClick={() => handleDelete(row.id)}>
                              <Trash2 size={16} />
                            </MagneticButton>
                          </div>
                        </ActionCell>
                      )}
                    </tr>
                  ))}
                </tbody>
          </StyledTable>
        </TableWrapper>

        <Pagination>
          <MagneticButton variant="nav" size="sm"  disabled={page === 1}
                      onClick={() => setPage(page - 1)}>
           <ArrowBigLeft></ArrowBigLeft>
          </MagneticButton>

                    <span>
                      {page} / {totalPages}
                    </span>
          <MagneticButton variant="nav" size="sm"  disabled={page === totalPages}
                      onClick={() => setPage(page + 1)}>
            <ArrowBigRight></ArrowBigRight>
          </MagneticButton>
        </Pagination>
      </Content>
    </Page>
  );
};

export default Admin;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 230px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  padding: 4rem 1rem;
`;

const SideLink = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Welcome = styled.p`
  margin-bottom: 1.5rem;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
`;
const ActionHeader = styled.th`
  position: sticky;
  right: 0;
  top: 0;
  z-index: 3;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const ActionCell = styled.td`
  position: sticky;
  right: 0;
  background: ${({ theme }) => theme.colors.bgPrimary};
  z-index: 2;
`;
const TableWrapper = styled.div`
  width: 70%;
  max-height: 500px;

  overflow-x: auto;
  overflow-y: auto;

  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 1200px;
  width: max-content;

  th,
  td {
    padding: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};

    ${'' /* max-width: 7rem; */}
    ${'' /* width: 4rem; */}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th {
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.bgSecondary};
    z-index: 2;
  }
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 6px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const FormCard = styled.div`
  margin-bottom: 2rem;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionRow = styled.div`
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 30px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;