import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../../media';
const Btn = styled(motion.button)`
  position: relative;
  padding: ${({ $size }) => $size === 'sm' ? '0.4rem 0.9rem' : '0.875rem 2rem'};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.codeText};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  overflow: hidden;
  border: none;

  transition: ${({ theme }) => theme.transitions.default};

  /* Background variants */
  background: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outline': return 'transparent';
      case 'ghost':   return 'transparent';
      case 'nav':     return theme.colors.bgGlassLight;
      case 'edit':    return `linear-gradient(90deg, ${theme.colors.accentBlue}, ${theme.colors.accentNavyLight})`;
      case 'delete':  return `linear-gradient(90deg, ${theme.colors.accentCrimson}, ${theme.colors.accentCoral})`;
      default:        return theme.colors.gradientPinkBlue;
    }
  }};

  border: ${({ $variant, theme }) => {
    if ($variant === 'outline') return `1px solid ${theme.colors.textWhite}`;
    if ($variant === 'ghost') return '1px solid transparent';
    return 'none';
  }};

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.bgGlassLight} 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow: ${({ $variant, theme }) => {
      if ($variant === 'delete') return theme.colors.shadowGlowPink;
      if ($variant === 'outline' || $variant === 'ghost') return theme.colors.shadowGlowPink;
      return theme.colors.shadowGlowPink;
    }};

    &::after {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    `
      &:hover {
        background: ${theme.colors.bgGlassLight};
        border-color: ${theme.colors.borderAccent};
      }
    `}
`;
const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  transform: scale(0);
  animation: ripple-expand 0.6s ease-out forwards;
  pointer-events: none;

  @keyframes ripple-expand {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const MagneticButton = ({ children, variant = 'default', onClick, ...props }) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };

  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    setRipples((prev) => [...prev, { x, y, size, id: Date.now() }]);
    setTimeout(() => setRipples((prev) => prev.slice(1)), 600);
    onClick && onClick(e);
  };

  return (
    <Btn
      ref={ref}
      $variant={variant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <Ripple key={r.id} style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
      ))}
    </Btn>
  );
};

export default MagneticButton;
