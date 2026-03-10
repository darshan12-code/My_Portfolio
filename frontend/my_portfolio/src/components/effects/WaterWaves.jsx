// src/components/effects/WaterWaves.jsx
// PERFORMANCE FIXES:
// 1. Reduced from 5 layers to 3 — each SVG path is a full GPU layer
// 2. CSS animations removed from Wave styled component — only JS RAF drives motion
//    (mixing CSS animation + JS setAttribute on same element causes double work)
// 3. overflow: hidden on wrapper — prevents SVG width:200% from causing
//    horizontal scroll / layout recalculation
// 4. Touch support added (touchmove)

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WaveWrap = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  z-index: 10;
  overflow: hidden; /* FIXED: prevents 200%-width SVG from causing h-scroll */
`;

// No CSS animation here — JS RAF drives everything
// Mixing CSS keyframe + JS setAttribute on same element = double paint
const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  will-change: transform;
  opacity: ${({ $opacity }) => $opacity};
`;

function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W = 1440;
  const pts = 80; // FIXED: reduced from 120 — 80 points is visually identical but faster
  let d = `M0,${baseline + amp * Math.sin(phase * Math.PI * 2)} `;
  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }
  d += `L${W},${height} L0,${height} Z`;
  return d;
}

// FIXED: 3 layers instead of 5 — halves SVG paint cost
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

const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 });
  const frameRef  = useRef(null);
  const lastY     = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      const prevY = lastY.current ?? ny;
      cursorRef.current = { x: nx, vy: (ny - prevY) * 60 };
      lastY.current = ny;
    };

    const onTouchMove = (e) => {
      if (!e.touches.length) return;
      const t = e.touches[0];
      const nx = t.clientX / window.innerWidth;
      const ny = t.clientY / window.innerHeight;
      const prevY = lastY.current ?? ny;
      cursorRef.current = { x: nx, vy: (ny - prevY) * 40 };
      lastY.current = ny;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove,  { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
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