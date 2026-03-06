import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Btn = styled(motion.button)`
  position: relative;
  padding: ${({ $size }) =>
    $size === "sm" ? "0.4rem 0.9rem" : "0.875rem 2rem"};

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};

  background: ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return "transparent";
      case "edit":
        return "#2563eb";
      case "delete":
        return "#ef4444";
      case "nav":
        return theme.colors.bgSecondary;
      case "ghost":
        return "transparent";
      default:
        return theme.colors.accentPink;
    }
  }};

  border: ${({ $variant, theme }) =>
    $variant === "outline"
      ? `1px solid ${theme.colors.borderDefault}`
      : "none"};

  border-radius: ${({ theme }) => theme.borderRadius.full};

  cursor: pointer;
  overflow: hidden;

  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);

    box-shadow: ${({ $variant, theme }) =>
      $variant === "delete"
        ? "0 0 12px rgba(239,68,68,0.5)"
        : theme.colors.shadowGlowPink};
  }
`;
const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-expand 0.6s ease-out forwards;
  pointer-events: none;

  @keyframes ripple-expand {
    to { transform: scale(4); opacity: 0; }
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
