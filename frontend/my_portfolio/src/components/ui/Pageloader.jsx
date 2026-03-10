// src/components/ui/PageLoader.jsx
// Full-screen loading state for pages that are fetching API data.
// Uses 100vh so it fills the entire viewport, not just the content area.
// Used by: Blog, CaseStudies, Admin dashboard

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 1.5rem;
`;

const Ring = styled.div`
  position: relative;
  width: 52px;
  height: 52px;

  /* Outer track */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.borderDefault};
  }

  /* Spinning arc */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.accentPink};
    border-right-color: ${({ theme }) => theme.colors.accentBlue};
    animation: ${spin} 0.8s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite;
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

const PageLoader = ({ label = "Loading…" }) => (
  <Wrap>
    <Ring />
    <Label>{label}</Label>
  </Wrap>
);

export default PageLoader;