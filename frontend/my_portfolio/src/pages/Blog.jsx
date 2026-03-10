// src/pages/Blog.jsx
import { useState } from "react";
import styled from "styled-components";
import BlogCard from "../components/cards/BlogCard";
import PageLoader from "../components/ui/PageLoader";
import PageHero from "../components/ui/PageHero";
import { useBlogs } from "../hooks/useApiData";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  /* Removed max-width constraint — now full width with inner grid */
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
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

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

// 2-column grid on desktop, 1-column on mobile
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const EmptyState = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
  grid-column: 1 / -1;
`;

const LoadMoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const LoadMoreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CountLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Blog = () => {
  const [search, setSearch]     = useState("");
  const [visible, setVisible]   = useState(INITIAL_COUNT);

  const { data: posts = [], isLoading } = useBlogs();

  if (isLoading) return <PageLoader label="Loading posts…" />;

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(search.toLowerCase())
  );

  const shown      = filtered.slice(0, visible);
  const hasMore    = visible < filtered.length;
  const remaining  = filtered.length - visible;

  const handleLoadMore = () => {
    setVisible((v) => v + LOAD_MORE_COUNT);
  };

  // Reset visible count when search changes
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

      <Grid>
        {shown.length === 0 ? (
          <EmptyState>No posts found.</EmptyState>
        ) : (
          shown.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        )}
      </Grid>

      {hasMore && (
        <LoadMoreWrap>
          <LoadMoreBtn onClick={handleLoadMore}>
            Load more ↓
          </LoadMoreBtn>
          <CountLabel>
            Showing {shown.length} of {filtered.length}
          </CountLabel>
        </LoadMoreWrap>
      )}
    </Page>
  );
};

export default Blog;