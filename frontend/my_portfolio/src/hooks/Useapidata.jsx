import { useQuery } from "@tanstack/react-query";
import { blogAPI, caseStudyAPI, portfolioAPI } from "../services/apis";
import { useAuth } from "../contexts/AuthContext";

export const QUERY_KEYS = {
  blogs:           (demo) => [demo ? "demo-blogs"  : "blogs"],
  blogDetail:      (slug, demo) => [demo ? "demo-blog"  : "blog",         slug],
  caseStudies:     (demo) => [demo ? "demo-cases"  : "case-studies"],
  caseStudyDetail: (slug, demo) => [demo ? "demo-case"  : "case-study",   slug],
  featuredWork:    ["featured-work"],
  portfolio:       ["portfolio-data"],
};

export function useBlogs() {
  const { isDemo, demoSession } = useAuth();
  // Demo user in an active session always sees demo content
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.blogs(demo),
    queryFn: async () => {
      const res = demo
        ? await blogAPI.getDemoPreview()
        : await blogAPI.getAll(1, 100);
      return res.data.data.map((blog) => ({
        id:       blog.id,
        title:    blog.title,
        excerpt:  blog.excerpt,
        category: blog.category || "Article",
        readTime: blog.read_time,
        date:     new Date(blog.created_at).toLocaleDateString(),
        link:     `/blog/${blog.slug}`,
      }));
    },
    staleTime: 0, // ← always treat as stale so navigating back refetches
  });
}

export function useBlogDetail(slug) {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.blogDetail(slug, demo),
    queryFn: async () => {
      const res = demo
        ? await blogAPI.getDemoPreviewBySlug(slug)
        : await blogAPI.getBySlug(slug);
      return res.data;
    },
    enabled:   !!slug,
    staleTime: 0,
  });
}

export function useCaseStudies() {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.caseStudies(demo),
    queryFn: async () => {
      const res = demo
        ? await caseStudyAPI.getDemoPreview()
        : await caseStudyAPI.getAll();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
    staleTime: 0,
  });
}

export function useCaseStudyDetail(slug) {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.caseStudyDetail(slug, demo),
    queryFn: async () => {
      const res = demo
        ? await caseStudyAPI.getDemoPreviewBySlug(slug)
        : await caseStudyAPI.getBySlug(slug);
      return res.data;
    },
    enabled:   !!slug,
    staleTime: 0,
  });
}

// These two never change based on demo — home page always shows your real data
export function useFeaturedWork() {
  return useQuery({
    queryKey: QUERY_KEYS.featuredWork,
    queryFn: async () => {
      const res = await caseStudyAPI.getFeatured();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
      staleTime: 0,
  });
}

export function usePortfolioData() {
  return useQuery({
    queryKey: QUERY_KEYS.portfolio,
    queryFn: async () => {
      const res = await portfolioAPI.getAll();
      return res.data;
    },
      staleTime: 0,
  });
}