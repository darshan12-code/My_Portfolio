// src/hooks/useApiData.js
// Centralized React Query hooks for all public API calls.
// These replace the manual useState + useEffect + fetch patterns in each page.
//
// WHY: When each page manages its own state with useEffect, navigating away
// unmounts the component and destroys the data. Navigating back = fresh fetch.
// React Query caches the result globally, so returning to a page = instant render.

import { useQuery } from "@tanstack/react-query";
import { blogAPI, caseStudyAPI } from "../services/apis";

/* ─────────────────────────────────────────────
   QUERY KEYS — centralised so all components
   share the same cache entries
───────────────────────────────────────────── */
export const QUERY_KEYS = {
  blogs:          ["blogs"],
  blogDetail:     (slug) => ["blog", slug],
  caseStudies:    ["case-studies"],
  caseStudyDetail:(slug) => ["case-study", slug],
  featuredWork:   ["featured-work"],
};

/* ─────────────────────────────────────────────
   BLOGS LIST
   Used by: Blog page
───────────────────────────────────────────── */
export function useBlogs() {
  return useQuery({
    queryKey: QUERY_KEYS.blogs,
    queryFn: async () => {
      const res = await blogAPI.getAll(1, 100);
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
    // Keep fresh for 5 minutes — blog posts don't change often
    staleTime: 5 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   BLOG DETAIL
   Used by: BlogDetails page
───────────────────────────────────────────── */
export function useBlogDetail(slug) {
  return useQuery({
    queryKey: QUERY_KEYS.blogDetail(slug),
    queryFn:  async () => {
      const res = await blogAPI.getBySlug(slug);
      return res.data;
    },
    enabled: !!slug,
    // Detail pages stay fresh longer — content rarely changes mid-session
    staleTime: 10 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   CASE STUDIES LIST
   Used by: CaseStudies page
───────────────────────────────────────────── */
export function useCaseStudies() {
  return useQuery({
    queryKey: QUERY_KEYS.caseStudies,
    queryFn: async () => {
      const res = await caseStudyAPI.getAll();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   CASE STUDY DETAIL
   Used by: CaseStudyDetails page
───────────────────────────────────────────── */
export function useCaseStudyDetail(slug) {
  return useQuery({
    queryKey: QUERY_KEYS.caseStudyDetail(slug),
    queryFn:  async () => {
      const res = await caseStudyAPI.getBySlug(slug);
      return res.data;
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   FEATURED WORK
   Used by: FeaturedProjects (Home page)
───────────────────────────────────────────── */
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
    staleTime: 5 * 60 * 1000,
  });
}