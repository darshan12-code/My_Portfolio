import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useBlogDetail } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';
import BackButton from '../components/ui/BackButton';
import CategoryBadge from '../components/ui/CategoryBadge';
import ProseContent from '../components/ui/ProseContent';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 4rem;
`;

const Inner = styled.div`
  max-width: 740px;
  margin: 0 auto;
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
  margin-top: 1.25rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};

  span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderDefault};
    margin-top: 1rem;
  }
`;

const BlogDetail = () => {
  const { slug } = useParams();
  const { data: blog, isLoading } = useBlogDetail(slug);

  if (isLoading) return <PageLoader label="Loading post…" />;
  if (!blog)     return <Page><Inner><p>Post not found.</p></Inner></Page>;

  return (
    <Page>
      <Inner>
        {/* ← BackButton replaces 20 lines of inline styled button */}
        <BackButton to="/blog" label="Back to Blog" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* ← CategoryBadge replaces 15 lines of inline styled span */}
          {blog.category && <CategoryBadge category={blog.category} />}

          <Title
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {blog.title}
          </Title>

          <MetaRow>
            <span><Clock size={13} />{blog.read_time || '5 min read'}</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </span>
          </MetaRow>
        </motion.div>

        {/* ← ProseContent replaces 60 lines of inline styled Content component */}
        <ProseContent
          html={blog.content}
          contentType={blog.content_type}
        />
      </Inner>
    </Page>
  );
};

export default BlogDetail;