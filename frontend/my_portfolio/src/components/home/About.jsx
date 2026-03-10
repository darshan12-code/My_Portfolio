import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo, aboutTraits } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionWave from '../effects/SectionWave';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Traits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// FlipCardWrapper height fix on mobile:
const FlipCardWrapper = styled.div`
  perspective: 800px;
  height: 180px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 150px;
  }
`;
const TraitCard = styled(motion.div)`
  flex: 1;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const Emoji = styled.div`font-size: 2rem; margin-bottom: 0.5rem;`;
const TraitLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;
const TraitDesc = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.25rem;
`;

// const FlipCardWrapper = styled.div`
//   flex: 1;
//   perspective: 800px;
//   height: 180px;
//   cursor: pointer;
// `;

const FlipCardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${FlipCardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  
`;

// Extra facts to show on card back:
const traitBackContent = {
  Creative: "Building things that feel alive, not just functional.",
  Strategic: "I map systems before I write the first line.",
  Builder: "Shipped in 3 companies. Always learning.",
};

const About = () => {
const { ref, inView } = useScrollReveal();
return (<Section  ref={ref}>
{/* <SectionWave /> */}
    <SectionHeader number="01" title="ABOUT ME" />
    <Bio
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {personalInfo.bio}
    </Bio>
    <Traits>
      {aboutTraits.map((t, i) => (
  <FlipCardWrapper key={t.label}>
    <FlipCardInner>
      <CardFace>
        <Emoji>{t.emoji}</Emoji>
        <TraitLabel>{t.label}</TraitLabel>
        <TraitDesc>{t.description}</TraitDesc>
      </CardFace>
      <CardBack>
        <TraitDesc style={{color:"#fff"}}>{traitBackContent[t.label]}</TraitDesc>
      </CardBack>
    </FlipCardInner>
  </FlipCardWrapper>
))}
    </Traits>
  </Section>
)};

export default About;
