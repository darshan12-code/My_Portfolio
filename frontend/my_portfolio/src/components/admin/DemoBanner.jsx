import { useLocation, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FlaskConical } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

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
  z-index: ${({ theme }) => theme.zIndex.navbar - 1};
  display: flex;
  align-items: center;
  gap: 0.4rem 0.65rem;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.demoAccentBorder2};
  flex-wrap: wrap;

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
  white-space: nowrap;
`;

const Sub = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

const RealLink = styled(Link)`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.demoAccent};
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
  opacity: 0.8;
  &:hover { opacity: 1; }
`;


const DemoBanner = ({ variant = 'public' }) => {
  const { isDemo, demoSession } = useAuth();
  const location = useLocation();

  if (!isDemo || !demoSession) return null;

  // Public variant hides itself on /admin — admin variant handles it there
  if (variant === 'public' && location.pathname.startsWith('/admin')) return null;

  return (
    <Banner>
      <FlaskConical size={13} style={{ opacity: 0.8, flexShrink: 0 }} />
      <Dot />
      <Label>Demo Mode</Label>
      {variant === 'admin' ? (
        <Sub>
          You're managing sandbox data only — changes here won't affect the real portfolio.
        </Sub>
      ) : (
        <Sub>
          You're browsing demo content. Visit{' '}
          <RealLink to="https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/" target="_blank" rel="noopener noreferrer">
            the real portfolio
          </RealLink>
          {' '}to see the actual work.
        </Sub>
      )}
    </Banner>
  );
};

export default DemoBanner;