import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import styled from 'styled-components';
import { useCaseStudyDetail } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';
import BackButton from '../components/ui/BackButton';
import CategoryBadge from '../components/ui/CategoryBadge';
import ProseContent from '../components/ui/ProseContent';
import TagList from '../components/ui/TagList';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 5rem;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const CategoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  align-items: center;
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

const TechRow = styled.div`margin-bottom: 3rem;`;

const Thumbnail = styled(motion.img)`
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
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
  const { data, isLoading } = useCaseStudyDetail(slug);

  if (isLoading) return <PageLoader label="Loading project…" />;
  if (!data)     return <Page><Inner><p>Project not found.</p></Inner></Page>;

  const categories = (data.category || '')
    .split(',').map(c => c.trim()).filter(Boolean);

  return (
    <Page>
      <Inner>
        {/* ← BackButton */}
        <BackButton to="/case-studies" label="Back to Case Studies" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.length > 0 && (
            <CategoryRow>
              {/* ← CategoryBadge, one per category */}
              {categories.map((cat, i) => (
                <CategoryBadge key={i} category={cat} />
              ))}
            </CategoryRow>
          )}

          <Title>{data.title}</Title>
          <Summary>{data.summary}</Summary>

          <TechRow>
            {/* ← TagList replaces the manual split + map + Tag loop */}
            <TagList tags={data.tech_stack} />
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

        {/* ← ProseContent — always rich HTML for case studies */}
        <ProseContent html={data.content} />

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