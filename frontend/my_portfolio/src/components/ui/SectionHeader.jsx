import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accentPink};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin-top: 0.5rem;
`;

const SectionHeader = ({ number, title }) => (
  <Wrapper
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <Label>.{number}</Label>
    <Title>{title}</Title>
  </Wrapper>
);

export default SectionHeader;
