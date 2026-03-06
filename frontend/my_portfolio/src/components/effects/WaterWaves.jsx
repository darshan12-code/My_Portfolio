import styled, { keyframes } from "styled-components";

const wave = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
`;

const WaveContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 120px;
  background: linear-gradient(
    to top,
    rgba(0, 150, 255, 0.25),
    rgba(0, 150, 255, 0)
  );

  animation: ${wave} 12s linear infinite;
  pointer-events: none;
  z-index: 1;
`;

const WaterWaves = () => {
  return <WaveContainer />;
};

export default WaterWaves;