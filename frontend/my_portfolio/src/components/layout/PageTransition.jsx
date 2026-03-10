import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(4px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, y: -20, filter: 'blur(4px)',
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const comicPageVariants = {
  initial: {
    opacity: 0,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    filter: 'blur(2px)',
  },
  animate: {
    opacity: 1,
    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1],
      clipPath: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)',
    filter: 'blur(4px)',
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={comicPageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ willChange: 'clip-path, opacity' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;