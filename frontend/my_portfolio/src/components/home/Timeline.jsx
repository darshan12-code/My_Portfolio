// src/components/sections/Timeline.jsx
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
// import { experience } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Animated line draw ─────────────────────────────── */
const linePulse = keyframes`
0%, 100% { box-shadow: 0 0 6px rgba(167,139,250,0.6), 0 0 20px rgba(236,72,153,0.2); }
50%       { box-shadow: 0 0 12px rgba(167,139,250,0.9), 0 0 36px rgba(236,72,153,0.4); }

`;

const dotPop = keyframes`
  0%   { transform: translateX(-50%) scale(0); opacity: 0; }
  60%  { transform: translateX(-50%) scale(1.3); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
`;

/* ── Layout ─────────────────────────────────────────── */
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.section} 1.25rem;
  }
`;

const ListOuter = styled.div`
  position: relative;
`;

/* Static background track line */
const TrackLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.colors.borderDefault};
  pointer-events: none;

  /* Desktop: centred */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    transform: none;
  }
`;

/* Animated green progress line — height driven by scroll */
const ProgressLine = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 2px;
// ProgressLine gradient
background: linear-gradient(
  180deg,
  #EC4899 0%,
  #A78BFA 50%,
  rgba(167, 139, 250, 0.15) 100%
);
  animation: ${linePulse} 2s ease-in-out infinite;
  pointer-events: none;
  transform-origin: top center;
  border-radius: 2px;

  /* Desktop: centred */
  left: 50%;
  transform-origin: top left;
  margin-left: -1px;

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    margin-left: 0;
  }
`;

/* Glowing tip of the progress line */
const LineTip = styled(motion.div)`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
// LineTip — matches the bottom of the gradient
background: #A78BFA;
box-shadow: 0 0 12px rgba(167,139,250,0.9), 0 0 28px rgba(167,139,250,0.5);


`;

/* ── Timeline items ─────────────────────────────────── */
const List = styled.div`
  position: relative;
`;

const Item = styled(motion.div)`
  display: grid;
  position: relative;
  padding: 2rem 0;

  /* Desktop: two-column alternating */
  grid-template-columns: 1fr 2rem 1fr;
  align-items: start;

  /* Mobile: single column with left offset */
  ${media.tablet} {
    grid-template-columns: 1fr;
    padding-left: 3rem;
    padding-right: 0;
  }
`;

/* Puts card in left or right column */
const CardSlot = styled.div`
  /* Even items: card on LEFT, spacer on RIGHT */
  /* Odd items:  spacer on LEFT, card on RIGHT */
  grid-column: ${({ $side }) => $side === 'left' ? '1' : '3'};
  grid-row: 1;

  ${media.tablet} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Dot = styled(motion.div)`
  position: absolute;
  top: 2.75rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.timelineDot};
  box-shadow: ${({ theme }) => theme.colors.timelineDotShadow};
  border: ${({ theme }) => theme.colors.timelineDotBorder};
  z-index: 2;

  /* Desktop: centred on line */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: on left-gutter line */
  ${media.tablet} {
    left: 12px;
    transform: none;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  width: 100%;
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin: 0 0 0.2rem;
`;

const Company = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 600;
`;

const Period = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0.25rem 0 0.75rem;
`;

const PanelCorner = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-style: solid;
  opacity: 0.5;

  ${({ $pos }) => $pos === 'tl' && `
    top: 6px; left: 6px;
    border-width: 2px 0 0 2px;
    border-radius: 3px 0 0 0;
  `}
  ${({ $pos }) => $pos === 'br' && `
    bottom: 6px; right: 6px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 3px 0;
  `}
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

/* ── Component ──────────────────────────────────────── */
const Timeline = ({experience}) => {
  const sectionRef = useRef(null);
  const { ref: revealRef, inView } = useScrollReveal({ once: false, threshold: 0.05 });

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Height of the green line: 0% → 100% of the container
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <Section ref={sectionRef}>
      <SectionHeader number="03" title="EXPERIENCE" />

      <ListOuter>
        {/* Static grey track */}
        <TrackLine />

        {/* Animated green progress line */}
        <ProgressLine style={{ height: lineHeight }}>
          <LineTip />
        </ProgressLine>

        <List ref={revealRef}>
          {experience.map((exp, i) => {
            // Desktop: even → card left, odd → card right
            // Mobile: always left (CSS handles it)
            const side = i % 2 === 0 ? 'left' : 'right';

            return (
              <Item
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: side === 'left' ? -48 : 48,
                  filter: 'blur(4px)',
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : {
                        opacity: 0,
                        x: side === 'left' ? -48 : 48,
                        filter: 'blur(4px)',
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.34, 1.2, 0.64, 1],
                }}
              >
                <Dot
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.1 + 0.2 }}
                />

                <CardSlot $side={side}>
                  <Card>
                    <PanelCorner $pos="tl" />
                    <PanelCorner $pos="br" />
                    <Role>{exp.role}</Role>
                    <Company>{exp.company}</Company> · {exp.location}
                    <Period>{exp.period}</Period>
                    <Desc>{exp.description}</Desc>
                    <Tags>
                      {exp.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </Tags>
                  </Card>
                </CardSlot>
              </Item>
            );
          })}
        </List>
      </ListOuter>
    </Section>
  );
};

export default Timeline;