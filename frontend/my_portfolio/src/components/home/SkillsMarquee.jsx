import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/siteData';

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Wrapper = styled.section`
  padding: 3rem 0;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const Pill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
  }
`;

const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];
  return (
    <Wrapper>
      <Track>
        {doubled.map((skill, i) => (
          <Pill key={`${skill.name}-${i}`}>{skill.name}</Pill>
        ))}
      </Track>
    </Wrapper>
  );
};

export default SkillsMarquee;
