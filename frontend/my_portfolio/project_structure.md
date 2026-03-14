## Project Structure

Folder PATH listing for volume Data
Volume serial number is F8CC-00EB
D:.
|   .env
|   .env.production
|   .gitignore
|   dump.ps1
|   eslint.config.js
|   index.html
|   media.js
|   package-lock.json
|   package.json
|   project_structure.md
|   README.md
|   resume.pdf
|   vercel.json
|   vite.config.js
|   
+---public
|       favicon.png
|       vite.svg
|       
\---src
    |   App.css
    |   App.jsx
    |   index.css
    |   main.jsx
    |   
    +---assets
    |       favicon2.png
    |       myphoto_cutout.png
    |       myphoto_cutout2.png
    |       noise.png
    |       project_thumbnail.png
    |       react.svg
    |       Untitled design (1).png
    |       
    +---components
    |   +---admin
    |   |       AdminContent.jsx
    |   |       AdminLogin.jsx
    |   |       AdminSidebar.jsx
    |   |       BlogManager.jsx
    |   |       ProjectManager.jsx
    |   |       
    |   +---cards
    |   |       BlogCard.jsx
    |   |       ProjectCard.jsx
    |   |       
    |   +---effects
    |   |       ComicGrid.jsx
    |   |       FloatingShapes.jsx
    |   |       ParallaxWrapper.jsx
    |   |       SectionWave.jsx
    |   |       WaterWaves.jsx
    |   |       
    |   +---home
    |   |       About.jsx
    |   |       Counters.jsx
    |   |       FeaturedProjects.jsx
    |   |       Hero.jsx
    |   |       SkillsMarquee.jsx
    |   |       Timeline.jsx
    |   |       
    |   +---layout
    |   |       Footer.jsx
    |   |       Navbar.jsx
    |   |       NoiseOverlay.jsx
    |   |       PageTransition.jsx
    |   |       ScrollProgress.jsx
    |   |       ScrollToTop.jsx
    |   |       
    |   \---ui
    |           AdminCardSkeleton.jsx
    |           CustomCursor.jsx
    |           EmptyState.jsx
    |           FilterTab.jsx
    |           FloatingInput.jsx
    |           LoadingScreen.jsx
    |           MagneticButton.jsx
    |           NotFound.jsx
    |           PageHero.jsx
    |           PageLoader.jsx
    |           ProseContent.jsx
    |           RichEditor.jsx
    |           SectionHeader.jsx
    |           Tag.jsx
    |           ThemeToggle.jsx
    |           
    +---contexts
    |       AuthContext.jsx
    |       ThemeContext.jsx
    |       
    +---data
    |       siteData.jsx
    |       
    +---hooks
    |       useApiData.jsx
    |       useCountUp.jsx
    |       useFetch.jsx
    |       useMousePosition.jsx
    |       usePost.jsx
    |       useScrollProgress.jsx
    |       useScrollReveal.jsx
    |       useTypewriter.jsx
    |       
    +---pages
    |       Admin.jsx
    |       AdminLogin.jsx
    |       Blog.jsx
    |       BlogDetails.jsx
    |       CaseStudies.jsx
    |       CaseStudyDetails.jsx
    |       Contact.jsx
    |       Home.jsx
    |       
    +---services
    |       apis.jsx
    |       queryClient.jsx
    |       
    +---styles
    |       globalStyles.jsx
    |       theme.js
    |       
    \---utils
            categoryColors.js
            

## File Contents


### src\components\admin\AdminContent.jsx

```
export const AdminContent = styled.main`
  margin-left: 15rem;
  padding: 2rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgPrimary};
`;
```


### src\components\admin\AdminLogin.jsx

```
```


### src\components\admin\AdminSidebar.jsx

```
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
```


### src\components\admin\BlogManager.jsx

```
```


### src\components\admin\ProjectManager.jsx

```
```


### src\components\cards\BlogCard.jsx

```
import { styled, useTheme } from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import { getCategoryColor } from "../../utils/categoryColors";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
/* ---------- Badge ---------- */

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  /* truncate long single category */
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
  white-space: nowrap;
  flex-shrink: 0;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
  max-width: 100%;
`;

/* ---------- Card ---------- */

const CardLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem;
  min-height: 240px;

  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  cursor: pointer;
  position: relative;
  overflow: hidden;

  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.25s ease;

  /* gradient top bar */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;

    background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);

    &::before {
      transform: scaleX(1);
    }
  }

  /* responsive height */
  @media (max-width: 768px) {
    min-height: 210px;
  }

  @media (max-width: 480px) {
    min-height: auto;
  }
`;

/* ---------- Meta ---------- */

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};

  margin-bottom: 0.75rem;
`;

/* ---------- Title ---------- */

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};

  margin-bottom: 0.4rem;

  /* limit title lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ---------- Excerpt ---------- */

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;

  margin-bottom: 0.75rem;

  /* limit text lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ---------- Date ---------- */

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* ---------- Bottom Row ---------- */

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ---------- Arrow ---------- */

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.35rem 0.85rem;

  border-radius: 999px;

  font-size: 0.78rem;
  font-weight: 600;

  background: linear-gradient(
    90deg,
    rgba(255, 45, 107, 0.12),
    rgba(59, 130, 246, 0.12)
  );

  border: 1px solid rgba(255, 45, 107, 0.2);

  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;

/* ---------- Component ---------- */

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  // split on comma, trim, filter empty
  const categories = (post.category || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const shown     = categories.slice(0, 2);
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
      onClick={() => navigate(post.link)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div>
        <Meta>
          <BadgeRow>
            {shown.map((cat, i) => (
              <CategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                {cat}
              </CategoryBadge>
            ))}
            {extraCount > 0 && <MoreBadge>+{extraCount}</MoreBadge>}
          </BadgeRow>
          <span>·</span>
          <span>{post.readTime}</span>
        </Meta>

        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
      </div>

      <Footer>
        <Date>{post.date}</Date>
        <ArrowChip whileHover={{ x: 4 }}>Read more →</ArrowChip>
      </Footer>
    </CardLink>
    </Tilt>
  );
};

export default React.memo(BlogCard);
```


### src\components\cards\ProjectCard.jsx

```
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

  const shownCats   = categories.slice(0, 2);
  const extraCount  = categories.length - 2;

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

          <ArrowChip whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
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
  /* Fixed total card height — all cards identical regardless of content */
  height: 420px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 45, 107, 0.08);
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

  ${CardLink}:hover & {
    transform: scaleX(1);
  }
`;

/* Fixed image height — always same slice of the card */
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  flex-shrink: 0;
  overflow: hidden;
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
  background: linear-gradient(to bottom, transparent 50%, rgba(13, 15, 20, 0.55) 100%);
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
  max-width: calc(100% - 1.5rem);  /* never overflow the image */
  overflow: hidden;
  backdrop-filter: blur(8px);
`;

// individual pill inside the image badge row
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
  /* truncate if single category is very long */
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
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.8);
  white-space: nowrap;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
`;

/* Body takes remaining height and uses flex to push arrow to bottom */
const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.25rem 1.5rem;
  /* Clip anything that overflows — belt-and-suspenders */
  overflow: hidden;
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  line-height: 1.25;

  /* truncate to 2 lines with ellipsis — works on all content lengths */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;       /* breaks very long single words like URLs */

  transition: color 0.2s ease;

  ${CardLink}:hover & {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* re-assert clamp so ellipsis survives gradient paint */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  /* Always exactly 3 lines — long or short descriptions look identical */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.25rem;
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

/* margin-top: auto pushes this to the bottom of CardBody regardless of content above */
const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  align-self: flex-start;
  background: linear-gradient(90deg, rgba(255, 45, 107, 0.1), rgba(59, 130, 246, 0.1));
  border: 1px solid rgba(255, 45, 107, 0.2);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  transition: border-color 0.2s ease;

  ${CardLink}:hover & {
    border-color: rgba(255, 45, 107, 0.45);
    background: linear-gradient(90deg, rgba(255, 45, 107, 0.15), rgba(59, 130, 246, 0.15));
  }
`;
```


### src\components\effects\ComicGrid.jsx

```
// src/components/effects/ComicGrid.jsx
import styled from 'styled-components';

const Grid = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center center;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
`;

/* Larger panel divider lines — like actual comic panel borders */
const PanelLines = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px);
  background-size: 320px 320px;
`;

const ComicGrid = () => (
  <>
    <Grid />
    <PanelLines />
  </>
);

export default ComicGrid;
```


### src\components\effects\FloatingShapes.jsx

```
// src/components/effects/FloatingShapes.jsx
//
// ROOT CAUSE FIX (desktop parallax + spin conflict):
// The RAF loop wrote `el.style.transform = translate(x,y)` which overwrote the
// CSS `animation: rotate()` on the same element every frame — killing the spin,
// and the spin's rotate() overwrote the translate — killing the parallax.
//
// Fix: two-layer DOM structure.
//   • ShapeEl (outer div) → RAF writes translate(x,y)   — parallax only
//   • SpinEl  (inner div) → CSS animation rotate()      — spin only
// The two transforms live on separate elements and can NEVER conflict.
//
// PROPS (all optional):
//   mobileMode       'hide' | 'spin' | 'gyro'    default 'gyro'
//   desktopSpin      boolean                       default true
//   desktopParallax  boolean                       default true
//   gyroSensitivity  number (degrees)              default 18

import { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* ─── Touch detection ────────────────────────────────────────────────────── */
const IS_TOUCH =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

/* ─── Keyframe ───────────────────────────────────────────────────────────── */
const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* ─── Styled components ──────────────────────────────────────────────────── */

/**
 * OUTER wrapper — RAF writes translate(x, y) here for parallax.
 * position:fixed so scroll never repositions it.
 * will-change:transform reserves a GPU compositing layer permanently.
 */
const ShapeEl = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 3;
  opacity: ${({ $opacity }) => $opacity};
  will-change: transform;   /* GPU layer always ready — safe because it's already composited */
`;

/**
 * INNER wrapper — CSS animation rotate() lives here exclusively.
 * RAF never touches this element, so rotate is never clobbered.
 */
const SpinEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;

  ${({ $spin, $dur }) =>
    $spin &&
    css`
      animation: ${spinSlow} ${$dur} linear infinite;
      will-change: transform;
    `}
`;

/* ─── Shape data ─────────────────────────────────────────────────────────── */
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" overflow="visible">
        <defs>
          <filter id="ds0" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds0)">
          <polygon points="45,5 85,30 85,60 45,85 5,60 5,30"
            stroke="rgba(255,45,107,0.5)" strokeWidth="1.5" fill="rgba(255,45,107,0.06)" />
          <polygon points="45,15 75,32 75,58 45,75 15,58 15,32"
            stroke="rgba(255,45,107,0.2)" strokeWidth="1" fill="none" />
        </g>
      </svg>
    ),
    x: '4%', y: '18%', depth: 0.018, opacity: 0.85, spinDur: '14s',
  },
  {
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds1" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds1)">
          <circle cx="30" cy="30" r="28" stroke="rgba(0,232,157,0.4)" strokeWidth="1.5" fill="rgba(0,232,157,0.05)" />
          <circle cx="30" cy="30" r="20" stroke="rgba(0,232,157,0.2)" strokeWidth="1" fill="none" />
          <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
          <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    x: '88%', y: '20%', depth: 0.025, opacity: 0.9, spinDur: '10s',
  },
  {
    svg: (
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none" overflow="visible">
        <defs>
          <filter id="ds2" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds2)">
          <polygon points="40,5 75,65 5,65"
            stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
          <polygon points="40,18 64,60 16,60"
            stroke="rgba(59,130,246,0.2)" strokeWidth="0.8" fill="none" />
        </g>
      </svg>
    ),
    x: '82%', y: '62%', depth: 0.012, opacity: 0.8, spinDur: '18s',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" overflow="visible">
        <defs>
          <filter id="ds3" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds3)">
          <rect x="5" y="5" width="40" height="40" rx="4"
            stroke="rgba(255,107,74,0.4)" strokeWidth="1.5" fill="rgba(255,107,74,0.05)"
            transform="rotate(20 25 25)" />
          <rect x="12" y="12" width="26" height="26" rx="3"
            stroke="rgba(255,107,74,0.2)" strokeWidth="0.8" fill="none"
            transform="rotate(20 25 25)" />
        </g>
      </svg>
    ),
    x: '6%', y: '75%', depth: 0.02, opacity: 0.85, spinDur: '8s',
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds4" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#ds4)">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <line key={i}
              x1="50" y1="30"
              x2={50 + 44 * Math.cos(deg * Math.PI / 180)}
              y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="rgba(255,45,107,0.15)"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="50" cy="30" r="8"
            stroke="rgba(255,45,107,0.4)" strokeWidth="1.5" fill="rgba(255,45,107,0.08)" />
        </g>
      </svg>
    ),
    x: '48%', y: '85%', depth: 0.008, opacity: 0.6, spinDur: '20s',
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

