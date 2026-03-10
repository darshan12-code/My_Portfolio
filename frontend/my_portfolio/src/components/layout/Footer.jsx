import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const NAV = [
  { label: "Home",          to: "/" },
  { label: "Case Studies",  to: "/case-studies" },
  { label: "Blog",          to: "/blog" },
  { label: "Contact",       to: "/contact" },
];

const SOCIALS = [
  { icon: Github,   href: "https://github.com/darshanagrawal",       label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/darshanagrawal",   label: "LinkedIn" },
  { icon: Twitter,  href: "https://twitter.com/darshanagrawal",       label: "Twitter" },
  { icon: Mail,     href: "mailto:hello@darshanagrawal.dev",           label: "Email" },
];

const Footer = () => (
  <FooterWrap>
    {/* Gradient divider line */}
    <TopRule />

    <Inner>
      {/* Brand */}
      <Brand>
        <BrandName>Darshan Agrawal</BrandName>
        <BrandSub>Full Stack Engineer · 4 Years Building the Future</BrandSub>
        <AvailBadge>
          <PulseDot />
          Open to opportunities
        </AvailBadge>
      </Brand>

      {/* Nav */}
      <NavBlock>
        <BlockLabel>Pages</BlockLabel>
        <NavList>
          {NAV.map(({ label, to }) => (
            <NavItem key={to}>
              <FooterLink to={to}>{label}</FooterLink>
            </NavItem>
          ))}
        </NavList>
      </NavBlock>

      {/* Socials */}
      <SocialsBlock>
        <BlockLabel>Elsewhere</BlockLabel>
        <SocialRow>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <SocialBtn
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </SocialBtn>
          ))}
        </SocialRow>
        <EmailText href="mailto:hello@darshanagrawal.dev">
          hello@darshanagrawal.dev
        </EmailText>
      </SocialsBlock>
    </Inner>

    {/* Bottom strip */}
    <BottomStrip>
      <Copyright>© {new Date().getFullYear()} Darshan Agrawal. Built with React + Flask.</Copyright>
      <MadeWith>
        Made with <Heart>♥</Heart> and too much coffee
      </MadeWith>
    </BottomStrip>
  </FooterWrap>
);

export default Footer;

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */

const FooterWrap = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  position: relative;
`;

const TopRule = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #FF2D6B 30%, #3B82F6 70%, transparent 100%);
  opacity: 0.4;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 3rem;
  padding: clamp(3rem, 6vh, 4.5rem) clamp(1.5rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* Brand block */
const Brand = styled.div``;

const BrandName = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
`;

const BrandSub = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 1.5;
  margin-bottom: 1.1rem;
  max-width: 280px;
`;

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.4); }
`;

const AvailBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  font-size: 0.72rem; font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0,232,157,0.06);
  border: 1px solid rgba(0,232,157,0.2);
  border-radius: 999px;
`;

const PulseDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentGreen};
  animation: ${pulseDot} 2s ease-in-out infinite;
`;

/* Nav block */
const BlockLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

const NavBlock = styled.div``;
const NavList = styled.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem;`;
const NavItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { width: 100%; }
  }
`;

/* Socials block */
const SocialsBlock = styled.div``;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SocialBtn = styled.a`
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,45,107,0.1);
    border-color: rgba(255,45,107,0.3);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255,45,107,0.2);
  }
`;

const EmailText = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-decoration: none;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

/* Bottom strip */
const BottomStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.25rem clamp(1.5rem, 6vw, 5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const Copyright = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const MadeWith = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  display: flex; align-items: center; gap: 0.35rem;
`;

const heartBeat = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.25)}`;
const Heart = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  animation: ${heartBeat} 1.6s ease-in-out infinite;
`;