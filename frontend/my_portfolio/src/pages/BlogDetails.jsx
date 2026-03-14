// src/pages/BlogDetails.jsx
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { getCategoryColor } from "../utils/categoryColors";
import { useBlogDetail } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";
import { useTheme } from 'styled-components';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 4rem;
`;

const Inner = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
    transform: translateX(-3px);
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  margin-bottom: 1.25rem;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 5vw, 3rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};

  span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderDefault};
    margin-top: 1rem;
  }
`;

const Content = styled(motion.div)`
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    margin: 3rem 0 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    padding-left: 1rem;
    &::before {
      content: "";
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.accentPink};
      border-radius: 2px;
    }
  }
  h3 { font-size: 1.2rem; margin: 2rem 0 0.75rem; color: ${({ theme }) => theme.colors.textPrimary}; }
  p  { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
  a  { color: ${({ theme }) => theme.colors.accentBlue}; text-decoration: underline; text-underline-offset: 3px; }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.75rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
    border-radius: 0 8px 8px 0;
  }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color:${({ theme }) => theme.colors.codeText};
  }
  code {
    background:${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  img { max-width: 100%; border-radius: 10px; margin: 1.5rem 0; border: 1px solid ${({ theme }) => theme.colors.borderDefault}; }
  ul, ol { padding-left: 1.5rem; margin-bottom: 1.4rem; li { margin-bottom: 0.5rem; } }
  hr { border: none; border-top: 1px solid ${({ theme }) => theme.colors.borderDefault}; margin: 2.5rem 0; }
`;

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const theme = useTheme();
  // Reads from React Query cache — no API call if visited before within staleTime
  const { data: blog, isLoading } = useBlogDetail(slug);

  if (isLoading) return <PageLoader label="Loading post…" />;
  if (!blog)     return <Page><Inner><p>Post not found.</p></Inner></Page>;

  const catColors = getCategoryColor(blog.category,theme.mode);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate("/blog")}>
          <ArrowLeft size={14} /> Back to Blog
        </BackBtn>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {blog.category && (
            <CategoryBadge $c={catColors}>{blog.category}</CategoryBadge>
          )}

          <Title
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {blog.title}
          </Title>

          <MetaRow>
            <span><Clock size={13} />{blog.read_time || "5 min read"}</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
          </MetaRow>

          <Content
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blog.content_type === "text"
              ? <p>{blog.content}</p>
              : <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            }
          </Content>
        </motion.div>
      </Inner>
    </Page>
  );
};

export default BlogDetail;