const FloatingShapes = ({
  mobileMode       = 'gyro',  // 'hide' | 'spin' | 'gyro'
  desktopSpin      = true,    // spin shapes on desktop
  desktopParallax  = true,    // mouse parallax on desktop
  gyroSensitivity  = 18,      // tilt degrees for full travel (lower = more sensitive)
}) => {
  const elRefs     = useRef([]);
  const targetRef  = useRef({ x: 0, y: 0 });
  const currentRef = useRef(shapes.map(() => ({ x: 0, y: 0 })));
  const frameRef   = useRef(null);

  const hidden      = IS_TOUCH && mobileMode === 'hide';
  const spinOnly    = IS_TOUCH && mobileMode === 'spin';
  const gyroEnabled = IS_TOUCH && mobileMode === 'gyro';

  // Should SpinEl rotate?
  const shouldSpin = IS_TOUCH
    ? mobileMode === 'spin' || mobileMode === 'gyro'
    : desktopSpin;

  // Should RAF parallax loop run?
  const needsRAF = !hidden && !spinOnly && (gyroEnabled || (!IS_TOUCH && desktopParallax));

  /* ── Desktop mouse parallax ─────────────────────────────────────────── */
  useEffect(() => {
    if (IS_TOUCH || !desktopParallax) return;

    const onMouseMove = (e) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [desktopParallax]);

  /* ── Gyroscope (mobile gyro mode only) ──────────────────────────────── */
  useEffect(() => {
    if (!gyroEnabled) return;

    const gyroHandler = (e) => {
      const gx = Math.max(-1, Math.min(1, (e.gamma || 0) / gyroSensitivity));
      const gy = Math.max(-1, Math.min(1, ((e.beta  || 0) - 45) / gyroSensitivity));
      targetRef.current = { x: gx, y: gy };
    };

    const attachGyro = () =>
      window.addEventListener('deviceorientation', gyroHandler, { passive: true });

    // iOS 13+: must call requestPermission synchronously inside a user gesture.
    // .then() keeps execution in the synchronous gesture flush; async/await does not.
    const onTouchStart = () => {
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then((result) => { if (result === 'granted') attachGyro(); })
          .catch(() => { /* denied — silently stays as spin */ });
      } else {
        attachGyro(); // Android + non-iOS
      }
    };

    window.addEventListener('touchstart', onTouchStart, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('deviceorientation', gyroHandler);
    };
  }, [gyroEnabled, gyroSensitivity]);

  /* ── RAF spring loop ────────────────────────────────────────────────── */
  useEffect(() => {
    if (!needsRAF) return;

    const STIFFNESS   = IS_TOUCH ? 0.10 : 0.08;
    const DAMPING     = IS_TOUCH ? 0.80 : 0.82;
    const DEPTH_SCALE = IS_TOUCH ? 500  : 350;

    const velocity = shapes.map(() => ({ x: 0, y: 0 }));

    const tick = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      shapes.forEach((shape, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const targetX = tx * shape.depth * DEPTH_SCALE;
        const targetY = ty * shape.depth * DEPTH_SCALE;

        velocity[i].x += (targetX - currentRef.current[i].x) * STIFFNESS;
        velocity[i].y += (targetY - currentRef.current[i].y) * STIFFNESS;
        velocity[i].x *= DAMPING;
        velocity[i].y *= DAMPING;
        currentRef.current[i].x += velocity[i].x;
        currentRef.current[i].y += velocity[i].y;

        // Write guard: skip style mutation when shapes are at rest
        if (Math.abs(velocity[i].x) > 0.001 || Math.abs(velocity[i].y) > 0.001) {
          // Writes ONLY to ShapeEl (outer). SpinEl (inner) is untouched → spin preserved.
          el.style.transform = `translate(${currentRef.current[i].x.toFixed(2)}px, ${currentRef.current[i].y.toFixed(2)}px)`;
        }
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [needsRAF]);

  /* ── Render ─────────────────────────────────────────────────────────── */
  if (hidden) return null;

  return (
    <>
      {shapes.map((s, i) => (
        <ShapeEl
          key={i}
          ref={(el) => (elRefs.current[i] = el)}
          $opacity={s.opacity}
          style={{ left: s.x, top: s.y }}
        >
          <SpinEl $spin={shouldSpin} $dur={s.spinDur}>
            {s.svg}
          </SpinEl>
        </ShapeEl>
      ))}
    </>
  );
};

export default FloatingShapes;
```


### src\components\effects\ParallaxWrapper.jsx

```
// // components/effects/FloatingShapes.jsx

// import { motion } from "framer-motion";
// import styled from "styled-components";

// const FloatingShape = styled(motion.div)`
//   position: absolute;
//   will-change: transform;
//   filter: blur(0.5px);
// `;

// const FloatingShapes = () => {
//   return (
//     <>
//       <FloatingShape
//         animate={{
//           y: [0, -20, -10, -25, 0],
//           rotate: [0, 5, 10, 3, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </>
//   );
// };

// export default FloatingShapes;
```


### src\components\effects\SectionWave.jsx

```
// src/components/effects/SectionWave.jsx — NEW FILE
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
  100% { transform: translateX(0); }
`;

const WaveTop = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  pointer-events: none;

  svg {
    display: block;
    width: 200%;
    animation: ${drift} 10s ease-in-out infinite;
  }
`;

const SectionWave = ({ color = 'rgba(30,58,95,0.3)', flip = false }) => (
  <WaveTop style={{ transform: flip ? 'rotateX(180deg)' : 'none' }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" height="40">
      <path
        d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z"
        fill={color}
      />
    </svg>
  </WaveTop>
);

export default SectionWave;
```


### src\components\effects\WaterWaves.jsx

```
// src/components/effects/WaterWaves.jsx
//
// PERFORMANCE FIXES vs previous version:
// 1. Removed will-change:transform from Wave SVG elements — will-change only accelerates
//    CSS transform/opacity. These elements change via setAttribute('d') on the inner path,
//    so will-change:transform was promoting 3 GPU layers for zero benefit and wasting VRAM.
// 2. Added mobile RAF throttle — runs at 30fps on touch devices instead of 60fps.
//    Waves are subtle background elements; 30fps is imperceptible but halves GPU work.
// 3. Path point reduction kept from previous version (80 points, was 120).
// 4. 3 layers kept from previous version (was 5).

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const WaveWrap = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
`;

// will-change removed — SVG path 'd' changes are NOT accelerated by will-change:transform
const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  opacity: ${({ $opacity }) => $opacity};
`;

function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W   = 1440;
  const pts = IS_TOUCH ? 50 : 80; // fewer points on mobile — visually identical
  let d = `M0,${(baseline + amp * Math.sin(phase * Math.PI * 2)).toFixed(1)} `;
  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }
  d += `L${W},${height} L0,${height} Z`;
  return d;
}

const LAYERS = [
  { speed: 0.055, opacity: 0.13, fill: 'url(#wg1)', amp: 16, freq: 1.8, baseline: 32, influence: 0.6 },
  { speed: 0.045, opacity: 0.18, fill: 'url(#wg2)', amp: 12, freq: 2.4, baseline: 38, influence: 1.0 },
  { speed: 0.035, opacity: 0.22, fill: 'url(#wg3)', amp:  8, freq: 3.0, baseline: 44, influence: 1.4 },
];

const GRADIENTS = [
  ['#FF2D6B', '#0D0F14'],
  ['#0F2A4A', '#0D0F14'],
  ['#FF2D6B', '#0D0F14'],
];

// Mobile: throttle to ~30fps to halve GPU work on subtle background element
const FRAME_INTERVAL = IS_TOUCH ? 1000 / 30 : 0;

const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 });
  const frameRef  = useRef(null);
  const lastY     = useRef(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    // Desktop: mouse moves influence waves
    if (!IS_TOUCH) {
      const onMouseMove = (e) => {
        const nx = e.clientX / window.innerWidth;
        const ny = e.clientY / window.innerHeight;
        const prevY = lastY.current ?? ny;
        cursorRef.current = { x: nx, vy: (ny - prevY) * 60 };
        lastY.current = ny;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
    // Mobile: no touch input for waves — they just animate autonomously
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
      // Throttle on mobile
      if (IS_TOUCH && now - lastFrameTimeRef.current < FRAME_INTERVAL) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }
      lastFrameTimeRef.current = now;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const { x: cx, vy } = cursorRef.current;

      LAYERS.forEach((layer, i) => {
        const nudge = (cx - 0.5) * layer.influence * 0.3;
        phaseRefs.current[i] += dt * (layer.speed + Math.abs(nudge) * 0.06) + nudge * dt;

        const dynAmp = layer.amp + vy * layer.influence * 0.8;
        const d = buildWavePath(dynAmp, phaseRefs.current[i], layer.freq, layer.baseline);

        const el = pathRefs.current[i];
        if (el) el.setAttribute('d', d);
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <WaveWrap>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {GRADIENTS.map(([top, bot], i) => (
            <linearGradient key={i} id={`wg${i + 1}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={top} stopOpacity="0.55" />
              <stop offset="100%" stopColor={bot} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {LAYERS.map((layer, i) => (
        <Wave key={i} $opacity={layer.opacity} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            ref={(el) => (pathRefs.current[i] = el)}
            d={buildWavePath(layer.amp, 0, layer.freq, layer.baseline)}
            fill={layer.fill}
          />
        </Wave>
      ))}
    </WaveWrap>
  );
};

export default WaterWaves;
```


### src\components\home\About.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import {  aboutTraits } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionWave from '../effects/SectionWave';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Traits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// FlipCardWrapper height fix on mobile:
const FlipCardWrapper = styled.div`
  perspective: 800px;
  height: 180px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 150px;
  }
`;
const TraitCard = styled(motion.div)`
  flex: 1;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const Emoji = styled.div`font-size: 2rem; margin-bottom: 0.5rem;`;
const TraitLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;
const TraitDesc = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.25rem;
`;

// const FlipCardWrapper = styled.div`
//   flex: 1;
//   perspective: 800px;
//   height: 180px;
//   cursor: pointer;
// `;

const FlipCardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${FlipCardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  
`;

// Extra facts to show on card back:
const traitBackContent = {
  Creative: "Designing experiences that feel intuitive and alive.",
  Strategic: "Thinking in systems before writing code.",
  Builder: "Learning fastest by building real products.",
};

const About = ({personalInfo}) => {
const { ref, inView } = useScrollReveal();
return (<Section  ref={ref}>
{/* <SectionWave /> */}
    <SectionHeader number="01" title="ABOUT ME" />
    <Bio
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {personalInfo.bio}
    </Bio>
    <Traits>
      {aboutTraits.map((t, i) => (
  <FlipCardWrapper key={t.label}>
    <FlipCardInner>
      <CardFace>
        <Emoji>{t.emoji}</Emoji>
        <TraitLabel>{t.label}</TraitLabel>
        <TraitDesc>{t.description}</TraitDesc>
      </CardFace>
      <CardBack>
        <TraitDesc style={{color:"#fff"}}>{traitBackContent[t.label]}</TraitDesc>
      </CardBack>
    </FlipCardInner>
  </FlipCardWrapper>
))}
    </Traits>
  </Section>
)};

export default About;
```


### src\components\home\Counters.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
// import { counters } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  ${media.tablet} { grid-template-columns: repeat(2, 1fr); }
  ${media.mobile} { grid-template-columns: 1fr; }
`;

const CounterCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Value = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Label = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
`;

const Counter = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target);
  
  return (
    <CounterCard ref={ref} >
      <Value>{count}{suffix}</Value>
      <Label>{label}</Label>
    </CounterCard>
  );
};
// animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}

const Counters = ({counters}) => {
  const { ref, inView } = useScrollReveal();
  return (<Section ref={ref}>
    <Grid>
      {counters.map((c) => (
        <Counter key={c.label} target={c.value} suffix={c.suffix} label={c.label} />
      ))}
    </Grid>
  </Section>
)};

export default Counters;
```


### src\components\home\FeaturedProjects.jsx

```
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../cards/ProjectCard';
import { caseStudyAPI } from '../../services/apis';
import { media } from '../../../media';
import SectionWave from '../effects/SectionWave';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  border: 1px solid rgba(0, 232, 157, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 232, 157, 0.08);
    border-color: rgba(0, 232, 157, 0.6);
    gap: 0.75rem;
  }
`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const { ref, inView } = useScrollReveal();
  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = async () => {
    try {
      const res = await caseStudyAPI.getFeatured();
      const formatted = res.data.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.summary,
        image: item.thumbnail || null,
        tags: item.tech_stack ? item.tech_stack.split(",") : [],
        link: `/case-studies/${item.slug}`
      }));
      setProjects(formatted);
    } catch (err) {
      console.error("Failed to fetch featured projects:", err);
    }
  };

  if (!projects.length) return null;

  return (
    <Section  ref={ref}>
    {/* <SectionWave /> */}
      <SectionHeader number="04" title="FEATURED WORK" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
         animate={inView ? "show" : "hidden"}
        viewport={{ once: true }}
      >
        <Grid>
          {projects.map(p => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </Grid>
      </motion.div>

      <Footer>
        <ViewAllLink to="/case-studies">View All Work →</ViewAllLink>
      </Footer>
    </Section>
  );
};

export default FeaturedProjects;
```


### src\components\home\Hero.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
// import { personalInfo } from '../../data/siteData';
import MagneticButton from '../ui/MagneticButton';
import { media } from '../../../media';
import photo from '../../assets/myphoto_cutout2.png';
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem clamp(1.25rem, 5vw, 4rem) 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;  /* photo on top on mobile */
    text-align: center;
    gap: 2rem;
    padding-top: 5rem;
  }
`;
const Left = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.heroName};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
   ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const RoleText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.heroRole};
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 500;
  display: block;
  margin: 1.5rem 0 2rem;
  min-height: 2rem;

  &::after {
    content: '▌';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;


const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  ${media.tablet} {
    justify-content: center;
    gap: 0.65rem;
  }

  ${media.mobile} {
    /* Stack vertically on very small screens, full-width buttons */
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
`;
const Right = styled.div`
  flex-shrink: 0;
`;

// const PhotoWrapper = styled(motion.div)`
//   position: relative;
//   width: clamp(280px, 30vw, 400px);
//   height: clamp(350px, 38vw, 500px);
// `;

const GlowRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3px;
  background: ${({ theme }) => theme.colors.gradientRing};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ring-hue 4s linear infinite;

  @keyframes ring-hue {
    to { filter: hue-rotate(360deg); }
  }
`;

const PhotoCutout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: brightness(1.05) contrast(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.bgPrimary} 0%, transparent 100%);
    pointer-events: none;
  }
`;

const ScrollArrow = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textTertiary};

  svg {
    width: 24px;
    height: 24px;
    animation: bounce-down 2s ease-in-out infinite;
  }

  @keyframes bounce-down {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50% { transform: translateY(10px); opacity: 1; }
  }
`;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const PhotoWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 28vw, 380px);
  height: clamp(340px, 36vw, 480px);

  @media (max-width: 768px) {
    width: clamp(180px, 60vw, 280px);
    height: clamp(220px, 75vw, 340px);
  }

  /* Comic cutout effect */
  filter:
    drop-shadow(-4px 8px 0px rgba(255,45,107,0.4))
    drop-shadow(4px -4px 0px rgba(59,130,246,0.3))
    drop-shadow(0 20px 40px rgba(0,0,0,0.6));
`;

// PhotoCutout stays the same but add:
const InkFrame = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  /* Comic panel corner marks */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    border-style: solid;
    opacity: 0.6;
  }
  &::before {
    top: 8px; left: 8px;
    border-width: 2px 0 0 2px;
    border-radius: 4px 0 0 0;
  }
  &::after {
    bottom: 8px; right: 8px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 4px 0;
  }
`;

// Add link to your resume PDF (put resume.pdf in /public folder)
const ResumeBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  border: 1px solid rgba(255, 45, 107, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  & span { position: relative; z-index: 1; }

  &:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(255, 45, 107, 0.3), 0 0 60px rgba(59, 130, 246, 0.15);
    &::before { opacity: 1; }
  }

  /* On touch: show gradient immediately since there's no hover */
  @media (hover: none) {
    border-color: rgba(255, 45, 107, 0.5);
    &::before { opacity: 0.15; }
    &:active {
      border-color: transparent;
      &::before { opacity: 1; }
    }
  }

  ${media.mobile} {
    padding: 0.8rem 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;
const Hero = ({personalInfo}) => {
  const role = useTypewriter(personalInfo.roles);

  return (
    <Section>
      <Left>
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <Name variants={fadeUp}>{personalInfo.name}</Name>
          <Name variants={fadeUp}>{personalInfo.lastName}</Name>
          <motion.div variants={fadeUp}>
            <RoleText>{role}</RoleText>
          </motion.div>
          <motion.div variants={fadeUp}>
         <Buttons>
            <MagneticButton as="a" href="/case-studies" style={{ whiteSpace: 'nowrap' }}>
              View Work →
            </MagneticButton>
            <ResumeBtn
              href="/resume.pdf"
              download="Darshan_Agrawal_Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>↓ Resume</span>
            </ResumeBtn>
            <MagneticButton variant="outline" as="a" href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Contact
            </MagneticButton>
          </Buttons>
          </motion.div>
        </motion.div>
      </Left>
      <Right>
        <PhotoWrapper
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* <GlowRing /> */}
          <InkFrame />
          <PhotoCutout>
            {/* Replace with your transparent PNG */}
            <img src={photo} alt="Darshan Agrawal" />
          </PhotoCutout>
        </PhotoWrapper>
      </Right>
      <ScrollArrow>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </ScrollArrow>
    </Section>
  );
};

export default Hero;
```


### src\components\home\SkillsMarquee.jsx

```
import styled, { keyframes } from 'styled-components';
// import { skills } from '../../data/siteData';

import Tilt from 'react-parallax-tilt';
import * as SiIcons from "react-icons/si";
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
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: default;

  svg {
    font-size: 1rem;
    opacity: 0.9;
  }
&:hover svg {
  transform: scale(1.1);
}
  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
  }
`;

const SkillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  flex-shrink: 0;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const SkillsMarquee = ({skills}) => {
  const doubled = [...skills, ...skills];
  return (
    <Wrapper>
      <Track>
        {doubled.map((skill, i) => {
  const Icon = SiIcons[skill.icon];

  return (
    <Tilt
      key={`${skill.name}-${i}`}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.08}
      glareColor="#FF2D6B"
      scale={1.05}
      transitionSpeed={400}
    >
      <Pill>
        <SkillDot/>
        {Icon && <Icon size={16} />}
        {skill.name}
      </Pill>
    </Tilt>
  );
})}
      </Track>
    </Wrapper>
  );
};

export default SkillsMarquee;
```


### src\components\home\Timeline.jsx

```
// src/components/sections/Timeline.jsx
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
// import { experience } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Animated line draw ─────────────────────────────── */
const linePulse = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(74,222,128,0.6),  0 0 20px rgba(74,222,128,0.2); }
  50%       { box-shadow: 0 0 12px rgba(74,222,128,0.9), 0 0 36px rgba(74,222,128,0.4); }
`;

const dotPop = keyframes`
  0%   { transform: translateX(-50%) scale(0); opacity: 0; }
  60%  { transform: translateX(-50%) scale(1.3); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
`;

/* ── Layout ─────────────────────────────────────────── */
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.section} 1.25rem;
  }
`;

const ListOuter = styled.div`
  position: relative;
`;

/* Static background track line */
const TrackLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.colors.borderDefault};
  pointer-events: none;

  /* Desktop: centred */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    transform: none;
  }
`;

/* Animated green progress line — height driven by scroll */
const ProgressLine = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    #4ade80 0%,
    #22c55e 60%,
    rgba(74,222,128,0.3) 100%
  );
  animation: ${linePulse} 2s ease-in-out infinite;
  pointer-events: none;
  transform-origin: top center;
  border-radius: 2px;

  /* Desktop: centred */
  left: 50%;
  transform-origin: top left;
  margin-left: -1px;

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    margin-left: 0;
  }
`;

/* Glowing tip of the progress line */
const LineTip = styled(motion.div)`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 12px rgba(74,222,128,0.9), 0 0 28px rgba(74,222,128,0.5);
`;

/* ── Timeline items ─────────────────────────────────── */
const List = styled.div`
  position: relative;
`;

const Item = styled(motion.div)`
  display: grid;
  position: relative;
  padding: 2rem 0;

  /* Desktop: two-column alternating */
  grid-template-columns: 1fr 2rem 1fr;
  align-items: start;

  /* Mobile: single column with left offset */
  ${media.tablet} {
    grid-template-columns: 1fr;
    padding-left: 3rem;
    padding-right: 0;
  }
`;

/* Puts card in left or right column */
const CardSlot = styled.div`
  /* Even items: card on LEFT, spacer on RIGHT */
  /* Odd items:  spacer on LEFT, card on RIGHT */
  grid-column: ${({ $side }) => $side === 'left' ? '1' : '3'};
  grid-row: 1;

  ${media.tablet} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Dot = styled(motion.div)`
  position: absolute;
  top: 2.75rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentCoral};
  box-shadow: ${({ theme }) => theme.colors.shadowGlowPink};
  z-index: 2;

  /* Desktop: centred on line */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: on left-gutter line */
  ${media.tablet} {
    left: 12px;
    transform: none;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  width: 100%;
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin: 0 0 0.2rem;
`;

const Company = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 600;
`;

const Period = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0.25rem 0 0.75rem;
`;

const PanelCorner = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-style: solid;
  opacity: 0.5;

  ${({ $pos }) => $pos === 'tl' && `
    top: 6px; left: 6px;
    border-width: 2px 0 0 2px;
    border-radius: 3px 0 0 0;
  `}
  ${({ $pos }) => $pos === 'br' && `
    bottom: 6px; right: 6px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 3px 0;
  `}
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

/* ── Component ──────────────────────────────────────── */
const Timeline = ({experience}) => {
  const sectionRef = useRef(null);
  const { ref: revealRef, inView } = useScrollReveal({ once: false, threshold: 0.05 });

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Height of the green line: 0% → 100% of the container
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <Section ref={sectionRef}>
      <SectionHeader number="03" title="EXPERIENCE" />

      <ListOuter>
        {/* Static grey track */}
        <TrackLine />

        {/* Animated green progress line */}
        <ProgressLine style={{ height: lineHeight }}>
          <LineTip />
        </ProgressLine>

        <List ref={revealRef}>
          {experience.map((exp, i) => {
            // Desktop: even → card left, odd → card right
            // Mobile: always left (CSS handles it)
            const side = i % 2 === 0 ? 'left' : 'right';

            return (
              <Item
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: side === 'left' ? -48 : 48,
                  filter: 'blur(4px)',
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : {
                        opacity: 0,
                        x: side === 'left' ? -48 : 48,
                        filter: 'blur(4px)',
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.34, 1.2, 0.64, 1],
                }}
              >
                <Dot
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.1 + 0.2 }}
                />

                <CardSlot $side={side}>
                  <Card>
                    <PanelCorner $pos="tl" />
                    <PanelCorner $pos="br" />
                    <Role>{exp.role}</Role>
                    <Company>{exp.company}</Company> · {exp.location}
                    <Period>{exp.period}</Period>
                    <Desc>{exp.description}</Desc>
                    <Tags>
                      {exp.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </Tags>
                  </Card>
                </CardSlot>
              </Item>
            );
          })}
        </List>
      </ListOuter>
    </Section>
  );
};

export default Timeline;
```


### src\components\layout\Footer.jsx

```
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "../../data/siteData";

const NAV = [
  { label: "Home",          to: "/" },
  { label: "Case Studies",  to: "/case-studies" },
  { label: "Blog",          to: "/blog" },
  { label: "Contact",       to: "/contact" },
];

const SOCIALS = [
  { icon: Github,   href: `${personalInfo.socials.github}`,       label: "GitHub" },
  { icon: Linkedin, href: `${personalInfo.socials.linkedin}`,   label: "LinkedIn" },
  { icon: Twitter,  href: `${personalInfo.socials.twitter}`,       label: "Twitter" },
  { icon: Mail,     href: `mailto:${personalInfo.email}`,           label: "Email" },
];

const Footer = () => (
  <FooterWrap>
    {/* Gradient divider line */}
    <TopRule />

    <Inner>
      {/* Brand */}
      <Brand>
        <BrandName>{personalInfo.name} {personalInfo.lastName}</BrandName>
        <BrandSub>Full Stack Engineer ¦ 4 Years Building the Future</BrandSub>
        <AvailBadge>
          <PulseDot />
          Open to opportunities
        </AvailBadge>
      </Brand>

      {/* Nav */}
      <NavBlock>
        <BlockLabel>Pages</BlockLabel>
        <NavList>
          {NAV.map(({ label, to }) => (
            <NavItem key={to}>
              <FooterLink to={to}>{label}</FooterLink>
            </NavItem>
          ))}
        </NavList>
      </NavBlock>

      {/* Socials */}
      <SocialsBlock>
        <BlockLabel>Elsewhere</BlockLabel>
        <SocialRow>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <SocialBtn
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </SocialBtn>
          ))}
        </SocialRow>
        <EmailText href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </EmailText>
      </SocialsBlock>
    </Inner>

    {/* Bottom strip */}
    <BottomStrip>
      <Copyright>© {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. Built with React + Flask.</Copyright>
      <MadeWith>
        Made with <Heart>♥</Heart> and too much coffee
      </MadeWith>
    </BottomStrip>
  </FooterWrap>
);

export default Footer;

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */

const FooterWrap = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  position: relative;
`;

const TopRule = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #FF2D6B 30%, #3B82F6 70%, transparent 100%);
  opacity: 0.4;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 3rem;
  padding: clamp(3rem, 6vh, 4.5rem) clamp(1.5rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* Brand block */
const Brand = styled.div``;

const BrandName = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
`;

const BrandSub = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 1.5;
  margin-bottom: 1.1rem;
  max-width: 280px;
`;

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.4); }
`;

const AvailBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  font-size: 0.72rem; font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0,232,157,0.06);
  border: 1px solid rgba(0,232,157,0.2);
  border-radius: 999px;
`;

const PulseDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentGreen};
  animation: ${pulseDot} 2s ease-in-out infinite;
`;

/* Nav block */
const BlockLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

const NavBlock = styled.div``;
const NavList = styled.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem;`;
const NavItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { width: 100%; }
  }
`;

/* Socials block */
const SocialsBlock = styled.div``;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SocialBtn = styled.a`
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,45,107,0.1);
    border-color: rgba(255,45,107,0.3);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255,45,107,0.2);
  }
`;

const EmailText = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-decoration: none;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

/* Bottom strip */
const BottomStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.25rem clamp(1.5rem, 6vw, 5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const Copyright = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const MadeWith = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  display: flex; align-items: center; gap: 0.35rem;
`;

const heartBeat = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.25)}`;
const Heart = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  animation: ${heartBeat} 1.6s ease-in-out infinite;
`;
```


### src\components\layout\Navbar.jsx

```
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/siteData";
import { useAuth } from "../../contexts/AuthContext";
import { media } from "../../../media";
import ThemeToggle from "../ui/ThemeToggle";

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;

  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.bgGlass : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.borderDefault : 'transparent'};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const DesktopLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) { display: none; }
`;

const NavAnchor = styled(Link)`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};
    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { transform: scaleX(1); transform-origin: left; }
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  &:hover { background: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 201;
  ${media.tablet} { display: flex; }
`;

const Line = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'};
  }
  &:nth-child(2) {
    opacity: ${({ $open }) => $open ? '0' : '1'};
    transform: ${({ $open }) => $open ? 'scaleX(0)' : 'none'};
  }
  &:nth-child(3) {
    transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'};
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 198;
  background: rgba(0, 0, 0, 0.5);
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;
  gap: 0.25rem;
  z-index: 200;
  backdrop-filter: blur(20px);
  overflow-y: auto;
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? 'rgba(255,45,107,0.2)' : 'transparent'};
  background: ${({ $active }) => $active ? 'rgba(255,45,107,0.06)' : 'transparent'};
  transition: all 0.2s ease;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
  }
`;

const MobileDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 0.5rem 0;
`;

const linksContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const linkVariants = {
  hidden: { x: 20, opacity: 0 },
  show:   { x: 0,  opacity: 1, transition: { duration: 0.28 } }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Lock scroll when open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* FIXED: closes menu and scrolls to top if already on that page */
  const handleMobileLinkClick = (path) => {
    setMobileOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Nav $scrolled={scrolled}>
      <Logo to="/" onClick={() => setMobileOpen(false)}>DARSHAN.DEV</Logo>

      <DesktopLinks variants={linksContainerVariants} initial="hidden" animate="show">
        {navLinks.map((link) => (
          <NavAnchor key={link.path} to={link.path} $active={location.pathname === link.path}>
            {link.label}
          </NavAnchor>
        ))}
        {isAdmin && (
          <>
            <NavAnchor to="/admin" $active={location.pathname === "/admin"}>Dashboard</NavAnchor>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
        <ThemeToggle />
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(p => !p)} aria-label="Toggle menu">
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div variants={linksContainerVariants} initial="hidden" animate="show">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    {/* FIXED: onClick fires even on active page */}
                    <MobileLink
                      to={link.path}
                      $active={location.pathname === link.path}
                      onClick={() => handleMobileLinkClick(link.path)}
                    >
                      {link.label}
                    </MobileLink>
                  </motion.div>
                ))}

                {isAdmin && (
                  <>
                    <MobileDivider />
                    <motion.div variants={linkVariants}>
                      <MobileLink
                        to="/admin"
                        $active={location.pathname === "/admin"}
                        onClick={() => handleMobileLinkClick('/admin')}
                      >
                        Dashboard
                      </MobileLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <LogoutButton
                        style={{ marginLeft: '1rem', marginTop: '0.5rem' }}
                        onClick={() => { logout(); setMobileOpen(false); }}
                      >
                        Logout
                      </LogoutButton>
                    </motion.div>
                  </>
                )}

                <MobileDivider />
                <motion.div variants={linkVariants} style={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
```


### src\components\layout\NoiseOverlay.jsx

```
import styled from 'styled-components';

const Overlay = styled.div`
  &::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 128px 128px;
  }
`;

const NoiseOverlay = () => <Overlay />;
export default NoiseOverlay;
```


### src\components\layout\PageTransition.jsx

```
// src/components/layout/PageTransition.jsx
//
// PERF FIX: Exit cut to 150ms and App.jsx should use mode="wait" not mode="sync".
// mode="sync" renders both old + new page simultaneously = double render cost on low-end devices.
// mode="wait" exits old page fully before mounting new one — one page in DOM at a time.

import { motion } from 'framer-motion';

const fadeUpVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={fadeUpVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
```


### src\components\layout\ScrollProgress.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  transform-origin: 0%;
  z-index: ${({ theme }) => theme.zIndex.scrollbar};
`;

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return <Bar style={{ scaleX: progress }} />;
};

export default ScrollProgress;
```


### src\components\layout\ScrollToTop.jsx

```
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```


### src\components\ui\AdminCardSkeleton.jsx

```
// src/components/ui/AdminCardSkeleton.jsx
import styled, { keyframes,css  } from "styled-components";

/**
 * Props
 * ─────
 * count   number   how many skeleton cards to render   default 6
 */
const AdminCardSkeleton = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i}>
        {/* shimmer top bar */}
        <SkeletonBar style={{ width: "35%", height: "10px", marginBottom: "1rem" }} />
        {/* title */}
        <SkeletonBar style={{ width: "85%", height: "14px", marginBottom: "6px" }} />
        <SkeletonBar style={{ width: "60%", height: "14px", marginBottom: "1.1rem" }} />
        {/* chip */}
        <SkeletonChip />
        {/* body lines */}
        <SkeletonBar style={{ width: "100%", height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "90%",  height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "70%",  height: "10px", marginBottom: "1.25rem" }} />
        {/* status row */}
        <SkeletonStatusRow>
          <SkeletonDot />
          <SkeletonBar style={{ width: "50px", height: "9px" }} />
        </SkeletonStatusRow>
      </SkeletonCard>
    ))}
  </>
);

export default AdminCardSkeleton;

/* ── styles ── */

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerBg = ({ theme }) => css`
  background: linear-gradient(
    90deg,
    ${theme.colors.bgTertiary}        0%,
    ${theme.colors.borderHover}       40%,
    ${theme.colors.bgTertiary}        80%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.6s linear infinite;
`;

const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const SkeletonBar = styled.div`
  border-radius: 6px;
  ${shimmerBg}
`;

const SkeletonChip = styled.div`
  width: 68px;
  height: 18px;
  border-radius: 999px;
  margin-bottom: 0.65rem;
  ${shimmerBg}
`;

const SkeletonStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const SkeletonDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerBg}
`;
```


### src\components\ui\CustomCursor.jsx

```
// src/components/ui/CustomCursor.jsx
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.85); }
`;

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentCoral};
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.2s ease;
  will-change: transform;

  &.hovering {
    width: 32px;
    height: 32px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accentCoral};
    mix-blend-mode: normal;
    animation: ${pulse} 1.2s ease-in-out infinite;
  }

  &.clicking {
    width: 14px; height: 14px;
    background: ${({ theme }) => theme.colors.accentCoral};
  }
`;

const Ring = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 45, 107, 0.35);
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition: transform 0.08s linear;
  will-change: transform;
  transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease;

  &.hovering {
    opacity: 0;
  }
`;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const INTERACTIVES = 'a, button, [role="button"], input, textarea, select, label[for], .magnetic-btn';

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Ring lags slightly behind dot for fluid feel
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animateRing);
    };
    raf.current = requestAnimationFrame(animateRing);

    const enterInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(true);
    };
    const leaveInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(false);
    };
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', enterInteractive);
    document.addEventListener('mouseout', leaveInteractive);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enterInteractive);
      document.removeEventListener('mouseout', leaveInteractive);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
      document.body.style.cursor = 'auto';
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <Dot ref={dotRef} className={`${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`} />
      <Ring ref={ringRef} className={hovering ? 'hovering' : ''} />
    </>
  );
};

export default CustomCursor;
```


### src\components\ui\EmptyState.jsx

```
// src/components/ui/EmptyState.jsx
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/**
 * Props
 * ─────
 * icon     string   emoji or character shown large   default "📭"
 * title    string   bold heading                     default "Nothing here yet"
 * message  string   subtext                          default ""
 * action   node     optional CTA button/element      default null
 */
const EmptyState = ({
  icon    = "📭",
  title   = "Nothing here yet",
  message = "",
  action  = null,
}) => (
  <Wrap
    as={motion.div}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <IconRing>
      <IconPulse />
      <IconEl>{icon}</IconEl>
    </IconRing>
    <Title>{title}</Title>
    {message && <Message>{message}</Message>}
    {action && <ActionWrap>{action}</ActionWrap>}
  </Wrap>
);

export default EmptyState;

/* ── styles ── */

const floatAnim = keyframes`
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(0.92); opacity: 0.5; }
  70%  { transform: scale(1.12); opacity: 0; }
  100% { transform: scale(0.92); opacity: 0; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  gap: 0.75rem;
`;

const IconRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const IconPulse = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.accentPink};
  opacity: 0;
  animation: ${pulseRing} 2.4s ease-out infinite;
`;

const IconEl = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  animation: ${floatAnim} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px ${({ theme }) => theme.colors.accentPinkGlow});
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  max-width: 28ch;
  line-height: 1.6;
  margin: 0;
`;

const ActionWrap = styled.div`
  margin-top: 0.75rem;
`;
```


### src\components\ui\FilterTab.jsx

```
import styled from 'styled-components';

const Tab = styled.button`
  padding: 0.5rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ $active, theme }) => $active ? theme.colors.textWhite : theme.colors.textTertiary};
  background: ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : 'transparent'};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : theme.colors.borderDefault};
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
```


### src\components\ui\FloatingInput.jsx

```
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

  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
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

  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
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
```


### src\components\ui\LoadingScreen.jsx

```
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

/*
  Comic-book style loading screen.
  Shows on first app load AND whenever ProtectedRoute is checking auth.
  Auto-dismisses once `done` prop is true, or after 2.2s by default.
*/
const LoadingScreen = ({ done = false, minMs = 1800 }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /* Animate progress bar from 0 → 100 over minMs */
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / minMs) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minMs]);

  /* If parent signals done early, close */
  useEffect(() => {
    if (done) setVisible(false);
  }, [done]);

  return (
    <AnimatePresence>
      {visible && (
        <Overlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {/* Comic panel grid lines */}
          <PanelGrid />

          <Inner>
            {/* Glitching logo / name */}
            <LogoWrap>
              <LogoText>DA</LogoText>
              <LogoGlitch aria-hidden>DA</LogoGlitch>
              <LogoGlitch2 aria-hidden>DA</LogoGlitch2>
            </LogoWrap>

            <TagLine>Initialising Panel One…</TagLine>

            {/* Progress bar */}
            <BarTrack>
              <BarFill style={{ width: `${progress}%` }} />
              <BarGlow style={{ left: `${progress}%` }} />
            </BarTrack>

            <ProgressLabel>{Math.round(progress)}%</ProgressLabel>

            {/* Scanning dots */}
            <Dots>
              {[0, 1, 2, 3, 4].map((i) => (
                <Dot key={i} $i={i} />
              ))}
            </Dots>
          </Inner>

          {/* Corner panel marks — comic aesthetic */}
          <Corner $pos="tl" />
          <Corner $pos="tr" />
          <Corner $pos="bl" />
          <Corner $pos="br" />
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

/* ─── Keyframes ──────────────────────────────────────── */

const scanLine = keyframes`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const glitch1 = keyframes`
  0%, 90%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  91%  { clip-path: inset(15% 0 60% 0); transform: translate(-4px, 2px); opacity: 0.7; }
  93%  { clip-path: inset(70% 0 10% 0); transform: translate(4px, -2px); opacity: 0.7; }
  95%  { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 1px); opacity: 0.6; }
`;

const glitch2 = keyframes`
  0%, 88%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  89%  { clip-path: inset(20% 0 55% 0); transform: translate(5px, -3px); opacity: 0.6; }
  91%  { clip-path: inset(65% 0 15% 0); transform: translate(-5px, 3px); opacity: 0.6; }
`;

const dotBlink = keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%       { opacity: 1;    transform: scale(1.2); }
`;

const barShimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200%  0; }
`;

/* ─── Styles ─────────────────────────────────────────── */

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Scan line effect */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 45, 107, 0.6) 40%,
      rgba(59, 130, 246, 0.6) 60%,
      transparent 100%
    );
    animation: ${scanLine} 2.8s linear infinite;
    pointer-events: none;
  }
`;

/* Faint comic grid background */
const PanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
`;

/* Glitch logo */
const LogoWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoBase = `
  position: absolute;
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 1;
  user-select: none;
`;

const LogoText = styled.span`
  ${logoBase}
  background: linear-gradient(135deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: serif;
`;

const LogoGlitch = styled.span`
  ${logoBase}
  color: #FF2D6B;
  animation: ${glitch1} 3.5s infinite;
`;

const LogoGlitch2 = styled.span`
  ${logoBase}
  color: #3B82F6;
  animation: ${glitch2} 3.5s infinite;
`;

const TagLine = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* Progress bar */
const BarTrack = styled.div`
  width: 220px;
  height: 3px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  position: relative;
  overflow: visible;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%);
  background-size: 200% 100%;
  animation: ${barShimmer} 1.4s linear infinite;
  transition: width 0.05s linear;
`;

const BarGlow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF2D6B;
  box-shadow: 0 0 12px 4px rgba(255, 45, 107, 0.6);
  transition: left 0.05s linear;
`;

const ProgressLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-variant-numeric: tabular-nums;
`;

/* Scanning dots */
const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ $i }) =>
    $i % 2 === 0 ? "#FF2D6B" : "#3B82F6"};
  animation: ${dotBlink} 1.1s ease-in-out infinite;
  animation-delay: ${({ $i }) => $i * 0.18}s;
`;

/* Comic panel corner marks */
const Corner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(255, 45, 107, 0.35);
  border-style: solid;

  ${({ $pos }) => $pos === "tl" && "top:20px;left:20px;border-width:2px 0 0 2px;border-radius:3px 0 0 0;"}
  ${({ $pos }) => $pos === "tr" && "top:20px;right:20px;border-width:2px 2px 0 0;border-radius:0 3px 0 0;"}
  ${({ $pos }) => $pos === "bl" && "bottom:20px;left:20px;border-width:0 0 2px 2px;border-radius:0 0 0 3px;"}
  ${({ $pos }) => $pos === "br" && "bottom:20px;right:20px;border-width:0 2px 2px 0;border-radius:0 0 3px 0;"}
`;
```


### src\components\ui\MagneticButton.jsx

```
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../../media';
const Btn = styled(motion.button)`
  position: relative;
  padding: ${({ $size }) => $size === 'sm' ? '0.4rem 0.9rem' : '0.875rem 2rem'};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  overflow: hidden;
  border: none;

  transition: ${({ theme }) => theme.transitions.default};

  /* Background variants */
  background: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outline': return 'transparent';
      case 'ghost':   return 'transparent';
      case 'nav':     return theme.colors.bgGlassLight;
      case 'edit':    return `linear-gradient(90deg, ${theme.colors.accentBlue}, ${theme.colors.accentNavyLight})`;
      case 'delete':  return `linear-gradient(90deg, ${theme.colors.accentCrimson}, ${theme.colors.accentCoral})`;
      default:        return theme.colors.gradientPinkBlue;
    }
  }};

  border: ${({ $variant, theme }) => {
    if ($variant === 'outline') return `1px solid ${theme.colors.textWhite}`;
    if ($variant === 'ghost') return '1px solid transparent';
    return 'none';
  }};

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.bgGlassLight} 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow: ${({ $variant, theme }) => {
      if ($variant === 'delete') return theme.colors.shadowGlowPink;
      if ($variant === 'outline' || $variant === 'ghost') return theme.colors.shadowGlowPink;
      return theme.colors.shadowGlowPink;
    }};

    &::after {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    `
      &:hover {
        background: ${theme.colors.bgGlassLight};
        border-color: ${theme.colors.borderAccent};
      }
    `}
