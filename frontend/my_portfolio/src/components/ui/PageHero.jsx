import styled from "styled-components";
import { motion } from "framer-motion";

const PageHero = ({ number = "01", eyebrow = "", title = "", titleAccent = "", subtitle = "", badge = "", children }) => (
  <Wrap>
    <GlowOrb />
    <Inner initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <TopRow>
        <NumberTag>{number}</NumberTag>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </TopRow>
      <Heading>{title} {titleAccent && <AccentWord>{titleAccent}</AccentWord>}</Heading>
      {subtitle && <Sub>{subtitle}</Sub>}
      {(badge || children) && (
        <BottomRow>
          {badge && <Badge>{badge}</Badge>}
          {children}
        </BottomRow>
      )}
    </Inner>
    <BottomRule />
  </Wrap>
);

export default PageHero;

const Wrap = styled.section`
  padding: clamp(1rem, 5vh, 2rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vh, 4rem);
  position: relative; overflow: hidden;
`;
const GlowOrb = styled.div`
  position: absolute; top: -60px; right: -80px; width: 480px; height: 380px;
  background: radial-gradient(ellipse at top right, rgba(255,45,107,0.07) 0%, transparent 70%);
  pointer-events: none;
`;
const Inner = styled(motion.div)`position: relative; z-index: 1; max-width: 720px;`;
const TopRow = styled.div`display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.9rem;`;
const NumberTag = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Eyebrow = styled.p`font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textTertiary};`;
const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 7vw, 4rem); font-weight: 800; line-height: 1.0;
  letter-spacing: -0.04em; color: ${({ theme }) => theme.colors.textPrimary}; margin-bottom: 1.1rem;
`;
const AccentWord = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
`;
const Sub = styled.p`font-size: clamp(0.95rem, 2vw, 1.1rem); color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; max-width: 560px; margin-bottom: 1.75rem;`;
const BottomRow = styled.div`display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;`;
const Badge = styled.span`
  display: inline-flex; align-items: center; padding: 0.3rem 0.85rem; border-radius: 999px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
  background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); color: ${({ theme }) => theme.colors.accentBlue};
`;
const BottomRule = styled.div`
  position: absolute; bottom: 0; left: clamp(1.5rem, 6vw, 5rem); right: clamp(1.5rem, 6vw, 5rem);
  height: 1px; background: ${({ theme }) => theme.colors.borderDefault};
`;