import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// const Label = styled.span`
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   color: ${({ theme }) => theme.colors.gradientPinkBlue};
//   text-transform: uppercase;
//   letter-spacing: 0.2em;
// `;

const Label = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin-top: 0.5rem;

    ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  span {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionHeader = ({ number, title }) =>{
  const [firstName, lastName] = title.split(" ");
  return(<Wrapper
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {/* <Label>.{number}</Label> */}
    <Title>  {firstName} <span>{lastName}</span></Title>
  </Wrapper>
)};

export default SectionHeader;