`;
const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  transform: scale(0);
  animation: ripple-expand 0.6s ease-out forwards;
  pointer-events: none;

  @keyframes ripple-expand {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const MagneticButton = ({ children, variant = 'default', onClick, ...props }) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };

  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    setRipples((prev) => [...prev, { x, y, size, id: Date.now() }]);
    setTimeout(() => setRipples((prev) => prev.slice(1)), 600);
    onClick && onClick(e);
  };

  return (
    <Btn
      ref={ref}
      $variant={variant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <Ripple key={r.id} style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
      ))}
    </Btn>
  );
};

export default MagneticButton;
```


### src\components\ui\NotFound.jsx

```
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Page Not Found</Text>
    </Wrapper>
  );
};

export default NotFound;
```


### src\components\ui\PageHero.jsx

```
import styled from "styled-components";
import { motion } from "framer-motion";

const PageHero = ({ number = "01", eyebrow = "", title = "", titleAccent = "", subtitle = "", badge = "", children }) => (
  <Wrap>
    <GlowOrb />
    <Inner initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <TopRow>
        <NumberTag>{number}</NumberTag>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </TopRow>
      <Heading>{title} {titleAccent && <AccentWord>{titleAccent}</AccentWord>}</Heading>
      {subtitle && <Sub>{subtitle}</Sub>}
      {(badge || children) && (
        <BottomRow>
          {badge && <Badge>{badge}</Badge>}
          {children}
        </BottomRow>
      )}
    </Inner>
    <BottomRule />
  </Wrap>
);

export default PageHero;

const Wrap = styled.section`
  padding: clamp(1rem, 5vh, 2rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vh, 4rem);
  position: relative; overflow: hidden;
`;
const GlowOrb = styled.div`
  position: absolute; top: -60px; right: -80px; width: 480px; height: 380px;
  background: radial-gradient(ellipse at top right, rgba(255,45,107,0.07) 0%, transparent 70%);
  pointer-events: none;
`;
const Inner = styled(motion.div)`position: relative; z-index: 1; max-width: 720px;`;
const TopRow = styled.div`display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.9rem;`;
const NumberTag = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Eyebrow = styled.p`font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textTertiary};`;
const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 7vw, 4rem); font-weight: 800; line-height: 1.0;
  letter-spacing: -0.04em; color: ${({ theme }) => theme.colors.textPrimary}; margin-bottom: 1.1rem;
`;
const AccentWord = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
`;
const Sub = styled.p`font-size: clamp(0.95rem, 2vw, 1.1rem); color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; max-width: 560px; margin-bottom: 1.75rem;`;
const BottomRow = styled.div`display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;`;
const Badge = styled.span`
  display: inline-flex; align-items: center; padding: 0.3rem 0.85rem; border-radius: 999px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
  background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); color: ${({ theme }) => theme.colors.accentBlue};
`;
const BottomRule = styled.div`
  position: absolute; bottom: 0; left: clamp(1.5rem, 6vw, 5rem); right: clamp(1.5rem, 6vw, 5rem);
  height: 1px; background: ${({ theme }) => theme.colors.borderDefault};
`;
```


### src\components\ui\PageLoader.jsx

```
// src/components/ui/PageLoader.jsx
// Full-screen loading state for pages that are fetching API data.
// Uses 100vh so it fills the entire viewport, not just the content area.
// Used by: Blog, CaseStudies, Admin dashboard

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 1.5rem;
`;

const Ring = styled.div`
  position: relative;
  width: 52px;
  height: 52px;

  /* Outer track */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.borderDefault};
  }

  /* Spinning arc */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.accentPink};
    border-right-color: ${({ theme }) => theme.colors.accentBlue};
    animation: ${spin} 0.8s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite;
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

const PageLoader = ({ label = "Loading…" }) => (
  <Wrap>
    <Ring />
    <Label>{label}</Label>
  </Wrap>
);

export default PageLoader;
```


### src\components\ui\ProseContent.jsx

```
```


### src\components\ui\RichEditor.jsx

```
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import styled from "styled-components";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered, Quote, Code, Code2,
  Link as LinkIcon, Image as ImageIcon, Youtube as YoutubeIcon,
  AlignLeft, AlignCenter, AlignRight, Minus, Undo, Redo
} from "lucide-react";

const RichEditor = ({ value, onChange, uploadMediaToCloudinary }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Youtube.configure({ width: "100%", height: 480 }),
      Placeholder.configure({ placeholder: "Start writing..." }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value]);

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      // Upload to Cloudinary via parent handler
      const url = await uploadMediaToCloudinary(file, "image");
      if (url) editor.chain().focus().setImage({ src: url }).run();
    };
    input.click();
  };

  const addYoutube = () => {
    const url = window.prompt("Enter YouTube URL:");
    if (url) editor.commands.setYoutubeVideo({ src: url });
  };

  const tools = [
    { icon: <Undo size={15} />, action: () => editor.chain().focus().undo().run(), title: "Undo" },
    { icon: <Redo size={15} />, action: () => editor.chain().focus().redo().run(), title: "Redo" },
    { separator: true },
    { icon: <Bold size={15} />, action: () => editor.chain().focus().toggleBold().run(), title: "Bold", active: editor.isActive("bold") },
    { icon: <Italic size={15} />, action: () => editor.chain().focus().toggleItalic().run(), title: "Italic", active: editor.isActive("italic") },
    { icon: <UnderlineIcon size={15} />, action: () => editor.chain().focus().toggleUnderline().run(), title: "Underline", active: editor.isActive("underline") },
    { icon: <Strikethrough size={15} />, action: () => editor.chain().focus().toggleStrike().run(), title: "Strike", active: editor.isActive("strike") },
    { separator: true },
    { icon: <Heading2 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), title: "H2", active: editor.isActive("heading", { level: 2 }) },
    { icon: <Heading3 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), title: "H3", active: editor.isActive("heading", { level: 3 }) },
    { separator: true },
    { icon: <List size={15} />, action: () => editor.chain().focus().toggleBulletList().run(), title: "Bullet List", active: editor.isActive("bulletList") },
    { icon: <ListOrdered size={15} />, action: () => editor.chain().focus().toggleOrderedList().run(), title: "Ordered List", active: editor.isActive("orderedList") },
    { icon: <Quote size={15} />, action: () => editor.chain().focus().toggleBlockquote().run(), title: "Blockquote", active: editor.isActive("blockquote") },
    { separator: true },
    { icon: <Code size={15} />, action: () => editor.chain().focus().toggleCode().run(), title: "Inline Code", active: editor.isActive("code") },
    { icon: <Code2 size={15} />, action: () => editor.chain().focus().toggleCodeBlock().run(), title: "Code Block", active: editor.isActive("codeBlock") },
    { separator: true },
    { icon: <AlignLeft size={15} />, action: () => editor.chain().focus().setTextAlign("left").run(), title: "Align Left" },
    { icon: <AlignCenter size={15} />, action: () => editor.chain().focus().setTextAlign("center").run(), title: "Align Center" },
    { icon: <AlignRight size={15} />, action: () => editor.chain().focus().setTextAlign("right").run(), title: "Align Right" },
    { separator: true },
    { icon: <LinkIcon size={15} />, action: addLink, title: "Add Link" },
    { icon: <ImageIcon size={15} />, action: addImage, title: "Upload Image" },
    { icon: <YoutubeIcon size={15} />, action: addYoutube, title: "Embed YouTube" },
    { icon: <Minus size={15} />, action: () => editor.chain().focus().setHorizontalRule().run(), title: "Divider" },
  ];

  return (
    <Wrapper>
      <Toolbar>
        {tools.map((tool, i) =>
          tool.separator ? (
            <Sep key={i} />
          ) : (
            <ToolBtn
              key={i}
              type="button"
              title={tool.title}
              $active={tool.active}
              onClick={tool.action}
            >
              {tool.icon}
            </ToolBtn>
          )
        )}
      </Toolbar>
      <EditorArea>
        <EditorContent editor={editor} />
      </EditorArea>
    </Wrapper>
  );
};

export default RichEditor;

/* ---- Styles ---- */

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const ToolBtn = styled.button`
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.colors.gradientPinkBlue : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.colors.textSecondary};

  &:hover {
    background: ${({ theme }) => theme.colors.borderDefault};
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 4px 4px;
  align-self: center;
`;

const EditorArea = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 300px;

  .ProseMirror {
    outline: none;
    min-height: 280px;
    line-height: 1.7;

    p { margin: 0 0 1rem; }
    h2 { font-size: 1.5rem; margin: 1.5rem 0 0.5rem; }
    h3 { font-size: 1.2rem; margin: 1.2rem 0 0.5rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
    blockquote {
      border-left: 3px solid ${({ theme }) => theme.colors.gradientPinkBlue};
      padding-left: 1rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 1rem 0;
    }
    code {
      background: ${({theme})=> theme.colors.codeGhostBg};
      border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
      color:${({ theme }) => theme.colors.codeText};
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    pre {
      background: ${({theme})=> theme.colors.codeGhostBg};
      border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
      color:${({ theme }) => theme.colors.codeText};
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      code { background: none; padding: 0; }
    }
    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    iframe {
      width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    a { color: ${({ theme }) => theme.colors.gradientPinkBlue}; text-decoration: underline; }
    hr { border: none; border-top: 1px solid ${({ theme }) => theme.colors.borderDefault}; margin: 1.5rem 0; }
    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      color: ${({ theme }) => theme.colors.textTertiary};
      pointer-events: none;
      float: left;
      height: 0;
    }
  }
`;
```


### src\components\ui\SectionHeader.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// const Label = styled.span`
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   color: ${({ theme }) => theme.colors.gradientPinkBlue};
//   text-transform: uppercase;
//   letter-spacing: 0.2em;
// `;

const Label = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin-top: 0.5rem;

    ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  span {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionHeader = ({ number, title }) =>{
  const [firstName, lastName] = title.split(" ");
  return(<Wrapper
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {/* <Label>.{number}</Label> */}
    <Title>  {firstName} <span>{lastName}</span></Title>
  </Wrapper>
)};

export default SectionHeader;
```


### src\components\ui\Tag.jsx

```
import styled from 'styled-components';

const TagPill = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border: 0.5px solid ${({ theme }) => theme.colors.borderHover};
  color: #fff;
  background-image: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// const TagPill = styled.span`
//   display: inline-block;
//   padding: 3px 10px;
//   border-radius: 6px;
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-weight: 500;
//   background: linear-gradient(
//     90deg,
//     ${({ theme }) => theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%'
//       : 'rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%'
//     }
//   );
//   border: 0.5px solid ${({ theme }) =>
//     theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.28)'
//       : 'rgba(232,23,74,0.22)'
//   };
//   color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1A1A2E'};
// `;
const Tag = ({ children }) => <TagPill>{children}</TagPill>;
export default Tag;
```


### src\components\ui\ThemeToggle.jsx

```
// src/components/ui/ThemeToggle.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Track = styled.button`
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ $isDark }) =>
    $isDark
      ? 'rgba(30, 58, 95, 0.4)'
      : 'rgba(200, 216, 236, 0.8)'};
  cursor: pointer;
  transition: background 0.4s ease;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Knob = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $isDark }) =>
    $isDark
      ? 'linear-gradient(135deg, #3B82F6, #FF2D6B)'
      : 'linear-gradient(135deg, #FFB347, #FF6B4A)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
`;

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <Track $isDark={isDark} onClick={toggle} title="Toggle theme">
      <Knob
        $isDark={isDark}
        animate={{ left: isDark ? '4px' : '28px' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {isDark ? '🌙' : '☀️'}
      </Knob>
    </Track>
  );
};

export default ThemeToggle;
```


### src\contexts\AuthContext.jsx

```
import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../services/apis";

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      authAPI
        .me()
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await authAPI.login(email, password);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    const me = await authAPI.me();
    setUser(me.data);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
```


### src\contexts\ThemeContext.jsx

```
// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  const toggle = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
```


### src\data\siteData.jsx

```
// ============================================================
// siteData.js — Single source of truth for all portfolio data
// Darshan Agrawal | Full Stack Engineer
// Icons: react-icons/si — import { SiReact } from 'react-icons/si'
// ============================================================

export const personalInfo = {
  name: 'Darshan',
  lastName: 'Agrawal',
  roles: [
    'Full Stack Engineer',
    'React + Python Developer',
    'Remote-First Builder',
  ],
  bio: "Full Stack Engineer with 4+ years building performant, data-driven web apps. I specialize in React ecosystems and Python backends — from real-time KPI dashboards to automated data pipelines — with a sharp eye for clean code and intuitive design.",
  email: 'darshanagrawal007@gmail.com',
  location: 'India (Remote Worldwide)',
  resumeUrl: '/resume.pdf',
  socials: {
    github:   'https://github.com/darshan12-code/',
    linkedin: 'https://www.linkedin.com/in/darshan-agrawal-012/',
    twitter:  'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'Home',         path: '/'            },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog',         path: '/blog'         },
  { label: 'Contact',      path: '/contact'      },
];

// ── Skills ──────────────────────────────────────────────────
// icon: string name of the Si* export from 'react-icons/si'
// Usage in component:
//   import * as SiIcons from 'react-icons/si';
//   const Icon = SiIcons[skill.icon];
//   <Icon />
export const skills = [
  { name: 'React.js',           icon: 'SiReact'             },
  { name: 'TypeScript',         icon: 'SiTypescript'        },
  { name: 'JavaScript',         icon: 'SiJavascript'        },
  { name: 'Python',             icon: 'SiPython'            },
  { name: 'Flask',              icon: 'SiFlask'             },
  { name: 'Node.js',            icon: 'SiNodedotjs'         },
  { name: 'Express.js',         icon: 'SiExpress'           },
  { name: 'Angular',            icon: 'SiAngular'           },
  { name: 'GraphQL',            icon: 'SiGraphql'           },
  { name: 'D3.js',              icon: 'SiD3Dotjs'           },
  { name: 'SCSS',               icon: 'SiSass'              },
  { name: 'PostgreSQL',         icon: 'SiPostgresql'        },
  { name: 'MySQL',              icon: 'SiMysql'             },
  { name: 'MongoDB',            icon: 'SiMongodb'           },
  { name: 'Azure Databricks',   icon: 'SiDatabricks'        },
  { name: 'Azure Data Factory', icon: 'SiMicrosoftazure'    },
  { name: 'Docker',             icon: 'SiDocker'            },
  { name: 'Git',                icon: 'SiGit'               },
  { name: 'Jira',               icon: 'SiJira'              },
  { name: 'Pandas',             icon: 'SiPandas'            },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Feb 2023 – Present',
    description:
      'Led full-stack delivery of a real-time KPI dashboard visualizing 26 metrics with D3.js graphs. Automated telecom data workflows processing 16+ public records, cutting PDF processing time by 70%. Optimized API performance, reduced query latency, and mentored junior developers.',
    tech: ['React', 'Python', 'Flask', 'Azure Databricks', 'Azure Data Factory', 'D3.js', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Dec 2021 – Jan 2023',
    description:
      'Reduced dashboard load times by 45% through architecture optimization and code splitting. Redesigned UI components for cross-platform compatibility. Delivered 3+ key frontend projects and improved feature rollout speed by 30%.',
    tech: ['React', 'TypeScript', 'Angular', 'SCSS', 'D3.js', 'GraphQL'],
  },
  {
    id: 3,
    role: 'System Engineer Intern',
    company: 'Western Coalfields Ltd.',
    location: 'Chandrapur, India',
    period: 'Jun 2021 – Sep 2021',
    description:
      'Built a full-stack PHP tool to monitor equipment breakdown and system status for the GM Office, digitizing manual paper-based workflows.',
    tech: ['PHP', 'MySQL'],
  },
];

// ── Counters ─────────────────────────────────────────────────
// All values directly sourced from resume bullet points.
// "26 KPIs" = metrics built for the telecom dashboard project at Rhombuz.
// Full project context lives in Case Studies.
export const counters = [
  { value: 4,  suffix: '+', label: 'Years Experience'       },
  // { value: 26, suffix: '',  label: 'KPIs Shipped'           },
  { value: 45, suffix: '%', label: 'Load Time Reduced'      },
  { value: 70, suffix: '%', label: 'Faster PDF Processing'  },
];

// ── About Traits (flip cards) ────────────────────────────────
export const aboutTraits = [
  {
    emoji: '🎨',
    label: 'Creative',
    description: 'Clay, paint & digital art — design thinking runs deep.',
  },
  {
    emoji: '🧠',
    label: 'Strategic',
    description: 'Architecture first, syntax second. Systems that scale.',
  },
  {
    emoji: '🛠',
    label: 'Builder',
    description: 'Ship fast, iterate faster.',
  },
];

// ── Filter Categories (Case Studies page) ───────────────────
export const filterCategories = [
  { key: 'all',       label: 'All'        },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
];
```


### src\hooks\useApiData.jsx

