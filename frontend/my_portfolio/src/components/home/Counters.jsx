import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { counters } from '../../data/siteData';
import { media } from '../../../media';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 4rem;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  ${media.tablet} { grid-template-columns: repeat(2, 1fr); }
  ${media.mobile} { grid-template-columns: 1fr; }
`;

const CounterCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Value = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Label = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
`;

const Counter = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target);
  return (
    <CounterCard ref={ref}>
      <Value>{count}{suffix}</Value>
      <Label>{label}</Label>
    </CounterCard>
  );
};

const Counters = () => (
  <Section>
    <Grid>
      {counters.map((c) => (
        <Counter key={c.label} target={c.value} suffix={c.suffix} label={c.label} />
      ))}
    </Grid>
  </Section>
);

export default Counters;
