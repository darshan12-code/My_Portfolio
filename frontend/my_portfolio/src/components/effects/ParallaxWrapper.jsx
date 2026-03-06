// // components/effects/FloatingShapes.jsx

// import { motion } from "framer-motion";
// import styled from "styled-components";

// const FloatingShape = styled(motion.div)`
//   position: absolute;
//   will-change: transform;
//   filter: blur(0.5px);
// `;

// const FloatingShapes = () => {
//   return (
//     <>
//       <FloatingShape
//         animate={{
//           y: [0, -20, -10, -25, 0],
//           rotate: [0, 5, 10, 3, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </>
//   );
// };

// export default FloatingShapes;