// src/utils/helpers.js
export const parseDate = (dateStr) => {
  if (!dateStr) return null;
  // Normalize space separator to T (handles old format from DB)
  const normalized = dateStr.replace(' ', 'T');
  return new Date(normalized);
};

export const formatDate = (dateStr) => {
  const d = parseDate(dateStr);
  if (!d || isNaN(d)) return '—';
  return d.toLocaleDateString('en-IN', {
    day:      '2-digit',
    month:    'short',
    year:     'numeric',
    timeZone: 'Asia/Kolkata', // ← always show in IST regardless of viewer's locale
  });
};

export const formatDateTime = (dateStr) => {
  const d = parseDate(dateStr);
  if (!d || isNaN(d)) return '—';
  return d.toLocaleString('en-IN', {
    day:      '2-digit',
    month:    'short',
    year:     'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
    hour12:   true,
    timeZone: 'Asia/Kolkata', // ← IST always
  });
};