import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tag from "../ui/Tag";

const Card = styled(motion.div)`
  position: relative;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${({ theme }) => theme.colors.borderAccent};
    box-shadow: ${({ theme }) => theme.colors.shadowCardHover};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Arrow = styled.span`
  display: inline-block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.accentPink};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    transform: translateX(4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onClick={() => project.link && navigate(project.link)}
    >
      {/* Add this */}
      {project.image && (
        <ProjectImage src={project.image} alt={project.title} />
      )}

      <Title>{project.title}</Title>
      <Desc>{project.description}</Desc>
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Arrow>→</Arrow>
    </Card>
  );
};
export default ProjectCard;