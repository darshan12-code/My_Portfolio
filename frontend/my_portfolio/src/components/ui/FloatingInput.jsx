import styled from 'styled-components';

const Group = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.25rem 1rem 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.accentPink}; }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  pointer-events: none;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.25rem 1rem 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.accentPink}; }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

export const FloatingInput = ({ label, type = 'text', ...props }) => (
  <Group>
    <Input type={type} placeholder=" " {...props} />
    <Label>{label}</Label>
  </Group>
);

export const FloatingTextArea = ({ label, ...props }) => (
  <Group>
    <TextArea placeholder=" " {...props} />
    <Label>{label}</Label>
  </Group>
);
