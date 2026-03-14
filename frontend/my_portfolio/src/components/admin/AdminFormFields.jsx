import styled from 'styled-components';
import RichEditor from '../ui/RichEditor';

// Accepts: key, value, formData, setFormData, tab, uploadMediaToCloudinary
const AdminFormFields = ({ fieldKey: key, value, formData, setFormData, tab, uploadMedia }) => {

  if (key === 'content' && (tab === 'blogs' || tab === 'cases')) {
    if (tab === 'cases' || formData.content_type === 'rich') {
      return (
        <EditorBlock key={key}>
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
      <FGroup key={key} $full>
        <FLabel>{formData.content_type === 'html' ? 'HTML Content' : 'Plain Text'}</FLabel>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </FGroup>
    );
  }

  if (key === 'thumbnail') {
    return (
      <FGroup key={key}>
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

  if (key === 'content_type') {
    if (tab !== 'blogs') return null;
    return (
      <RadioBlock key={key}>
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

  if (typeof value === 'boolean') {
    return (
      <ToggleRow key={key}>
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

  if (key === 'summary' || key === 'excerpt') {
    return (
      <FGroup key={key} $full>
        <FLabel>{key.replace('_', ' ')}</FLabel>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        />
      </FGroup>
    );
  }

  return (
    <FGroup key={key}>
      <FLabel>{key.replace(/_/g, ' ')}</FLabel>
      <FInput
        value={value || ''}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
      />
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

const FLabel = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const FInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
  }
`;

const FTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
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
const RadioRow = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

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