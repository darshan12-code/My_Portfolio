import styled, { keyframes } from 'styled-components';
import { FlaskConical } from 'lucide-react';

const blink = keyframes`
  0%, 100% { opacity: 1;   }
  50%       { opacity: 0.4; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`;

const Banner = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 0.4rem 0.65rem;
  padding: 0.55rem 1.5rem;
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.demoAccentBorder2};
  flex-wrap: wrap;

  /* subtle animated top edge */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.demoGradient};
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const Dot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.demoAccent};
  animation: ${blink} 2.4s ease-in-out infinite;
`;

const Label = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.demoAccent};
`;

const Sub = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

const DemoBanner = () => (
  <Banner>
    <FlaskConical size={13} style={{ color: 'currentColor', opacity: 0.8, flexShrink: 0 }} />
    <Dot />
    <Label>Sandbox Active</Label>
    <Sub>
     👋 Hi there! This is a Live Demo. You can play around with the Dashboard, but don't worry—you can't break the real site.
    </Sub>
  </Banner>
);

export default DemoBanner;