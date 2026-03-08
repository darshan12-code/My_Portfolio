import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/ui/SectionHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogAPI } from '../services/apis';
import { media } from '../../media';

const Page = styled.div`
  padding: 8rem 4rem ${({ theme }) => theme.spacing.section};
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;

  ${media.tablet} {
    padding: 8rem 2rem;
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

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await blogAPI.getAll();

      const formatted = res.data.data.map((blog) => ({
              id: blog.id,
              title: blog.title,
              excerpt: blog.excerpt,
              category: blog.category || "Article",
              readTime: blog.read_time,
              date: new Date(blog.created_at).toLocaleDateString(),
              link: `/blog/${blog.slug}`
            }));
      setPosts(formatted);

    } catch (err) {
      console.error("Error loading blogs", err);
    }
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <SectionHeader number="03" title="BLOG" />

      <SearchInput
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <List>
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </List>
    </Page>
  );
};

export default Blog;