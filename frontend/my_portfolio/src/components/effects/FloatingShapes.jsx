// src/components/effects/FloatingShapes.jsx
// PERFORMANCE FIXES:
// 1. One shared RAF loop drives ALL shapes — was spawning a loop per shape
// 2. spring interpolation done manually in shared tick — no @react-spring overhead per frame
// 3. Direct style mutation via refs instead of re-rendering React state
// 4. CSS float animation removed — only JS drives position
// 5. Gyroscope support on mobile (tilt to move shapes)
// 6. Hidden on ≤480px screens

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const ShapeWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ShapeEl = styled.div`
  position: absolute;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  will-change: transform;
  opacity: ${({ $opacity }) => $opacity};
`;

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
    x: '4%', y: '18%', depth: 0.018, opacity: 0.85,
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
    x: '88%', y: '20%', depth: 0.025, opacity: 0.9,
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
    x: '82%', y: '62%', depth: 0.012, opacity: 0.8,
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
    x: '6%', y: '75%', depth: 0.02, opacity: 0.85,
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
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
    x: '48%', y: '85%', depth: 0.008, opacity: 0.6,
  },
];

const FloatingShapes = () => {
  const wrapRef   = useRef(null);
  const elRefs    = useRef([]);        // DOM refs for each shape div
  const targetRef = useRef({ x: 0, y: 0 }); // raw pointer/gyro target
  const currentRef= useRef(
    shapes.map(() => ({ x: 0, y: 0 })) // per-shape spring current position
  );
  const frameRef  = useRef(null);

  /* ── Pointer / gyro input ── */
  useEffect(() => {
    if (!IS_TOUCH) {
      const onMove = (e) => {
        targetRef.current = {
          x: (e.clientX / window.innerWidth  - 0.5),
          y: (e.clientY / window.innerHeight - 0.5),
        };
      };
      window.addEventListener('mousemove', onMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMove);
    } else {
      // Gyroscope for mobile
      const handler = (e) => {
        targetRef.current = {
          x: Math.max(-1, Math.min(1, (e.gamma || 0) / 30)),
          y: Math.max(-1, Math.min(1, ((e.beta  || 0) - 45) / 30)),
        };
      };
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        window.addEventListener('touchstart', async () => {
          try {
            if (await DeviceOrientationEvent.requestPermission() === 'granted') {
              window.addEventListener('deviceorientation', handler, { passive: true });
            }
          } catch (_) {}
        }, { once: true });
      } else {
        window.addEventListener('deviceorientation', handler, { passive: true });
        return () => window.removeEventListener('deviceorientation', handler);
      }
    }
  }, []);

  /* ── Single shared RAF loop — FIXED: was one loop per shape ── */
  useEffect(() => {
    // Spring config
    const STIFFNESS = IS_TOUCH ? 0.04 : 0.08; // how fast it catches up
    const DAMPING   = IS_TOUCH ? 0.85 : 0.82; // how much it overshoots (1 = no overshoot)

    // Per-shape velocity for spring physics
    const velocity = shapes.map(() => ({ x: 0, y: 0 }));

    const tick = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      shapes.forEach((shape, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const targetX = tx * shape.depth * 80;
        const targetY = ty * shape.depth * 80;

        // Simple spring: velocity += (target - current) * stiffness; current += velocity; velocity *= damping
        velocity[i].x  += (targetX - currentRef.current[i].x) * STIFFNESS;
        velocity[i].y  += (targetY - currentRef.current[i].y) * STIFFNESS;
        velocity[i].x  *= DAMPING;
        velocity[i].y  *= DAMPING;
        currentRef.current[i].x += velocity[i].x;
        currentRef.current[i].y += velocity[i].y;

        el.style.transform = `translate(${currentRef.current[i].x.toFixed(2)}px, ${currentRef.current[i].y.toFixed(2)}px)`;
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <ShapeWrap ref={wrapRef}>
      {shapes.map((s, i) => (
        <ShapeEl
          key={i}
          ref={(el) => (elRefs.current[i] = el)}
          $opacity={s.opacity}
          style={{ left: s.x, top: s.y }}
        >
          {s.svg}
        </ShapeEl>
      ))}
    </ShapeWrap>
  );
};

export default FloatingShapes;