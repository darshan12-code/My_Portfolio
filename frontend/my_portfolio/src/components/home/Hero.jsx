import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { personalInfo } from '../../data/siteData';
import MagneticButton from '../ui/MagneticButton';
import { media } from '../../../media';
import photo from '../../assets/myphoto_cutout2.png';
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem clamp(1.25rem, 5vw, 4rem) 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;  /* photo on top on mobile */
    text-align: center;
    gap: 2rem;
    padding-top: 5rem;
  }
`;
const Left = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.heroName};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
   ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const RoleText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.heroRole};
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 500;
  display: block;
  margin: 1.5rem 0 2rem;
  min-height: 2rem;

  &::after {
    content: '▌';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;


const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  ${media.tablet} {
    justify-content: center;
    gap: 0.65rem;
  }

  ${media.mobile} {
    /* Stack vertically on very small screens, full-width buttons */
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
`;
const Right = styled.div`
  flex-shrink: 0;
`;

// const PhotoWrapper = styled(motion.div)`
//   position: relative;
//   width: clamp(280px, 30vw, 400px);
//   height: clamp(350px, 38vw, 500px);
// `;

const GlowRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3px;
  background: ${({ theme }) => theme.colors.gradientRing};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ring-hue 4s linear infinite;

  @keyframes ring-hue {
    to { filter: hue-rotate(360deg); }
  }
`;

const PhotoCutout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: brightness(1.05) contrast(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.bgPrimary} 0%, transparent 100%);
    pointer-events: none;
  }
`;

const ScrollArrow = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textTertiary};

  svg {
    width: 24px;
    height: 24px;
    animation: bounce-down 2s ease-in-out infinite;
  }

  @keyframes bounce-down {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50% { transform: translateY(10px); opacity: 1; }
  }
`;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const PhotoWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 28vw, 380px);
  height: clamp(340px, 36vw, 480px);

  @media (max-width: 768px) {
    width: clamp(180px, 60vw, 280px);
    height: clamp(220px, 75vw, 340px);
  }

  /* Comic cutout effect */
  filter:
    drop-shadow(-4px 8px 0px rgba(255,45,107,0.4))
    drop-shadow(4px -4px 0px rgba(59,130,246,0.3))
    drop-shadow(0 20px 40px rgba(0,0,0,0.6));
`;

// PhotoCutout stays the same but add:
const InkFrame = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  /* Comic panel corner marks */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    border-style: solid;
    opacity: 0.6;
  }
  &::before {
    top: 8px; left: 8px;
    border-width: 2px 0 0 2px;
    border-radius: 4px 0 0 0;
  }
  &::after {
    bottom: 8px; right: 8px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 4px 0;
  }
`;

// Add link to your resume PDF (put resume.pdf in /public folder)
const ResumeBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  border: 1px solid rgba(255, 45, 107, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  & span { position: relative; z-index: 1; }

  &:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(255, 45, 107, 0.3), 0 0 60px rgba(59, 130, 246, 0.15);
    &::before { opacity: 1; }
  }

  /* On touch: show gradient immediately since there's no hover */
  @media (hover: none) {
    border-color: rgba(255, 45, 107, 0.5);
    &::before { opacity: 0.15; }
    &:active {
      border-color: transparent;
      &::before { opacity: 1; }
    }
  }

  ${media.mobile} {
    padding: 0.8rem 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;
const Hero = () => {
  const role = useTypewriter(personalInfo.roles);

  return (
    <Section>
      <Left>
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <Name variants={fadeUp}>{personalInfo.name}</Name>
          <Name variants={fadeUp}>{personalInfo.lastName}</Name>
          <motion.div variants={fadeUp}>
            <RoleText>{role}</RoleText>
          </motion.div>
          <motion.div variants={fadeUp}>
         <Buttons>
            <MagneticButton as="a" href="/case-studies" style={{ whiteSpace: 'nowrap' }}>
              View Work →
            </MagneticButton>
            <ResumeBtn
              href="/resume.pdf"
              download="Darshan_Agrawal_Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>↓ Resume</span>
            </ResumeBtn>
            <MagneticButton variant="outline" as="a" href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Contact
            </MagneticButton>
          </Buttons>
          </motion.div>
        </motion.div>
      </Left>
      <Right>
        <PhotoWrapper
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* <GlowRing /> */}
          <InkFrame />
          <PhotoCutout>
            {/* Replace with your transparent PNG */}
            <img src={photo} alt="Darshan Agrawal" />
          </PhotoCutout>
        </PhotoWrapper>
      </Right>
      <ScrollArrow>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </ScrollArrow>
    </Section>
  );
};

export default Hero;