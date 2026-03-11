// src/components/effects/WaterWaves.jsx
//
// PERFORMANCE FIXES vs previous version:
// 1. Removed will-change:transform from Wave SVG elements — will-change only accelerates
//    CSS transform/opacity. These elements change via setAttribute('d') on the inner path,
//    so will-change:transform was promoting 3 GPU layers for zero benefit and wasting VRAM.
// 2. Added mobile RAF throttle — runs at 30fps on touch devices instead of 60fps.
//    Waves are subtle background elements; 30fps is imperceptible but halves GPU work.
// 3. Path point reduction kept from previous version (80 points, was 120).
// 4. 3 layers kept from previous version (was 5).

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const WaveWrap = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
`;

// will-change removed — SVG path 'd' changes are NOT accelerated by will-change:transform
const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  opacity: ${({ $opacity }) => $opacity};
`;

function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W   = 1440;
  const pts = IS_TOUCH ? 50 : 80; // fewer points on mobile — visually identical
  let d = `M0,${(baseline + amp * Math.sin(phase * Math.PI * 2)).toFixed(1)} `;
  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }
  d += `L${W},${height} L0,${height} Z`;
  return d;
}

const LAYERS = [
  { speed: 0.055, opacity: 0.13, fill: 'url(#wg1)', amp: 16, freq: 1.8, baseline: 32, influence: 0.6 },
  { speed: 0.045, opacity: 0.18, fill: 'url(#wg2)', amp: 12, freq: 2.4, baseline: 38, influence: 1.0 },
  { speed: 0.035, opacity: 0.22, fill: 'url(#wg3)', amp:  8, freq: 3.0, baseline: 44, influence: 1.4 },
];

const GRADIENTS = [
  ['#FF2D6B', '#0D0F14'],
  ['#0F2A4A', '#0D0F14'],
  ['#FF2D6B', '#0D0F14'],
];

// Mobile: throttle to ~30fps to halve GPU work on subtle background element
const FRAME_INTERVAL = IS_TOUCH ? 1000 / 30 : 0;

const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 });
  const frameRef  = useRef(null);
  const lastY     = useRef(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    // Desktop: mouse moves influence waves
    if (!IS_TOUCH) {
      const onMouseMove = (e) => {
        const nx = e.clientX / window.innerWidth;
        const ny = e.clientY / window.innerHeight;
        const prevY = lastY.current ?? ny;
        cursorRef.current = { x: nx, vy: (ny - prevY) * 60 };
        lastY.current = ny;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
    // Mobile: no touch input for waves — they just animate autonomously
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
      // Throttle on mobile
      if (IS_TOUCH && now - lastFrameTimeRef.current < FRAME_INTERVAL) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }
      lastFrameTimeRef.current = now;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const { x: cx, vy } = cursorRef.current;

      LAYERS.forEach((layer, i) => {
        const nudge = (cx - 0.5) * layer.influence * 0.3;
        phaseRefs.current[i] += dt * (layer.speed + Math.abs(nudge) * 0.06) + nudge * dt;

        const dynAmp = layer.amp + vy * layer.influence * 0.8;
        const d = buildWavePath(dynAmp, phaseRefs.current[i], layer.freq, layer.baseline);

        const el = pathRefs.current[i];
        if (el) el.setAttribute('d', d);
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <WaveWrap>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {GRADIENTS.map(([top, bot], i) => (
            <linearGradient key={i} id={`wg${i + 1}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={top} stopOpacity="0.55" />
              <stop offset="100%" stopColor={bot} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {LAYERS.map((layer, i) => (
        <Wave key={i} $opacity={layer.opacity} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            ref={(el) => (pathRefs.current[i] = el)}
            d={buildWavePath(layer.amp, 0, layer.freq, layer.baseline)}
            fill={layer.fill}
          />
        </Wave>
      ))}
    </WaveWrap>
  );
};

export default WaterWaves;