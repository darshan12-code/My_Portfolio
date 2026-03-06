import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { personalInfo } from '../../data/siteData';
import MagneticButton from '../ui/MagneticButton';
import { media } from '../../../media';
import photo from '../../assets/myphoto_cutout.png';
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 4rem 4rem;
  position: relative;
  background: ${({ theme }) => theme.colors.gradientHero};

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    padding: 6rem 2rem 4rem;
    gap: 3rem;
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
`;

const RoleText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.heroRole};
  color: ${({ theme }) => theme.colors.accentPink};
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
  gap: 1rem;
  ${media.tablet} { justify-content: center; }
`;

const Right = styled.div`
  flex-shrink: 0;
`;

const PhotoWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 30vw, 400px);
  height: clamp(350px, 38vw, 500px);
`;

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
              <MagneticButton>View Work →</MagneticButton>
              <MagneticButton variant="outline">Contact</MagneticButton>
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
          <GlowRing />
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