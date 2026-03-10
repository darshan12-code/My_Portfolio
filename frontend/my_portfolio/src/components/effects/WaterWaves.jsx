// src/components/effects/WaterWaves.jsx
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

/* ── ambient drift animations (baseline motion when cursor is idle) ── */
const drift1 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);    }
  50%  { transform: translateX(-60px) scaleY(1.06); }
  100% { transform: translateX(0)     scaleY(1);    }
`;
const drift2 = keyframes`
  0%   { transform: translateX(0)    scaleY(1);    }
  50%  { transform: translateX(50px) scaleY(0.96); }
  100% { transform: translateX(0)    scaleY(1);    }
`;
const drift3 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);    }
  50%  { transform: translateX(-30px) scaleY(1.03); }
  100% { transform: translateX(0)     scaleY(1);    }
`;
const drift4 = keyframes`
  0%   { transform: translateX(0)    scaleY(1);    }
  50%  { transform: translateX(70px) scaleY(0.98); }
  100% { transform: translateX(0)    scaleY(1);    }
`;
const drift5 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);   }
  50%  { transform: translateX(-45px) scaleY(1.04);}
  100% { transform: translateX(0)     scaleY(1);   }
`;

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

const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  will-change: transform, opacity, d;
  opacity: ${({ $opacity }) => $opacity};

  animation: ${({ $drift }) => $drift} ${({ $speed }) => $speed}s
    ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

/* ─────────────────────────────────────────────────────────── */
/*  Wave path generators                                        */
/* ─────────────────────────────────────────────────────────── */

/**
 * Build an SVG "d" string for a sine-like wave path.
 * @param {number} amp      – peak-to-trough amplitude in px
 * @param {number} phase    – horizontal phase offset (0-1 of wave width)
 * @param {number} freq     – number of full cycles across the 1440 unit viewBox
 * @param {number} baseline – vertical centre of the wave in the 80-unit viewBox
 */
function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W = 1440;
  const pts = 120; // control point resolution
  let d = `M0,${baseline + amp * Math.sin(phase * Math.PI * 2)} `;

  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }

  d += `L${W},${height} L0,${height} Z`;
  return d;
}

/* ─────────────────────────────────────────────────────────── */
/*  Layer config                                               */
/* ─────────────────────────────────────────────────────────── */
const LAYERS = [
  // [drift-anim, speed, delay, opacity, fill, amp, freq, baseline, cursorInfluence]
  { drift: drift5, speed: 14, delay: -5,  opacity: 0.12, fill: 'url(#wg5)', amp: 14, freq: 1.5, baseline: 30, influence: 0.6 },
  { drift: drift4, speed: 12, delay: -3,  opacity: 0.15, fill: 'url(#wg4)', amp: 18, freq: 2,   baseline: 35, influence: 0.8 },
  { drift: drift2, speed: 10, delay: -2,  opacity: 0.20, fill: 'url(#wg2)', amp: 14, freq: 2.5, baseline: 38, influence: 1.0 },
  // { drift: drift3, speed:  8, delay: -1,  opacity: 0.28, fill: 'url(#wg3)', amp: 10, freq: 3,   baseline: 42, influence: 1.2 },
  // { drift: drift1, speed:  6, delay:  0,  opacity: 0.32, fill: 'url(#wg1)', amp:  8, freq: 3.5, baseline: 46, influence: 1.5 },
];

/* gradient stop pairs [top-color, bottom-color] per layer */
const GRADIENTS = [
  ['#FF2D6B', '#0D0F14'],
  ['#0F2A4A', '#0D0F14'],
  ['#FF2D6B', '#0D0F14'],
  ['#1A2E50', '#0D0F14'],
  ['#FF2D6B',  '#0D0F14'],
];
const GRAD_IDS = ['wg5','wg4','wg2','wg3','wg1'];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */
const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 }); // normalised x (0-1), vertical velocity
  const frameRef  = useRef(null);
  const lastY     = useRef(null);

  /* track cursor */
  useEffect(() => {
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      const prevY = lastY.current ?? ny;
      cursorRef.current = {
        x:  nx,
        vy: (ny - prevY) * 60, // amplify vertical delta
      };
      lastY.current = ny;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* animation loop */
  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // seconds, capped
      lastTime = now;

      const { x: cx, vy } = cursorRef.current;

      LAYERS.forEach((layer, i) => {
        // advance phase: base speed + cursor horizontal nudge
        const cursorNudge = (cx - 0.5) * layer.influence * 0.4;
        phaseRefs.current[i] += dt * (0.06 + Math.abs(cursorNudge) * 0.08) + cursorNudge * dt;

        // amplitude breathes with cursor vertical velocity
        const dynAmp = layer.amp + vy * layer.influence * 1.2;

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
      {/* Shared gradient defs (rendered once inside first SVG) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {GRADIENTS.map(([top, bot], i) => (
            <linearGradient key={GRAD_IDS[i]} id={GRAD_IDS[i]} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={top} stopOpacity={i === 4 ? '0.35' : '0.55'} />
              <stop offset="100%" stopColor={bot} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {LAYERS.map((layer, i) => (
        <Wave
          key={i}
          $drift={layer.drift}
          $speed={layer.speed}
          $delay={layer.delay}
          $opacity={layer.opacity}
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
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