import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { caseStudyAPI } from '../services/apis';
import { getCategoryColor } from '../utils/categoryColors';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Tag from '../components/ui/Tag';
import LoadingScreen from '../components/ui/LoadingScreen';

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
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: translateX(-3px);
  }
`;

const Header = styled(motion.div)`
  margin-bottom: 2.5rem;
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
  margin-bottom: 1rem;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 2rem 0;
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
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #FF2D6B, #3B82F6);
      border-radius: 2px;
    }
  }

  h3 { font-size: 1.2rem; margin: 2rem 0 0.75rem; color: ${({ theme }) => theme.colors.textPrimary}; }
  p { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  pre {
    background: ${({ theme }) => theme.colors.bgTertiary};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  code {
    background: rgba(255, 45, 107, 0.1);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }

  pre code { background: none; color: inherit; padding: 0; }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.4rem;
    li { margin-bottom: 0.5rem; }
  }
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
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 45, 107, 0.3), 0 4px 15px rgba(59, 130, 246, 0.2);
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
      color: ${({ theme }) => theme.colors.textPrimary};
      box-shadow: 0 4px 20px rgba(255, 45, 107, 0.15);
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => { fetchCase(); }, [slug]);

  const fetchCase = async () => {
    const res = await caseStudyAPI.getBySlug(slug);
    setData(res.data);
  };

  if (!data) return <Page><Inner><LoadingScreen/></Inner></Page>;

  const tags = data.tech_stack ? data.tech_stack.split(',').map(t => t.trim()) : [];
  const catColors = getCategoryColor(data.category);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate('/case-studies')}>
          <ArrowLeft size={14} /> Back to Case Studies
        </BackBtn>

        <Header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.category && (
            <CategoryBadge $c={catColors}>{data.category}</CategoryBadge>
          )}
          <Title>{data.title}</Title>
          <Summary>{data.summary}</Summary>

          <TechRow>
            {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
          </TechRow>
        </Header>

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
            <LinkBtn href={data.live_url} target="_blank" rel="noreferrer">
              <ExternalLink size={15} /> Live Site
            </LinkBtn>
          )}
        </LinkRow>
      </Inner>
    </Page>
  );
};

export default CaseStudyDetails;