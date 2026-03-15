import styled, { keyframes } from 'styled-components';

// ── Page layout ────────────────────────────────────────
export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4.5rem;
  }
`;

export const Sidebar = styled.aside`
  width: 15rem;
  flex-shrink: 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 1.25rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) { width: 200px; }
  @media (max-width: 768px) { display: none; }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SideLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBorder : 'transparent'};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBg : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const SideDot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: opacity 0.2s;
`;

export const SideLabelText = styled.span`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CountPill = styled.span`
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${({ $active, theme }) => $active ? '' : theme.colors.bgGlassLight};
  color: ${({ $active }) => $active ? '#fff' : 'inherit'};
  font-weight: 700;
  min-width: 20px;
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  padding: 4rem 2.5rem 5rem;
  @media (max-width: 1024px) { padding: 2rem 1.5rem 4rem; }
  @media (max-width: 768px) {
    padding: calc(64px + 1.5rem) 1rem calc(64px + 1rem);
  }
`;

export const PageTitleBlock = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.6rem;
`;

export const TitleAccent = styled.span`
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TitleSub = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

export const ActionRow = styled.div`margin-bottom: 1.75rem;`;

export const CreateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.62rem 1.4rem;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadowPinkHover};
  }
`;

export const GridWrap = styled.div`position: relative;`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.2rem;
  padding-bottom: 0.5rem;
  align-items: stretch;        
  grid-auto-rows: 1fr;       

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;      
  }
`;
export const GridFog = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 90px;
  background: linear-gradient(to bottom, transparent 0%, ${({ theme }) => theme.colors.bgPrimary} 100%);
  pointer-events: none;
  z-index: 2;
`;

export const EmptyStateWrap = styled.div`grid-column: 1 / -1;`;

export const Pagination = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

export const PaginationSep = styled.span`
  opacity: 0.35;
  margin: 0 0.3rem;
`;

// ── Modal shared ───────────────────────────────────────
export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.overlayBg};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  padding: 20px;
  @media (max-width: 480px) { padding: 0; align-items: flex-end; }
`;

export const ModalHeader = styled.div`
  flex-shrink: 0;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 0.97rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentPinkFocus};
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

// ── Mobile tab bar ─────────────────────────────────────
export const MobileTabBar = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.bgTertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    height: 64px;
    padding: 0 8px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
`;

export const MobileTab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%; right: 20%;
    height: 2px;
    border-radius: 0 0 3px 3px;
    background: ${({ $color }) => $color || '#FF2D6B'};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.18s;
  }
  &:active { background: ${({ theme }) => theme.colors.surfaceSubtle}; }
`;

export const MobileTabLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  transition: color 0.18s;
`;

export const MobileTabCount = styled.span`
  position: absolute;
  top: 6px;
  right: calc(50% - 18px);
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: ${({ $color }) => $color || '#FF2D6B'};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const MobileTabIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  color: ${({ $active, $color, theme }) =>
    $active ? ($color || theme.colors.accentPink) : theme.colors.textTertiary};
  transition: color 0.18s;
`;