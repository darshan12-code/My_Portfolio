import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/siteData";
import { useAuth } from "../../contexts/AuthContext";
import { media } from "../../../media";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: ${({ theme }) => theme.transitions.default};

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(13,15,20,0.72)" : "transparent"};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(20px)" : "none"};

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255,255,255,0.06)" : "transparent"};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${media.tablet} {
    display: none;
  }
`;

const NavAnchor = styled(Link)`
  position: relative;

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: 0.9rem;

  padding: 0.5rem 0;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.accentPink : theme.colors.textSecondary};

  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.colors.gradientPinkBlue};

    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};

    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const DashboardLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accentGreen};

  &:hover {
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;

  font-size: 0.75rem;
  font-weight: 600;

  border-radius: 999px;

  border: 1px solid rgba(255,80,80,0.4);
  color: #ff4d4d;

  background: transparent;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255,80,80,0.1);
  }
`;

const Hamburger = styled.button`
  display: none;

  flex-direction: column;
  gap: 6px;

  background: none;
  border: none;
  cursor: pointer;

  ${media.tablet} {
    display: flex;
  }
`;

const Line = styled.span`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;

const MobileMenu = styled(motion.div)`
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem 0;

  background: rgba(13,15,20,0.95);
  backdrop-filter: blur(20px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};

  ${media.desktop} {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const { isAdmin, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <Nav $scrolled={scrolled}>
      <Logo to="/">DARSHAN.DEV</Logo>

      <DesktopLinks>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <NavAnchor
              key={link.path}
              to={link.path}
              $active={isActive}
            >
              {link.label}
            </NavAnchor>
          );
        })}

        {isAdmin && (
          <>
            <DashboardLink to="/admin">Dashboard</DashboardLink>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(!mobileOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <MobileLink key={link.path} to={link.path}>
                {link.label}
              </MobileLink>
            ))}

            {isAdmin && (
              <>
                <MobileLink to="/admin">Dashboard</MobileLink>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;