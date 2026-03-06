import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  transform-origin: 0%;
  z-index: ${({ theme }) => theme.zIndex.scrollbar};
`;

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return <Bar style={{ scaleX: progress }} />;
};

export default ScrollProgress;
