export const AdminSidebar = styled.aside`
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 2rem 1rem;
`;
