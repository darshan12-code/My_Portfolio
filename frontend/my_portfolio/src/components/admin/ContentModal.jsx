import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Save, X } from 'lucide-react';
import AdminFormFields, { FormGrid } from './AdminFormFields';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';

const ContentModal = ({
  isOpen,
  editItem,
  tab,
  formData,
  setFormData,
  saving,
  onSave,
  onClose,
  onPreview,
  uploadMedia,
}) => (
  <AnimatePresence>
    {isOpen && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <ModalCard
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>{editItem ? `✏️ Edit ${tab}` : `✨ New ${tab}`}</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <FormBody>
            <FormGrid>
              {Object.entries(formData).map(([key, value]) => (
                <AdminFormFields
                  key={key}
                  fieldKey={key}
                  value={value}
                  formData={formData}
                  setFormData={setFormData}
                  tab={tab}
                  uploadMedia={uploadMedia}
                />
              ))}
            </FormGrid>
          </FormBody>

          <ModalFooter>
            <ModalBtn type="button" $v="preview" onClick={onPreview}>
              <Eye size={14} /> Preview
            </ModalBtn>
            <ModalBtn type="button" $v="save" onClick={onSave} disabled={saving}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save'}
            </ModalBtn>
            <ModalBtn type="button" $v="cancel" onClick={onClose}>
              <X size={14} /> Cancel
            </ModalBtn>
          </ModalFooter>
        </ModalCard>
      </Overlay>
    )}
  </AnimatePresence>
);

export default ContentModal;

/* ── Styles ── */

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;
  max-width: 880px;
  max-height: 88vh;
  max-height: 88dvh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};

  @media (max-width: 480px) {
    width: 100vw;
    height: 92dvh;
    max-height: 92dvh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const FormBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 24px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 3px;
  }
  @media (max-width: 480px) { padding: 16px; }
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    & > * { flex: 1; min-width: 80px; }
  }
`;

const ModalBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${({ $v, theme }) => $v === 'save' && `
    background: ${theme.colors.gradientPinkBlue};
    color: #fff;
    &:hover { box-shadow: ${theme.colors.shadowBlueBtnHover}; transform: translateY(-1px); }
  `}
  ${({ $v, theme }) => $v === 'preview' && `
    background: ${theme.colors.accentBlueBg};
    color: ${theme.colors.accentBlue};
    border: 1px solid ${theme.colors.accentBlueBorder};
    &:hover { background: ${theme.colors.accentBlueBgHover}; }
  `}
  ${({ $v, theme }) => $v === 'cancel' && `
    background: ${theme.colors.surfaceSubtle};
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.borderSubtle};
    &:hover { background: ${theme.colors.bgGlassLight}; color: ${theme.colors.textPrimary}; }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;