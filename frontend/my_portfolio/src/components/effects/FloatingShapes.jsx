// src/components/effects/FloatingShapes.jsx
//
// ROOT CAUSE FIX (desktop parallax + spin conflict):
// The RAF loop wrote `el.style.transform = translate(x,y)` which overwrote the
// CSS `animation: rotate()` on the same element every frame — killing the spin,
// and the spin's rotate() overwrote the translate — killing the parallax.
//
// Fix: two-layer DOM structure.
//   • ShapeEl (outer div) → RAF writes translate(x,y)   — parallax only
//   • SpinEl  (inner div) → CSS animation rotate()      — spin only
// The two transforms live on separate elements and can NEVER conflict.
//
// PROPS (all optional):
//   mobileMode       'hide' | 'spin' | 'gyro'    default 'gyro'
//   desktopSpin      boolean                       default true
//   desktopParallax  boolean                       default true
//   gyroSensitivity  number (degrees)              default 18

import { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* ─── Touch detection ────────────────────────────────────────────────────── */
const IS_TOUCH =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

/* ─── Keyframe ───────────────────────────────────────────────────────────── */
const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* ─── Styled components ──────────────────────────────────────────────────── */

/**
 * OUTER wrapper — RAF writes translate(x, y) here for parallax.
 * position:fixed so scroll never repositions it.
 * will-change:transform reserves a GPU compositing layer permanently.
 */
const ShapeEl = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 3;
  opacity: ${({ $opacity }) => $opacity};
  will-change: transform;   /* GPU layer always ready — safe because it's already composited */
`;

/**
 * INNER wrapper — CSS animation rotate() lives here exclusively.
 * RAF never touches this element, so rotate is never clobbered.
 */
const SpinEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;

  ${({ $spin, $dur }) =>
    $spin &&
    css`
      animation: ${spinSlow} ${$dur} linear infinite;
      will-change: transform;
    `}
`;

/* ─── Shape data ─────────────────────────────────────────────────────────── */
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" overflow="visible">
        <defs>
          <filter id="ds0" x="-50%" y="-50%" width="200%" height="200%">
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
          <filter id="ds1" x="-50%" y="-50%" width="200%" height="200%">
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
          <filter id="ds2" x="-50%" y="-50%" width="200%" height="200%">
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
          <filter id="ds3" x="-50%" y="-50%" width="200%" height="200%">
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
          <filter id="ds4" x="-50%" y="-50%" width="200%" height="200%">
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

/* ─── Component ──────────────────────────────────────────────────────────── */

const FloatingShapes = ({
  mobileMode       = 'gyro',  // 'hide' | 'spin' | 'gyro'
  desktopSpin      = true,    // spin shapes on desktop
  desktopParallax  = true,    // mouse parallax on desktop
  gyroSensitivity  = 18,      // tilt degrees for full travel (lower = more sensitive)
}) => {
  const elRefs     = useRef([]);
  const targetRef  = useRef({ x: 0, y: 0 });
  const currentRef = useRef(shapes.map(() => ({ x: 0, y: 0 })));
  const frameRef   = useRef(null);

  const hidden      = IS_TOUCH && mobileMode === 'hide';
  const spinOnly    = IS_TOUCH && mobileMode === 'spin';
  const gyroEnabled = IS_TOUCH && mobileMode === 'gyro';

  // Should SpinEl rotate?
  const shouldSpin = IS_TOUCH
    ? mobileMode === 'spin' || mobileMode === 'gyro'
    : desktopSpin;

  // Should RAF parallax loop run?
  const needsRAF = !hidden && !spinOnly && (gyroEnabled || (!IS_TOUCH && desktopParallax));

  /* ── Desktop mouse parallax ─────────────────────────────────────────── */
  useEffect(() => {
    if (IS_TOUCH || !desktopParallax) return;

    const onMouseMove = (e) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [desktopParallax]);

  /* ── Gyroscope (mobile gyro mode only) ──────────────────────────────── */
  useEffect(() => {
    if (!gyroEnabled) return;

    const gyroHandler = (e) => {
      const gx = Math.max(-1, Math.min(1, (e.gamma || 0) / gyroSensitivity));
      const gy = Math.max(-1, Math.min(1, ((e.beta  || 0) - 45) / gyroSensitivity));
      targetRef.current = { x: gx, y: gy };
    };

    const attachGyro = () =>
      window.addEventListener('deviceorientation', gyroHandler, { passive: true });

    // iOS 13+: must call requestPermission synchronously inside a user gesture.
    // .then() keeps execution in the synchronous gesture flush; async/await does not.
    const onTouchStart = () => {
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then((result) => { if (result === 'granted') attachGyro(); })
          .catch(() => { /* denied — silently stays as spin */ });
      } else {
        attachGyro(); // Android + non-iOS
      }
    };

    window.addEventListener('touchstart', onTouchStart, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('deviceorientation', gyroHandler);
    };
  }, [gyroEnabled, gyroSensitivity]);

  /* ── RAF spring loop ────────────────────────────────────────────────── */
  useEffect(() => {
    if (!needsRAF) return;

    const STIFFNESS   = IS_TOUCH ? 0.10 : 0.08;
    const DAMPING     = IS_TOUCH ? 0.80 : 0.82;
    const DEPTH_SCALE = IS_TOUCH ? 500  : 350;

    const velocity = shapes.map(() => ({ x: 0, y: 0 }));

    const tick = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      shapes.forEach((shape, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const targetX = tx * shape.depth * DEPTH_SCALE;
        const targetY = ty * shape.depth * DEPTH_SCALE;

        velocity[i].x += (targetX - currentRef.current[i].x) * STIFFNESS;
        velocity[i].y += (targetY - currentRef.current[i].y) * STIFFNESS;
        velocity[i].x *= DAMPING;
        velocity[i].y *= DAMPING;
        currentRef.current[i].x += velocity[i].x;
        currentRef.current[i].y += velocity[i].y;

        // Write guard: skip style mutation when shapes are at rest
        if (Math.abs(velocity[i].x) > 0.001 || Math.abs(velocity[i].y) > 0.001) {
          // Writes ONLY to ShapeEl (outer). SpinEl (inner) is untouched → spin preserved.
          el.style.transform = `translate(${currentRef.current[i].x.toFixed(2)}px, ${currentRef.current[i].y.toFixed(2)}px)`;
        }
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [needsRAF]);

  /* ── Render ─────────────────────────────────────────────────────────── */
  if (hidden) return null;

  return (
    <>
      {shapes.map((s, i) => (
        <ShapeEl
          key={i}
          ref={(el) => (elRefs.current[i] = el)}
          $opacity={s.opacity}
          style={{ left: s.x, top: s.y }}
        >
          <SpinEl $spin={shouldSpin} $dur={s.spinDur}>
            {s.svg}
          </SpinEl>
        </ShapeEl>
      ))}
    </>
  );
};

export default FloatingShapes;