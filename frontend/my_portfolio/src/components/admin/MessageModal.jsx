import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Clock } from 'lucide-react';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';

const MessageModal = ({ message, onClose }) => (
  <AnimatePresence>
    {message && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      >
        <Card
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Message</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <Body>
            {/* Sender info row */}
            <MetaGrid>
              <MetaItem>
                <MetaIcon><User size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>From</MetaLabel>
                  <MetaValue>{message.name || '—'}</MetaValue>
                </MetaContent>
              </MetaItem>

              <MetaItem>
                <MetaIcon><Mail size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>Email</MetaLabel>
                  <MetaValue>
                    <a href={`mailto:${message.email}`}>{message.email}</a>
                  </MetaValue>
                </MetaContent>
              </MetaItem>

              <MetaItem $full>
                <MetaIcon><Clock size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>Received</MetaLabel>
                  <MetaValue>
                    {message.created_at
                      ? new Date(message.created_at).toLocaleString('en-US', {
                          year: 'numeric', month: 'long', day: 'numeric',
                          hour: '2-digit', minute: '2-digit',
                        })
                      : '—'}
                  </MetaValue>
                </MetaContent>
              </MetaItem>
            </MetaGrid>

            <Divider />

            {/* Full message */}
            <MessageLabel>Message</MessageLabel>
            <MessageText>{message.message}</MessageText>
          </Body>

          <Footer>
            <ReplyBtn href={`mailto:${message.email}?subject=Re: Your message`}>
              Reply via Email ↗
            </ReplyBtn>
            <CloseBtn type="button" onClick={onClose}>Close</CloseBtn>
          </Footer>
        </Card>
      </Overlay>
    )}
  </AnimatePresence>
);

export default MessageModal;

/* ── Styles ── */

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: min(560px, 92vw);
  max-height: 88dvh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};

  @media (max-width: 480px) {
    width: 100vw;
    max-height: 92dvh;
    border-radius: ${({ theme }) => theme.borderRadius.xl}
                   ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 2px;
  }

  @media (max-width: 480px) { padding: 16px; }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  grid-column: ${({ $full }) => $full ? '1 / -1' : 'auto'};
`;

const MetaIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accentBlueBg};
  border: 1px solid ${({ theme }) => theme.colors.accentBlueBorder};
  color: ${({ theme }) => theme.colors.accentBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`;

const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const MetaLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const MetaValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  word-break: break-all;

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover { opacity: 0.8; }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin-bottom: 20px;
`;

const MessageLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 10px;
`;

const MessageText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  white-space: pre-wrap;    /* preserves line breaks the user typed */
  word-break: break-word;
`;

const Footer = styled.div`
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
    & > * { flex: 1; }
  }
`;

const ReplyBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadowBlueBtnHover};
    transform: translateY(-1px);
  }
`;

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;