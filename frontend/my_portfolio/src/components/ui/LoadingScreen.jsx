import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

/*
  Comic-book style loading screen.
  Shows on first app load AND whenever ProtectedRoute is checking auth.
  Auto-dismisses once `done` prop is true, or after 2.2s by default.
*/
const LoadingScreen = ({ done = false, minMs = 1800 }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /* Animate progress bar from 0 → 100 over minMs */
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / minMs) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minMs]);

  /* If parent signals done early, close */
  useEffect(() => {
    if (done) setVisible(false);
  }, [done]);

  return (
    <AnimatePresence>
      {visible && (
        <Overlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {/* Comic panel grid lines */}
          <PanelGrid />

          <Inner>
            {/* Glitching logo / name */}
            <LogoWrap>
              <LogoText>DA</LogoText>
              <LogoGlitch aria-hidden>DA</LogoGlitch>
              <LogoGlitch2 aria-hidden>DA</LogoGlitch2>
            </LogoWrap>

            <TagLine>Initialising Panel One…</TagLine>

            {/* Progress bar */}
            <BarTrack>
              <BarFill style={{ width: `${progress}%` }} />
              <BarGlow style={{ left: `${progress}%` }} />
            </BarTrack>

            <ProgressLabel>{Math.round(progress)}%</ProgressLabel>

            {/* Scanning dots */}
            <Dots>
              {[0, 1, 2, 3, 4].map((i) => (
                <Dot key={i} $i={i} />
              ))}
            </Dots>
          </Inner>

          {/* Corner panel marks — comic aesthetic */}
          <Corner $pos="tl" />
          <Corner $pos="tr" />
          <Corner $pos="bl" />
          <Corner $pos="br" />
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

/* ─── Keyframes ──────────────────────────────────────── */

const scanLine = keyframes`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const glitch1 = keyframes`
  0%, 90%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  91%  { clip-path: inset(15% 0 60% 0); transform: translate(-4px, 2px); opacity: 0.7; }
  93%  { clip-path: inset(70% 0 10% 0); transform: translate(4px, -2px); opacity: 0.7; }
  95%  { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 1px); opacity: 0.6; }
`;

const glitch2 = keyframes`
  0%, 88%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  89%  { clip-path: inset(20% 0 55% 0); transform: translate(5px, -3px); opacity: 0.6; }
  91%  { clip-path: inset(65% 0 15% 0); transform: translate(-5px, 3px); opacity: 0.6; }
`;

const dotBlink = keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%       { opacity: 1;    transform: scale(1.2); }
`;

const barShimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200%  0; }
`;

/* ─── Styles ─────────────────────────────────────────── */

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Scan line effect */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 45, 107, 0.6) 40%,
      rgba(59, 130, 246, 0.6) 60%,
      transparent 100%
    );
    animation: ${scanLine} 2.8s linear infinite;
    pointer-events: none;
  }
`;

/* Faint comic grid background */
const PanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
`;

/* Glitch logo */
const LogoWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoBase = `
  position: absolute;
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 1;
  user-select: none;
`;

const LogoText = styled.span`
  ${logoBase}
  background: linear-gradient(135deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: serif;
`;

const LogoGlitch = styled.span`
  ${logoBase}
  color: #FF2D6B;
  animation: ${glitch1} 3.5s infinite;
`;

const LogoGlitch2 = styled.span`
  ${logoBase}
  color: #3B82F6;
  animation: ${glitch2} 3.5s infinite;
`;

const TagLine = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* Progress bar */
const BarTrack = styled.div`
  width: 220px;
  height: 3px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  position: relative;
  overflow: visible;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%);
  background-size: 200% 100%;
  animation: ${barShimmer} 1.4s linear infinite;
  transition: width 0.05s linear;
`;

const BarGlow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF2D6B;
  box-shadow: 0 0 12px 4px rgba(255, 45, 107, 0.6);
  transition: left 0.05s linear;
`;

const ProgressLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-variant-numeric: tabular-nums;
`;

/* Scanning dots */
const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ $i }) =>
    $i % 2 === 0 ? "#FF2D6B" : "#3B82F6"};
  animation: ${dotBlink} 1.1s ease-in-out infinite;
  animation-delay: ${({ $i }) => $i * 0.18}s;
`;

/* Comic panel corner marks */
const Corner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(255, 45, 107, 0.35);
  border-style: solid;

  ${({ $pos }) => $pos === "tl" && "top:20px;left:20px;border-width:2px 0 0 2px;border-radius:3px 0 0 0;"}
  ${({ $pos }) => $pos === "tr" && "top:20px;right:20px;border-width:2px 2px 0 0;border-radius:0 3px 0 0;"}
  ${({ $pos }) => $pos === "bl" && "bottom:20px;left:20px;border-width:0 0 2px 2px;border-radius:0 0 0 3px;"}
  ${({ $pos }) => $pos === "br" && "bottom:20px;right:20px;border-width:0 2px 2px 0;border-radius:0 0 3px 0;"}
`;