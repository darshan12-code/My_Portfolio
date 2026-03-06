import styled from 'styled-components';

const TagPill = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0, 232, 157, 0.08);
  border: 1px solid rgba(0, 232, 157, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const Tag = ({ children }) => <TagPill>{children}</TagPill>;
export default Tag;