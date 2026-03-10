// src/components/ui/ThemeToggle.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Track = styled.button`
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ $isDark }) =>
    $isDark
      ? 'rgba(30, 58, 95, 0.4)'
      : 'rgba(200, 216, 236, 0.8)'};
  cursor: pointer;
  transition: background 0.4s ease;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Knob = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $isDark }) =>
    $isDark
      ? 'linear-gradient(135deg, #3B82F6, #FF2D6B)'
      : 'linear-gradient(135deg, #FFB347, #FF6B4A)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
`;

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <Track $isDark={isDark} onClick={toggle} title="Toggle theme">
      <Knob
        $isDark={isDark}
        animate={{ left: isDark ? '4px' : '28px' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {isDark ? '🌙' : '☀️'}
      </Knob>
    </Track>
  );
};

export default ThemeToggle;