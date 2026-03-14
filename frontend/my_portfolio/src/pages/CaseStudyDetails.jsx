// src/pages/CaseStudyDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategoryColor } from "../utils/categoryColors";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Tag from "../components/ui/Tag";
import PageLoader from "../components/ui/PageLoader";
import { useCaseStudyDetail } from "../hooks/useApiData";
import { styled, useTheme } from "styled-components";


const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 5rem;
`;

const Inner = styled.div`
  max-width: 860px;
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

const CategoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ $c }) => $c?.bg || 'rgba(255,255,255,0.06)'};
  border: 1px solid ${({ $c }) => $c?.border || 'rgba(255,255,255,0.12)'};
  color: ${({ $c }) => $c?.text || '#9BA1B0'};
  white-space: nowrap;
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 680px;
`;

const Thumbnail = styled(motion.img)`
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const TechRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
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
  img { max-width: 100%; border-radius: 10px; margin: 1.5rem 0; border: 1px solid ${({ theme }) => theme.colors.borderDefault}; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
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
  ul, ol { padding-left: 1.5rem; margin-bottom: 1.4rem; li { margin-bottom: 0.5rem; } }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 45, 107, 0.3);
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      border-color: ${({ theme }) => theme.colors.accentPink};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  // Reads from React Query cache — no API call if visited before within staleTime
  const { data, isLoading } = useCaseStudyDetail(slug);

  if (isLoading) return <PageLoader label="Loading project…" />;
  if (!data)     return <Page><Inner><p>Project not found.</p></Inner></Page>;

  const tags = data.tech_stack
    ? data.tech_stack.split(",").map((t) => t.trim())
    : [];
  const catColors = getCategoryColor(data.category);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate("/case-studies")}>
          <ArrowLeft size={14} /> Back to Case Studies
        </BackBtn>

        <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {data.category && (
                <CategoryRow>
                  {(() => {
                    const categories = data.category
                      .split(",")
                      .map((cat) => cat.trim())
                      .filter(Boolean);

                    const displayCats = categories
                   

                    return (
                      <>
                        {displayCats.map((cat, i) => (
                          <CategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                            {cat}
                          </CategoryBadge>
                        ))}
                        
                  
                      </>
                    );
                  })()}
                </CategoryRow>
              )}

              <Title>{data.title}</Title>
              <Summary>{data.summary}</Summary>
              
              <TechRow>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TechRow>
            </motion.div>

        {data.thumbnail && (
          <Thumbnail
            src={data.thumbnail}
            alt={data.title}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}

        <Content
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <LinkRow>
          {data.github_url && (
            <LinkBtn href={data.github_url} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </LinkBtn>
          )}
          {data.live_url && (
            <LinkBtn href={data.live_url} target="_blank" rel="noreferrer" className="outline">
              <ExternalLink size={15} /> Live Site
            </LinkBtn>
          )}
        </LinkRow>
      </Inner>
    </Page>
  );
};

export default CaseStudyDetails;