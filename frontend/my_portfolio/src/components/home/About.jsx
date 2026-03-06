import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo, aboutTraits } from '../../data/siteData';
import { media } from '../../../media';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 4rem;
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
  display: flex;
  gap: 1.5rem;
  ${media.mobile} { flex-direction: column; }
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

const About = () => (
  <Section>
    <SectionHeader number="01" title="ABOUT ME" />
    <Bio
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {personalInfo.bio}
    </Bio>
    <Traits>
      {aboutTraits.map((t, i) => (
        <TraitCard
          key={t.label}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <Emoji>{t.emoji}</Emoji>
          <TraitLabel>{t.label}</TraitLabel>
          <TraitDesc>{t.description}</TraitDesc>
        </TraitCard>
      ))}
    </Traits>
  </Section>
);

export default About;
