// src/components/effects/FloatingShapes.jsx
//
// PERFORMANCE FIXES vs previous version:
// 1. Removed filter:drop-shadow from ShapeEl styled component — CSS filter on an
//    element whose transform changes every RAF frame forces a full repaint each tick.
//    Shadow is now a static SVG <feDropShadow> filter baked inside each SVG — zero runtime cost.
// 2. Spin animation now on ShapeEl (the div), not on a nested <svg> child.
//    Nesting animated elements creates extra compositing layers and stacking context conflicts.
// 3. will-change:transform only added via inline style AFTER gyro activates —
//    having it permanently on 5 elements promotes 5 GPU layers even during CSS spin = waste.
// 4. RAF write guard: only calls el.style.transform when velocity is meaningfully non-zero,
//    avoiding redundant style mutations when shapes are "at rest".
// 5. Mobile: touchmove handler removed entirely. Only spin (idle) + gyroscope.

import { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const ShapeWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
`;

// Shadow removed from here — baked statically into each SVG's <filter>
const ShapeEl = styled.div`
  position: absolute;
  opacity: ${({ $opacity }) => $opacity};

  ${({ $isMobile, $dur }) => $isMobile && css`
    animation: ${spinSlow} ${$dur} linear infinite;
    transform-origin: center;
  `}
`;

// Each SVG carries its own baked drop-shadow — static, never recomputed
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" overflow="visible">
        <defs>
          <filter id="ds0">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds0)">
          <polygon points="45,5 85,30 85,60 45,85 5,60 5,30"
            stroke="rgba(255,45,107,0.5)" strokeWidth="1.5" fill="rgba(255,45,107,0.06)" />
          <polygon points="45,15 75,32 75,58 45,75 15,58 15,32"
            stroke="rgba(255,45,107,0.2)" strokeWidth="1" fill="none" />
        </g>
      </svg>
    ),
    x: '4%', y: '18%', depth: 0.018, opacity: 0.85, spinDur: '14s',
  },
  {
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds1">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds1)">
          <circle cx="30" cy="30" r="28" stroke="rgba(0,232,157,0.4)" strokeWidth="1.5" fill="rgba(0,232,157,0.05)" />
          <circle cx="30" cy="30" r="20" stroke="rgba(0,232,157,0.2)" strokeWidth="1" fill="none" />
          <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
          <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    x: '88%', y: '20%', depth: 0.025, opacity: 0.9, spinDur: '10s',
  },
  {
    svg: (
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none" overflow="visible">
        <defs>
          <filter id="ds2">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds2)">
          <polygon points="40,5 75,65 5,65"
            stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
          <polygon points="40,18 64,60 16,60"
            stroke="rgba(59,130,246,0.2)" strokeWidth="0.8" fill="none" />
        </g>
      </svg>
    ),
    x: '82%', y: '62%', depth: 0.012, opacity: 0.8, spinDur: '18s',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" overflow="visible">
        <defs>
          <filter id="ds3">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds3)">
          <rect x="5" y="5" width="40" height="40" rx="4"
            stroke="rgba(255,107,74,0.4)" strokeWidth="1.5" fill="rgba(255,107,74,0.05)"
            transform="rotate(20 25 25)" />
          <rect x="12" y="12" width="26" height="26" rx="3"
            stroke="rgba(255,107,74,0.2)" strokeWidth="0.8" fill="none"
            transform="rotate(20 25 25)" />
        </g>
      </svg>
    ),
    x: '6%', y: '75%', depth: 0.02, opacity: 0.85, spinDur: '8s',
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds4">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#ds4)">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <line key={i}
              x1="50" y1="30"
              x2={50 + 44 * Math.cos(deg * Math.PI / 180)}
              y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="rgba(255,45,107,0.15)"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="50" cy="30" r="8"
            stroke="rgba(255,45,107,0.4)" strokeWidth="1.5" fill="rgba(255,45,107,0.08)" />
        </g>
      </svg>
    ),
    x: '48%', y: '85%', depth: 0.008, opacity: 0.6, spinDur: '20s',
  },
];

const FloatingShapes = ({ hideOnMobile = true }) => {
  const elRefs     = useRef([]);
  const targetRef  = useRef({ x: 0, y: 0 });
  const currentRef = useRef(shapes.map(() => ({ x: 0, y: 0 })));
  const frameRef   = useRef(null);
  const gyroActiveRef = useRef(false);

  // ── Input listeners ──
  useEffect(() => {
    if (hideOnMobile && IS_TOUCH) return;

    if (!IS_TOUCH) {
      // Desktop: mouse parallax
      const onMouseMove = (e) => {
        targetRef.current = {
          x: e.clientX / window.innerWidth  - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        };
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMouseMove);
    }

    // Mobile: gyroscope only (touchmove intentionally removed)
    const gyroHandler = (e) => {
      if (!gyroActiveRef.current) {
        gyroActiveRef.current = true;
        // Stop CSS spin + enable will-change now that JS drives position
        elRefs.current.forEach((el) => {
          if (!el) return;
          el.style.animation   = 'none';
          el.style.willChange  = 'transform';
        });
      }
      targetRef.current = {
        x: Math.max(-1, Math.min(1, (e.gamma || 0) / 30)),
        y: Math.max(-1, Math.min(1, ((e.beta  || 0) - 45) / 30)),
      };
    };

    const tryGyro = async () => {
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        // iOS 13+ requires a user-gesture before requesting permission
        try {
          const result = await DeviceOrientationEvent.requestPermission();
          if (result === 'granted') {
            window.addEventListener('deviceorientation', gyroHandler, { passive: true });
          }
        } catch (_) {}
      } else {
        // Android + all other browsers — no permission needed
        window.addEventListener('deviceorientation', gyroHandler, { passive: true });
      }
    };

    window.addEventListener('touchstart', tryGyro, { once: true });

    return () => {
      window.removeEventListener('deviceorientation', gyroHandler);
      window.removeEventListener('touchstart', tryGyro);
    };
  }, [hideOnMobile]);

  // ── RAF spring loop ──
  useEffect(() => {
    if (hideOnMobile && IS_TOUCH) return;

    const STIFFNESS = IS_TOUCH ? 0.04 : 0.08;
    const DAMPING   = IS_TOUCH ? 0.85 : 0.82;
    const velocity  = shapes.map(() => ({ x: 0, y: 0 }));

    const tick = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      shapes.forEach((shape, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const targetX = tx * shape.depth * 80;
        const targetY = ty * shape.depth * 80;

        velocity[i].x += (targetX - currentRef.current[i].x) * STIFFNESS;
        velocity[i].y += (targetY - currentRef.current[i].y) * STIFFNESS;
        velocity[i].x *= DAMPING;
        velocity[i].y *= DAMPING;
        currentRef.current[i].x += velocity[i].x;
        currentRef.current[i].y += velocity[i].y;

        // Skip style write if velocity is negligible — avoids thrashing when at rest
        if (Math.abs(velocity[i].x) > 0.001 || Math.abs(velocity[i].y) > 0.001) {
          el.style.transform = `translate(${currentRef.current[i].x.toFixed(2)}px, ${currentRef.current[i].y.toFixed(2)}px)`;
        }
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [hideOnMobile]);

  const hidden = hideOnMobile && IS_TOUCH;

  return (
    <ShapeWrap style={{ display: hidden ? 'none' : 'block' }}>
      {shapes.map((s, i) => (
        <ShapeEl
          key={i}
          ref={(el) => (elRefs.current[i] = el)}
          $opacity={s.opacity}
          $isMobile={IS_TOUCH}
          $dur={s.spinDur}
          style={{ left: s.x, top: s.y }}
        >
          {s.svg}
        </ShapeEl>
      ))}
    </ShapeWrap>
  );
};

export default FloatingShapes;