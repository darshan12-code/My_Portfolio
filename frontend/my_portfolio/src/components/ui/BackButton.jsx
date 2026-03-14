import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
    transform: translateX(-3px);
  }
`;

// to   — navigate to this path on click
// label — button text
// onClick — override if you need custom behavior
const BackButton = ({ to, label = 'Back', onClick }) => {
  const navigate = useNavigate();
  const handleClick = onClick || (() => navigate(to));
  return (
    <Btn onClick={handleClick}>
      <ArrowLeft size={14} /> {label}
    </Btn>
  );
};

export default BackButton;