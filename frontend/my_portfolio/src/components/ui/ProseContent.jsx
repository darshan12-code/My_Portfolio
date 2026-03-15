import styled from 'styled-components';
import { motion } from 'framer-motion';

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

  p { margin-bottom: 1.4rem; }

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

  /* ── pre block — styled dark/light grey ─────────────────── */
  pre {
    background: ${({ theme }) => theme.colors.preBg};
    border: 1px solid ${({ theme }) => theme.colors.preBorder};
    color: ${({ theme }) => theme.colors.preText};
    padding: 1.5rem 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    margin: 1.75rem 0;
    line-height: 1.7;
    position: relative;

    /* subtle top accent line */
    &::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.codeGradientBg};
      border-radius: 10px 10px 0 0;
      opacity: 0.7;
    }
  }

  /* ── inline code — gradient text + gradient bg ───────────── */
  code {
    background: ${({ theme }) => theme.colors.codeGradientBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGradientBorder};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
    font-family: ${({ theme }) => theme.fonts.mono};
    color:${({ theme }) => theme.colors.preText};
    /* gradient text effect */
    // background-clip: text;
    // -webkit-background-clip: text;
    // color: transparent;
    /* fallback for browsers that don't support background-clip: text */
    // background-image: ${({ theme }) => theme.colors.codeGradientBg};
    // -webkit-text-fill-color: transparent;

    /* re-apply background for the box (gradient-clip removes it) */
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.codeGradientBorder};
    // background-color: transparent;
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
  initial:    { y: 20, opacity: 0 },
  animate:    { y: 0,  opacity: 1 },
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