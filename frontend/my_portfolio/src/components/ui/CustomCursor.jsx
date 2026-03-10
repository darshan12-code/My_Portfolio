// src/components/ui/CustomCursor.jsx
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.85); }
`;

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentCoral};
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.2s ease;
  will-change: transform;

  &.hovering {
    width: 32px;
    height: 32px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accentCoral};
    mix-blend-mode: normal;
    animation: ${pulse} 1.2s ease-in-out infinite;
  }

  &.clicking {
    width: 14px; height: 14px;
    background: ${({ theme }) => theme.colors.accentCoral};
  }
`;

const Ring = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 45, 107, 0.35);
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition: transform 0.08s linear;
  will-change: transform;
  transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease;

  &.hovering {
    opacity: 0;
  }
`;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const INTERACTIVES = 'a, button, [role="button"], input, textarea, select, label[for], .magnetic-btn';

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Ring lags slightly behind dot for fluid feel
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animateRing);
    };
    raf.current = requestAnimationFrame(animateRing);

    const enterInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(true);
    };
    const leaveInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(false);
    };
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', enterInteractive);
    document.addEventListener('mouseout', leaveInteractive);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enterInteractive);
      document.removeEventListener('mouseout', leaveInteractive);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
      document.body.style.cursor = 'auto';
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <Dot ref={dotRef} className={`${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`} />
      <Ring ref={ringRef} className={hovering ? 'hovering' : ''} />
    </>
  );
};

export default CustomCursor;