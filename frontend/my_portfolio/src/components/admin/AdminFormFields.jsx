import { useState } from 'react';
import styled from 'styled-components';
import RichEditor from '../ui/RichEditor';

/* ── validation rules per field ─────────────────────────────── */
const VALIDATORS = {
  title: (v) => {
    if (!v?.trim()) return 'Title is required';
    if (v.length > 400) return `Too long — ${v.length}/200 chars`;
    return null;
  },
  excerpt: (v) => {
    if (!v?.trim()) return 'Excerpt is required';
    if (v.length > 1000) return `Too long — ${v.length}/500 chars`;
    return null;
  },
  summary: (v) => {
    if (!v?.trim()) return 'Summary is required';
    if (v.length > 1500) return `Too long — ${v.length}/500 chars`;
    return null;
  },
  category: (v) => {
    if (!v?.trim()) return 'Category is required';
    return null;
  },
  tech_stack: (v) => {
    if (!v?.trim()) return 'Tech stack is required';
    return null;
  },
  github_url: (v) => {
    if (!v) return null; // optional
    if (!v.startsWith('https://')) return 'Must start with https://';
    return null;
  },
  live_url: (v) => {
    if (!v) return null; // optional
    if (!v.startsWith('https://')) return 'Must start with https://';
    return null;
  },
};
export const validateForm = (formData, tab) => {
  const errors = {};

  if (tab === 'blogs') {
    if (!formData.title?.trim())
      errors.title = 'Title is required';
    else if (formData.title.trim().length > 400)
      errors.title = `Too long — ${formData.title.length}/200 chars`;

    if (!formData.excerpt?.trim())
      errors.excerpt = 'Excerpt is required';
    else if (formData.excerpt.trim().length > 1000)
      errors.excerpt = `Too long — ${formData.excerpt.length}/500 chars`;

    if (!formData.category?.trim())
      errors.category = 'Category is required';
  }

  if (tab === 'cases') {
    if (!formData.title?.trim())
      errors.title = 'Title is required';
    else if (formData.title.trim().length > 400)
      errors.title = `Too long — ${formData.title.length}/200 chars`;

    if (!formData.summary?.trim())
      errors.summary = 'Summary is required';
    else if (formData.summary.trim().length > 1500)
      errors.summary = `Too long — ${formData.summary.length}/500 chars`;

    if (!formData.category?.trim())
      errors.category = 'Category is required';

    if (!formData.tech_stack?.trim())
      errors.tech_stack = 'Tech stack is required';

    if (formData.github_url && !formData.github_url.startsWith('https://'))
      errors.github_url = 'Must start with https://';

    if (formData.live_url && !formData.live_url.startsWith('https://'))
      errors.live_url = 'Must start with https://';
  }

  return errors;
};
const AdminFormFields = ({ fieldKey: key, value, formData, setFormData, tab, uploadMedia }) => {
  const [touched, setTouched] = useState(false);

  const validate = (k, v) => VALIDATORS[k]?.(v) ?? null;
  const error    = touched ? validate(key, value) : null;
  const onBlur   = () => setTouched(true);

  /* ── Rich / plain content editor ──────────────────────────── */
  if (key === 'content' && (tab === 'blogs' || tab === 'cases')) {
    if (tab === 'cases' || formData.content_type === 'rich') {
      return (
        <EditorBlock>
          <FLabel>Content</FLabel>
          <RichEditor
            value={value || ''}
            onChange={(html) => setFormData(p => ({ ...p, content: html }))}
            uploadMediaToCloudinary={uploadMedia}
          />
        </EditorBlock>
      );
    }
    return (
      <FGroup $full>
        <FLabel>{formData.content_type === 'html' ? 'HTML Content' : 'Plain Text'}</FLabel>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </FGroup>
    );
  }

  /* ── Thumbnail upload ──────────────────────────────────────── */
  if (key === 'thumbnail') {
    return (
      <FGroup>
        <FLabel>Thumbnail</FLabel>
        <FFileInput
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files[0]; if (!file) return;
            setFormData(p => ({ ...p, thumbnail: URL.createObjectURL(file) }));
            const url = await uploadMedia(file, 'image');
            if (url) setFormData(p => ({ ...p, thumbnail: url }));
          }}
        />
        {formData.thumbnail && (
          <ThumbPreview>
            <img
              src={formData.thumbnail}
              alt="thumb"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </ThumbPreview>
        )}
      </FGroup>
    );
  }

  /* ── Content type radio ────────────────────────────────────── */
  if (key === 'content_type') {
    if (tab !== 'blogs') return null;
    return (
      <RadioBlock>
        <FLabel>Editor Type</FLabel>
        <RadioRow>
          {[['text', 'Plain Text'], ['rich', 'Rich Editor'], ['html', 'HTML']].map(([opt, lbl]) => (
            <RadioChip
              key={opt}
              type="button"
              $active={value === opt}
              onClick={() => setFormData({ ...formData, content_type: opt })}
            >
              {lbl}
            </RadioChip>
          ))}
        </RadioRow>
      </RadioBlock>
    );
  }

  /* ── Boolean toggle ────────────────────────────────────────── */
  if (typeof value === 'boolean') {
    return (
      <ToggleRow>
        <FLabel style={{ marginBottom: 0 }}>{key.replaceAll('_', ' ')}</FLabel>
        <Toggle>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })}
          />
          <ToggleTrack />
        </Toggle>
      </ToggleRow>
    );
  }

  /* ── Textarea fields ───────────────────────────────────────── */
  if (key === 'summary' || key === 'excerpt') {
    return (
      <FGroup $full>
        <FLabelRow>
          <FLabel>{key.replace('_', ' ')}</FLabel>
          {value?.length > 0 && (
            <CharCount $warn={value.length > 450}>
              {value.length}/500
            </CharCount>
          )}
        </FLabelRow>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          onBlur={onBlur}
          $error={!!error}
        />
        {error && <FieldError>{error}</FieldError>}
      </FGroup>
    );
  }

  /* ── Default input ─────────────────────────────────────────── */
  const isUrlField = key === 'github_url' || key === 'live_url';
  const isRequired = ['title', 'category', 'tech_stack'].includes(key);

  return (
    <FGroup>
      <FLabelRow>
        <FLabel>
          {key.replace(/_/g, ' ')}
          {isRequired && <Required>*</Required>}
        </FLabel>
        {key === 'title' && value?.length > 0 && (
          <CharCount $warn={value.length > 180}>
            {value.length}/200
          </CharCount>
        )}
      </FLabelRow>

      <InputWrap>
        {isUrlField && value && (
          <UrlPrefix>https://</UrlPrefix>
        )}
        <FInput
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          onBlur={onBlur}
          $error={!!error}
          placeholder={
            key === 'tech_stack'  ? 'React, Flask, PostgreSQL' :
            key === 'category'    ? 'frontend / backend / fullstack' :
            key === 'github_url'  ? 'https://github.com/...' :
            key === 'live_url'    ? 'https://...' :
            ''
          }
        />
      </InputWrap>
      {error && <FieldError>{error}</FieldError>}
    </FGroup>
  );
};

