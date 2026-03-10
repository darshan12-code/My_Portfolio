// src/components/effects/SectionWave.jsx — NEW FILE
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
  100% { transform: translateX(0); }
`;

const WaveTop = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  pointer-events: none;

  svg {
    display: block;
    width: 200%;
    animation: ${drift} 10s ease-in-out infinite;
  }
`;

const SectionWave = ({ color = 'rgba(30,58,95,0.3)', flip = false }) => (
  <WaveTop style={{ transform: flip ? 'rotateX(180deg)' : 'none' }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" height="40">
      <path
        d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z"
        fill={color}
      />
    </svg>
  </WaveTop>
);

export default SectionWave;