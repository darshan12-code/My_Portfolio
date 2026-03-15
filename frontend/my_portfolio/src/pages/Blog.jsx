import { useState } from 'react';
import styled from 'styled-components';
import BlogCard from '../components/cards/BlogCard';
import PageLoader from '../components/ui/PageLoader';
import PageHero from '../components/ui/PageHero';
import LoadMoreButton from '../components/ui/LoadMoreButton';
import { useBlogs } from '../hooks/useApiData';
import EmptyState from '../components/ui/EmptyState';
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) { padding: 8rem 1.5rem 4rem; }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 460px;
  padding: 0.75rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  outline: none;
  margin-bottom: 2.5rem;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.accentPink}; }
  &::placeholder { color: ${({ theme }) => theme.colors.textTertiary}; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: stretch;   /* ← add this */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const Blog = () => {
  const [search, setSearch]   = useState('');
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const { data: posts = [], isLoading } = useBlogs();

  if (isLoading) return <PageLoader label="Loading posts…" />;

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    (p.category || '').toLowerCase().includes(search.toLowerCase())
  );

  const shown   = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setVisible(INITIAL_COUNT);
  };

  return (
    <Page>
      <PageHero
        number="03"
        eyebrow="The Field Journal"
        title="Blog"
        titleAccent="Posts"
        subtitle="Thoughts, tutorials, and deep-dives from 4 years of building things."
        badge={`${posts.length} Articles`}
      />

      <SearchInput
        placeholder="Search posts..."
        value={search}
        onChange={handleSearch}
      />

      {/* ── no posts at all ── */}
      {posts.length === 0 ? (
        <EmptyState
          icon="📝"
          title="No posts yet"
          message="Blog posts will appear here once published."
        />
      ) : filtered.length === 0 ? (
        /* ── search returned nothing ── */
        <EmptyState
          icon="🔍"
          title="No results found"
          message={`Nothing matched "${search}" — try a different search.`}
        />
      ) : (
        <>
          <Grid>
            {shown.map(post => <BlogCard key={post.id} post={post} />)}
          </Grid>
          {hasMore && (
            <LoadMoreButton
              shown={shown.length}
              total={filtered.length}
              onLoad={() => setVisible(v => v + LOAD_MORE_COUNT)}
            />
          )}
        </>
      )}
    </Page>
  );
};
export default Blog;