```
// src/hooks/useApiData.js
// Centralized React Query hooks for all public API calls.
// These replace the manual useState + useEffect + fetch patterns in each page.
//
// WHY: When each page manages its own state with useEffect, navigating away
// unmounts the component and destroys the data. Navigating back = fresh fetch.
// React Query caches the result globally, so returning to a page = instant render.

import { useQuery } from "@tanstack/react-query";
import { blogAPI, caseStudyAPI,portfolioAPI } from "../services/apis";

/* ─────────────────────────────────────────────
   QUERY KEYS — centralised so all components
   share the same cache entries
───────────────────────────────────────────── */
export const QUERY_KEYS = {
  blogs:          ["blogs"],
  blogDetail:     (slug) => ["blog", slug],
  caseStudies:    ["case-studies"],
  caseStudyDetail:(slug) => ["case-study", slug],
  featuredWork:   ["featured-work"],
  portfolio: ["portfolio-data"]
};

/* ─────────────────────────────────────────────
   BLOGS LIST
   Used by: Blog page
───────────────────────────────────────────── */
export function useBlogs() {
  return useQuery({
    queryKey: QUERY_KEYS.blogs,
    queryFn: async () => {
      const res = await blogAPI.getAll(1, 100);
      return res.data.data.map((blog) => ({
        id:       blog.id,
        title:    blog.title,
        excerpt:  blog.excerpt,
        category: blog.category || "Article",
        readTime: blog.read_time,
        date:     new Date(blog.created_at).toLocaleDateString(),
        link:     `/blog/${blog.slug}`,
      }));
    },
    // Keep fresh for 5 minutes — blog posts don't change often
    staleTime: 5 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   BLOG DETAIL
   Used by: BlogDetails page
───────────────────────────────────────────── */
export function useBlogDetail(slug) {
  return useQuery({
    queryKey: QUERY_KEYS.blogDetail(slug),
    queryFn:  async () => {
      const res = await blogAPI.getBySlug(slug);
      return res.data;
    },
    enabled: !!slug,
    // Detail pages stay fresh longer — content rarely changes mid-session
    staleTime: 10 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   CASE STUDIES LIST
   Used by: CaseStudies page
───────────────────────────────────────────── */
export function useCaseStudies() {
  return useQuery({
    queryKey: QUERY_KEYS.caseStudies,
    queryFn: async () => {
      const res = await caseStudyAPI.getAll();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   CASE STUDY DETAIL
   Used by: CaseStudyDetails page
───────────────────────────────────────────── */
export function useCaseStudyDetail(slug) {
  return useQuery({
    queryKey: QUERY_KEYS.caseStudyDetail(slug),
    queryFn:  async () => {
      const res = await caseStudyAPI.getBySlug(slug);
      return res.data;
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000,
  });
}

/* ─────────────────────────────────────────────
   FEATURED WORK
   Used by: FeaturedProjects (Home page)
───────────────────────────────────────────── */
export function useFeaturedWork() {
  return useQuery({
    queryKey: QUERY_KEYS.featuredWork,
    queryFn: async () => {
      const res = await caseStudyAPI.getFeatured();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}


export function usePortfolioData() {
  return useQuery({
    queryKey: QUERY_KEYS.portfolio,
    queryFn: async () => {
      const res = await portfolioAPI.getAll();
      return res.data;
    },

    // Portfolio content rarely changes
    staleTime: 60 * 60 * 1000,
  });
}
```


### src\hooks\useCountUp.jsx

```
import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}
```


### src\hooks\useFetch.jsx

```
```


### src\hooks\useMousePosition.jsx

```
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,   // -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 20,   // -1 to 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
```


### src\hooks\usePost.jsx

```
```


### src\hooks\useScrollProgress.jsx

```
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```


### src\hooks\useScrollReveal.jsx

```
// src/hooks/useScrollReveal.jsx
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold || 0.15,
    triggerOnce: options.once !== false,
  });

  return { ref, inView };
}
```


### src\hooks\useTypewriter.jsx

```
import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}
```


### src\pages\Admin.jsx

```
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes, useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil, Trash2, ArrowBigLeft, ArrowBigRight,
  Plus, Eye, Save, X, Terminal,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { blogAPI, caseStudyAPI, contactAPI, uploadAPI } from "../services/apis";
import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";
import RichEditor from "../components/ui/RichEditor";
import AdminCardSkeleton from "../components/ui/AdminCardSkeleton";
import EmptyState from "../components/ui/EmptyState";
import { getCategoryColor } from "../utils/categoryColors";
import Tilt from "react-parallax-tilt";


const ITEMS_PER_PAGE = 9;

/* ── Portal: renders children directly into document.body ── */
const Portal = ({ children }) => {
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    const node = el.current;
    node.setAttribute("id", "modal-portal");
    document.body.appendChild(node);
    return () => { if (document.body.contains(node)) document.body.removeChild(node); };
  }, []);
  return createPortal(children, el.current);
};

/* ── Main component ── */
const Admin = () => {
  const { user } = useAuth();
  const [tab, setTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [cases, setCases] = useState([]);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const savedScrollY = useRef(0);
  const theme = useTheme();
  const schemas = {
    blogs: [
      { name: "title",        label: "Blog Title",   type: "text"     },
      { name: "excerpt",      label: "Excerpt",      type: "textarea" },
      { name: "category",     label: "Category",     type: "text"     },
      { name: "content_type", label: "Editor Type",  type: "radio"    },
      { name: "content",      label: "Blog Content", type: "editor"   },
      { name: "is_published", label: "Publish",      type: "checkbox" },
    ],
    cases: [
      { name: "title",           label: "Project Title",       type: "text"      },
      { name: "summary",         label: "Summary",             type: "textarea"  },
      { name: "category",        label: "Category",            type: "text"      },
      { name: "tech_stack",      label: "Tech Stack",          type: "text"      },
      { name: "github_url",      label: "Github URL",          type: "text"      },
      { name: "live_url",        label: "Live URL",            type: "text"      },
      { name: "thumbnail",       label: "Thumbnail",           type: "thumbnail" },
      { name: "company_project", label: "Company Project",     type: "checkbox"  },
      { name: "content",         label: "Case Study Content",  type: "editor"    },
      { name: "is_published",    label: "Publish",             type: "checkbox"  },
    ],
    messages: [
      { name: "name",    label: "Name",    type: "text"     },
      { name: "email",   label: "Email",   type: "text"     },
      { name: "message", label: "Message", type: "textarea" },
    ],
  };

 
  useEffect(() => {
    const open = showForm || showPreview;
    if (open) {
      savedScrollY.current = window.scrollY;
      Object.assign(document.body.style, {
        overflow: "hidden",
        position: "fixed",
        top:      `-${savedScrollY.current}px`,
        left:     "0",
        right:    "0",
      });
    } else {
      Object.assign(document.body.style, {
        overflow: "", position: "", top: "", left: "", right: "",
      });
      if (savedScrollY.current > 0) {
        window.scrollTo(0, savedScrollY.current);
        savedScrollY.current = 0;
      }
    }
    return () => {
      Object.assign(document.body.style, {
        overflow: "", position: "", top: "", left: "", right: "",
      });
    };
  }, [showForm, showPreview]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [b, c, m] = await Promise.all([
        blogAPI.getAll(1, 100),
        caseStudyAPI.getAll(1, 100),
        contactAPI.getAll(1, 100),
      ]);
      setBlogs(b.data.data    || []);
      setCases(c.data.data    || []);
      setMessages(m.data.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => { setPage(1);  }, [tab]);

  const dataset    = tab === "blogs" ? blogs : tab === "cases" ? cases : messages;
  const start      = (page - 1) * ITEMS_PER_PAGE;
  const paginated  = dataset.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const closeForm = () => { setShowForm(false); setEditItem(null); setFormData({}); };

  // Fields that must always be boolean regardless of what the API returns
  const BOOLEAN_FIELDS = new Set(["is_published", "company_project"]);

  const openCreate = () => {
    setEditItem(null);
    const empty = {};
    schemas[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name)) empty[name] = name === "is_published" ? true : false;
      else if (name === "content_type") empty[name] = "rich";
      else empty[name] = "";
    });
    setFormData(empty);
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    const filtered = {};
    schemas[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name)) {
        // Coerce to boolean — handles 0/1, "true"/"false", null, undefined from API
        filtered[name] = Boolean(item[name]);
      } else {
        filtered[name] = item[name] ?? "";
      }
    });
    if (tab === "blogs") filtered.content_type = item.content_type || "rich";
    setFormData(filtered);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (tab === "blogs") {
        editItem
          ? await blogAPI.update(editItem.id, { ...formData })
          : await blogAPI.create({ ...formData });
      }
      if (tab === "cases") {
        const fd = new FormData();
        ["title","summary","content","category","tech_stack","github_url","live_url","thumbnail"]
          .forEach((k) => fd.append(k, formData[k] || ""));
        fd.append("company_project", formData.company_project ? "true" : "false");
        fd.append("is_published",    formData.is_published    ? "true" : "false");
        editItem
          ? await caseStudyAPI.update(editItem.id, fd)
          : await caseStudyAPI.create(fd);
      }
      closeForm();
      fetchData();
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    if (tab === "blogs") await blogAPI.delete(id);
    if (tab === "cases") await caseStudyAPI.delete(id);
    fetchData();
  };

  const previewText = (text = "") =>
    text.replace(/<[^>]+>/g, "").slice(0, 130) + (text.length > 130 ? "…" : "");

  const uploadMediaToCloudinary = async (file, type) => {
    try {
      const res = await uploadAPI.uploadMedia(file, type);
      return res.data.files[0]?.url || null;
    } catch (err) { console.error("Upload error:", err); return null; }
  };

  const renderField = (key, value) => {
    if (key === "content" && (tab === "blogs" || tab === "cases")) {
      if (tab === "cases" || formData.content_type === "rich") {
        return (
          <EditorBlock key={key}>
            <FLabel>Content</FLabel>
            <RichEditor
              value={value || ""}
              onChange={(html) => setFormData((p) => ({ ...p, content: html }))}
              uploadMediaToCloudinary={uploadMediaToCloudinary}
            />
          </EditorBlock>
        );
      }
      return (
        <FGroup key={key} $full>
          <FLabel>{formData.content_type === "html" ? "HTML Content" : "Plain Text"}</FLabel>
          <FTextarea value={value || ""} onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
        </FGroup>
      );
    }

    if (key === "thumbnail") {
      return (
        <FGroup key={key}>
          <FLabel>Thumbnail</FLabel>
          <FFileInput type="file" accept="image/*" onChange={async (e) => {
            const file = e.target.files[0]; if (!file) return;
            setFormData((p) => ({ ...p, thumbnail: URL.createObjectURL(file) }));
            const url = await uploadMediaToCloudinary(file, "image");
            if (url) setFormData((p) => ({ ...p, thumbnail: url }));
          }} />
          {formData.thumbnail && (
            <ThumbPreview>
              <img src={formData.thumbnail} alt="thumb" onError={(e) => { e.target.style.display = "none"; }} />
            </ThumbPreview>
          )}
        </FGroup>
      );
    }

    if (key === "content_type") {
      if (tab !== "blogs") return null;
      return (
        <RadioBlock key={key}>
          <FLabel>Editor Type</FLabel>
          <RadioRow>
            {[["text","Plain Text"],["rich","Rich Editor"],["html","HTML"]].map(([opt, lbl]) => (
              <RadioChip key={opt} type="button" $active={value === opt}
                onClick={() => setFormData({ ...formData, content_type: opt })}>
                {lbl}
              </RadioChip>
            ))}
          </RadioRow>
        </RadioBlock>
      );
    }

    if (typeof value === "boolean") {
      return (
        <ToggleRow key={key}>
          <FLabel style={{ marginBottom: 0 }}>{key.replaceAll("_", " ")}</FLabel>
          <Toggle>
            <input type="checkbox" checked={value}
              onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })} />
            <ToggleTrack />
          </Toggle>
        </ToggleRow>
      );
    }

    if (key === "summary" || key === "excerpt") {
      return (
        <FGroup key={key} $full>
          <FLabel>{key.replace("_", " ")}</FLabel>
          <FTextarea value={value || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
        </FGroup>
      );
    }

    return (
      <FGroup key={key}>
        <FLabel>{key.replace(/_/g, " ")}</FLabel>
        <FInput value={value || ""} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
      </FGroup>
    );
  };

const TAB_CONFIG = [
  { key: "blogs",    label: "Blogs",    color: "#FF2D6B", icon: "📝", count: blogs.length    },
  { key: "cases",    label: "Cases",    color: "#3B82F6", icon: "📁", count: cases.length    },
  { key: "messages", label: "Messages", color: "#00E89D", icon: "💬", count: messages.length },
];

  return (
    <>
      <Page>
        
      <Sidebar>
    
        <NavSection>
          {TAB_CONFIG.map(({ key, label, count, color }) => (
            <SideLink key={key} $active={tab === key} onClick={() => setTab(key)}>
              <SideDot style={{ background: color, opacity: tab === key ? 1 : 0.35 }} />
              <SideLabelText>{label}</SideLabelText>
              <CountPill $active={tab === key} style={tab === key ? { background: color } : {}}>
                {count}
              </CountPill>
            </SideLink>
          ))}
        </NavSection>
      </Sidebar>

        {/* ── Main ── */}
             
      <MainContent>
      

          <PageTitleBlock>
          
            <PageTitle>Command<TitleAccent> Centre</TitleAccent></PageTitle>
            <TitleSub>Welcome back, <strong>{user?.name || "Admin"}</strong>. Manage your content below.</TitleSub>
          </PageTitleBlock>

          {tab !== "messages" && (
            <ActionRow>
              <CreateBtn onClick={openCreate}>
                <Plus size={15} />
                New {tab === "blogs" ? "Blog Post" : "Case Study"}
              </CreateBtn>
            </ActionRow>
          )}

          <GridWrap>
            <CardGrid>
              {loading ? (
                <AdminCardSkeleton count={6} />
              ) : paginated.length === 0 ? (
                <EmptyStateWrap>
                  <EmptyState
                    icon={tab === "blogs" ? "📝" : tab === "cases" ? "📁" : "💬"}
                    title={`No ${tab} yet`}
                    message={
                      tab === "messages"
                        ? "When visitors send you messages they'll appear here."
                        : `Create your first ${tab === "blogs" ? "blog post" : "case study"} to get started.`
                    }
                    action={
                      tab !== "messages" ? (
                        <CreateBtn onClick={openCreate}>
                          <Plus size={15} />
                          New {tab === "blogs" ? "Blog Post" : "Case Study"}
                        </CreateBtn>
                      ) : null
                    }
                  />
                </EmptyStateWrap>
              ) : (
                paginated.map((item, i) => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}>
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
                    <Card>
                      <CardShimmerBar />
                      <CardHeader>
                        <CardTitle>{item.title || item.name || "(no title)"}</CardTitle>
                        {tab !== "messages" && (
                          <CardActions>
                            <IconBtn type="button" onClick={() => openEdit(item)} title="Edit">
                              <Pencil size={13} />
                            </IconBtn>
                            <IconBtn type="button" $danger onClick={() => handleDelete(item.id)} title="Delete">
                              <Trash2 size={13} />
                            </IconBtn>
                          </CardActions>
                        )}
                      </CardHeader>
                      <CardBody>
                          {(tab === "blogs" || tab === "cases") && (
                            <>
                              <ChipsRow>
                                {(() => {
                                  const categories = (item.category || "—")
                                    .split(",")
                                    .map(cat => cat.trim())
                                    .filter(Boolean);

                                  const displayCategories = categories.slice(0, 2);
                                  const remainingCount = categories.length - 2;

                                  return (
                                    <>
                                      {displayCategories.map((cat, i) => (
                                        <CategoryChip key={i} $c={getCategoryColor(cat, theme.mode)}>
                                          {cat}
                                        </CategoryChip>
                                      ))}
                                      
                                      {remainingCount > 0 && (
                                        <CategoryChip $c={getCategoryColor('', theme.mode)}>
                                          +{remainingCount}
                                        </CategoryChip>
                                      )}
                                    </>
                                  );
                                })()}
                              </ChipsRow>
                              
                              <CardPreview>
                                {tab === "blogs" 
                                  ? previewText(item.excerpt || item.content) 
                                  : previewText(item.summary)
                                }
                              </CardPreview>
                            </>
                          )}

                         {tab === "messages" && (
                            <>
                              <CategoryChip $variant="email">
                                {item.email}
                              </CategoryChip>
                              <CardPreview>{previewText(item.message)}</CardPreview>
                            </>
                          )}

                          {tab === "projects" && (
                            <CardPreview>{previewText(item.description)}</CardPreview>  
                          )}
                        </CardBody>
                      {tab !== "messages" && (
                        <CardStatusRow>
                          <StatusDot $on={item.is_published} />
                          <span>{item.is_published ? "Published" : "Draft"}</span>
                        </CardStatusRow>
                      )}
                    </Card>
                    </Tilt>
                  </motion.div>
                ))
              )}
            </CardGrid>
            {!loading && paginated.length >= 6 && <GridFog />}
          </GridWrap>

          {!loading && totalPages > 1 && (
            <Pagination>
              <MagneticButton variant="nav" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                <ArrowBigLeft size={18} />
              </MagneticButton>
              <PageInfo><strong>{page}</strong><PaginationSep>/</PaginationSep>{totalPages}</PageInfo>
              <MagneticButton variant="nav" size="sm" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                <ArrowBigRight size={18} />
              </MagneticButton>
            </Pagination>
          )}
        </MainContent>
      </Page>
   {/* // ── Mobile bottom tab bar ── */}
    <MobileTabBar>
      {TAB_CONFIG.map(({ key, label, color, icon, count }) => (
        <MobileTab key={key} $active={tab === key} $color={color} onClick={() => setTab(key)}>
          <MobileTabIcon $active={tab === key} $color={color}>{icon}</MobileTabIcon>
          <MobileTabLabel $active={tab === key}>{label}</MobileTabLabel>
          {count > 0 && (
            <MobileTabCount $color={color}>{count > 99 ? "99+" : count}</MobileTabCount>
          )}
        </MobileTab>
      ))}
    </MobileTabBar>
      {/* ══ FORM MODAL via Portal — truly viewport-fixed ══ */}
      <Portal>
        <AnimatePresence>
          {showForm && (
            <Overlay as={motion.div}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}>
              <ModalCard as={motion.div}
                initial={{ scale: 0.94, opacity: 0, y: 30 }}
                animate={{ scale: 1,    opacity: 1, y: 0  }}
                exit={{    scale: 0.94, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <ModalTitle>{editItem ? `✏️ Edit ${tab}` : `✨ New ${tab}`}</ModalTitle>
                  <ModalCloseBtn type="button" onClick={closeForm}><X size={15} /></ModalCloseBtn>
                </ModalHeader>
                <FormBody>
                  <FormGrid>
                    {Object.entries(formData).map(([key, value]) => renderField(key, value))}
                  </FormGrid>
                </FormBody>
                <ModalFooter>
                  <ModalBtn type="button" $v="preview" onClick={() => setShowPreview(true)}><Eye size={14} /> Preview</ModalBtn>
                  <ModalBtn type="button" $v="save" onClick={handleSave} disabled={saving}><Save size={14} /> {saving ? "Saving…" : "Save"}</ModalBtn>
                  <ModalBtn type="button" $v="cancel" onClick={closeForm}><X size={14} /> Cancel</ModalBtn>
                </ModalFooter>
              </ModalCard>
            </Overlay>
          )}
        </AnimatePresence>
      </Portal>

      {/* ══ PREVIEW MODAL via Portal ══ */}
      <Portal>
        <AnimatePresence>
          {showPreview && (
            <Overlay as={motion.div}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }} onClick={() => setShowPreview(false)}>
              <PreviewCard as={motion.div}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1,    opacity: 1  }}
                exit={{    scale: 0.94, opacity: 0  }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <ModalTitle>Preview</ModalTitle>
                  <ModalCloseBtn type="button" onClick={() => setShowPreview(false)}><X size={15} /></ModalCloseBtn>
                </ModalHeader>
                <PreviewBody>
                  <PreviewTitle>{formData.title}</PreviewTitle>

                  {formData.category && (
                    <PreviewBadgeRow>
                      {formData.category.split(",").map(cat => cat.trim()).filter(Boolean).map((cat, i) => (
                        <PreviewCategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                          {cat}
                        </PreviewCategoryBadge>
                      ))}
                    </PreviewBadgeRow>
                  )}

                  {formData.tech_stack && (
                    <PreviewTagsRow>
                      {formData.tech_stack.split(",").map(t => t.trim()).filter(Boolean).map((tag, i) => (
                        <PreviewTag key={i}>{tag}</PreviewTag>
                      ))}
                    </PreviewTagsRow>
                  )}

                  <PreviewContent dangerouslySetInnerHTML={{ __html: formData.content }} />
                </PreviewBody>
              </PreviewCard>
            </Overlay>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default Admin;

/* ═══════════════════════════════════ STYLES ══════════════════════════════════ */


const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  padding: 4rem 2.5rem 5rem;

  @media (max-width: 1024px) { padding: 2rem 1.5rem 4rem; }

  @media (max-width: 768px) {
    padding: calc(64px + 1.5rem) 1rem calc(64px + 1rem);
  }
`;

