import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
    transform: translateY(-2px);
  }
  &:active { transform: translateY(0); }
`;

const Count = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

// shown  — how many are currently visible
// total  — total count
// onLoad — callback to load more
const LoadMoreButton = ({ shown, total, onLoad }) => (
  <Wrap>
    <Btn onClick={onLoad}>Load more ↓</Btn>
    <Count>Showing {shown} of {total}</Count>
  </Wrap>
);

export default LoadMoreButton;