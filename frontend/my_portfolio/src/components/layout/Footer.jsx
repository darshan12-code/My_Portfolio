import styled from 'styled-components';
import { personalInfo } from '../../data/siteData';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FooterWrapper = styled.footer`
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover { color: ${({ theme }) => theme.colors.accentPink}; }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Socials>
      <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
      <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
      <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer"><FiTwitter size={20} /></a>
    </Socials>
    <p>© {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
