import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { blogAPI, caseStudyAPI, contactAPI,uploadAPI  } from "../services/apis";

import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";
import RichEditor from "../components/ui/RichEditor";

const ITEMS_PER_PAGE = 9;

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
const schemas = {
  blogs: [
    { name: "title", label: "Blog Title", type: "text" },
    { name: "excerpt", label: "Excerpt", type: "textarea" },
    { name: "category", label: "Category", type: "text" },
    { name: "content_type", label: "Editor Type", type: "radio" },
    { name: "content", label: "Blog Content", type: "editor" },
    { name: "is_published", label: "Publish", type: "checkbox" }
  ],
cases: [
  { name: "title", label: "Project Title", type: "text" },
  { name: "summary", label: "Summary", type: "textarea" },
  { name: "category", label: "Category", type: "text" },
  { name: "tech_stack", label: "Tech Stack", type: "text" },
  { name: "github_url", label: "Github URL", type: "text" },
  { name: "live_url", label: "Live URL", type: "text" },
  { name: "thumbnail", label: "Thumbnail Image", type: "thumbnail" }, // ← changed
  { name: "company_project", label: "Company Project", type: "checkbox" },
  { name: "content", label: "Case Study Content", type: "editor" },
  { name: "is_published", label: "Publish", type: "checkbox" }
],
  messages: [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "message", label: "Message", type: "textarea" }
  ]
};

const closeForm = () => {
  
  setShowForm(false);
  setEditItem(null);
  setFormData({});  // ← resets all inputs
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

  useEffect(() => {
    setPage(1);
  }, [tab]);

  const dataset =
    tab === "blogs" ? blogs : tab === "cases" ? cases : messages;

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = dataset.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);
const openCreate = () => {
  setEditItem(null);

  const empty = {};

  schemas[tab].forEach((field) => {          // field is the object
    if (field.name === "is_published") empty[field.name] = true;
    else if (field.name === "content_type") empty[field.name] = "rich";
    else empty[field.name] = "";
  });

  setFormData(empty);
  setShowForm(true);
};
const openEdit = (item) => {
  setEditItem(item);

  const fields = schemas[tab].map(f => f.name);
  const filtered = {};

  fields.forEach(name => {
    filtered[name] = item[name] ?? "";
  });

  // Only add content_type for blogs, nothing extra
  if (tab === "blogs") {
    filtered.content_type = item.content_type || "rich";
  }

  setFormData(filtered);  // ← no extra spread, strictly schema fields only
  setShowForm(true);
};

const handleSave = async () => {
  if (tab === "blogs") {
    const payload = { ...formData };
    editItem
      ? await blogAPI.update(editItem.id, payload)
      : await blogAPI.create(payload);
  }

  if (tab === "cases") {
    const form = new FormData();
    form.append("title", formData.title || "");
    form.append("summary", formData.summary || "");
    form.append("content", formData.content || "");
    form.append("category", formData.category || "");
    form.append("tech_stack", formData.tech_stack || "");
    form.append("github_url", formData.github_url || "");
    form.append("live_url", formData.live_url || "");
    form.append("thumbnail", formData.thumbnail || "");  // ← single URL already set
    form.append("company_project", formData.company_project ? "true" : "false");
    form.append("is_published", formData.is_published ? "true" : "false");

    editItem
      ? await caseStudyAPI.update(editItem.id, form)
      : await caseStudyAPI.create(form);
  }

  closeForm();
  fetchData();
};

  const handleDelete = async (id) => {
    if (!window.confirm("Delete item?")) return;

    if (tab === "blogs") await blogAPI.delete(id);
    if (tab === "cases") await caseStudyAPI.delete(id);

    fetchData();
  };

  const previewText = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]+>/g, "").slice(0, 140) + "...";
  };