const PageTitleBlock = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.6rem;
`;

const TitleAccent = styled.span`
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TitleSub = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const ActionRow = styled.div`
  margin-bottom: 1.75rem;
`;

const CreateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.62rem 1.4rem;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadowPinkHover};
  }
`;

const GridWrap = styled.div`
  position: relative;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.2rem;
  padding-bottom: 0.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const shimmerMove = keyframes`
  0%   { background-position: -200% 0 }
  100% { background-position:  200% 0 }
`;










const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  /* ── uniform height layout ── */
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCardHover};
    transform: translateY(-2px);
  }
`;

const CardBody = styled.div`
  font-size: 0.85rem;
  flex: 1;                /* grows to fill space between header and status row */
  min-height: 0;          /* prevents flex blowout */
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;      /* no wrap — chips stay on one line */
  gap: 4px;
  margin-bottom: 6px;
  overflow: hidden;       /* hides any overflow if chips are somehow too wide */
`;
const CategoryChip = styled.span`
  display: inline-block;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;

  /* Email Variant Logic */
  background: ${({ $variant, theme }) => 
    $variant === 'email' ? theme.colors.accentBlueBg : (props => props.$c?.bg || 'rgba(255,255,255,0.06)')};
  
  border: 1px solid ${({ $variant, theme }) => 
    $variant === 'email' ? theme.colors.accentBlueBg : (props => props.$c?.border || 'rgba(255,255,255,0.12)')};
  
  /* Make sure text is visible against gradient, or use standard color */
  color: ${({ $variant,theme, $c }) => 
    $variant === 'email' ?  theme.colors.codeText : ($c?.text || '#9BA1B0')};
`;

const CardPreview = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0;
  flex: 1;

  /* clamp to exactly 2 lines always */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardShimmerBar = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: ${({ theme }) => theme.colors.gradientShimmer};
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s;
  animation: ${shimmerMove} 2.5s linear infinite;
  ${Card}:hover & { opacity: 1; }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 0.93rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.3;
  flex: 1;
  margin: 0;
`;

const CardActions = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`;

const IconBtn = styled.button`
  border: none;
  background: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDangerBg : theme.colors.bgGlassLight};
  color: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDanger : theme.colors.textSecondary};
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerBgHover : theme.colors.borderHover};
    color: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerLight : "#fff"};
    transform: scale(1.1);
  }
`;

const CardStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const blinkAnim = keyframes`0%,100%{opacity:1}50%{opacity:0.3}`;
const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $on, theme }) => $on ? theme.colors.accentGreen : theme.colors.textTertiary};
  animation: ${({ $on }) => $on ? blinkAnim : "none"} 2.5s ease-in-out infinite;
`;

const GridFog = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 90px;
  background: linear-gradient(to bottom, transparent 0%, ${({ theme }) => theme.colors.bgPrimary} 100%);
  pointer-events: none;
  z-index: 2;
`;

const EmptyStateWrap = styled.div`
  grid-column: 1 / -1;
`;

const Pagination = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const PaginationSep = styled.span`
  opacity: 0.35;
  margin: 0 0.3rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  height: 100dvh; /* ← real visible height on mobile */
  background: ${({ theme }) => theme.colors.overlayBg};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  @media (max-width: 480px) { padding: 0; align-items: flex-end; }
`;


const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;
  max-width: 880px;
  max-height: 88vh;
  max-height: 88dvh; /* ← dvh fallback */
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};

  @media (max-width: 480px) {
    width: 100vw;
    height: 92dvh;        /* ← fixed height so footer is always in frame */
    max-height: 92dvh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;
const ModalHeader = styled.div`
  flex-shrink: 0;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 0.97rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;

const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentPinkFocus};
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;
const FormBody = styled.div`
  flex: 1;
  min-height: 0;          /* ← critical: prevents flex child from overflowing */
  overflow-y: auto;
  padding: 22px 24px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* ← smooth scroll on iOS/Android */
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 3px;
  }
  @media (max-width: 480px) { padding: 16px; }
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  /* Extra bottom padding for phones with gesture nav bar */
  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    & > * { flex: 1; min-width: 80px; }
  }
`;

const ModalBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  /* Save */
  ${({ $v, theme }) => $v === "save" && `
    background: ${theme.colors.gradientPinkBlue};
    color:#fff;
    &:hover {
      box-shadow: ${theme.colors.shadowBlueBtnHover};
      transform: translateY(-1px);
    }
  `}

  /* Preview */
  ${({ $v, theme }) => $v === "preview" && `
    background: ${theme.colors.accentBlueBg};
    color: ${theme.colors.accentBlue};
    border: 1px solid ${theme.colors.accentBlueBorder};
    &:hover { background: ${theme.colors.accentBlueBgHover}; }
  `}

  /* Cancel */
  ${({ $v, theme }) => $v === "cancel" && `
    background: ${theme.colors.surfaceSubtle};
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.borderSubtle};
    &:hover {
      background: ${theme.colors.bgGlassLight};
      color: ${theme.colors.textPrimary};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;





const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: ${({ $full }) => $full ? "1 / -1" : "auto"};
`;

const FLabel = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const FInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
  }
`;

const FTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentPinkFocus};
  }
`;

const FFileInput = styled.input`
  padding: 9px 12px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  transition: border-color 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentPink}; }
`;

const ThumbPreview = styled.div`
  margin-top: 8px;
  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;

const RadioBlock = styled.div`grid-column: 1 / -1;`;
const RadioRow = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

const RadioChip = styled.button`
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 0.82rem;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBg : theme.colors.bgTertiary};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBorder : theme.colors.borderDefault};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.codeText : theme.colors.textSecondary};
  transition: all 0.15s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentBlue}; }
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 42px; height: 24px;
  cursor: pointer;
  input { opacity: 0; width: 0; height: 0; position: absolute; }
  input:checked + span { background: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  input:checked + span::before { transform: translateY(-50%) translateX(18px); }
`;

const ToggleTrack = styled.span`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: background 0.3s;
  &::before {
    content: "";
    position: absolute;
    width: 18px; height: 18px;
    left: 2px; top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    box-shadow: 0 1px 4px ${({ theme }) => theme.colors.overlayBg};
  }
`;

const EditorBlock = styled.div`grid-column: 1 / -1;`;

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: min(880px, 92vw);
  max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModalPreview};
  @media (max-width: 480px) {
    width: 100vw;
    max-height: 96vh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const PreviewBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem 3rem;
  @media (max-width: 480px) { padding: 1.25rem; }
`;

const PreviewTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PreviewBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

const PreviewTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.75rem;
`;

const PreviewTag = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%)'
      : 'linear-gradient(90deg, rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%)'
  };
  border: 0.5px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255,45,107,0.28)' : 'rgba(232,23,74,0.22)'
  };
  color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1A1A2E'};
`;


const PreviewCategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
`;

const PreviewContent = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin: 1rem 0;
  }
  h2, h3 { color: ${({ theme }) => theme.colors.textPrimary}; margin: 1.5rem 0 0.75rem; }
  p { margin-bottom: 1.2rem; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow-x: auto;
    font-size: 0.875rem;
    color:${({ theme }) => theme.colors.codeText};
  }
  code {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4.5rem;
  }
`;

const Sidebar = styled.aside`
  width: 15rem;
  flex-shrink: 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 1.25rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) { width: 200px; }
  @media (max-width: 768px) { display: none; }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SideLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBorder : "transparent"};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBg : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const SideDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: opacity 0.2s;
`;

const SideLabelText = styled.span`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
`;

const CountPill = styled.span`
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${({ $active, theme }) => $active ? "" : theme.colors.bgGlassLight};
  color: ${({ $active, theme }) => $active ? "#fff" : "inherit"};
  font-weight: 700;
  min-width: 20px;
  text-align: center;
`;

const MobileTabBar = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.bgTertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    height: 64px;
    padding: 0 8px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
`;

const MobileTab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%; right: 20%;
    height: 2px;
    border-radius: 0 0 3px 3px;
    background: ${({ $color }) => $color || "#FF2D6B"};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.18s;
  }

  &:active { background: ${({ theme }) => theme.colors.surfaceSubtle}; }
`;

const MobileTabLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  transition: color 0.18s;
`;

const MobileTabCount = styled.span`
  position: absolute;
  top: 6px;
  right: calc(50% - 18px);
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: ${({ $color }) => $color || "#FF2D6B"};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

const MobileTabIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  color: ${({ $active, $color, theme }) =>
    $active ? ($color || theme.colors.accentPink) : theme.colors.textTertiary};
  transition: color 0.18s;
`;
```


### src\pages\AdminLogin.jsx

```
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import MagneticButton from "../components/ui/MagneticButton";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

background: ${({ theme }) => theme.colors.gradientHero};
`;
const ScanLine = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;

  height: 2px;

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accentCoral},
    transparent
  );

  box-shadow: 
  0 0 8px ${({ theme }) => theme.colors.accentCoral},
  0 0 16px ${({ theme }) => theme.colors.gradientPinkBlue};
  pointer-events: none;
`;
const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;   /* important */

  width: 100%;
  max-width: 420px;
  padding: 2.5rem;

  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};

  background: ${({ theme }) => theme.colors.bgSecondary};
  backdrop-filter: blur(20px);
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
  width: 64px;
  height: 64px;

  margin: 0 auto 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border: 1px solid ${({ theme }) => theme.colors.accentBlue};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ErrorBox = styled(motion.div)`
  margin-bottom: 1rem;
  padding: 0.75rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};

  background: rgba(255, 60, 60, 0.1);
  border: 1px solid rgba(255, 60, 60, 0.2);

  color: #ff6b6b;
  font-size: 0.85rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.75rem;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};

  background: ${({ theme }) => theme.colors.bgPrimary};

  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;
const GlitchTitle = styled(motion.h1)`
  /* same as Title */
  position: relative;

  &::before, &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0.08;
  }
  &::before { color: #FF2D6B; transform: translate(-2px, 0); }
  &::after  { color: #3B82F6; transform: translate(2px, 0); }

  &:hover::before { animation: glitch-clip 0.3s steps(5) infinite; }
  &:hover::after  { animation: glitch-clip 0.3s steps(5) infinite reverse; }

  @keyframes glitch-clip {
    0%  { clip-path: inset(0 0 95% 0); }
    20% { clip-path: inset(30% 0 50% 0); }
    40% { clip-path: inset(60% 0 20% 0); }
    60% { clip-path: inset(10% 0 80% 0); }
    80% { clip-path: inset(80% 0 5% 0); }
    100%{ clip-path: inset(0 0 95% 0); }
  }
`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/admin");
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page>
    <Card
  initial={{ scale: 0.85, opacity: 0, rotateX: 15 }}
  animate={{ scale: 1, opacity: 1, rotateX: 0 }}
  transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
  style={{ perspective: 1000 }}
>
   <ScanLine
    initial={{ top: '0%' }}
    animate={{ top: ['0%', '100%', '0%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
  />
 <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <IconBox>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#EDE8DC" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </IconBox>

          <GlitchTitle data-text="Admin Access">Admin Access</GlitchTitle>
          <Subtitle>Sign in to manage your portfolio</Subtitle>
        </Header>

        {error && (
          <ErrorBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {error}
          </ErrorBox>
        )}

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Email</Label>

            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
            />
          </Field>

          <Field>
            <Label>Password</Label>

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </Field>

          <MagneticButton type="submit">
            {isLoading ? "Signing in..." : "Sign In →"}
          </MagneticButton>
        </Form>
</Card>
    </Page>
  );
};

export default AdminLogin;
```


### src\pages\Blog.jsx

```
// src/pages/Blog.jsx
import { useState } from "react";
import styled from "styled-components";
import BlogCard from "../components/cards/BlogCard";
import PageLoader from "../components/ui/PageLoader";
import PageHero from "../components/ui/PageHero";
import { useBlogs } from "../hooks/useApiData";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  /* Removed max-width constraint — now full width with inner grid */
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 460px;
  padding: 0.75rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  outline: none;
  margin-bottom: 2.5rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

// 2-column grid on desktop, 1-column on mobile
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const EmptyState = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
  grid-column: 1 / -1;
`;

const LoadMoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const LoadMoreBtn = styled.button`
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

  &:active {
    transform: translateY(0);
  }
`;

const CountLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Blog = () => {
  const [search, setSearch]     = useState("");
  const [visible, setVisible]   = useState(INITIAL_COUNT);
  
  const { data: posts = [], isLoading } = useBlogs();

  if (isLoading) return <PageLoader label="Loading posts…" />;

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(search.toLowerCase())
  );

  const shown      = filtered.slice(0, visible);
  const hasMore    = visible < filtered.length;
  const remaining  = filtered.length - visible;

  const handleLoadMore = () => {
    setVisible((v) => v + LOAD_MORE_COUNT);
  };

  // Reset visible count when search changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setVisible(INITIAL_COUNT);
  };

  return (
    <Page>
      <PageHero
        number="03"
        eyebrow="The Field Journal"
        title="Blog"
        titleAccent="Posts"
        subtitle="Thoughts, tutorials, and deep-dives from 4 years of building things."
        badge={`${posts.length} Articles`}
      />

      <SearchInput
        placeholder="Search posts..."
        value={search}
        onChange={handleSearch}
      />

      <Grid>
        {shown.length === 0 ? (
          <EmptyState>No posts found.</EmptyState>
        ) : (
          shown.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        )}
      </Grid>

      {hasMore && (
        <LoadMoreWrap>
          <LoadMoreBtn onClick={handleLoadMore}>
            Load more ↓
          </LoadMoreBtn>
          <CountLabel>
            Showing {shown.length} of {filtered.length}
          </CountLabel>
        </LoadMoreWrap>
      )}
    </Page>
  );
};

export default Blog;
```


### src\pages\BlogDetails.jsx

```
// src/pages/BlogDetails.jsx
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { getCategoryColor } from "../utils/categoryColors";
import { useBlogDetail } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";
import { useTheme } from 'styled-components';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 4rem;
`;

const Inner = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;

const BackBtn = styled.button`
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

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  margin-bottom: 1.25rem;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 5vw, 3rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};

  span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderDefault};
    margin-top: 1rem;
  }
`;

const Content = styled(motion.div)`
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    margin: 3rem 0 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    padding-left: 1rem;
    &::before {
      content: "";
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.accentPink};
      border-radius: 2px;
    }
  }
  h3 { font-size: 1.2rem; margin: 2rem 0 0.75rem; color: ${({ theme }) => theme.colors.textPrimary}; }
  p  { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
  a  { color: ${({ theme }) => theme.colors.accentBlue}; text-decoration: underline; text-underline-offset: 3px; }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.75rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
    border-radius: 0 8px 8px 0;
  }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color:${({ theme }) => theme.colors.codeText};
  }
  code {
    background:${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  img { max-width: 100%; border-radius: 10px; margin: 1.5rem 0; border: 1px solid ${({ theme }) => theme.colors.borderDefault}; }
  ul, ol { padding-left: 1.5rem; margin-bottom: 1.4rem; li { margin-bottom: 0.5rem; } }
  hr { border: none; border-top: 1px solid ${({ theme }) => theme.colors.borderDefault}; margin: 2.5rem 0; }
`;

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const theme = useTheme();
  // Reads from React Query cache — no API call if visited before within staleTime
  const { data: blog, isLoading } = useBlogDetail(slug);

  if (isLoading) return <PageLoader label="Loading post…" />;
  if (!blog)     return <Page><Inner><p>Post not found.</p></Inner></Page>;

  const catColors = getCategoryColor(blog.category,theme.mode);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate("/blog")}>
          <ArrowLeft size={14} /> Back to Blog
        </BackBtn>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {blog.category && (
            <CategoryBadge $c={catColors}>{blog.category}</CategoryBadge>
          )}

          <Title
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {blog.title}
          </Title>

          <MetaRow>
            <span><Clock size={13} />{blog.read_time || "5 min read"}</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </span>
          </MetaRow>

          <Content
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blog.content_type === "text"
              ? <p>{blog.content}</p>
              : <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            }
          </Content>
        </motion.div>
      </Inner>
    </Page>
  );
};

export default BlogDetail;
```


### src\pages\CaseStudies.jsx

```
// src/pages/CaseStudies.jsx
import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/cards/ProjectCard";
import PageHero from "../components/ui/PageHero";
import { useCaseStudies } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LoadMoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const LoadMoreBtn = styled.button`
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

  &:active {
    transform: translateY(0);
  }
`;

const CountLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const CaseStudies = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const { data: projects = [], isLoading } = useCaseStudies();

  if (isLoading) return <PageLoader label="Loading projects…" />;

  const shown   = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <Page>
      <PageHero
        number="02"
        eyebrow="Mission Dossier"
        title="Case"
        titleAccent="Studies"
        subtitle="Full-stack projects, technical write-ups, and production work."
        badge={`${projects.length} Projects`}
      />

      <Grid>
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>

      {hasMore && (
        <LoadMoreWrap>
          <LoadMoreBtn onClick={() => setVisible((v) => v + LOAD_MORE_COUNT)}>
            Load more ↓
          </LoadMoreBtn>
          <CountLabel>
            Showing {shown.length} of {projects.length}
          </CountLabel>
        </LoadMoreWrap>
      )}
    </Page>
  );
};

export default CaseStudies;
```


### src\pages\CaseStudyDetails.jsx

```
// src/pages/CaseStudyDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategoryColor } from "../utils/categoryColors";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Tag from "../components/ui/Tag";
import PageLoader from "../components/ui/PageLoader";
import { useCaseStudyDetail } from "../hooks/useApiData";
import { styled, useTheme } from "styled-components";


const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 5rem;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const BackBtn = styled.button`
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

const CategoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ $c }) => $c?.bg || 'rgba(255,255,255,0.06)'};
  border: 1px solid ${({ $c }) => $c?.border || 'rgba(255,255,255,0.12)'};
  color: ${({ $c }) => $c?.text || '#9BA1B0'};
  white-space: nowrap;
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 680px;
`;

const Thumbnail = styled(motion.img)`
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const TechRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Content = styled(motion.div)`
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    margin: 3rem 0 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    padding-left: 1rem;
    &::before {
      content: "";
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.accentPink};
      border-radius: 2px;
    }
  }
  h3 { font-size: 1.2rem; margin: 2rem 0 0.75rem; color: ${({ theme }) => theme.colors.textPrimary}; }
  p  { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
  img { max-width: 100%; border-radius: 10px; margin: 1.5rem 0; border: 1px solid ${({ theme }) => theme.colors.borderDefault}; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
  }
  code {
    background:${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    color: ${({ theme }) => theme.colors.codeText};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  pre code { background: none; color: inherit; padding: 0; }
  ul, ol { padding-left: 1.5rem; margin-bottom: 1.4rem; li { margin-bottom: 0.5rem; } }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 45, 107, 0.3);
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      border-color: ${({ theme }) => theme.colors.accentPink};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  // Reads from React Query cache — no API call if visited before within staleTime
  const { data, isLoading } = useCaseStudyDetail(slug);

  if (isLoading) return <PageLoader label="Loading project…" />;
  if (!data)     return <Page><Inner><p>Project not found.</p></Inner></Page>;

  const tags = data.tech_stack
    ? data.tech_stack.split(",").map((t) => t.trim())
    : [];
  const catColors = getCategoryColor(data.category);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate("/case-studies")}>
          <ArrowLeft size={14} /> Back to Case Studies
        </BackBtn>

        <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {data.category && (
                <CategoryRow>
                  {(() => {
                    const categories = data.category
                      .split(",")
                      .map((cat) => cat.trim())
                      .filter(Boolean);

                    const displayCats = categories
                   

                    return (
                      <>
                        {displayCats.map((cat, i) => (
                          <CategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                            {cat}
                          </CategoryBadge>
                        ))}
                        
                  
                      </>
                    );
                  })()}
                </CategoryRow>
              )}

              <Title>{data.title}</Title>
              <Summary>{data.summary}</Summary>
              
              <TechRow>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TechRow>
            </motion.div>

        {data.thumbnail && (
          <Thumbnail
            src={data.thumbnail}
            alt={data.title}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}

        <Content
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <LinkRow>
          {data.github_url && (
            <LinkBtn href={data.github_url} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </LinkBtn>
          )}
          {data.live_url && (
            <LinkBtn href={data.live_url} target="_blank" rel="noreferrer" className="outline">
              <ExternalLink size={15} /> Live Site
            </LinkBtn>
          )}
        </LinkRow>
      </Inner>
    </Page>
  );
};

export default CaseStudyDetails;
```


### src\pages\Contact.jsx

```
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingInput, FloatingTextArea } from "../components/ui/FloatingInput";
import MagneticButton from "../components/ui/MagneticButton";
import { contactAPI } from "../services/apis";
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/siteData";

/* ─── Data ─────────────────────────────────────────── */
const SOCIALS = [
  { icon: Github,   label: "GitHub",    href: `${personalInfo.socials.github}`,   handle: "@darshan12-code" },
  { icon: Linkedin, label: "LinkedIn",  href: `${personalInfo.socials.linkedin}`, handle: "darshan-agrawal-012" },
  { icon: Twitter,  label: "Twitter",   href: `${personalInfo.socials.twitter}`,  handle: "@darshan_agrawal" },
  { icon: Mail,     label: "Email",     href: `mailto:${personalInfo.email}`,      handle: `${personalInfo.email}` },
];

const AVAILABILITY = [
  { label: "Status",    value: "Open to work",         color: "#00E89D" },
  { label: "Type",      value: "Full-time / Freelance / Contract", color: "#3B82F6" },
  { label: "Location",  value: "Remote Worldwide",      color: "#FF2D6B" },
  { label: "Response",  value: "Within 24 hours",       color: "#FF9F4A" },
];

/* ─── Component ─────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4500);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contactAPI.send(formData);
      showToast("success", "Message received! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      showToast("error", "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      {/* ── Page Header ── */}
      <Header>
        <HeaderInner
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* <Eyebrow>05 — GET IN TOUCH</Eyebrow> */}
          <H1>
            Let's Build<br />
            <GradientText>Something Great</GradientText>
          </H1>
          <HeaderSub>
            Have a project in mind, a role to fill, or just want to talk tech?
            I'm always open to new conversations.
          </HeaderSub>

          <RemoteBadge>
            <PulseDot />
            Available for remote work
          </RemoteBadge>
        </HeaderInner>
      </Header>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <Toast
            $type={toast.type}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ToastIcon>{toast.type === "success" ? "✓" : "✕"}</ToastIcon>
            {toast.msg}
          </Toast>
        )}
      </AnimatePresence>
      {/* ── Two-col layout ── */}
      <BodyGrid>

        {/* LEFT — info panel */}
        <InfoCol
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {/* Availability cards */}
          <InfoCard>
            <InfoCardTitle>Availability</InfoCardTitle>
            <AvailList>
              {AVAILABILITY.map(({ label, value, color }) => (
                <AvailRow key={label}>
                  <AvailDot style={{ background: color }} />
                  <AvailLabel>{label}</AvailLabel>
                  <AvailValue style={{ color }}>{value}</AvailValue>
                </AvailRow>
              ))}
            </AvailList>
          </InfoCard>

          {/* Location */}
          <InfoCard>
            <InfoCardTitle>
              <MapPin size={14} style={{ marginRight: "0.4rem", verticalAlign: "middle" }} />
              Location
            </InfoCardTitle>
            <LocationText>Based in India — working globally</LocationText>
            <TimeRow>
              <Clock size={13} />
              <span id="localTime">IST (UTC+5:30)</span>
            </TimeRow>
          </InfoCard>

          {/* Socials */}
          <InfoCard>
            <InfoCardTitle>Find me online</InfoCardTitle>
            <SocialList>
              {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                <SocialItem
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  <SocialIconWrap>
                    <Icon size={15} />
                  </SocialIconWrap>
                  <SocialText>
                    <SocialLabel>{label}</SocialLabel>
                    <SocialHandle>{handle}</SocialHandle>
                  </SocialText>
                  <ArrowRight size={13} className="arrow" />
                </SocialItem>
              ))}
            </SocialList>
          </InfoCard>
        </InfoCol>

        {/* RIGHT — form */}
        <FormCol
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <FormCard>
            <FormCardTitle>Send a Message</FormCardTitle>
            <FormCardSub>
              Fill in the details below and I'll reply as soon as possible.
            </FormCardSub>

            <Form onSubmit={handleSubmit}>
              <FloatingInput
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingTextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <SubmitBtn type="submit" disabled={loading}>
                <span>{loading ? "Sending…" : "Send Message"}</span>
                {!loading && <ArrowRight size={16} />}
                {loading && <Spinner />}
              </SubmitBtn>
            </Form>
          </FormCard>
        </FormCol>
      </BodyGrid>

    </Page>
  );
};

export default Contact;

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  padding-bottom: 6rem;
`;

/* ── Header ── */
const Header = styled.section`
  padding: clamp(6rem, 12vh, 9rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vh, 4rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;

  /* Radial glow behind heading */
  &::before {
    content: "";
    position: absolute;
    top: 0; right: 0;
    width: 31.25rem; height: 25rem;
    background: radial-gradient(ellipse at top right, rgba(255,45,107,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeaderInner = styled(motion.div)`
  max-width: 42.5rem;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  margin-bottom: 1rem;
`;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeaderSub = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 1.75rem;
`;

const pulseDotAnim = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.4); }
`;

const RemoteBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 1.1rem;
  font-size: 0.78rem; font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0,232,157,0.07);
  border: 1px solid rgba(0,232,157,0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const PulseDot = styled.span`
  width: 8px; height: 8px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentGreen};
  animation: ${pulseDotAnim} 2s ease-in-out infinite;
  flex-shrink: 0;
`;

/* ── Body grid ── */
const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2.5rem;
  padding: clamp(2.5rem, 5vh, 4rem) clamp(1.5rem, 6vw, 5rem);
  max-width: 100vw;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* ── Info col ── */
const InfoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
  }
`;

const InfoCardTitle = styled.h3`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

/* Availability rows */
const AvailList = styled.div`display: flex; flex-direction: column; gap: 0.6rem;`;

const AvailRow = styled.div`
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.875rem;
`;

const AvailDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
`;

const AvailLabel = styled.span`
  color: ${({ theme }) => theme.colors.textTertiary};
  min-width: 70px; font-size: 0.82rem;
`;

const AvailValue = styled.span`
  font-weight: 600; font-size: 0.85rem;
`;

/* Location */
const LocationText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.6rem;
`;

const TimeRow = styled.div`
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* Socials */
const SocialList = styled.div`display: flex; flex-direction: column; gap: 0.5rem;`;

const SocialItem = styled.a`
  display: flex; align-items: center; gap: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  .arrow { opacity: 0; transform: translateX(-4px); transition: all 0.2s; margin-left: auto; color: ${({ theme }) => theme.colors.gradientPinkBlue}; }

  &:hover {
    background: rgba(255,45,107,0.06);
    border-color: rgba(255,45,107,0.15);
    .arrow { opacity: 1; transform: translateX(0); }
  }
`;

const SocialIconWrap = styled.div`
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;
`;

const SocialText = styled.div`display: flex; flex-direction: column; gap: 1px;`;
const SocialLabel = styled.span`font-size: 0.8rem; font-weight: 600; color: ${({ theme }) => theme.colors.textPrimary};`;
const SocialHandle = styled.span`font-size: 0.72rem; color: ${({ theme }) => theme.colors.textTertiary};`;

/* ── Form col ── */
const FormCol = styled(motion.div)``;

const FormCard = styled.div`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 18px;
  position: relative;
  overflow: hidden;

  /* Pink glow top-left corner */
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 200px; height: 200px;
    background: radial-gradient(circle at top left, rgba(255,45,107,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const FormCardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
  position: relative;
`;

const FormCardSub = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
`;

/* Gradient submit button — matches global button style */
const spinAnim = keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`;
const Spinner = styled.span`
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  animation: ${spinAnim} 0.7s linear infinite;
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
  padding: 0.95rem 2.25rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  align-self: flex-start;

  /* Shimmer sweep on hover */
  &::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.55s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(255,45,107,0.38), 0 4px 16px rgba(59,130,246,0.2);
    &::after { transform: translateX(100%); }
  }

  &:active { transform: translateY(0); box-shadow: none; }

  &:disabled {
    opacity: 0.65; cursor: not-allowed;
    transform: none; box-shadow: none;
  }

  @media (max-width: 480px) { align-self: stretch; }
`;

/* ── Toast ── */
const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem; right: 2rem;
  z-index: 9999;
  display: flex; align-items: center; gap: 0.75rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  font-size: 0.875rem; font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  background: ${({ $type }) => $type === "success" ? "rgba(0,232,157,0.1)" : "rgba(239,68,68,0.1)"};
  border: 1px solid ${({ $type }) => $type === "success" ? "rgba(0,232,157,0.3)" : "rgba(239,68,68,0.3)"};
  color: ${({ $type }) => $type === "success" ? "#00e89d" : "#ef4444"};
  max-width: 360px;

  @media (max-width: 640px) {
    right: 1rem; left: 1rem; bottom: 1rem; max-width: none;
  }
`;

const ToastIcon = styled.span`
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: currentColor; color: #0D0F14;
  font-size: 0.75rem; font-weight: 800; flex-shrink: 0;
`;
```


### src\pages\Home.jsx

```
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillsMarquee from '../components/home/SkillsMarquee';
import Timeline from '../components/home/Timeline';
import Counters from '../components/home/Counters';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { usePortfolioData } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';


const Home = () => {
  const { data, isLoading, error } = usePortfolioData();

  if (isLoading) return <PageLoader label="Loading data..." />;
  if (error) return <PageLoader label="Loading data..." />;

  return (
    <>
      <Hero personalInfo={data.personalInfo} />
      <About personalInfo={data.personalInfo} />
      <SkillsMarquee skills={data.skills} />
      <Counters counters={data.counters} />
      <Timeline experience={data.experience} />
      <FeaturedProjects />
    </>
  );
};

export default Home;
```


### src\services\apis.jsx

```
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://portfolio-backend-x9am.onrender.com" || "http://127.0.0.1:5000/portfolio";

const api = axios.create({
  baseURL: API_BASE,
  // headers: { "Content-Type": "application/json" },
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      const refresh = localStorage.getItem("refresh_token");

      if (refresh) {
        try {
          const { data } = await axios.post(
            `${API_BASE}/auth/refresh`,
            {},
            {
              headers: { Authorization: `Bearer ${refresh}` },
            }
          );

          localStorage.setItem("access_token", data.access_token);

          original.headers.Authorization = `Bearer ${data.access_token}`;

          return api(original);
        } catch (err) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/admin/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

// ====================
// AUTH API
// ====================

export const authAPI = {
  login: (email, password) =>
    api.post("/auth/login", { email, password }),

  me: () => api.get("/auth/me"),
};

// ====================
// BLOG API
// ====================

export const blogAPI = {
  getAll: (page = 1, limit = 10) =>
    api.get("/blogs", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/blogs/${slug}`),

  create: (data) => api.post("/blogs", data),

  update: (id, data) => api.put(`/blogs/${id}`, data),

  delete: (id) => api.delete(`/blogs/${id}`),
};

// ====================
// CASE STUDY API
// ====================
export const caseStudyAPI = {
  getFeatured: () => api.get("/case-studies/featured"),

  getAll: (page = 1, limit = 10) =>
    api.get("/case-studies", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/case-studies/${slug}`),

  create: (data) => api.post("/case-studies", data),

  update: (id, data) => api.put(`/case-studies/${id}`, data),

  delete: (id) => api.delete(`/case-studies/${id}`),
};
// ====================
// CONTACT API
// ====================

export const contactAPI = {
  send: (data) =>
    api.post("/contact", data),

  getAll: (page = 1, limit = 10) =>
    api.get("/contact", { params: { page, limit } }),
};


export const uploadAPI = {
  // Images for case study preview
  uploadImages: (formData) => api.post("/upload", formData),

  // Media inside editor (images/videos)
  uploadMedia: (file, type) => {
    const form = new FormData();
    form.append(type === "video" ? "videos" : "images", file);
    return api.post("/upload", form);
  }
};

export const portfolioAPI = {
  getAll: () => api.get("/portfolio-data/data"),
};
export default api;

```


### src\services\queryClient.jsx

```
// src/queryClient.js
// Centralized React Query client with caching config.
// staleTime: how long cached data is considered fresh (no refetch)
// gcTime:    how long unused cache stays in memory before garbage collected
//
// With these settings:
// - Navigating Blog → Case Studies → Blog: NO API call, instant render
// - Data refreshes only after staleTime expires (5 min for lists, 10 min for details)
// - If user leaves tab and comes back, no unnecessary refetch

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data stays "fresh" for 5 minutes — no refetch on re-mount/navigation
      staleTime: 5 * 60 * 1000,
      // Keep unused cache for 15 minutes (survives page navigation)
      gcTime: 15 * 60 * 1000,
      // Don't refetch when user switches back to the tab
      refetchOnWindowFocus: false,
      // Don't refetch on reconnect unless data is stale
      refetchOnReconnect: "always",
      // Retry failed requests once
      retry: 1,
      // Don't refetch on component remount if data is fresh
      refetchOnMount: false,
    },
  },
});

export default queryClient;
```


### src\styles\globalStyles.jsx

```
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* FIXED: #root was getting max-width:1280px + padding:2rem from App.css
     on desktop which is fine, but on mobile we reset it to prevent 
     the extra right-side space */
  #root {
    max-width: 100%;
    padding: 0;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::selection {
    background: rgba(255, 45, 107, 0.3);
    color: #fff;
  }

  ::-webkit-scrollbar { width: 0.375rem; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgPrimary}; }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.1875rem;
  }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  /* Keyboard nav focus rings */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gradientPinkBlue};
    outline-offset: 3px;
    border-radius: 4px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gradientPinkBlue};
    outline-offset: 3px;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.gradientPinkBlueGlow};
  }
`;

export default GlobalStyles;
```


### src\styles\theme.js

