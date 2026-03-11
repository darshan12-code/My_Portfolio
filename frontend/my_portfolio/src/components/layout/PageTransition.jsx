// src/components/layout/PageTransition.jsx
//
// PERF FIX: Exit cut to 150ms and App.jsx should use mode="wait" not mode="sync".
// mode="sync" renders both old + new page simultaneously = double render cost on low-end devices.
// mode="wait" exits old page fully before mounting new one — one page in DOM at a time.

import { motion } from 'framer-motion';

const fadeUpVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={fadeUpVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;