const uploadMediaToCloudinary = async (file, type) => {
  try {
    const res = await uploadAPI.uploadMedia(file, type);
    const uploaded = res.data.files[0];
    return uploaded?.url || null;
  } catch (err) {
    console.error("Media upload failed:", err);
    return null;
  }
};
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

        <CardGrid>
          {paginated.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <h3>{item.title || item.name}</h3>

                {tab !== "messages" && (
                  <CardActions>
                    <IconButton onClick={() => openEdit(item)}>
                      <Pencil size={16} />
                    </IconButton>

                    <IconButton
                      $danger
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 size={16} />
                    </IconButton>
                  </CardActions>
                )}
              </CardHeader>

              <CardBody>
                {tab === "blogs" && (
                  <>
                    <Meta>{item.category}</Meta>
                    <p>{previewText(item.excerpt || item.content)}</p>
                  </>
                )}

                {tab === "cases" && (
                  <>
                    <Meta>{item.tech_stack}</Meta>
                    <p>{previewText(item.summary)}</p>
                  </>
                )}

                {tab === "messages" && (
                  <>
                    <Meta>{item.email}</Meta>
                    <p>{previewText(item.message)}</p>
                  </>
                )}
              </CardBody>
            </Card>
          ))}
        </CardGrid>

        <Pagination>
          <MagneticButton
            variant="nav"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowBigLeft />
          </MagneticButton>

          <span>
            {page} / {totalPages || 1}
          </span>

          <MagneticButton
            variant="nav"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowBigRight />
          </MagneticButton>
        </Pagination>

        <AnimatePresence>
          {showForm && (
            <ModalOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeForm()}
            >
              <ModalCard
                as={motion.div}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{editItem ? `Edit ${tab}` : `Create ${tab}`}</h3>
              <FormGrid>
                                {Object.entries(formData).map(([key, value]) => {

                                      if (key === "content" && (tab === "blogs" || tab === "cases")) {
                        // For cases always rich, for blogs check content_type
                        if (tab === "cases" || formData.content_type === "rich") {
                          return (
                            <EditorBlock key={key}>
                              <Label>{tab === "cases" ? "Case Study Content" : "Blog Content"}</Label>
                              <RichEditor
                                value={value || ""}
                                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                                uploadMediaToCloudinary={uploadMediaToCloudinary}
                              />
                            </EditorBlock>
                          );
                        }

                        if (formData.content_type === "html") {
                          return (
                            <FormGroup key={key}>
                              <Label>HTML Content</Label>
                              <Textarea
                                placeholder="Write HTML..."
                                value={value || ""}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                              />
                            </FormGroup>
                          );
                        }

                        if (formData.content_type === "text") {
                          return (
                            <FormGroup key={key}>
                              <Label>Plain Text</Label>
                              <Textarea
                                placeholder="Write plain text..."
                                value={value || ""}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                              />
                            </FormGroup>
                          );
                        }
                      }
                  // CASE STUDY IMAGE UPLOAD
                 
                 if (key === "thumbnail") {
                    return (
                      <FormGroup key={key}>
                        <Label>Thumbnail Image</Label>

                        <ImageUpload
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            // Show local preview instantly while uploading
                            const localUrl = URL.createObjectURL(file);
                            setFormData(prev => ({ ...prev, thumbnail: localUrl }));

                            // Then replace with Cloudinary URL
                            const url = await uploadMediaToCloudinary(file, "image");
                            if (url) setFormData(prev => ({ ...prev, thumbnail: url }));
                          }}
                        />

                        {formData.thumbnail && (
                          <ThumbnailPreview>
                            <img
                              src={formData.thumbnail}
                              alt="thumbnail"
                              onError={(e) => e.target.style.display = "none"}
                            />
                          </ThumbnailPreview>
                        )}
                      </FormGroup>
                    );
                  }
                  // COMPANY PROJECT TOGGLE
                  if (key === "company_project") {
                    return (
                      <ToggleRow key={key}>
                        <Label>Company Project</Label>

                        <input
                          type="checkbox"
                          checked={value || false}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company_project: e.target.checked,
                            })
                          }
                        />
                      </ToggleRow>
                    );
                  }

                  // CONTENT TYPE RADIO
                 
                    if (key === "content_type") {
                      if (tab !== "blogs") return null;  // ← hide for cases
                      return (
                      <RadioGroup key={key}>
                        <Label>Editor Type</Label>

                        <RadioRow>

                          <label>
                            <input
                              type="radio"
                              checked={value === "text"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "text",
                                })
                              }
                            />
                            Plain Text
                          </label>

                          <label>
                            <input
                              type="radio"
                              checked={value === "rich"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "rich",
                                })
                              }
                            />
                            Rich Editor
                          </label>

                          <label>
                            <input
                              type="radio"
                              checked={value === "html"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "html",
                                })
                              }
                            />
                            HTML
                          </label>

                        </RadioRow>
                      </RadioGroup>
                    );
                  }

                  // BOOLEAN FIELDS
                  if (typeof value === "boolean") {
                    return (
                      <CheckboxRow key={key}>
                        <Label>{key.replaceAll("_", " ").toUpperCase()}</Label>

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
                    if (key === "summary" || key === "excerpt") {
                      return (
                        <FormGroup key={key}>
                          <Label>{key.replace("_", " ")}</Label>
                          <Textarea
                            value={value || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, [key]: e.target.value })
                            }
                          />
                        </FormGroup>
                      );
                    }
                  // DEFAULT INPUT
                  return (
                    <FormGroup key={key}>
                      <Label>{key.replace("_", " ")}</Label>

                      <Input
                        value={value || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [key]: e.target.value,
                          })
                        }
                      />
                    </FormGroup>
                  );
                })}
                <ButtonRow>
                  <MagneticButton onClick={() => setShowPreview(true)}>
                    Preview
                  </MagneticButton>

                  <MagneticButton variant="edit" onClick={handleSave}>
                    Save
                  </MagneticButton>

                  <MagneticButton onClick={() => closeForm()}>
                    Cancel
                  </MagneticButton>
                </ButtonRow>
                </FormGrid>
              </ModalCard>
            </ModalOverlay>
          )}
        </AnimatePresence>

        {showPreview && (
          <ModalOverlay onClick={() => setShowPreview(false)}>
            <PreviewModal onClick={(e) => e.stopPropagation()}>
              <h1>{formData.title}</h1>

              <Category>{formData.category}</Category>

              <PreviewContent
                dangerouslySetInnerHTML={{
                  __html: formData.content,
                }}
              />

              <MagneticButton onClick={() => setShowPreview(false)}>
                Close
              </MagneticButton>
            </PreviewModal>
          </ModalOverlay>
        )}
      </Content>
    </Page>
  );
};

