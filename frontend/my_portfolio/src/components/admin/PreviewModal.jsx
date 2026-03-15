import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CategoryBadge from '../ui/CategoryBadge';
import TagList from '../ui/TagList';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';

const PreviewModal = ({ isOpen, onClose, formData }) => (
  <AnimatePresence>
    {isOpen && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      >
        <PreviewCard
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Preview</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <PreviewBody>
            <PreviewTitle>{formData.title}</PreviewTitle>

            {formData.category && (
              <PreviewBadgeRow>
                {formData.category.split(',').map(c => c.trim()).filter(Boolean).map((cat, i) => (
                  <CategoryBadge key={i} category={cat} size="md" />
                ))}
              </PreviewBadgeRow>
            )}

            {formData.tech_stack && (
              <PreviewTagsRow>
                {/* TagList handles the CSV split internally */}
                <TagList tags={formData.tech_stack} />
              </PreviewTagsRow>
            )}

            <PreviewContent dangerouslySetInnerHTML={{ __html: formData.content }} />
          </PreviewBody>
        </PreviewCard>
      </Overlay>
    )}
  </AnimatePresence>
);

export default PreviewModal;

/* ── Styles ── */

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: min(880px, 92vw);
  max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModalPreview};

  @media (max-width: 480px) {
    width: 100vw;
    max-height: 96vh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const PreviewBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem 3rem;
  @media (max-width: 480px) { padding: 1.25rem; }
`;

const PreviewTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PreviewBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

const PreviewTagsRow = styled.div`
  margin-bottom: 1.75rem;
`;

const PreviewContent = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};

  img { max-width: 100%; border-radius: ${({ theme }) => theme.borderRadius.sm}; margin: 1rem 0; }
  h2, h3 { color: ${({ theme }) => theme.colors.textPrimary}; margin: 1.5rem 0 0.75rem; }
  p { margin-bottom: 1.2rem; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow-x: auto;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.preText};
  }
  code {
    background: ${({ theme }) => theme.colors.codeGradientBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGradientBorder};
     color:${({ theme }) => theme.colors.preText};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  /* ── code inside pre — no gradient, inherits pre color ───── */
  pre code {
    background: none;
    background-image: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.preText};
    color: ${({ theme }) => theme.colors.preText};
    box-shadow: none;
    border: none;
    padding: 0;
    font-size: inherit;
  }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;