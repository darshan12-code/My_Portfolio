import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/siteData";
import { useAuth } from "../../contexts/AuthContext";
import { media } from "../../../media";
import ThemeToggle from "../ui/ThemeToggle";

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;

  /* Use theme token so light/dark toggle works */
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.colors.bgGlass          /* <- was hardcoded rgba(13,15,20,0.72) */
      : 'transparent'};

  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};

  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.borderDefault : 'transparent'};
`;


const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};  /* theme-aware now */
  letter-spacing: -0.02em;
`;


const DesktopLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) { display: none; }
`;
const NavAnchor = styled(Link)`
  position: relative;

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: 0.9rem;

  padding: 0.5rem 0;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};

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
 
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};

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

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;

  font-size: 0.75rem;
  font-weight: 600;

  border-radius: 999px;

  border: 1px solid  ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};

  background: transparent;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
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


// Replace Hamburger + MobileMenu with panel slide:
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 2rem;
  gap: 1.5rem;
  z-index: 200;
  backdrop-filter: blur(20px);
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

// Stagger children on mount:
const linksContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  show:   { y: 0,   opacity: 1, transition: { duration: 0.4 } }
};

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

     <DesktopLinks variants={linksContainerVariants} initial="hidden" animate="show">
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
            <NavAnchor
              to="/admin"
              $active={location.pathname === "/admin"}
            >
              Dashboard
            </NavAnchor>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
        <ThemeToggle />
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(!mobileOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          // MobileMenu animation:
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
            <ThemeToggle />
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;