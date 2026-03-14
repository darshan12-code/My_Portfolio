// src/components/ui/CardSkeleton.jsx
import styled, { keyframes,css  } from "styled-components";

/**
 * Props
 * ─────
 * count   number   how many skeleton cards to render   default 6
 */
const CardSkeleton = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i}>
        {/* shimmer top bar */}
        <SkeletonBar style={{ width: "35%", height: "10px", marginBottom: "1rem" }} />
        {/* title */}
        <SkeletonBar style={{ width: "85%", height: "14px", marginBottom: "6px" }} />
        <SkeletonBar style={{ width: "60%", height: "14px", marginBottom: "1.1rem" }} />
        {/* chip */}
        <SkeletonChip />
        {/* body lines */}
        <SkeletonBar style={{ width: "100%", height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "90%",  height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "70%",  height: "10px", marginBottom: "1.25rem" }} />
        {/* status row */}
        <SkeletonStatusRow>
          <SkeletonDot />
          <SkeletonBar style={{ width: "50px", height: "9px" }} />
        </SkeletonStatusRow>
      </SkeletonCard>
    ))}
  </>
);

export default CardSkeleton;

/* ── styles ── */

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerBg = ({ theme }) => css`
  background: linear-gradient(
    90deg,
    ${theme.colors.bgTertiary}        0%,
    ${theme.colors.borderHover}       40%,
    ${theme.colors.bgTertiary}        80%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.6s linear infinite;
`;

const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const SkeletonBar = styled.div`
  border-radius: 6px;
  ${shimmerBg}
`;

const SkeletonChip = styled.div`
  width: 68px;
  height: 18px;
  border-radius: 999px;
  margin-bottom: 0.65rem;
  ${shimmerBg}
`;

const SkeletonStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const SkeletonDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerBg}
`;