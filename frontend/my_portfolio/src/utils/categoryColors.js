// src/utils/categoryColors.js
export const categoryColors = {
  // Blog categories
  'tutorial':       { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  'opinion':        { bg: 'rgba(255,107,74,0.1)',   border: 'rgba(255,107,74,0.3)',   text: '#FF6B4A' },
  'deep-dive':      { bg: 'rgba(0,232,157,0.1)',    border: 'rgba(0,232,157,0.3)',    text: '#00E89D' },
  'career':         { bg: 'rgba(255,45,107,0.1)',   border: 'rgba(255,45,107,0.3)',   text: '#FF2D6B' },
  'technology':     { bg: 'rgba(139,92,246,0.1)',   border: 'rgba(139,92,246,0.3)',   text: '#8B5CF6' },
  'article':        { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  // Case Study categories
  'fullstack':      { bg: 'rgba(255,45,107,0.1)',   border: 'rgba(255,45,107,0.3)',   text: '#FF2D6B' },
  'frontend':       { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  'backend':        { bg: 'rgba(0,232,157,0.1)',    border: 'rgba(0,232,157,0.3)',    text: '#00E89D' },
  'data':           { bg: 'rgba(255,200,0,0.1)',    border: 'rgba(255,200,0,0.3)',    text: '#FFC800' },
  'ml':             { bg: 'rgba(139,92,246,0.1)',   border: 'rgba(139,92,246,0.3)',   text: '#8B5CF6' },
  'default':        { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.12)', text: '#9BA1B0' },
};

export const getCategoryColor = (category) => {
  if (!category) return categoryColors.default;
  const key = category.toLowerCase().replace(/\s+/g, '-');
  return categoryColors[key] || categoryColors.default;
};