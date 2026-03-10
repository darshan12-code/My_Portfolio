// src/components/layout/PageTransition.jsx
// ROOT CAUSE OF GLITCH:
// 1. filter:blur() triggers full-layer repaint on EVERY animation frame — extremely expensive
// 2. clip-path animation while blur is active = double repaint cost
// 3. AnimatePresence "wait" mode means old page stays mounted during exit,
//    new page mounts after — both pages fighting for same RAF budget
//
// FIX: Remove all blur(), use a fast opacity+translateY fade,
// keep clip-path only on desktop where GPU is strong enough.

import { motion } from 'framer-motion';

// Smooth fade-up — works perfectly on both desktop and mobile
// No blur = no repaint = buttery smooth
const fadeUpVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={fadeUpVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{
      // Only tell GPU about opacity + transform — NOT filter or clip-path
      willChange: 'opacity, transform',
    }}
  >
    {children}
  </motion.div>
);

export default PageTransition;