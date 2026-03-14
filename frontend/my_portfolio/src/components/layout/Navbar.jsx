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

  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.bgGlass : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.borderDefault : 'transparent'};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
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
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};
    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { transform: scaleX(1); transform-origin: left; }
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  &:hover { 
  background: ${({ theme }) => theme.colors.gradientPinkBlue}; 
  color:#fff;
  
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 201;
  ${media.tablet} { display: flex; }
`;

const Line = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'};
  }
  &:nth-child(2) {
    opacity: ${({ $open }) => $open ? '0' : '1'};
    transform: ${({ $open }) => $open ? 'scaleX(0)' : 'none'};
  }
  &:nth-child(3) {
    transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'};
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 198;
  background: rgba(0, 0, 0, 0.5);
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;
  gap: 0.25rem;
  z-index: 200;
  backdrop-filter: blur(20px);
  overflow-y: auto;
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? 'rgba(255,45,107,0.2)' : 'transparent'};
  background: ${({ $active }) => $active ? 'rgba(255,45,107,0.06)' : 'transparent'};
  transition: all 0.2s ease;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
  }
`;

const MobileDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 0.5rem 0;
`;

const linksContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const linkVariants = {
  hidden: { x: 20, opacity: 0 },
  show:   { x: 0,  opacity: 1, transition: { duration: 0.28 } }
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

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Lock scroll when open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* FIXED: closes menu and scrolls to top if already on that page */
  const handleMobileLinkClick = (path) => {
    setMobileOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Nav $scrolled={scrolled}>
      <Logo to="/" onClick={() => setMobileOpen(false)}>DARSHAN.DEV</Logo>

      <DesktopLinks variants={linksContainerVariants} initial="hidden" animate="show">
        {navLinks.map((link) => (
          <NavAnchor key={link.path} to={link.path} $active={location.pathname === link.path}>
            {link.label}
          </NavAnchor>
        ))}
        {isAdmin && (
          <>
            <NavAnchor to="/admin" $active={location.pathname === "/admin"}>Dashboard</NavAnchor>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
        <ThemeToggle />
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(p => !p)} aria-label="Toggle menu">
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div variants={linksContainerVariants} initial="hidden" animate="show">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    {/* FIXED: onClick fires even on active page */}
                    <MobileLink
                      to={link.path}
                      $active={location.pathname === link.path}
                      onClick={() => handleMobileLinkClick(link.path)}
                    >
                      {link.label}
                    </MobileLink>
                  </motion.div>
                ))}

                {isAdmin && (
                  <>
                    <MobileDivider />
                    <motion.div variants={linkVariants}>
                      <MobileLink
                        to="/admin"
                        $active={location.pathname === "/admin"}
                        onClick={() => handleMobileLinkClick('/admin')}
                      >
                        Dashboard
                      </MobileLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <LogoutButton
                        style={{ marginLeft: '1rem', marginTop: '0.5rem' }}
                        onClick={() => { logout(); setMobileOpen(false); }}
                      >
                        Logout
                      </LogoutButton>
                    </motion.div>
                  </>
                )}

                <MobileDivider />
                <motion.div variants={linkVariants} style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;