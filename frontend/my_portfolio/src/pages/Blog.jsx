// src/pages/Blog.jsx
import { useState } from "react";
import styled from "styled-components";
import BlogCard from "../components/cards/BlogCard";
import { useBlogs } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";
import PageHero from "../components/ui/PageHero";

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 8rem 2rem 4rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  outline: none;
  margin-bottom: 2rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const EmptyState = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
`;

const Blog = () => {
  const [search, setSearch] = useState("");

  // Reads from React Query cache — no API call if navigated back within staleTime
  const { data: posts = [], isLoading } = useBlogs();

  // Show full-screen loader while first fetch is in flight
  if (isLoading) return <PageLoader label="Loading posts…" />;

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

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
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <EmptyState>No posts found.</EmptyState>
      ) : (
        <List>
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </List>
      )}
    </Page>
  );
};

export default Blog;