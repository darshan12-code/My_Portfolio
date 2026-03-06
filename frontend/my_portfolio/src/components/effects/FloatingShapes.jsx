import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const ShapesContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.behind};
  pointer-events: none;
  overflow: hidden;
`;

const shapes = [
  { type: 'hexagon', size: 120, x: '5%', y: '15%', color: 'rgba(30,58,95,0.15)', depth: 0.02, duration: 25 },
  { type: 'circle', size: 80, x: '90%', y: '25%', color: 'rgba(255,45,107,0.08)', depth: 0.03, duration: 30 },
  { type: 'triangle', size: 100, x: '85%', y: '60%', color: 'rgba(0,232,157,0.08)', depth: 0.015, duration: 20 },
  { type: 'hexagon', size: 60, x: '8%', y: '70%', color: 'rgba(59,130,246,0.1)', depth: 0.025, duration: 35 },
  { type: 'circle', size: 140, x: '50%', y: '80%', color: 'rgba(255,107,74,0.06)', depth: 0.01, duration: 28 },
];

const shapePaths = {
  hexagon: 'M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z',
  triangle: 'M50 0 L100 86.6 L0 86.6 Z',
};

const ShapeWrapper = styled(motion.div)`
  position: absolute;
  will-change: transform;
  filter: blur(0.5px);
`;

const Shape = ({ shape, mousePos }) => {
  const offsetX = mousePos.x * shape.depth * 100;
  const offsetY = mousePos.y * shape.depth * 100;

  return (
    <ShapeWrapper
      style={{ left: shape.x, top: shape.y, width: shape.size, height: shape.size }}
      animate={{
        y: [0, -20, -10, -25, 0],
        rotate: [0, 5, 10, 3, 0],
        x: offsetX,
      }}
      transition={{ duration: shape.duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {shape.type === 'circle' ? (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="48" fill="none" stroke={shape.color} strokeWidth="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path d={shapePaths[shape.type]} fill="none" stroke={shape.color} strokeWidth="1.5" />
        </svg>
      )}
    </ShapeWrapper>
  );
};

const FloatingShapes = () => {
  const mousePos = useMousePosition();
  return (
    <ShapesContainer>
      {shapes.map((shape, i) => (
        <Shape key={i} shape={shape} mousePos={mousePos} />
      ))}
    </ShapesContainer>
  );
};

export default FloatingShapes;
