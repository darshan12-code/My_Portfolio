// src/components/effects/FloatingShapes.jsx
import styled, { keyframes } from 'styled-components';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useSpring, animated } from '@react-spring/web';

const float = (y1, y2, r1, r2) => keyframes`
  0%   { transform: translateY(0px) rotate(${r1}deg); }
  33%  { transform: translateY(${y1}px) rotate(${r2}deg); }
  66%  { transform: translateY(${y2}px) rotate(${r1 + 4}deg); }
  100% { transform: translateY(0px) rotate(${r1}deg); }
`;

const AnimatedShape = ({ shape, mouse }) => {
  const spring = useSpring({
    x: mouse.x * shape.depth * 80,
    y: mouse.y * shape.depth * 80,
    config: { mass: 1, tension: 120, friction: 26 },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        left: shape.x,
        top: shape.y,
        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        opacity: shape.opacity,
        transform: spring.x.to((x) => `translate(${x}px, ${spring.y.get()}px)`),
        willChange: 'transform',
      }}
    >
      {shape.svg}
    </animated.div>
  );
};
const ShapeWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
`;

// CUTOUT STYLE: drop-shadow makes them feel like physical cutouts
const Shape = styled.div`
  position: absolute;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  animation: ${({ $kf }) => $kf} ${({ $dur }) => $dur}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  will-change: transform;
  opacity: ${({ $opacity }) => $opacity};
  transition: transform 0.1s ease-out;
`;

// SVG shapes that look like comic panel decorations
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <polygon points="45,5 85,30 85,60 45,85 5,60 5,30"
          stroke="rgba(255,45,107,0.5)" strokeWidth="1.5" fill="rgba(255,45,107,0.06)" />
        <polygon points="45,15 75,32 75,58 45,75 15,58 15,32"
          stroke="rgba(255,45,107,0.2)" strokeWidth="1" fill="none" />
      </svg>
    ),
    x: '4%', y: '18%', depth: 0.018, dur: 22, delay: 0, opacity: 0.85,
    kf: float(-18, -8, -3, 5),
  },
  {
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="rgba(0,232,157,0.4)" strokeWidth="1.5" fill="rgba(0,232,157,0.05)" />
        <circle cx="30" cy="30" r="20" stroke="rgba(0,232,157,0.2)" strokeWidth="1" fill="none" />
        <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
        <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
      </svg>
    ),
    x: '88%', y: '20%', depth: 0.025, dur: 18, delay: 2, opacity: 0.9,
    kf: float(-22, -12, 4, -6),
  },
  {
    svg: (
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
        <polygon points="40,5 75,65 5,65"
          stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
        <polygon points="40,18 64,60 16,60"
          stroke="rgba(59,130,246,0.2)" strokeWidth="0.8" fill="none" />
      </svg>
    ),
    x: '82%', y: '62%', depth: 0.012, dur: 28, delay: 4, opacity: 0.8,
    kf: float(-15, -28, 2, 8),
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <rect x="5" y="5" width="40" height="40" rx="4"
          stroke="rgba(255,107,74,0.4)" strokeWidth="1.5" fill="rgba(255,107,74,0.05)"
          transform="rotate(20 25 25)" />
        <rect x="12" y="12" width="26" height="26" rx="3"
          stroke="rgba(255,107,74,0.2)" strokeWidth="0.8" fill="none"
          transform="rotate(20 25 25)" />
      </svg>
    ),
    x: '6%', y: '75%', depth: 0.02, dur: 24, delay: 1, opacity: 0.85,
    kf: float(-20, -10, -5, 3),
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Comic speed lines / star burst */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line key={i}
            x1="50" y1="30"
            x2={50 + 44 * Math.cos(deg * Math.PI / 180)}
            y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
            stroke="rgba(255,45,107,0.15)"
            strokeWidth="0.8"
          />
        ))}
        <circle cx="50" cy="30" r="8" stroke="rgba(255,45,107,0.4)" strokeWidth="1.5" fill="rgba(255,45,107,0.08)" />
      </svg>
    ),
    x: '48%', y: '85%', depth: 0.008, dur: 32, delay: 6, opacity: 0.6,
    kf: float(-10, -18, 0, 360),
  },
];

const FloatingShapes = () => {
  const mousePos = useMousePosition();

  return (
    <ShapeWrap>
    {shapes.map((s, i) => (
      <AnimatedShape key={i} shape={s} mouse={mousePos} />
    ))}
  </ShapeWrap>
  );
};

export default FloatingShapes;