export default AdminFormFields;


/* ── Styles ── */
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: ${({ $full }) => $full ? '1 / -1' : 'auto'};
`;

const FLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FLabel = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
  margin-left: 2px;
`;

const CharCount = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: ${({ $warn, theme }) =>
    $warn ? theme.colors.accentCoral : theme.colors.textTertiary};
  transition: color 0.2s;
`;

const FieldError = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentDanger};
  display: flex;
  align-items: center;
  gap: 4px;
  &::before { content: '⚠'; font-size: 0.6rem; }
`;

const InputWrap = styled.div`position: relative;`;

const UrlPrefix = styled.span`
  position: absolute;
  left: 10px; top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  pointer-events: none;
  display: none; /* only show as placeholder, not overlay */
`;

const FInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ $error, theme }) =>
    $error ? theme.colors.accentDanger : theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.accentDanger : theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ $error, theme }) =>
      $error ? theme.colors.accentDangerBg : theme.colors.accentPinkFocus};
  }
`;

const FTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ $error, theme }) =>
    $error ? theme.colors.accentDanger : theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.accentDanger : theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ $error, theme }) =>
      $error ? theme.colors.accentDangerBg : theme.colors.accentPinkFocus};
  }
`;

const FFileInput = styled.input`
  padding: 9px 12px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  transition: border-color 0.2s;
  box-sizing: border-box;
  &:hover { border-color: ${({ theme }) => theme.colors.accentPink}; }
`;

const ThumbPreview = styled.div`
  margin-top: 8px;
  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;

const RadioBlock = styled.div`grid-column: 1 / -1;`;
const RadioRow   = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

const RadioChip = styled.button`
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 0.82rem;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBg : theme.colors.bgTertiary};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBorder : theme.colors.borderDefault};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.codeText : theme.colors.textSecondary};
  transition: all 0.15s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentBlue}; }
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 42px; height: 24px;
  cursor: pointer;
  input { opacity: 0; width: 0; height: 0; position: absolute; }
  input:checked + span { background: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  input:checked + span::before { transform: translateY(-50%) translateX(18px); }
`;

const ToggleTrack = styled.span`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: background 0.3s;
  &::before {
    content: '';
    position: absolute;
    width: 18px; height: 18px;
    left: 2px; top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    box-shadow: 0 1px 4px ${({ theme }) => theme.colors.overlayBg};
  }
`;

const EditorBlock = styled.div`grid-column: 1 / -1;`;