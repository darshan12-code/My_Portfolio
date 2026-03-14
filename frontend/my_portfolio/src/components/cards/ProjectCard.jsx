import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tag from "../ui/Tag";
import Tilt from "react-parallax-tilt";
import { getCategoryColor } from "../../utils/categoryColors";
import ProjectThumbnail from "../../assets/project_thumbnail.png";
import { useTheme } from "styled-components";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const categories = (project.category || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const shownCats  = categories.slice(0, 2);
  const extraCount = categories.length - 2;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: "14px", transformStyle: "preserve-3d", height: "100%" }}
    >
      <CardLink
        onClick={() => navigate(project.link)}
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42 }}
      >
        <ImageWrap>
          <ProjectImage
            src={project.image || ProjectThumbnail}
            alt={project.title || "Project thumbnail"}
            loading="lazy"
          />
          <ImageOverlay />
          {categories.length > 0 && (
            <CategoryBadge>
              {shownCats.map((cat, i) => (
                <CategoryPill key={i} $c={getCategoryColor(cat, theme.mode)}>
                  {cat}
                </CategoryPill>
              ))}
              {extraCount > 0 && <MorePill>+{extraCount}</MorePill>}
            </CategoryBadge>
          )}
        </ImageWrap>

        <CardBody>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>

          {project.tags && project.tags.length > 0 && (
            <Tags>
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {project.tags.length > 4 && (
                <MoreTags>+{project.tags.length - 4}</MoreTags>
              )}
            </Tags>
          )}

          <ArrowChip
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View Case Study →
          </ArrowChip>
        </CardBody>

        <TopBar />
      </CardLink>
    </Tilt>
  );
};

export default ProjectCard;

/* ─── STYLES ─────────────────────────────────────────── */

const CardLink = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;

  /* responsive fixed heights — enough room for all content at each breakpoint */
  height: 460px;
  @media (max-width: 1024px) { height: 460px; }
  @media (max-width: 768px)  { height: 450px; }
  @media (max-width: 480px)  { height: 440px; }

  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 14px;
  cursor: pointer;

  /* clip only the image zoom — NOT the card body content */
  overflow: hidden;

  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35),
                0 0 0 1px rgba(255, 45, 107, 0.08);
  }
`;

const TopBar = styled.span`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
  pointer-events: none;
  z-index: 2;

  ${CardLink}:hover & {
    transform: scaleX(1);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  flex-shrink: 0;        /* image height never shrinks */
  overflow: hidden;      /* image zoom stays clipped to this box */
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;

  ${CardLink}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(13, 15, 20, 0.55) 100%
  );
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${CardLink}:hover & {
    opacity: 0.8;
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  bottom: 0.65rem;
  left: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  max-width: calc(100% - 1.5rem);
  overflow: hidden;
  backdrop-filter: blur(8px);
`;

const CategoryPill = styled.span`
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  white-space: nowrap;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  backdrop-filter: blur(8px);
`;

const MorePill = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
`;

const CardBody = styled.div`
  /* takes all remaining height after ImageWrap */
  flex: 1;
  min-height: 0;          /* prevents flex blowout */
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.25rem 1.25rem;

  /* NO overflow hidden — nothing inside should be clipped */
  overflow: visible;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  flex-shrink: 0;

  /* exactly 1 line, ellipsis if longer */
  min-height: calc(1.3em + 0.1em);
  max-height: calc(1.3em + 0.1em);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  padding-bottom: 0.1em;
  box-sizing: content-box;

  transition: color 0.2s ease;

  ${CardLink}:hover & {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.85rem;
  flex-shrink: 0;

  /* exactly 2 lines, ellipsis if longer */
  min-height: calc(1.6em * 2 + 0.15em);
  max-height: calc(1.6em * 2 + 0.15em);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  padding-bottom: 0.15em;
  box-sizing: content-box;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

const MoreTags = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;      /* pushes to bottom of CardBody */
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  align-self: flex-start;
  flex-shrink: 0;        /* never squished by siblings above */
  white-space: nowrap;   /* text never wraps mid-chip */

  background: linear-gradient(
    90deg,
    rgba(255, 45, 107, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  border: 1px solid rgba(255, 45, 107, 0.2);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  transition: border-color 0.2s ease;

  ${CardLink}:hover & {
    border-color: rgba(255, 45, 107, 0.45);
    background: linear-gradient(
      90deg,
      rgba(255, 45, 107, 0.15),
      rgba(59, 130, 246, 0.15)
    );
  }
`;