```
// src/styles/theme.js

const darkColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#0D0F14',
  bgSecondary:          '#12141A',
  bgTertiary:           '#181B23',
  bgGlass:              'rgba(13, 15, 20, 0.72)',
  bgGlassLight:         'rgba(255, 255, 255, 0.04)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#EAEDF3',
  textSecondary:        '#9BA1B0',
  textTertiary:         '#5C6170',
  textWhite:            '#FFFFFF',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#FF2D6B',          // raw hex, use for text/icon
  accentPinkGlow:              'rgba(255, 45, 107, 0.35)',   // hover shadows
  accentPinkFocus:             'rgba(255, 45, 107, 0.10)',   // focus rings, hover overlays
  accentPinkSubtleBg:          'rgba(255, 45, 107, 0.09)',   // chip / badge backgrounds
  accentPinkSubtleBorder:      'rgba(255, 45, 107, 0.18)',   // chip / badge borders
  accentPinkSubtleBg2:         'rgba(255, 45, 107, 0.08)',   // slightly lighter variant (preview badge)
  accentPinkSubtleBorder2:     'rgba(255, 45, 107, 0.20)',   // preview badge border
  accentPinkRingShadow:        'rgba(255, 45, 107, 0.06)',   // modal card ring shadow
  accentPinkSidebarBorder:     'rgba(255, 45, 107, 0.28)',   // sidebar active item border
  accentPinkSidebarBg:         'rgba(255, 45, 107, 0.07)',   // sidebar active item bg

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#3B82F6',
  accentBlueBg:         'rgba(59, 130, 246, 0.12)',          // preview btn bg
  accentBlueBorder:     'rgba(59, 130, 246, 0.25)',          // preview btn border
  accentBlueBgHover:    'rgba(59, 130, 246, 0.20)',          // preview btn hover bg

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#00E89D',
  accentGreenGlow:      'rgba(0, 232, 157, 0.25)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#FF6B4A',
  accentCrimson:        '#DC2626',
  accentDanger:         '#EF4444',              // icon danger color (brighter red)
  accentDangerLight:    '#FF6060',              // icon danger hover color
  accentDangerBg:       'rgba(239, 68, 68, 0.12)',    // danger icon btn bg
  accentDangerBgHover:  'rgba(239, 68, 68, 0.22)',    // danger icon btn hover bg

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(255, 255, 255, 0.06)',
  borderHover:          'rgba(255, 255, 255, 0.12)',
  borderAccent:         'rgba(255, 45, 107, 0.40)',   // strong pink border (form focus etc.)
  borderSubtle:         'rgba(255, 255, 255, 0.08)',  // cancel btn border / modal btn

  // ── Surfaces (alpha whites for glass / inactive elements) ─────
  surfaceSubtle:        'rgba(255, 255, 255, 0.05)',  // cancel btn bg, mobile tab active press
  surfaceLight:         'rgba(255, 255, 255, 0.10)',  // toggle track, radio chip inactive

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.70)',        // modal backdrop

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.4)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.25)',   // card hover (was inline)
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.6)',   // original shadowCardHover
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.55)',  // modal card shadow
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.60)',  // preview modal shadow
  shadowGlowPink:       '0 0 40px rgba(255, 45, 107, 0.2)',
  shadowGlowGreen:      '0 0 40px rgba(0, 232, 157, 0.15)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.3)',
  shadowPinkHover:      '0 8px 28px rgba(255, 45, 107, 0.35)',  // create btn hover
  shadowBlueBtnHover:   '0 6px 20px rgba(255, 45, 107, 0.35)',  // save btn hover (pink-blue)

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.40)',        // <pre> background in preview

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%)',
  gradientHero:         'linear-gradient(135deg, #0D0F14 0%, #1E3A5F 50%, #0D0F14 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #0D0F14 100%)',
  gradientText:         'linear-gradient(90deg, #FF2D6B, #FF6B4A, #00E89D, #3B82F6)',
  gradientRing:         'conic-gradient(#FF2D6B, #FF6B4A, #00E89D, #3B82F6, #FF2D6B)',
  gradientShimmer:      'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%)',  // card shimmer bar

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(255, 255, 255, 0.03)',
  comicPanel:           'rgba(255, 255, 255, 0.02)',
  codeGradientBg:     'linear-gradient(90deg, rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%)',
  codeGradientBorder: 'rgba(255, 45, 107, 0.28)',
  codeGhostBg:        'rgba(255, 255, 255, 0.06)',
  codeGhostBorder:    'rgba(255, 255, 255, 0.10)',
  codeText:          '#fff',
};

const lightColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#F5F0E8',
  bgSecondary:          '#EDE8DC',
  bgTertiary:           '#E0D9CC',
  bgGlass:              'rgba(245, 240, 232, 0.85)',
  bgGlassLight:         'rgba(0, 0, 0, 0.03)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#1A1A2E',
  textSecondary:        '#3D3D5C',
  textTertiary:         '#7A7A99',
  textWhite:            '#1A1A2E',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#E8174A',
  accentPinkGlow:              'rgba(232, 23, 74, 0.20)',
  accentPinkFocus:             'rgba(232, 23, 74, 0.10)',
  accentPinkSubtleBg:          'rgba(232, 23, 74, 0.07)',
  accentPinkSubtleBorder:      'rgba(232, 23, 74, 0.14)',
  accentPinkSubtleBg2:         'rgba(232, 23, 74, 0.06)',
  accentPinkSubtleBorder2:     'rgba(232, 23, 74, 0.16)',
  accentPinkRingShadow:        'rgba(232, 23, 74, 0.05)',
  accentPinkSidebarBorder:     'rgba(232, 23, 74, 0.22)',
  accentPinkSidebarBg:         'rgba(232, 23, 74, 0.06)',

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#1D4ED8',
  accentBlueBg:         'rgba(29, 78, 216, 0.10)',
  accentBlueBorder:     'rgba(29, 78, 216, 0.22)',
  accentBlueBgHover:    'rgba(29, 78, 216, 0.18)',

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#007A52',
  accentGreenGlow:      'rgba(0, 122, 82, 0.15)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#D44D28',
  accentCrimson:        '#B91C1C',
  accentDanger:         '#DC2626',
  accentDangerLight:    '#EF4444',
  accentDangerBg:       'rgba(220, 38, 38, 0.10)',
  accentDangerBgHover:  'rgba(220, 38, 38, 0.18)',

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(0, 0, 0, 0.08)',
  borderHover:          'rgba(0, 0, 0, 0.16)',
  borderAccent:         'rgba(232, 23, 74, 0.30)',
  borderSubtle:         'rgba(0, 0, 0, 0.10)',

  // ── Surfaces ─────────────────────────────────────────────────
  surfaceSubtle:        'rgba(0, 0, 0, 0.04)',
  surfaceLight:         'rgba(0, 0, 0, 0.06)',

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.50)',

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.10)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.14)',
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.18)',
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.20)',
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.24)',
  shadowGlowPink:       '0 0 40px rgba(232, 23, 74, 0.12)',
  shadowGlowGreen:      '0 0 30px rgba(0, 122, 82, 0.10)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.15)',
  shadowPinkHover:      '0 8px 28px rgba(232, 23, 74, 0.22)',
  shadowBlueBtnHover:   '0 6px 20px rgba(232, 23, 74, 0.22)',

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.06)',

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #E8174A 0%, #1D4ED8 100%)',
  gradientHero:         'linear-gradient(135deg, #F5F0E8 0%, #C8D8EC 50%, #F5F0E8 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #F5F0E8 100%)',
  gradientText:         'linear-gradient(90deg, #E8174A, #D44D28, #007A52, #1D4ED8)',
  gradientRing:         'conic-gradient(#E8174A, #D44D28, #007A52, #1D4ED8, #E8174A)',
  gradientShimmer:      'linear-gradient(90deg, #E8174A 0%, #1D4ED8 50%, #E8174A 100%)',

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(0, 0, 0, 0.04)',
  comicPanel:           'rgba(0, 0, 0, 0.02)',

  codeGradientBg:     'linear-gradient(90deg, rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%)',
  codeGradientBorder: 'rgba(232, 23, 74, 0.22)',
  codeGhostBg:        'rgba(0, 0, 0, 0.06)',
  codeGhostBorder:    'rgba(0, 0, 0, 0.12)',
  codeText:          '#1A1A2E',
};

export const darkTheme = {
  colors: darkColors,
  mode: 'dark',
  fonts: {
    heading: "'Clash Display', sans-serif",
    body:    "'DM Sans', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
  fontSizes: {
    heroName: 'clamp(3rem, 8vw, 7rem)',
    heroRole: 'clamp(1rem, 2.5vw, 1.5rem)',
    h1:       'clamp(2rem, 4vw, 3.5rem)',
    h2:       'clamp(1.5rem, 3vw, 2.5rem)',
    h3:       '1.25rem',
    body:     '1rem',
    small:    '0.875rem',
    xs:       '0.75rem',
  },
  spacing: {
    xs:      '0.5rem',
    sm:      '1rem',
    md:      '1.5rem',
    lg:      '2rem',
    xl:      '3rem',
    xxl:     '5rem',
    section: 'clamp(4rem, 10vh, 8rem)',
  },
  borderRadius: {
    sm:   '0.375rem',
    md:   '0.75rem',
    lg:   '1.25rem',
    xl:   '1.75rem',
    full: '624.9375rem',
  },
  transitions: {
    fast:    '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth:  '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slow:    '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring:  '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    behind:    -1,
    base:       0,
    card:      10,
    navbar:   100,
    modal:    200,
    toast:    300,
    scrollbar: 400,
  },
};

export const lightTheme = {
  ...darkTheme,
  colors: lightColors,
  mode: 'light',
};


// Keep backward compat
export const theme = darkTheme;
```


### src\utils\categoryColors.js

```
// src/utils/categoryColors.js

const CATEGORY_MAP = {
  dark: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'opinion':     { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'deep-dive':   { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'career':      { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'technology':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'article':     { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'frontend':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'backend':     { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'data':        { bg: 'rgba(250,204,21,0.10)',   border: 'rgba(250,204,21,0.22)',   text: '#FCD34D' },
    'ml':          { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'devops':      { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'database':    { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'case study':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
  },
  light: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'opinion':     { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'deep-dive':   { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'career':      { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'technology':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'article':     { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'frontend':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'backend':     { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'data':        { bg: 'rgba(180,137,0,0.08)',    border: 'rgba(180,137,0,0.20)',    text: '#92700A' },
    'ml':          { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'devops':      { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'database':    { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'case study':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
  },
};

const FALLBACK = {
  dark:  { bg: 'rgba(255, 255, 255, 0.04)', border: 'rgba(255,255,255,0.12)', text: '#9BA1B0' },
  light: { bg: 'rgba(0,0,0,0.06)',       border: 'rgba(0,0,0,0.12)',       text: '#3D3D5C' },
};

// mode comes from theme.mode — 'dark' | 'light'
export const getCategoryColor = (category = '', mode = 'dark') => {
  const key = category.toLowerCase().trim().replace(/\s+/g, '-');
  return CATEGORY_MAP[mode]?.[key] ?? FALLBACK[mode];
};
```


### src\App.css

```
/* App.css
   FIXED: Removed max-width and padding from #root — these were causing
   extra right-side space on mobile because they conflicted with full-width
   fixed/absolute positioned elements (navbar, waves, floating shapes).
   Layout padding is now handled per-section in individual components. */

#root {
  /* max-width: 1280px; ← REMOVED */
  /* padding: 2rem;     ← REMOVED */
  /* text-align: center;← REMOVED */
  width: 100%;
  overflow-x: hidden;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

@keyframes float-drift {
  0%, 100% { transform: translateY(0) rotate(var(--start-rotation)); }
  25%      { transform: translateY(-20px) rotate(calc(var(--start-rotation) + 5deg)); }
  50%      { transform: translateY(-10px) rotate(calc(var(--start-rotation) + 10deg)); }
  75%      { transform: translateY(-25px) rotate(calc(var(--start-rotation) + 3deg)); }
}
@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.floating-shape {
  position: absolute;
  animation: float-drift var(--duration, 25s) ease-in-out infinite,
             slow-spin var(--spin-duration, 60s) linear infinite;
  will-change: transform;
  filter: blur(0.5px);
}
```


### src\App.jsx

```
// src/App.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

// CHANGED: import the configured client instead of creating inline with no options



import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import NoiseOverlay from "./components/layout/NoiseOverlay";
import FloatingShapes from "./components/effects/FloatingShapes";
import WaterWaves from "./components/effects/WaterWaves";
import PageTransition from "./components/layout/PageTransition";
import ScrollToTop from "./components/layout/ScrollToTop";
import LoadingScreen from "./components/ui/LoadingScreen";

import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { darkTheme, lightTheme } from "./styles/theme";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./components/ui/NotFound";
import BlogDetail from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import CustomCursor from "./components/ui/CustomCursor";
import ComicGrid from "./components/effects/ComicGrid";
import queryClient from "./services/queryClient";
import GlobalStyles from "./styles/globalStyles";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"                   element={<Home />} />
            <Route path="/case-studies"       element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
            <Route path="/blog"               element={<Blog />} />
            <Route path="/blog/:slug"         element={<BlogDetail />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/admin/login"        element={<AdminLogin />} />
            <Route path="/admin"
              element={<ProtectedRoute><Admin /></ProtectedRoute>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
};

const ThemedApp = () => {
  const { isDark } = useTheme();
  return (
    <StyledProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <CustomCursor />
      <NoiseOverlay />
      <ComicGrid />
      <FloatingShapes
        mobileMode="gyro"
        gyroSensitivity={30}
        desktopSpin={false} 
        desktopParallax={true}
      />
      <WaterWaves />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </StyledProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemedApp />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
```


### src\index.css

```
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  /* FIXED: removed "place-items: center" and "display: flex" which caused 
     horizontal overflow / extra right-side space on mobile */
  min-width: 20rem;
  min-height: 100vh;
  /* Prevent horizontal scroll globally */
  overflow-x: hidden;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 0.5rem;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 0.25rem auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

/* globalStyles.js using createGlobalStyle */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Prevent horizontal overflow at root */
  overflow-x: hidden;
}
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #0D0F14;
  color: #EAEDF3;
  overflow-x: hidden;
  line-height: 1.6;
}
::selection {
  background: rgba(255, 45, 107, 0.3);
  color: #fff;
}
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 0.375rem;
}
::-webkit-scrollbar-track {
  background: #0D0F14;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.1875rem;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
```


### src\main.jsx

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```


### .env

```
# VITE_API_URL=http://127.0.0.1:5000/portfolio
VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### .env.production

```
VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```


### dump.ps1

```
$outputFile = "project_structure.md"
$fence = "``````"

if (Test-Path $outputFile) { Remove-Item $outputFile }

$excludeFolders = @(
    "node_modules",".git",".vite",".vscode",".idea",".next",
    "dist","build","coverage",".cache",".turbo","vendor",
    "public","assets","static","fonts","icons","temp","tmp",
    "__pycache__",".venv","venv","out","generated","migrations"
)

$excludeExt = @(
    ".png",".jpg",".jpeg",".gif",".svg",".ico",
    ".woff",".woff2",".ttf",".eot",
    ".pdf",".docx",".xlsx",".zip",".exe",".dll",
    ".db",".sqlite",".log",".map",".lock",
    ".pyc",".pyo",".bin",".dat",".cache",
    ".tsbuildinfo",".snap",".patch",".bak"
)

$excludeNames = @(
    "package-lock.json","yarn.lock","pnpm-lock.yaml",
    ".DS_Store","Thumbs.db","project_structure.md",
    ".gitignore",".editorconfig","LICENSE","CHANGELOG.md"
)

function Is-Excluded($fullPath) {
    $segments = $fullPath -split "[/\\]"
    foreach ($seg in $segments) {
        if ($excludeFolders -contains $seg) { return $true }
    }
    return $false
}

"## Project Structure`n" | Out-File $outputFile -Encoding UTF8

cmd /c "tree /f /a" 2>$null | Where-Object {
    $line = $_
    -not ($excludeFolders | Where-Object { $line -match [regex]::Escape($_) })
} | Out-File $outputFile -Append -Encoding UTF8

"`n## File Contents`n" | Out-File $outputFile -Append -Encoding UTF8

Get-ChildItem -Recurse -File | Where-Object {
    -not (Is-Excluded $_.FullName) -and
    ($excludeExt -notcontains $_.Extension) -and
    ($excludeNames -notcontains $_.Name) -and
    ($_.Length -lt 150kb)
} | ForEach-Object {
    "`n### $($_.FullName)`n" | Out-File $outputFile -Append -Encoding UTF8
    $fence | Out-File $outputFile -Append -Encoding UTF8
    Get-Content $_.FullName -Encoding UTF8 -ErrorAction SilentlyContinue |
        Out-File $outputFile -Append -Encoding UTF8
    "$fence`n" | Out-File $outputFile -Append -Encoding UTF8
}

Write-Host "Done"
```


### eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```


### index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Darshan Agrawal — Full Stack Engineer</title>
    <meta name="description" content="Portfolio of Darshan Agrawal — Full Stack Engineer specializing in React, Python, and cloud-native applications." />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```


### media.js

```
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
}; 

export const media2 = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
}; 
```


### package.json

```
{
  "name": "my_portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-spring/web": "^10.0.3",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@tanstack/react-query": "^5.90.21",
    "@tiptap/extension-code-block-lowlight": "^3.20.1",
    "@tiptap/extension-image": "^3.20.1",
    "@tiptap/extension-link": "^3.20.1",
    "@tiptap/extension-placeholder": "^3.20.1",
    "@tiptap/extension-text-align": "^3.20.1",
    "@tiptap/extension-underline": "^3.20.1",
    "@tiptap/extension-youtube": "^3.20.1",
    "@tiptap/react": "^3.20.1",
    "@tiptap/starter-kit": "^3.20.1",
    "axios": "^1.13.6",
    "framer-motion": "^12.34.5",
    "lottie-react": "^2.4.1",
    "lowlight": "^3.3.0",
    "lucide-react": "^0.577.0",
    "quill": "^2.0.3",
    "react": "^19.2.0",
    "react-countup": "^6.5.3",
    "react-dom": "^19.2.0",
    "react-flip-toolkit": "^7.2.4",
    "react-icons": "^5.6.0",
    "react-intersection-observer": "^10.0.3",
    "react-parallax-tilt": "^1.7.320",
    "react-router-dom": "^7.13.1",
    "react-spring": "^10.0.3",
    "react-use": "^17.6.0",
    "styled-components": "^6.3.11",
    "swr": "^2.4.1",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@types/styled-components": "^5.1.36",
    "@vitejs/plugin-react": "^5.1.1",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^8.0.0-beta.13"
  },
  "overrides": {
    "vite": "^8.0.0-beta.13"
  }
}
```


### README.md

```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```


### vercel.json

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```


### vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
```

