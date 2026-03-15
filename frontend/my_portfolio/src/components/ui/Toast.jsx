import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, Trash2, AlertCircle, X } from 'lucide-react';

/* ── animations ──────────────────────────────────────────────── */
const slideIn = keyframes`
  from { opacity: 0; transform: translateX(110%); }
  to   { opacity: 1; transform: translateX(0);    }
`;

const slideOut = keyframes`
  from { opacity: 1; transform: translateX(0);    }
  to   { opacity: 0; transform: translateX(110%); }
`;

const shrink = keyframes`
  from { width: 100%; }
  to   { width: 0%;   }
`;

/* ── styled components ───────────────────────────────────────── */
const Wrap = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({ theme }) => theme.zIndex.toast};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;

  @media (max-width: 480px) {
    top: 5rem;
    left: 1rem;
    right: 1rem;
    transform: none;
    align-items: stretch;
  }
`;

const ToastItem = styled.div`
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 1rem 0.7rem 0.85rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen + '55';
    if ($type === 'delete')  return theme.colors.accentDanger + '55';
    if ($type === 'error')   return theme.colors.accentDanger + '55';
    return theme.colors.accentBlue + '55';
  }};
  background: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: ${({ theme }) => theme.colors.shadowCard};
  min-width: 260px;
  max-width: 360px;
  position: relative;
  overflow: hidden;
  animation: ${({ $leaving }) => $leaving ? slideOut : slideIn} 0.28s
    ${({ theme }) => theme.transitions.smooth} both;

  @media (max-width: 480px) { min-width: unset; max-width: unset; }
`;

const IconWrap = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen;
    if ($type === 'delete')  return theme.colors.accentDanger;
    if ($type === 'error')   return theme.colors.accentDanger;
    return theme.colors.accentBlue;
  }};
`;

const TextWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

const ToastTitle = styled.p`
  font-size: 0.83rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ToastSub = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0;
  margin-top: 1px;
`;

const CloseBtn = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  background: ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen;
    if ($type === 'delete')  return theme.colors.accentDanger;
    if ($type === 'error')   return theme.colors.accentDanger;
    return theme.colors.accentBlue;
  }};
  animation: ${shrink} ${({ $duration }) => $duration}ms linear forwards;
`;

/* ── icons per type ──────────────────────────────────────────── */
const ICONS = {
  success: <CheckCircle size={16} />,
  delete:  <Trash2      size={16} />,
  error:   <AlertCircle size={16} />,
  info:    <CheckCircle size={16} />,
};

/* ── context ─────────────────────────────────────────────────── */
const ToastContext = createContext(null);

let _id = 0;
const DURATION = 3500;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    // Mark as leaving first for exit animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, leaving: true } : t))
    );
    // Remove after animation completes
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  const toast = useCallback(({ type = 'info', title, sub, duration = DURATION }) => {
    const id = ++_id;
    setToasts((prev) => [...prev, { id, type, title, sub, leaving: false }]);
    timers.current[id] = setTimeout(() => dismiss(id), duration);
    return id;
  }, [dismiss]);

  // Convenience methods
  toast.success = (title, sub) => toast({ type: 'success', title, sub });
  toast.delete  = (title, sub) => toast({ type: 'delete',  title, sub });
  toast.error   = (title, sub) => toast({ type: 'error',   title, sub });
  toast.info    = (title, sub) => toast({ type: 'info',    title, sub });

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {createPortal(
        <Wrap>
          {toasts.map((t) => (
            <ToastItem key={t.id} $type={t.type} $leaving={t.leaving}>
              <IconWrap $type={t.type}>{ICONS[t.type]}</IconWrap>
              <TextWrap>
                <ToastTitle>{t.title}</ToastTitle>
                {t.sub && <ToastSub>{t.sub}</ToastSub>}
              </TextWrap>
              <CloseBtn onClick={() => dismiss(t.id)} aria-label="Dismiss">
                <X size={13} />
              </CloseBtn>
              <ProgressBar $type={t.type} $duration={DURATION} />
            </ToastItem>
          ))}
        </Wrap>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
};