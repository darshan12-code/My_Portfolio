import styled from 'styled-components';
import { getCategoryColor } from '../../utils/categoryColors';
import { useTheme } from 'styled-components';

const Pill = styled.span`
  display: inline-block;
  padding: ${({ $size }) => $size === 'sm' ? '2px 9px' : '4px 12px'};
  border-radius: 999px;
  font-size: ${({ $size }) => $size === 'sm' ? '0.68rem' : '0.72rem'};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${({ $c }) => $c?.bg || 'rgba(255,255,255,0.06)'};
  border: 1px solid ${({ $c }) => $c?.border || 'rgba(255,255,255,0.12)'};
  color: ${({ $c }) => $c?.text || '#9BA1B0'};
`;

const CategoryBadge = ({ category, size = 'md', className }) => {
  const theme = useTheme();
  const colors = getCategoryColor(category, theme.mode);
  return (
    <Pill $c={colors} $size={size} className={className}>
      {category}
    </Pill>
  );
};

export default CategoryBadge;