export default Admin;

/* -------------------- STYLES -------------------- */

const Page = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  padding: 3rem 1rem;
`;

const SideLink = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
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
  margin-bottom: 1rem;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardBody = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 6px;
`;

const CardActions = styled.div`
  display: flex;
  gap: 6px;
`;

const IconButton = styled.button`
  border: none;
  background: ${({ danger }) => (danger ? "#ff4d4f" : "#2d2d2d")};
  color: white;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
`;
const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
  }
`;
const ImageUpload = styled.input`
  padding: 10px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  cursor: pointer;
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 6px;
`;

const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  margin-bottom: 12px;
`;

const RadioRow = styled.div`
  display: flex;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${({ theme }) => theme.colors.bgTertiary};
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accentPink};
    }
  }

  input {
    accent-color: ${({ theme }) => theme.colors.accentPink};
  }
`;
const ThumbnailPreview = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionRow = styled.div`
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 20px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;
const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
`;
const ModalCard = styled.div`
  width: 90vw;
  height: 90vh;
  max-height: 80vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 30px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const EditorBlock = styled.div`
  margin-bottom: 20px;

  .ql-editor {
    min-height: 200px;
  }
`;

const PreviewBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const PreviewContent = styled.div`
  margin-top: 10px;
  line-height: 1.6;

  img {
    max-width: 100%;
  }

  pre {
    background: #111;
    padding: 10px;
    overflow-x: auto;
  }
`;

const PreviewModal = styled.div`
  width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 40px;
  border-radius: 12px;
`;
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
const Category = styled.div`
  margin-bottom: 20px;
  opacity: 0.6;
`;
const TipTapWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bgPrimary};

  .ProseMirror {
    min-height: 200px;
    outline: none;
    line-height: 1.6;
  }

  p {
    margin: 0 0 10px;
  }

  h1, h2, h3 {
    margin: 10px 0;
  }

  code {
    background: #111;
    padding: 4px 6px;
    border-radius: 4px;
  }

  pre {
    background: #111;
    padding: 10px;
    overflow-x: auto;
  }
`;
const Toolbar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  button {
    padding: 6px 10px;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme.colors.bgTertiary};
    cursor: pointer;
  }
`;