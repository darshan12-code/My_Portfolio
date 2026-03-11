// src/components/ui/EmptyState.jsx
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/**
 * Props
 * ─────
 * icon     string   emoji or character shown large   default "📭"
 * title    string   bold heading                     default "Nothing here yet"
 * message  string   subtext                          default ""
 * action   node     optional CTA button/element      default null
 */
const EmptyState = ({
  icon    = "📭",
  title   = "Nothing here yet",
  message = "",
  action  = null,
}) => (
  <Wrap
    as={motion.div}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <IconRing>
      <IconPulse />
      <IconEl>{icon}</IconEl>
    </IconRing>
    <Title>{title}</Title>
    {message && <Message>{message}</Message>}
    {action && <ActionWrap>{action}</ActionWrap>}
  </Wrap>
);

export default EmptyState;

/* ── styles ── */

const floatAnim = keyframes`
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(0.92); opacity: 0.5; }
  70%  { transform: scale(1.12); opacity: 0; }
  100% { transform: scale(0.92); opacity: 0; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  gap: 0.75rem;
`;

const IconRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const IconPulse = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.accentPink};
  opacity: 0;
  animation: ${pulseRing} 2.4s ease-out infinite;
`;

const IconEl = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  animation: ${floatAnim} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px ${({ theme }) => theme.colors.accentPinkGlow});
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  max-width: 28ch;
  line-height: 1.6;
  margin: 0;
`;

const ActionWrap = styled.div`
  margin-top: 0.75rem;
`;