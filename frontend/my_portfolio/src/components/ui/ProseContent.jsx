import styled from 'styled-components';
import { motion } from 'framer-motion';

// Single source of truth for rich article/case-study HTML rendering.
// Props:
//   html         string   raw HTML string (dangerouslySetInnerHTML)
//   text         string   plain text fallback
//   contentType  'rich' | 'text' | 'html'   default 'rich'
//   animate      bool     wrap in framer motion   default true

const Prose = styled(motion.div)`
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    margin: 3rem 0 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    padding-left: 1rem;
    &::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.accentPink};
      border-radius: 2px;
    }
  }
  h3 {
    font-size: 1.2rem;
    margin: 2rem 0 0.75rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  p  { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.75rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
    border-radius: 0 8px 8px 0;
  }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
  }
  code {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.4rem;
    li { margin-bottom: 0.5rem; }
  }
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    margin: 2.5rem 0;
  }
`;

const animProps = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay: 0.2 },
};

const ProseContent = ({ html, text, contentType = 'rich', animate = true }) => {
  const motionProps = animate ? animProps : {};

  if (contentType === 'text' || text) {
    return <Prose {...motionProps}><p>{text || html}</p></Prose>;
  }

  return (
    <Prose
      {...motionProps}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ProseContent;