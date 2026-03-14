// src/utils/categoryColors.js

const CATEGORY_MAP = {
  dark: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'opinion':     { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'deep-dive':   { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'career':      { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'technology':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'article':     { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'frontend':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'backend':     { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'data':        { bg: 'rgba(250,204,21,0.10)',   border: 'rgba(250,204,21,0.22)',   text: '#FCD34D' },
    'ml':          { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'devops':      { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'database':    { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'case study':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
  },
  light: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'opinion':     { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'deep-dive':   { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'career':      { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'technology':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'article':     { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'frontend':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'backend':     { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'data':        { bg: 'rgba(180,137,0,0.08)',    border: 'rgba(180,137,0,0.20)',    text: '#92700A' },
    'ml':          { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'devops':      { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'database':    { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'case study':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
  },
};

const FALLBACK = {
  dark:  { bg: 'rgba(255, 255, 255, 0.04)', border: 'rgba(255,255,255,0.12)', text: '#9BA1B0' },
  light: { bg: 'rgba(0,0,0,0.06)',       border: 'rgba(0,0,0,0.12)',       text: '#3D3D5C' },
};

// mode comes from theme.mode — 'dark' | 'light'
export const getCategoryColor = (category = '', mode = 'dark') => {
  const key = category.toLowerCase().trim().replace(/\s+/g, '-');
  return CATEGORY_MAP[mode]?.[key] ?? FALLBACK[mode];
};