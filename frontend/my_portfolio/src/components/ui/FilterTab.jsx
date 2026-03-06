import styled from 'styled-components';

const Tab = styled.button`
  padding: 0.5rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ $active, theme }) => $active ? theme.colors.textWhite : theme.colors.textTertiary};
  background: ${({ $active, theme }) => $active ? theme.colors.accentPink : 'transparent'};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.accentPink : theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const FilterTab = ({ active, children, onClick }) => (
  <Tab $active={active} onClick={onClick}>{children}</Tab>
);

export default FilterTab;
