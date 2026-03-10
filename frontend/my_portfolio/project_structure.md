## Project Structure

|-- public/
|   |-- vite.svg
|-- src/
|   |-- assets/
|   |   |-- myphoto_cutout.png
|   |   |-- myphoto_cutout2.png
|   |   |-- noise.png
|   |   |-- react.svg
|   |-- components/
|   |   |-- admin/
|   |   |   |-- AdminContent.jsx
|   |   |   |-- AdminLogin.jsx
|   |   |   |-- AdminSidebar.jsx
|   |   |   |-- BlogManager.jsx
|   |   |   |-- ProjectManager.jsx
|   |   |-- cards/
|   |   |   |-- BlogCard.jsx
|   |   |   |-- ProjectCard.jsx
|   |   |-- effects/
|   |   |   |-- ComicGrid.jsx
|   |   |   |-- FloatingShapes.jsx
|   |   |   |-- ParallaxWrapper.jsx
|   |   |   |-- SectionWave.jsx
|   |   |   |-- WaterWaves.jsx
|   |   |-- home/
|   |   |   |-- About.jsx
|   |   |   |-- Counters.jsx
|   |   |   |-- FeaturedProjects.jsx
|   |   |   |-- Hero.jsx
|   |   |   |-- SkillsMarquee.jsx
|   |   |   |-- Timeline.jsx
|   |   |-- layout/
|   |   |   |-- Footer.jsx
|   |   |   |-- Navbar.jsx
|   |   |   |-- NoiseOverlay.jsx
|   |   |   |-- PageTransition.jsx
|   |   |   |-- ScrollProgress.jsx
|   |   |   |-- ScrollToTop.jsx
|   |   |-- ui/
|   |   |   |-- CustomCursor.jsx
|   |   |   |-- FilterTab.jsx
|   |   |   |-- FloatingInput.jsx
|   |   |   |-- LoadingScreen.jsx
|   |   |   |-- MagneticButton.jsx
|   |   |   |-- NotFound.jsx
|   |   |   |-- PageHero.jsx
|   |   |   |-- RichEditor.jsx
|   |   |   |-- SectionHeader.jsx
|   |   |   |-- Tag.jsx
|   |   |   |-- ThemeToggle.jsx
|   |-- contexts/
|   |   |-- AuthContext.jsx
|   |   |-- ThemeContext.jsx
|   |-- data/
|   |   |-- siteData.jsx
|   |-- hooks/
|   |   |-- useCountUp.jsx
|   |   |-- useFetch.jsx
|   |   |-- useMousePosition.jsx
|   |   |-- usePost.jsx
|   |   |-- useScrollProgress.jsx
|   |   |-- useScrollReveal.jsx
|   |   |-- useTypewriter.jsx
|   |-- pages/
|   |   |-- Admin.jsx
|   |   |-- AdminLogin.jsx
|   |   |-- Blog.jsx
|   |   |-- BlogDetails.jsx
|   |   |-- CaseStudies.jsx
|   |   |-- CaseStudyDetails.jsx
|   |   |-- Contact.jsx
|   |   |-- Home.jsx
|   |-- services/
|   |   |-- apis.jsx
|   |-- styles/
|   |   |-- globalStyles.js
|   |   |-- theme.js
|   |-- utils/
|   |   |-- categoryColors.js
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- .env
|-- .env.production
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- media.js
|-- package-lock.json
|-- package.json
|-- project_structure.md
|-- README.md
|-- resume.pdf
|-- vercel.json
|-- vite.config.js

## File Contents


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\.env

```
# VITE_API_URL=http://127.0.0.1:5000/portfolio
VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\.env.production

```
VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\.gitignore

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\eslint.config.js

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Darshan Agrawal â€” Full Stack Engineer</title>
    <meta name="description" content="Portfolio of Darshan Agrawal â€” Full Stack Engineer specializing in React, Python, and cloud-native applications." />

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\media.js

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




### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\README.md

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\resume.pdf

```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\vercel.json

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\vite.config.js

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\App.css

```
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
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
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\App.jsx

```
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyles from "./styles/globalStyles";
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

const queryClient = new QueryClient();

/* â”€â”€ Protected route â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

/* â”€â”€ All routes with transitions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/*
        ScrollToTop MUST be here â€” inside the Router context (so it can
        read useLocation) but OUTSIDE AnimatePresence (so it fires
        immediately on pathname change, before the exit animation starts).
      */}
      <ScrollToTop />

      <AnimatePresence mode="wait" initial={false}>
        {/*
          KEY = location.pathname tells AnimatePresence which child changed.
          "wait" mode means: fully finish exit animation, THEN start enter.
          This is what gives the clean comic-page-flip feel.
        */}
        <PageTransition key={location.pathname} locationKey={location.pathname}>
        <Routes location={location} key={location.pathname}>

          <Route path="/"
            element={<Home />}
          />

          <Route path="/case-studies"
            element={<CaseStudies />}
          />

          <Route path="/case-studies/:slug"
            element={<CaseStudyDetails />}
          />

          <Route path="/blog"
            element={<Blog />}
          />

          <Route path="/blog/:slug"
            element={<BlogDetail />}
          />

          <Route path="/contact"
            element={<Contact />}
          />

          <Route path="/admin/login"
            element={<AdminLogin />}
          />

          <Route path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />

        </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
};

/* â”€â”€ Themed shell (no Router here â€” BrowserRouter is in App) â”€â”€ */
const ThemedApp = () => {
  const { isDark } = useTheme();
  const activeTheme = isDark ? darkTheme : lightTheme;

  return (
    <StyledProvider theme={activeTheme}>
      <GlobalStyles />
      <CustomCursor />
      <NoiseOverlay />
      <ComicGrid />
      <FloatingShapes />
      <WaterWaves />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </StyledProvider>
  );
};

/* â”€â”€ Root â€” BrowserRouter lives HERE and ONLY here â”€â”€â”€â”€â”€â”€â”€â”€ */
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\index.css

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
  display: flex;
  place-items: center;
  min-width: 20rem;
  min-height: 100vh;
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\main.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\admin\AdminContent.jsx

```
export const AdminContent = styled.main`
  margin-left: 240px;
  padding: 2rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgPrimary};
`;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\admin\AdminLogin.jsx

```
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\admin\AdminSidebar.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\admin\BlogManager.jsx

```
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\admin\ProjectManager.jsx

```
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\cards\BlogCard.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import { getCategoryColor } from '../../utils/categoryColors';
import { useNavigate } from 'react-router-dom';

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $colors }) => $colors.bg};
  border: 1px solid ${({ $colors }) => $colors.border};
  color: ${({ $colors }) => $colors.text};
`;

const Card = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCard};
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 0.75rem;
`;



const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 0.75rem;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;


const CardLink = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  /* gradient top bar reveals on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    &::before { transform: scaleX(1); }
  }
`;

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  margin-left:1rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  background: linear-gradient(90deg, rgba(255,45,107,0.12), rgba(59,130,246,0.12));
  border: 1px solid rgba(255,45,107,0.2);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;

const BlogCard = ({ post }) => {
const colors = getCategoryColor(post.category);
 const navigate = useNavigate();
  return (   <CardLink
      onClick={() => navigate(post.link)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Meta>
        <CategoryBadge $colors={getCategoryColor(post.category)}>{post.category}</CategoryBadge>
        <span>Â·</span>
        <span>{post.readTime}</span>
      </Meta>
      <Title>{post.title}</Title>
      <Excerpt>{post.excerpt}</Excerpt>
      <Date>{post.date}</Date>
      <ArrowChip whileHover={{ x: 4 }}>Read more â†’</ArrowChip>
    </CardLink>)
};


export default React.memo(BlogCard);
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\cards\ProjectCard.jsx

```
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tag from "../ui/Tag";
import Tilt from "react-parallax-tilt";
import { getCategoryColor } from "../../utils/categoryColors";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const colors = getCategoryColor(project.category || (project.tags && project.tags[0]));

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: "14px", transformStyle: "preserve-3d" }}
    >
      <CardLink
        onClick={() => navigate(project.link)}
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42 }}
      >
        {/* â”€â”€ Thumbnail with zoom-on-hover â”€â”€ */}
        {project.image && (
          <ImageWrap>
            <ProjectImage src={project.image} alt={project.title} loading="lazy" />
            <ImageOverlay />
            {project.category && (
              <CategoryBadge $c={colors}>{project.category}</CategoryBadge>
            )}
          </ImageWrap>
        )}

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
            View Case Study â†’
          </ArrowChip>
        </CardBody>

        {/* Top gradient bar slides in on hover */}
        <TopBar />
      </CardLink>
    </Tilt>
  );
};

export default ProjectCard;

/* â”€â”€â”€ STYLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const CardLink = styled(motion.div)`
  position: relative;
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

/* The top gradient bar that scaleX(0â†’1) on hover */
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

/* â”€â”€ Image wrapper: overflow hidden so zoom stays clipped â”€â”€ */
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  /* 
    aspect-ratio keeps the slot a fixed 16:9 regardless of image dimensions.
    The image inside uses object-fit:cover so it fills without distortion.
    Change the ratio here to suit your thumbnails (e.g. "4/3", "1/1").
  */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const zoomIn = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.08); }
`;

const zoomOut = keyframes`
  from { transform: scale(1.08); }
  to   { transform: scale(1); }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Use object-position to keep the focal point centred */
  object-position: center top;
  display: block;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;

  /* Zoom in when parent card is hovered */
  ${CardLink}:hover & {
    transform: scale(1.08);
  }
`;

/* Dark gradient over image bottom â€” for text legibility */
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

/* Category badge floating over image bottom-left */
const CategoryBadge = styled.span`
  position: absolute;
  bottom: 0.65rem;
  left: 0.75rem;
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
  backdrop-filter: blur(8px);
`;

/* â”€â”€ Card body â”€â”€ */
const CardBody = styled.div`
  padding: 1.25rem 1.25rem 1.5rem;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  line-height: 1.25;
  transition: color 0.2s ease;

  ${CardLink}:hover & {
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  /* Clamp to 2 lines so all cards have consistent height */
  display: -webkit-box;
  -webkit-line-clamp: 2;
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

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\ComicGrid.jsx

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

/* Larger panel divider lines â€” like actual comic panel borders */
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\FloatingShapes.jsx

```
// src/components/effects/FloatingShapes.jsx
import styled, { keyframes } from 'styled-components';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useSpring, animated } from '@react-spring/web';

const float = (y1, y2, r1, r2) => keyframes`
  0%   { transform: translateY(0px) rotate(${r1}deg); }
  33%  { transform: translateY(${y1}px) rotate(${r2}deg); }
  66%  { transform: translateY(${y2}px) rotate(${r1 + 4}deg); }
  100% { transform: translateY(0px) rotate(${r1}deg); }
`;

const AnimatedShape = ({ shape, mouse }) => {
  const spring = useSpring({
    x: mouse.x * shape.depth * 80,
    y: mouse.y * shape.depth * 80,
    config: { mass: 1, tension: 120, friction: 26 },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        left: shape.x,
        top: shape.y,
        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        opacity: shape.opacity,
        transform: spring.x.to((x) => `translate(${x}px, ${spring.y.get()}px)`),
        willChange: 'transform',
      }}
    >
      {shape.svg}
    </animated.div>
  );
};
const ShapeWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
`;

// CUTOUT STYLE: drop-shadow makes them feel like physical cutouts
const Shape = styled.div`
  position: absolute;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  animation: ${({ $kf }) => $kf} ${({ $dur }) => $dur}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  will-change: transform;
  opacity: ${({ $opacity }) => $opacity};
  transition: transform 0.1s ease-out;
`;

// SVG shapes that look like comic panel decorations
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <polygon points="45,5 85,30 85,60 45,85 5,60 5,30"
          stroke="rgba(255,45,107,0.5)" strokeWidth="1.5" fill="rgba(255,45,107,0.06)" />
        <polygon points="45,15 75,32 75,58 45,75 15,58 15,32"
          stroke="rgba(255,45,107,0.2)" strokeWidth="1" fill="none" />
      </svg>
    ),
    x: '4%', y: '18%', depth: 0.018, dur: 22, delay: 0, opacity: 0.85,
    kf: float(-18, -8, -3, 5),
  },
  {
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="rgba(0,232,157,0.4)" strokeWidth="1.5" fill="rgba(0,232,157,0.05)" />
        <circle cx="30" cy="30" r="20" stroke="rgba(0,232,157,0.2)" strokeWidth="1" fill="none" />
        <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
        <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
      </svg>
    ),
    x: '88%', y: '20%', depth: 0.025, dur: 18, delay: 2, opacity: 0.9,
    kf: float(-22, -12, 4, -6),
  },
  {
    svg: (
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
        <polygon points="40,5 75,65 5,65"
          stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
        <polygon points="40,18 64,60 16,60"
          stroke="rgba(59,130,246,0.2)" strokeWidth="0.8" fill="none" />
      </svg>
    ),
    x: '82%', y: '62%', depth: 0.012, dur: 28, delay: 4, opacity: 0.8,
    kf: float(-15, -28, 2, 8),
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <rect x="5" y="5" width="40" height="40" rx="4"
          stroke="rgba(255,107,74,0.4)" strokeWidth="1.5" fill="rgba(255,107,74,0.05)"
          transform="rotate(20 25 25)" />
        <rect x="12" y="12" width="26" height="26" rx="3"
          stroke="rgba(255,107,74,0.2)" strokeWidth="0.8" fill="none"
          transform="rotate(20 25 25)" />
      </svg>
    ),
    x: '6%', y: '75%', depth: 0.02, dur: 24, delay: 1, opacity: 0.85,
    kf: float(-20, -10, -5, 3),
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        {/* Comic speed lines / star burst */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line key={i}
            x1="50" y1="30"
            x2={50 + 44 * Math.cos(deg * Math.PI / 180)}
            y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
            stroke="rgba(255,45,107,0.15)"
            strokeWidth="0.8"
          />
        ))}
        <circle cx="50" cy="30" r="8" stroke="rgba(255,45,107,0.4)" strokeWidth="1.5" fill="rgba(255,45,107,0.08)" />
      </svg>
    ),
    x: '48%', y: '85%', depth: 0.008, dur: 32, delay: 6, opacity: 0.6,
    kf: float(-10, -18, 0, 360),
  },
];

const FloatingShapes = () => {
  const mousePos = useMousePosition();

  return (
    <ShapeWrap>
    {shapes.map((s, i) => (
      <AnimatedShape key={i} shape={s} mouse={mousePos} />
    ))}
  </ShapeWrap>
  );
};

export default FloatingShapes;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\ParallaxWrapper.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\SectionWave.jsx

```
// src/components/effects/SectionWave.jsx â€” NEW FILE
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\WaterWaves.jsx

```
// src/components/effects/WaterWaves.jsx
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

/* â”€â”€ ambient drift animations (baseline motion when cursor is idle) â”€â”€ */
const drift1 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);    }
  50%  { transform: translateX(-60px) scaleY(1.06); }
  100% { transform: translateX(0)     scaleY(1);    }
`;
const drift2 = keyframes`
  0%   { transform: translateX(0)    scaleY(1);    }
  50%  { transform: translateX(50px) scaleY(0.96); }
  100% { transform: translateX(0)    scaleY(1);    }
`;
const drift3 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);    }
  50%  { transform: translateX(-30px) scaleY(1.03); }
  100% { transform: translateX(0)     scaleY(1);    }
`;
const drift4 = keyframes`
  0%   { transform: translateX(0)    scaleY(1);    }
  50%  { transform: translateX(70px) scaleY(0.98); }
  100% { transform: translateX(0)    scaleY(1);    }
`;
const drift5 = keyframes`
  0%   { transform: translateX(0)     scaleY(1);   }
  50%  { transform: translateX(-45px) scaleY(1.04);}
  100% { transform: translateX(0)     scaleY(1);   }
`;

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

const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  will-change: transform, opacity, d;
  opacity: ${({ $opacity }) => $opacity};

  animation: ${({ $drift }) => $drift} ${({ $speed }) => $speed}s
    ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
/*  Wave path generators                                        */
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

/**
 * Build an SVG "d" string for a sine-like wave path.
 * @param {number} amp      â€“ peak-to-trough amplitude in px
 * @param {number} phase    â€“ horizontal phase offset (0-1 of wave width)
 * @param {number} freq     â€“ number of full cycles across the 1440 unit viewBox
 * @param {number} baseline â€“ vertical centre of the wave in the 80-unit viewBox
 */
function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W = 1440;
  const pts = 120; // control point resolution
  let d = `M0,${baseline + amp * Math.sin(phase * Math.PI * 2)} `;

  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }

  d += `L${W},${height} L0,${height} Z`;
  return d;
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
/*  Layer config                                               */
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const LAYERS = [
  // [drift-anim, speed, delay, opacity, fill, amp, freq, baseline, cursorInfluence]
  { drift: drift5, speed: 14, delay: -5,  opacity: 0.12, fill: 'url(#wg5)', amp: 14, freq: 1.5, baseline: 30, influence: 0.6 },
  { drift: drift4, speed: 12, delay: -3,  opacity: 0.15, fill: 'url(#wg4)', amp: 18, freq: 2,   baseline: 35, influence: 0.8 },
  { drift: drift2, speed: 10, delay: -2,  opacity: 0.20, fill: 'url(#wg2)', amp: 14, freq: 2.5, baseline: 38, influence: 1.0 },
  // { drift: drift3, speed:  8, delay: -1,  opacity: 0.28, fill: 'url(#wg3)', amp: 10, freq: 3,   baseline: 42, influence: 1.2 },
  // { drift: drift1, speed:  6, delay:  0,  opacity: 0.32, fill: 'url(#wg1)', amp:  8, freq: 3.5, baseline: 46, influence: 1.5 },
];

/* gradient stop pairs [top-color, bottom-color] per layer */
const GRADIENTS = [
  ['#FF2D6B', '#0D0F14'],
  ['#0F2A4A', '#0D0F14'],
  ['#FF2D6B', '#0D0F14'],
  ['#1A2E50', '#0D0F14'],
  ['#FF2D6B',  '#0D0F14'],
];
const GRAD_IDS = ['wg5','wg4','wg2','wg3','wg1'];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
/*  Component                                                  */
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 }); // normalised x (0-1), vertical velocity
  const frameRef  = useRef(null);
  const lastY     = useRef(null);

  /* track cursor */
  useEffect(() => {
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      const prevY = lastY.current ?? ny;
      cursorRef.current = {
        x:  nx,
        vy: (ny - prevY) * 60, // amplify vertical delta
      };
      lastY.current = ny;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* animation loop */
  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // seconds, capped
      lastTime = now;

      const { x: cx, vy } = cursorRef.current;

      LAYERS.forEach((layer, i) => {
        // advance phase: base speed + cursor horizontal nudge
        const cursorNudge = (cx - 0.5) * layer.influence * 0.4;
        phaseRefs.current[i] += dt * (0.06 + Math.abs(cursorNudge) * 0.08) + cursorNudge * dt;

        // amplitude breathes with cursor vertical velocity
        const dynAmp = layer.amp + vy * layer.influence * 1.2;

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
      {/* Shared gradient defs (rendered once inside first SVG) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {GRADIENTS.map(([top, bot], i) => (
            <linearGradient key={GRAD_IDS[i]} id={GRAD_IDS[i]} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={top} stopOpacity={i === 4 ? '0.35' : '0.55'} />
              <stop offset="100%" stopColor={bot} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {LAYERS.map((layer, i) => (
        <Wave
          key={i}
          $drift={layer.drift}
          $speed={layer.speed}
          $delay={layer.delay}
          $opacity={layer.opacity}
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\About.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo, aboutTraits } from '../../data/siteData';
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
  Creative: "Building things that feel alive, not just functional.",
  Strategic: "I map systems before I write the first line.",
  Builder: "Shipped in 3 companies. Always learning.",
};

const About = () => {
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\Counters.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { counters } from '../../data/siteData';
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

const Counters = () => {
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\FeaturedProjects.jsx

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
        <ViewAllLink to="/case-studies">View All Work â†’</ViewAllLink>
      </Footer>
    </Section>
  );
};

export default FeaturedProjects;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\Hero.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { personalInfo } from '../../data/siteData';
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
    content: 'â–Œ';
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
const Hero = () => {
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
              View Work â†’
            </MagneticButton>
            <ResumeBtn
              href="/resume.pdf"
              download="Darshan_Agrawal_Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>â†“ Resume</span>
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\SkillsMarquee.jsx

```
import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/siteData';

import Tilt from 'react-parallax-tilt';

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
const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];
  return (
    <Wrapper>
      <Track>
        {doubled.map((skill, i) => (
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
  <Pill key={`${skill.name}-${i}`}>
    <SkillDot />
    {skill.name}
  </Pill>
</Tilt>
        ))}
      </Track>
    </Wrapper>
  );
};

export default SkillsMarquee;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\Timeline.jsx

```
// src/components/sections/Timeline.jsx
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { experience } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* â”€â”€ Animated line draw â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const linePulse = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(74,222,128,0.6),  0 0 20px rgba(74,222,128,0.2); }
  50%       { box-shadow: 0 0 12px rgba(74,222,128,0.9), 0 0 36px rgba(74,222,128,0.4); }
`;

const dotPop = keyframes`
  0%   { transform: translateX(-50%) scale(0); opacity: 0; }
  60%  { transform: translateX(-50%) scale(1.3); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
`;

/* â”€â”€ Layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* Animated green progress line â€” height driven by scroll */
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

/* â”€â”€ Timeline items â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const Timeline = () => {
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

  // Height of the green line: 0% â†’ 100% of the container
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
            // Desktop: even â†’ card left, odd â†’ card right
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
                    <Company>{exp.company}</Company> Â· {exp.location}
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\Footer.jsx

```
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const NAV = [
  { label: "Home",          to: "/" },
  { label: "Case Studies",  to: "/case-studies" },
  { label: "Blog",          to: "/blog" },
  { label: "Contact",       to: "/contact" },
];

const SOCIALS = [
  { icon: Github,   href: "https://github.com/darshanagrawal",       label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/darshanagrawal",   label: "LinkedIn" },
  { icon: Twitter,  href: "https://twitter.com/darshanagrawal",       label: "Twitter" },
  { icon: Mail,     href: "mailto:hello@darshanagrawal.dev",           label: "Email" },
];

const Footer = () => (
  <FooterWrap>
    {/* Gradient divider line */}
    <TopRule />

    <Inner>
      {/* Brand */}
      <Brand>
        <BrandName>Darshan Agrawal</BrandName>
        <BrandSub>Full Stack Engineer Â· 4 Years Building the Future</BrandSub>
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
        <EmailText href="mailto:hello@darshanagrawal.dev">
          hello@darshanagrawal.dev
        </EmailText>
      </SocialsBlock>
    </Inner>

    {/* Bottom strip */}
    <BottomStrip>
      <Copyright>Â© {new Date().getFullYear()} Darshan Agrawal. Built with React + Flask.</Copyright>
      <MadeWith>
        Made with <Heart>â™¥</Heart> and too much coffee
      </MadeWith>
    </BottomStrip>
  </FooterWrap>
);

export default Footer;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   STYLES
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\Navbar.jsx

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

  /* Use theme token so light/dark toggle works */
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.colors.bgGlass          /* <- was hardcoded rgba(13,15,20,0.72) */
      : 'transparent'};

  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};

  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.borderDefault : 'transparent'};
`;


const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};  /* theme-aware now */
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

    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.colors.gradientPinkBlue};

    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};

    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const DashboardLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
 
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};

  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.colors.gradientPinkBlue};

    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};

    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;

  font-size: 0.75rem;
  font-weight: 600;

  border-radius: 999px;

  border: 1px solid  ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};

  background: transparent;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

const Hamburger = styled.button`
  display: none;

  flex-direction: column;
  gap: 6px;

  background: none;
  border: none;
  cursor: pointer;

  ${media.tablet} {
    display: flex;
  }
`;

const Line = styled.span`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;


// Replace Hamburger + MobileMenu with panel slide:
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 2rem;
  gap: 1.5rem;
  z-index: 200;
  backdrop-filter: blur(20px);
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

// Stagger children on mount:
const linksContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  show:   { y: 0,   opacity: 1, transition: { duration: 0.4 } }
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <Nav $scrolled={scrolled}>
      <Logo to="/">DARSHAN.DEV</Logo>

     <DesktopLinks variants={linksContainerVariants} initial="hidden" animate="show">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <NavAnchor
              key={link.path}
              to={link.path}
              $active={isActive}
            >
              {link.label}
            </NavAnchor>
          );
        })}

       
        {isAdmin && (
          <>
            <NavAnchor
              to="/admin"
              $active={location.pathname === "/admin"}
            >
              Dashboard
            </NavAnchor>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
        <ThemeToggle />
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(!mobileOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          // MobileMenu animation:
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
            {navLinks.map((link) => (
              <MobileLink key={link.path} to={link.path}>
                {link.label}
              </MobileLink>
            ))}

            {isAdmin && (
              <>
                <MobileLink to="/admin">Dashboard</MobileLink>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </>
            )}
            <ThemeToggle />
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\NoiseOverlay.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\PageTransition.jsx

```
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(4px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, y: -20, filter: 'blur(4px)',
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const comicPageVariants = {
  initial: {
    opacity: 0,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    filter: 'blur(2px)',
  },
  animate: {
    opacity: 1,
    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.76, 0, 0.24, 1],
      clipPath: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)',
    filter: 'blur(4px)',
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={comicPageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ willChange: 'clip-path, opacity' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\ScrollProgress.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\ScrollToTop.jsx

```
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    /*
      "instant" is critical here â€” if you use "smooth", the scroll
      animation fights the page-flip transition animation and looks jittery.
    */
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\CustomCursor.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\FilterTab.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\FloatingInput.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\LoadingScreen.jsx

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
    /* Animate progress bar from 0 â†’ 100 over minMs */
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

            <TagLine>Initialising Panel Oneâ€¦</TagLine>

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

          {/* Corner panel marks â€” comic aesthetic */}
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

/* â”€â”€â”€ Keyframes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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

/* â”€â”€â”€ Styles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\MagneticButton.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\NotFound.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\PageHero.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\RichEditor.jsx

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
      background: #111;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    pre {
      background: #111;
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\SectionHeader.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\Tag.jsx

```
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
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\ThemeToggle.jsx

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
        {isDark ? 'ðŸŒ™' : 'â˜€ï¸'}
      </Knob>
    </Track>
  );
};

export default ThemeToggle;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\contexts\AuthContext.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\contexts\ThemeContext.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\data\siteData.jsx

```
// ============================
// ALL DUMMY DATA IN ONE FILE
// ============================

export const personalInfo = {
  name: 'Darshan',
  lastName: 'Agrawal',
  roles: [
    'Full Stack Engineer',
    'React + Python Developer',
    'Remote-First Builder',
  ],
  bio: "I'm a full-stack engineer with 4+ years of experience building performant, scalable web applications. I thrive at the intersection of clean code and intuitive design, specializing in React ecosystems and Python backends.",
  email: 'darshan@example.com',
  location: 'Seattle, WA (Remote)',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/darshanagrawal',
    linkedin: 'https://linkedin.com/in/darshanagrawal',
    twitter: 'https://twitter.com/darshanagrawal',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const skills = [
  { name: 'React', icon: 'SiReact' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'AWS', icon: 'SiAmazonaws' },
  { name: 'Azure', icon: 'SiMicrosoftazure' },
  { name: 'GraphQL', icon: 'SiGraphql' },
  { name: 'Redis', icon: 'SiRedis' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Flask', icon: 'SiFlask' },
  { name: 'D3.js', icon: 'SiD3Dotjs' },
  { name: 'Git', icon: 'SiGit' },
];

export const experience = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'Rhombuz',
    location: 'Seattle, Remote',
    period: 'Feb 2023 â€“ Present',
    description: 'Led development of real-time KPI dashboards, reducing manual reporting by 75%. Built scalable React + Flask microservices on Azure.',
    tech: ['React', 'Python', 'Azure', 'D3.js'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Rhombuz',
    location: 'Seattle, Remote',
    period: 'Dec 2021 â€“ Jan 2023',
    description: 'Built interactive data visualization components and optimized page load times by 45% through code splitting and lazy loading.',
    tech: ['React', 'TypeScript', 'Redux', 'Chart.js'],
  },
  {
    id: 3,
    role: 'Software Intern',
    company: 'Western Coalfields Ltd',
    location: 'India',
    period: 'Jun 2020 â€“ Aug 2020',
    description: 'Developed an internal inventory management tool, digitizing manual paper-based workflows for 200+ employees.',
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
];

export const counters = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 26, suffix: '', label: 'KPIs Built' },
  { value: 45, suffix: '%', label: 'Load Time Reduced' },
  { value: 75, suffix: '%', label: 'Manual Work Automated' },
];

export const projects = [
  {
    id: 'kpi-dashboard',
    title: 'KPI Analytics Dashboard',
    description: 'Real-time executive dashboard tracking 26 business KPIs with interactive D3.js visualizations and Azure-hosted Flask backend.',
    tags: ['React', 'D3.js', 'Flask', 'Azure'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/kpi-dashboard',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory, Stripe payments, and admin analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/ecommerce-platform',
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Pipeline',
    description: 'Automated data ingestion and model training pipeline processing 2M+ records daily with real-time monitoring.',
    tags: ['Python', 'AWS', 'Docker', 'Redis'],
    category: 'backend',
    image: '/placeholder-project.png',
    link: '/case-studies/ml-pipeline',
  },
  {
    id: 'design-system',
    title: 'Component Design System',
    description: 'Reusable UI component library with 40+ components, Storybook docs, and automated visual regression testing.',
    tags: ['React', 'Storybook', 'CSS-in-JS'],
    category: 'frontend',
    image: '/placeholder-project.png',
    link: '/case-studies/design-system',
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat App',
    description: 'WebSocket-powered messaging app with typing indicators, read receipts, and file sharing.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/chat-app',
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website v2',
    description: 'This portfolio â€” dark luxury theme with animated floating shapes, page transitions, and glassmorphism effects.',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    category: 'frontend',
    image: '/placeholder-project.png',
    link: '/case-studies/portfolio-v2',
  },
];

export const aboutTraits = [
  { emoji: 'ðŸŽ¨', label: 'Creative', description: 'Design-driven development' },
  { emoji: 'ðŸ§ ', label: 'Strategic', description: 'Scalable architecture thinking' },
  { emoji: 'ðŸ› ', label: 'Builder', description: 'Ship fast, iterate faster' },
];

export const filterCategories = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
];
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useCountUp.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useFetch.jsx

```
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useMousePosition.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\usePost.jsx

```
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useScrollProgress.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useScrollReveal.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\hooks\useTypewriter.jsx

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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\Admin.jsx

```
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
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

/*
  WHY createPortal?
  position:fixed is supposed to be viewport-relative, BUT the browser
  re-parents it into the nearest ancestor that has a CSS transform,
  filter, will-change:transform, or perspective applied â€” Framer Motion
  applies transforms to every animated parent, so any fixed child gets
  "trapped" inside that stacking context and scrolls with the page.

  createPortal(node, document.body) escapes ALL ancestor stacking
  contexts by rendering the overlay as a DIRECT child of <body>.
  Combined with body position:fixed on open, the modal is always
  perfectly centred in the viewport, regardless of scroll position.
*/

const ITEMS_PER_PAGE = 9;

/* â”€â”€ Portal: renders children directly into document.body â”€â”€ */
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

/* â”€â”€ Main component â”€â”€ */
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
  const savedScrollY = useRef(0);

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

  /*
    SCROLL LOCK
    Step 1 â€” record current scrollY before locking
    Step 2 â€” pin body with position:fixed + top:-scrollY
              (prevents the visible jump to top that plain overflow:hidden causes)
    Step 3 â€” on close: remove styles, then silently restore scroll position
  */
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
    const [b, c, m] = await Promise.all([
      blogAPI.getAll(1, 100),
      caseStudyAPI.getAll(1, 100),
      contactAPI.getAll(1, 100),
    ]);
    setBlogs(b.data.data    || []);
    setCases(c.data.data    || []);
    setMessages(m.data.data || []);
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => { setPage(1);  }, [tab]);

  const dataset    = tab === "blogs" ? blogs : tab === "cases" ? cases : messages;
  const start      = (page - 1) * ITEMS_PER_PAGE;
  const paginated  = dataset.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const closeForm = () => { setShowForm(false); setEditItem(null); setFormData({}); };

  const openCreate = () => {
    setEditItem(null);
    const empty = {};
    schemas[tab].forEach(({ name }) => {
      if (name === "is_published") empty[name] = true;
      else if (name === "content_type") empty[name] = "rich";
      else empty[name] = "";
    });
    setFormData(empty);
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    const filtered = {};
    schemas[tab].forEach(({ name }) => { filtered[name] = item[name] ?? ""; });
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
    text.replace(/<[^>]+>/g, "").slice(0, 130) + (text.length > 130 ? "â€¦" : "");

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
  { key: "blogs",    label: "Blogs",    color: "#FF2D6B", icon: "ðŸ“", count: blogs.length    },
  { key: "cases",    label: "Cases",    color: "#3B82F6", icon: "ðŸ“", count: cases.length    },
  { key: "messages", label: "Messages", color: "#00E89D", icon: "ðŸ’¬", count: messages.length },
];
  return (
    <>
      <Page>
        {/* â”€â”€ Sidebar â”€â”€ */}
         {/* // â”€â”€ Desktop Sidebar (hidden on mobile via CSS) â”€â”€ */}
      <Sidebar>
        {/* <SidebarTop>
          <Terminal size={16} />
          <SidebarBrand>Command Centre</SidebarBrand>
        </SidebarTop> */}
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

        {/* â”€â”€ Main â”€â”€ */}
             
      <MainContent>
      
        {/* <MobileHeader>
          <Terminal size={16} />
          <MobileHeaderBrand>Command Centre</MobileHeaderBrand>
        </MobileHeader> */}

          <PageTitleBlock>
            {/* <TitleEyebrow>âš¡ Admin Dashboard</TitleEyebrow> */}
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
              {paginated.map((item, i) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}>
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
                      {tab === "blogs" && (<><CategoryChip>{item.category || "â€”"}</CategoryChip><CardPreview>{previewText(item.excerpt || item.content)}</CardPreview></>)}
                      {tab === "cases" && (<><CategoryChip>{(item.tech_stack || "").split(",")[0] || "â€”"}</CategoryChip><CardPreview>{previewText(item.summary)}</CardPreview></>)}
                      {tab === "messages" && (<><CategoryChip>{item.email}</CategoryChip><CardPreview>{previewText(item.message)}</CardPreview></>)}
                    </CardBody>
                    {tab !== "messages" && (
                      <CardStatusRow>
                        <StatusDot $on={item.is_published} />
                        <span>{item.is_published ? "Published" : "Draft"}</span>
                      </CardStatusRow>
                    )}
                  </Card>
                </motion.div>
              ))}
            </CardGrid>
            {paginated.length >= 6 && <GridFog />}
          </GridWrap>

          {totalPages > 1 && (
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
   {/* // â”€â”€ Mobile bottom tab bar â”€â”€ */}
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
      {/* â•â• FORM MODAL via Portal â€” truly viewport-fixed â•â• */}
      <Portal>
        <AnimatePresence>
          {showForm && (
            <Overlay as={motion.div}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }} onClick={closeForm}>
              <ModalCard as={motion.div}
                initial={{ scale: 0.94, opacity: 0, y: 30 }}
                animate={{ scale: 1,    opacity: 1, y: 0  }}
                exit={{    scale: 0.94, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <ModalTitle>{editItem ? `âœï¸ Edit ${tab}` : `âœ¨ New ${tab}`}</ModalTitle>
                  <ModalCloseBtn type="button" onClick={closeForm}><X size={15} /></ModalCloseBtn>
                </ModalHeader>
                <FormBody>
                  <FormGrid>
                    {Object.entries(formData).map(([key, value]) => renderField(key, value))}
                  </FormGrid>
                </FormBody>
                <ModalFooter>
                  <ModalBtn type="button" $v="preview" onClick={() => setShowPreview(true)}><Eye size={14} /> Preview</ModalBtn>
                  <ModalBtn type="button" $v="save" onClick={handleSave} disabled={saving}><Save size={14} /> {saving ? "Savingâ€¦" : "Save"}</ModalBtn>
                  <ModalBtn type="button" $v="cancel" onClick={closeForm}><X size={14} /> Cancel</ModalBtn>
                </ModalFooter>
              </ModalCard>
            </Overlay>
          )}
        </AnimatePresence>
      </Portal>

      {/* â•â• PREVIEW MODAL via Portal â•â• */}
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
                  {formData.category && <PreviewCategoryBadge>{formData.category}</PreviewCategoryBadge>}
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• STYLES â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */


const MainContent = styled.main`
 flex: 1;
  min-width: 0;
  padding: 4rem 2.5rem 5rem;

  @media (max-width: 1024px) { padding: 2rem 1.5rem 4rem; }

  @media (max-width: 768px) {
    /*
      Top padding must clear the fixed navbar.
      Adjust the 64px to match your actual Navbar height.
      The bottom padding clears the fixed MobileTabBar (64px).
    */
    padding: calc(64px + 1.5rem) 1rem calc(64px + 1rem);
  }
`;

const PageTitleBlock = styled.div`
  margin-bottom: 2.5rem; padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const TitleEyebrow = styled.p`
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: ${({ theme }) => theme.colors.gradientPinkBlue}; margin-bottom: 0.55rem;
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.0;
  letter-spacing: -0.03em; color: ${({ theme }) => theme.colors.textPrimary}; margin-bottom: 0.6rem;
`;

const TitleAccent = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
`;

const TitleSub = styled.p`
  font-size: 0.9rem; color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const ActionRow = styled.div`margin-bottom: 1.75rem;`;

const CreateBtn = styled.button`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.62rem 1.4rem; border-radius: 999px; border: none;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  color: #fff; font-size: 0.875rem; font-weight: 600; cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,45,107,0.35); }
`;

const GridWrap = styled.div`position: relative;`;

const CardGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.2rem; padding-bottom: 0.5rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const shimmerMove = keyframes`0%{background-position:-200% 0}100%{background-position:200% 0}`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px; padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative; overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; box-shadow: 0 8px 32px rgba(0,0,0,0.25); transform: translateY(-2px); }
`;

const CardShimmerBar = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%);
  background-size: 200% 100%; opacity: 0; transition: opacity 0.3s;
  animation: ${shimmerMove} 2.5s linear infinite;
  ${Card}:hover & { opacity: 1; }
`;

const CardHeader = styled.div`display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;`;
const CardTitle = styled.h3`font-size: 0.93rem; font-weight: 600; color: ${({ theme }) => theme.colors.textPrimary}; line-height: 1.3; flex: 1; margin: 0;`;
const CardActions = styled.div`display: flex; gap: 5px; flex-shrink: 0;`;

const IconBtn = styled.button`
  border: none;
  background: ${({ $danger }) => $danger ? "rgba(239,68,68,0.12)" : "rgba(255,255,255,0.06)"};
  color: ${({ $danger }) => $danger ? "#ef4444" : "#9BA1B0"};
  padding: 6px; border-radius: 7px; cursor: pointer;
  transition: all 0.15s; display: flex; align-items: center;
  &:hover { background: ${({ $danger }) => $danger ? "rgba(239,68,68,0.22)" : "rgba(255,255,255,0.12)"}; color: ${({ $danger }) => $danger ? "#ff6060" : "#fff"}; transform: scale(1.1); }
`;

const CardBody = styled.div`font-size: 0.85rem;`;

const CategoryChip = styled.span`
  display: inline-block; padding: 2px 9px; border-radius: 999px;
  font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  background: rgba(255,45,107,0.09); border: 1px solid rgba(255,45,107,0.18);
  color: ${({ theme }) => theme.colors.gradientPinkBlue}; margin-bottom: 0.5rem;
`;

const CardPreview = styled.p`color: ${({ theme }) => theme.colors.textTertiary}; font-size: 0.82rem; line-height: 1.5; margin: 0;`;

const CardStatusRow = styled.div`
  display: flex; align-items: center; gap: 6px;
  margin-top: 0.85rem; padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: 0.72rem; color: ${({ theme }) => theme.colors.textTertiary};
`;

const blinkAnim = keyframes`0%,100%{opacity:1}50%{opacity:0.3}`;
const StatusDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${({ $on }) => $on ? "#00E89D" : "#5C6170"};
  animation: ${({ $on }) => $on ? blinkAnim : "none"} 2.5s ease-in-out infinite;
`;

const GridFog = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0; height: 90px;
  background: linear-gradient(to bottom, transparent 0%, ${({ theme }) => theme.colors.bgPrimary} 100%);
  pointer-events: none; z-index: 2;
`;

const Pagination = styled.div`margin-top: 2.5rem; display: flex; align-items: center; gap: 1rem;`;
const PageInfo = styled.span`font-size: 0.875rem; color: ${({ theme }) => theme.colors.textSecondary}; strong { color: ${({ theme }) => theme.colors.textPrimary}; }`;
const PaginationSep = styled.span`opacity: 0.35; margin: 0 0.3rem;`;

/* â•â• THE KEY: Overlay is position:fixed top:0 left:0 â€” always viewport-relative.
      createPortal() ensures no ancestor transform/stacking context can trap it. â•â• */
const Overlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; padding: 20px;
  @media (max-width: 480px) { padding: 0; align-items: flex-end; }
`;

const ModalCard = styled.div`
  display: flex; flex-direction: column;
  width: 92vw; max-width: 880px; max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 18px; border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,45,107,0.06);
  @media (max-width: 480px) { width: 100vw; max-height: 96vh; border-radius: 22px 22px 0 0; }
`;

const ModalHeader = styled.div`
  flex-shrink: 0; padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex; align-items: center; justify-content: space-between;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const ModalTitle = styled.h3`margin: 0; font-size: 0.97rem; font-weight: 600; color: ${({ theme }) => theme.colors.textPrimary}; text-transform: capitalize;`;

const ModalCloseBtn = styled.button`
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent; color: ${({ theme }) => theme.colors.textSecondary}; cursor: pointer; transition: all 0.15s;
  &:hover { background: rgba(255,45,107,0.1); border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

const FormBody = styled.div`
  flex: 1; overflow-y: auto; padding: 22px 24px; scroll-behavior: smooth;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.borderDefault}; border-radius: 3px; }
  @media (max-width: 480px) { padding: 16px; }
`;

const ModalFooter = styled.div`
  flex-shrink: 0; padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex; gap: 10px; flex-wrap: wrap;
  @media (max-width: 480px) { padding: 12px 16px; & > * { flex: 1; min-width: 80px; } }
`;

const ModalBtn = styled.button`
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1.2rem; border-radius: 8px;
  font-size: 0.83rem; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none;
  ${({ $v }) => $v === "save"    && "background:linear-gradient(90deg,#FF2D6B,#3B82F6);color:#fff;&:hover{box-shadow:0 6px 20px rgba(255,45,107,0.35);transform:translateY(-1px);}"}
  ${({ $v }) => $v === "preview" && "background:rgba(59,130,246,0.12);color:#3B82F6;border:1px solid rgba(59,130,246,0.25);&:hover{background:rgba(59,130,246,0.2);}"}
  ${({ $v }) => $v === "cancel"  && "background:rgba(255,255,255,0.05);color:#9BA1B0;border:1px solid rgba(255,255,255,0.08);&:hover{background:rgba(255,255,255,0.1);color:#fff;}"}
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
`;

const FormGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FGroup = styled.div`
  display: flex; flex-direction: column; gap: 5px;
  grid-column: ${({ $full }) => $full ? "1 / -1" : "auto"};
`;

const FLabel = styled.label`
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: ${({ theme }) => theme.colors.textTertiary};
`;

const FInput = styled.input`
  width: 100%; padding: 9px 12px; border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary}; color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem; transition: border-color 0.2s;
  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; outline: none; box-shadow: 0 0 0 3px rgba(255,45,107,0.1); }
`;

const FTextarea = styled.textarea`
  width: 100%; min-height: 100px; padding: 9px 12px; border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary}; color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem; resize: vertical; font-family: inherit; transition: border-color 0.2s;
  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; outline: none; box-shadow: 0 0 0 3px rgba(255,45,107,0.1); }
`;

const FFileInput = styled.input`
  padding: 9px 12px; border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px; cursor: pointer; width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.bgPrimary}; transition: border-color 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

const ThumbPreview = styled.div`
  margin-top: 8px;
  img { width: 100%; max-height: 150px; object-fit: cover; border-radius: 8px; border: 1px solid ${({ theme }) => theme.colors.borderDefault}; }
`;

const RadioBlock = styled.div`grid-column: 1 / -1;`;
const RadioRow = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

const RadioChip = styled.button`
  padding: 7px 14px; border-radius: 8px; cursor: pointer; font-size: 0.82rem;
  background: ${({ $active, theme }) => $active ? "rgba(255,45,107,0.1)" : theme.colors.bgTertiary};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : theme.colors.borderDefault};
  color: ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  transition: all 0.15s;
  &:hover { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

const ToggleRow = styled.div`display: flex; align-items: center; justify-content: space-between; padding: 8px 0;`;

const Toggle = styled.label`
  position: relative; display: inline-block; width: 42px; height: 24px; cursor: pointer;
  input { opacity: 0; width: 0; height: 0; position: absolute; }
  input:checked + span { background: linear-gradient(90deg, #FF2D6B, #3B82F6); }
  input:checked + span::before { transform: translateY(-50%) translateX(18px); }
`;

const ToggleTrack = styled.span`
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.1); border-radius: 999px; border: 1px solid rgba(255,255,255,0.1); transition: background 0.3s;
  &::before {
    content: ""; position: absolute; width: 18px; height: 18px;
    left: 2px; top: 50%; transform: translateY(-50%);
    background: #fff; border-radius: 50%; transition: transform 0.3s; box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
`;

const EditorBlock = styled.div`grid-column: 1 / -1;`;

const PreviewCard = styled.div`
  display: flex; flex-direction: column;
  width: min(880px, 92vw); max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 18px; border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  @media (max-width: 480px) { width: 100vw; max-height: 96vh; border-radius: 22px 22px 0 0; }
`;

const PreviewBody = styled.div`flex: 1; overflow-y: auto; padding: 2.5rem 3rem; @media (max-width: 480px) { padding: 1.25rem; }`;
const PreviewTitle = styled.h1`font-family: ${({ theme }) => theme.fonts.heading}; font-size: clamp(1.6rem,4vw,2.4rem); margin-bottom: 0.75rem; color: ${({ theme }) => theme.colors.textPrimary};`;
const PreviewCategoryBadge = styled.div`display:inline-block;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;font-weight:700;color:${({ theme }) => theme.colors.gradientPinkBlue};background:rgba(255,45,107,0.08);border:1px solid rgba(255,45,107,0.2);padding:3px 10px;border-radius:999px;margin-bottom:1.5rem;`;
const PreviewContent = styled.div`
  line-height: 1.8; color: ${({ theme }) => theme.colors.textSecondary};
  img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }
  h2, h3 { color: ${({ theme }) => theme.colors.textPrimary}; margin: 1.5rem 0 0.75rem; }
  p { margin-bottom: 1.2rem; }
  pre { background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.875rem; }
  code { background: rgba(255,45,107,0.1); color: ${({ theme }) => theme.colors.gradientPinkBlue}; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
  pre code { background: none; color: inherit; padding: 0; }
  blockquote { border-left: 3px solid ${({ theme }) => theme.colors.gradientPinkBlue}; padding: 0.5rem 1rem; margin: 1.5rem 0; font-style: italic; color: ${({ theme }) => theme.colors.textTertiary}; }
`;


const Page = styled.div`
  display: flex;
   min-height: 100vh;
  @media (max-width: 768px) 
  { 
    flex-direction: column;
      padding-bottom: 4.5rem; 
    }
`;




// â”€â”€â”€ STEP 2: Replace Sidebar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Sidebar = styled.aside`
  /* â”€â”€ Desktop â”€â”€ */
  width: 15rem;
  flex-shrink: 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 1.25rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) { width: 200px; }

  /* â”€â”€ Mobile: hide the desktop sidebar entirely â”€â”€ */
  @media (max-width: 768px) {
    display: none;
  }
`;

// â”€â”€â”€ STEP 3: SidebarTop unchanged (only shown on desktop now) â”€
const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0 0.4rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const SidebarBrand = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// â”€â”€â”€ STEP 4: NavSection (desktop only now) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// â”€â”€â”€ STEP 5: SideLink (desktop only) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const SideLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ $active }) => $active ? "rgba(255,45,107,0.28)" : "transparent"};
  background: ${({ $active }) => $active ? "rgba(255,45,107,0.07)" : "transparent"};
  color: ${({ $active, theme }) => $active ? theme.colors.textPrimary : theme.colors.textSecondary};
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
  color: ${({ $active }) => $active ? "#fff" : "inherit"};
  font-weight: 700;
  min-width: 20px;
  text-align: center;
`;

// â”€â”€â”€ STEP 6: ADD these NEW components (mobile bottom tab bar) â”€

/** Sticky bottom nav â€” only visible on mobile */
const MobileTabBar = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
    background: ${({ theme }) => theme.colors.bgTertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    height: 64px;
    padding: 0 8px;
    /* Frosted glass */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    /* Safe area for notched phones */
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
  border-radius: 12px;
  transition: background 0.15s;
  position: relative;

  /* Active indicator bar at top */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    border-radius: 0 0 3px 3px;
    background: ${({ $color }) => $color || "#FF2D6B"};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.18s;
  }

  &:active { background: rgba(255,255,255,0.05); }
`;

const MobileTabLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active, theme }) => $active ? theme.colors.textPrimary : theme.colors.textTertiary};
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
  /* colour the icon based on active state */
  color: ${({ $active, $color, theme }) =>
    $active ? ($color || "#FF2D6B") : theme.colors.textTertiary};
  transition: color 0.18s;
`;

// â”€â”€â”€ STEP 7: ADD this mobile header bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const MobileHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.25rem 0;
    color: ${({ theme }) => theme.colors.textTertiary};
  
  }
`;

const MobileHeaderBrand = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\AdminLogin.jsx

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
              placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            />
          </Field>

          <MagneticButton type="submit">
            {isLoading ? "Signing in..." : "Sign In â†’"}
          </MagneticButton>
        </Form>
</Card>
    </Page>
  );
};

export default AdminLogin;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\Blog.jsx

```
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/ui/SectionHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogAPI } from '../services/apis';
import { media } from '../../media';
import PageHero from "../components/ui/PageHero";
const Page = styled.div`
  padding: 4rem 4rem ${({ theme }) => theme.spacing.section};
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;

  ${media.tablet} {
    padding: 8rem 2rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  outline: none;
  margin-bottom: 2rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentPink};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await blogAPI.getAll();

      const formatted = res.data.data.map((blog) => ({
              id: blog.id,
              title: blog.title,
              excerpt: blog.excerpt,
              category: blog.category || "Article",
              readTime: blog.read_time,
              date: new Date(blog.created_at).toLocaleDateString(),
              link: `/blog/${blog.slug}`
            }));
      setPosts(formatted);

    } catch (err) {
      console.error("Error loading blogs", err);
    }
  };

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

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
        onChange={(e) => setSearch(e.target.value)}
      />

      <List>
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </List>
    </Page>
  );
};

export default Blog;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\BlogDetails.jsx

```
import styled from 'styled-components';
import { blogAPI } from '../services/apis';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag as TagIcon } from 'lucide-react';
import { getCategoryColor } from '../utils/categoryColors';
import LoadingScreen from '../components/ui/LoadingScreen';

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
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
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
    content: '';
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
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.gradientPinkBlue};
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin: 2rem 0 0.75rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p { margin-bottom: 1.4rem; }

  strong { color: ${({ theme }) => theme.colors.textPrimary}; }

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.gradientPinkBlue};
    padding: 0.75rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
    border-radius: 0 8px 8px 0;
  }

  pre {
    background: ${({ theme }) => theme.colors.bgTertiary};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  code {
    background: rgba(255, 45, 107, 0.1);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }

  pre code {
    background: none;
    color: inherit;
    padding: 0;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.4rem;
    li { margin-bottom: 0.5rem; }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    margin: 2.5rem 0;
  }
`;

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => { loadBlog(); }, [slug]);

  const loadBlog = async () => {
    const res = await blogAPI.getBySlug(slug);
    setBlog(res.data);
  };

  if (!blog) return (
    <Page>
      <Inner>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <LoadingScreen/>
        </motion.div>
      </Inner>
    </Page>
  );

  const catColors = getCategoryColor(blog.category);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate('/blog')}>
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
            <span>
              <Clock size={13} />
              {blog.read_time || '5 min read'}
            </span>
            <span>{new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </MetaRow>

          <Content
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blog.content_type === 'text'
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\CaseStudies.jsx

```
import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";
import PageHero from "../components/ui/PageHero";

const Page = styled.div`
  padding: 4rem 4rem;
  max-width: 1100px;
  margin: auto;

  ${media.tablet} {
    padding: 6rem 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 2rem;
`;

const CaseStudies = () => {

  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    fetchCaseStudies();
  },[]);

const fetchCaseStudies = async () => {
  const res = await caseStudyAPI.getAll();

  const formatted = res.data.data.map(item => ({
    id: item.id,
    title: item.title,
    description: item.summary,
    image: item.thumbnail || null,   // â† just use directly, no parsing
    tags: item.tech_stack ? item.tech_stack.split(",") : [],
    link: `/case-studies/${item.slug}`
  }));

  setProjects(formatted);
};
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

        {projects.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
          />
        ))}

      </Grid>

    </Page>
  );
};

export default CaseStudies;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\CaseStudyDetails.jsx

```
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { caseStudyAPI } from '../services/apis';
import { getCategoryColor } from '../utils/categoryColors';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Tag from '../components/ui/Tag';
import LoadingScreen from '../components/ui/LoadingScreen';

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
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: translateX(-3px);
  }
`;

const Header = styled(motion.div)`
  margin-bottom: 2.5rem;
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
  margin-bottom: 1rem;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 2rem 0;
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
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #FF2D6B, #3B82F6);
      border-radius: 2px;
    }
  }

  h3 { font-size: 1.2rem; margin: 2rem 0 0.75rem; color: ${({ theme }) => theme.colors.textPrimary}; }
  p { margin-bottom: 1.4rem; }
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  pre {
    background: ${({ theme }) => theme.colors.bgTertiary};
    padding: 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    margin: 1.75rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  code {
    background: rgba(255, 45, 107, 0.1);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
  }

  pre code { background: none; color: inherit; padding: 0; }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.4rem;
    li { margin-bottom: 0.5rem; }
  }
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
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 45, 107, 0.3), 0 4px 15px rgba(59, 130, 246, 0.2);
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
      color: ${({ theme }) => theme.colors.textPrimary};
      box-shadow: 0 4px 20px rgba(255, 45, 107, 0.15);
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => { fetchCase(); }, [slug]);

  const fetchCase = async () => {
    const res = await caseStudyAPI.getBySlug(slug);
    setData(res.data);
  };

  if (!data) return <Page><Inner><LoadingScreen/></Inner></Page>;

  const tags = data.tech_stack ? data.tech_stack.split(',').map(t => t.trim()) : [];
  const catColors = getCategoryColor(data.category);

  return (
    <Page>
      <Inner>
        <BackBtn onClick={() => navigate('/case-studies')}>
          <ArrowLeft size={14} /> Back to Case Studies
        </BackBtn>

        <Header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.category && (
            <CategoryBadge $c={catColors}>{data.category}</CategoryBadge>
          )}
          <Title>{data.title}</Title>
          <Summary>{data.summary}</Summary>

          <TechRow>
            {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
          </TechRow>
        </Header>

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
            <LinkBtn href={data.live_url} target="_blank" rel="noreferrer">
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\Contact.jsx

```
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingInput, FloatingTextArea } from "../components/ui/FloatingInput";
import MagneticButton from "../components/ui/MagneticButton";
import { contactAPI } from "../services/apis";
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

/* â”€â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SOCIALS = [
  { icon: Github,   label: "GitHub",    href: "https://github.com/darshanagrawal",   handle: "@darshanagrawal" },
  { icon: Linkedin, label: "LinkedIn",  href: "https://linkedin.com/in/darshanagrawal", handle: "Darshan Agrawal" },
  { icon: Twitter,  label: "Twitter",   href: "https://twitter.com/darshanagrawal",  handle: "@darshanagrawal" },
  { icon: Mail,     label: "Email",     href: "mailto:hello@darshanagrawal.dev",      handle: "hello@darshanagrawal.dev" },
];

const AVAILABILITY = [
  { label: "Status",    value: "Open to work",         color: "#00E89D" },
  { label: "Type",      value: "Full-time / Freelance", color: "#3B82F6" },
  { label: "Location",  value: "Remote Worldwide",      color: "#FF2D6B" },
  { label: "Response",  value: "Within 24 hours",       color: "#FF9F4A" },
];

/* â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
      {/* â”€â”€ Page Header â”€â”€ */}
      <Header>
        <HeaderInner
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* <Eyebrow>05 â€” GET IN TOUCH</Eyebrow> */}
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

      {/* â”€â”€ Two-col layout â”€â”€ */}
      <BodyGrid>

        {/* LEFT â€” info panel */}
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
            <LocationText>Based in India â€” working globally</LocationText>
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

        {/* RIGHT â€” form */}
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
                <span>{loading ? "Sendingâ€¦" : "Send Message"}</span>
                {!loading && <ArrowRight size={16} />}
                {loading && <Spinner />}
              </SubmitBtn>
            </Form>
          </FormCard>
        </FormCol>
      </BodyGrid>

      {/* â”€â”€ Toast â”€â”€ */}
      <AnimatePresence>
        {toast && (
          <Toast
            $type={toast.type}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ToastIcon>{toast.type === "success" ? "âœ“" : "âœ•"}</ToastIcon>
            {toast.msg}
          </Toast>
        )}
      </AnimatePresence>
    </Page>
  );
};

export default Contact;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   STYLES
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const Page = styled.div`
  min-height: 100vh;
  padding-bottom: 6rem;
`;

/* â”€â”€ Header â”€â”€ */
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

/* â”€â”€ Body grid â”€â”€ */
const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2.5rem;
  padding: clamp(2.5rem, 5vh, 4rem) clamp(1.5rem, 6vw, 5rem);
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* â”€â”€ Info col â”€â”€ */
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

/* â”€â”€ Form col â”€â”€ */
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

/* Gradient submit button â€” matches global button style */
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

/* â”€â”€ Toast â”€â”€ */
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\Home.jsx

```
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillsMarquee from '../components/home/SkillsMarquee';
import Timeline from '../components/home/Timeline';
import Counters from '../components/home/Counters';
import FeaturedProjects from '../components/home/FeaturedProjects';

const Home = () => (
  <>
    <Hero />
    <About />
    <SkillsMarquee />
    <Counters />
    <Timeline />
    <FeaturedProjects />
  </>
);

export default Home;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\services\apis.jsx

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
export default api;

```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\styles\globalStyles.js

```

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

@media (max-width: 768px) {
  #root { max-width: 100%; padding: 0; }
}


  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

/* Remove ugly default focus on mouse clicks */
:focus:not(:focus-visible) {
  outline: none;
}

/* Interactive elements */
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\styles\theme.js

```
// export const theme = {
//   colors: {
//     bgPrimary: '#0D0F14',
//     bgSecondary: '#12141A',
//     bgTertiary: '#181B23',
//     bgGlass: 'rgba(13, 15, 20, 0.72)',
//     bgGlassLight: 'rgba(255, 255, 255, 0.04)',
//     textPrimary: '#EAEDF3',
//     textSecondary: '#9BA1B0',
//     textTertiary: '#5C6170',
//     textWhite: '#FFFFFF',
//     accentNavy: '#1E3A5F',
//     accentNavyLight: '#2A5A8F',
//     gradientPinkBlue: '#FF2D6B',
//     gradientPinkBlueGlow: 'rgba(255, 45, 107, 0.35)',
//     accentGreen: '#00E89D',
//     accentGreenGlow: 'rgba(0, 232, 157, 0.25)',
//     accentCoral: '#FF6B4A',
//     accentCrimson: '#DC2626',
//     accentBlue: '#3B82F6',
//     borderDefault: 'rgba(255, 255, 255, 0.06)',
//     borderHover: 'rgba(255, 255, 255, 0.12)',
//     borderAccent: 'rgba(255, 45, 107, 0.4)',
//     shadowCard: '0 4px 24px rgba(0, 0, 0, 0.4)',
//     shadowCardHover: '0 12px 40px rgba(0, 0, 0, 0.6)',
//     shadowGlowPink: '0 0 40px rgba(255, 45, 107, 0.2)',
//     shadowGlowGreen: '0 0 40px rgba(0, 232, 157, 0.15)',
//     shadowGlowNavy: '0 0 40px rgba(30, 58, 95, 0.3)',
//     gradientHero: 'linear-gradient(135deg, #0D0F14 0%, #1E3A5F 50%, #0D0F14 100%)',
//     gradientCard: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
//     gradientPinkBlue: 'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%)',
//     gradientNavy: 'linear-gradient(180deg, #1E3A5F 0%, #0D0F14 100%)',
//     gradientText: 'linear-gradient(90deg, #FF2D6B, #FF6B4A, #00E89D, #3B82F6)',
//     gradientRing: 'conic-gradient(#FF2D6B, #FF6B4A, #00E89D, #3B82F6, #FF2D6B)',
//   },
//   fonts: {
//     heading: "'Clash Display', sans-serif",
//     body: "'DM Sans', sans-serif",
//     mono: "'JetBrains Mono', monospace",
//   },
//   fontSizes: {
//     heroName: 'clamp(3rem, 8vw, 7rem)',
//     heroRole: 'clamp(1rem, 2.5vw, 1.5rem)',
//     h1: 'clamp(2rem, 4vw, 3.5rem)',
//     h2: 'clamp(1.5rem, 3vw, 2.5rem)',
//     h3: '1.25rem',
//     body: '1rem',
//     small: '0.875rem',
//     xs: '0.75rem',
//   },
//   spacing: {
//     xs: '0.5rem',
//     sm: '1rem',
//     md: '1.5rem',
//     lg: '2rem',
//     xl: '3rem',
//     xxl: '5rem',
//     section: 'clamp(4rem, 10vh, 8rem)',
//   },
//   borderRadius: {
//     sm: '6px',
//     md: '12px',
//     lg: '20px',
//     xl: '28px',
//     full: '9999px',
//   },
//   transitions: {
//     fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
//     default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//     smooth: '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     slow: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     spring: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
//   },
//   zIndex: {
//     behind: -1,
//     base: 0,
//     card: 10,
//     navbar: 100,
//     modal: 200,
//     toast: 300,
//     scrollbar: 400,
//   },
// };

// src/styles/theme.js

const darkColors = {
  bgPrimary: '#0D0F14',
  bgSecondary: '#12141A',
  bgTertiary: '#181B23',
  bgGlass: 'rgba(13, 15, 20, 0.72)',
  bgGlassLight: 'rgba(255, 255, 255, 0.04)',
  textPrimary: '#EAEDF3',
  textSecondary: '#9BA1B0',
  textTertiary: '#5C6170',
  textWhite: '#FFFFFF',
  accentNavy: '#1E3A5F',
  accentNavyLight: '#2A5A8F',
  gradientPinkBlue: '#FF2D6B',
  gradientPinkBlueGlow: 'rgba(255, 45, 107, 0.35)',
  accentGreen: '#00E89D',
  accentGreenGlow: 'rgba(0, 232, 157, 0.25)',
  accentCoral: '#FF6B4A',
  accentCrimson: '#DC2626',
  accentBlue: '#3B82F6',
  borderDefault: 'rgba(255, 255, 255, 0.06)',
  borderHover: 'rgba(255, 255, 255, 0.12)',
  borderAccent: 'rgba(255, 45, 107, 0.4)',
  shadowCard: '0 4px 24px rgba(0, 0, 0, 0.4)',
  shadowCardHover: '0 12px 40px rgba(0, 0, 0, 0.6)',
  shadowGlowPink: '0 0 40px rgba(255, 45, 107, 0.2)',
  shadowGlowGreen: '0 0 40px rgba(0, 232, 157, 0.15)',
  shadowGlowNavy: '0 0 40px rgba(30, 58, 95, 0.3)',
  gradientHero: 'linear-gradient(135deg, #0D0F14 0%, #1E3A5F 50%, #0D0F14 100%)',
  gradientCard: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
  gradientPinkBlue: 'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%)',
  gradientNavy: 'linear-gradient(180deg, #1E3A5F 0%, #0D0F14 100%)',
  gradientText: 'linear-gradient(90deg, #FF2D6B, #FF6B4A, #00E89D, #3B82F6)',
  gradientRing: 'conic-gradient(#FF2D6B, #FF6B4A, #00E89D, #3B82F6, #FF2D6B)',
  // NEW: ink panel decoration colors
  inkStroke: 'rgba(255,255,255,0.03)',
  comicPanel: 'rgba(255,255,255,0.02)',
};

const lightColors = {
  bgPrimary: '#F5F0E8',
  bgSecondary: '#EDE8DC',
  bgTertiary: '#E0D9CC',
  bgGlass: 'rgba(245, 240, 232, 0.85)',
  bgGlassLight: 'rgba(0, 0, 0, 0.03)',
  textPrimary: '#1A1A2E',
  textSecondary: '#3D3D5C',
  textTertiary: '#7A7A99',
  textWhite: '#1A1A2E',
  accentNavy: '#1E3A5F',
  accentNavyLight: '#2A5A8F',
  accentPink: '#E8174A',
  gradientPinkBlueGlow: 'rgba(232, 23, 74, 0.2)',
  accentGreen: '#007A52',
  accentGreenGlow: 'rgba(0, 122, 82, 0.15)',
  accentCoral: '#D44D28',
  accentCrimson: '#B91C1C',
  accentBlue: '#1D4ED8',
  borderDefault: 'rgba(0, 0, 0, 0.08)',
  borderHover: 'rgba(0, 0, 0, 0.16)',
  borderAccent: 'rgba(232, 23, 74, 0.3)',
  shadowCard: '0 4px 24px rgba(0, 0, 0, 0.1)',
  shadowCardHover: '0 12px 40px rgba(0, 0, 0, 0.18)',
  shadowGlowPink: '0 0 40px rgba(232, 23, 74, 0.12)',
  shadowGlowGreen: '0 0 30px rgba(0, 122, 82, 0.1)',
  shadowGlowNavy: '0 0 40px rgba(30, 58, 95, 0.15)',
  gradientHero: 'linear-gradient(135deg, #F5F0E8 0%, #C8D8EC 50%, #F5F0E8 100%)',
  gradientCard: 'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
  gradientPinkBlue: 'linear-gradient(90deg, #E8174A 0%, #1D4ED8 100%)',
  gradientNavy: 'linear-gradient(180deg, #1E3A5F 0%, #F5F0E8 100%)',
  gradientText: 'linear-gradient(90deg, #E8174A, #D44D28, #007A52, #1D4ED8)',
  gradientRing: 'conic-gradient(#E8174A, #D44D28, #007A52, #1D4ED8, #E8174A)',
  inkStroke: 'rgba(0,0,0,0.04)',
  comicPanel: 'rgba(0,0,0,0.02)',
};

export const darkTheme = {
  colors: darkColors,
  mode: 'dark',
 fonts: {
    heading: "'Clash Display', sans-serif",
    body: "'DM Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSizes: {
    heroName: 'clamp(3rem, 8vw, 7rem)',
    heroRole: 'clamp(1rem, 2.5vw, 1.5rem)',
    h1: 'clamp(2rem, 4vw, 3.5rem)',
    h2: 'clamp(1.5rem, 3vw, 2.5rem)',
    h3: '1.25rem',
    body: '1rem',
    small: '0.875rem',
    xs: '0.75rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem',
    section: 'clamp(4rem, 10vh, 8rem)',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.25rem',
    xl: '1.75rem',
    full: '624.9375rem',
  },
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slow: '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    behind: -1,
    base: 0,
    card: 10,
    navbar: 100,
    modal: 200,
    toast: 300,
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\utils\categoryColors.js

```
// src/utils/categoryColors.js
export const categoryColors = {
  // Blog categories
  'tutorial':       { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  'opinion':        { bg: 'rgba(255,107,74,0.1)',   border: 'rgba(255,107,74,0.3)',   text: '#FF6B4A' },
  'deep-dive':      { bg: 'rgba(0,232,157,0.1)',    border: 'rgba(0,232,157,0.3)',    text: '#00E89D' },
  'career':         { bg: 'rgba(255,45,107,0.1)',   border: 'rgba(255,45,107,0.3)',   text: '#FF2D6B' },
  'technology':     { bg: 'rgba(139,92,246,0.1)',   border: 'rgba(139,92,246,0.3)',   text: '#8B5CF6' },
  'article':        { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  // Case Study categories
  'fullstack':      { bg: 'rgba(255,45,107,0.1)',   border: 'rgba(255,45,107,0.3)',   text: '#FF2D6B' },
  'frontend':       { bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',   text: '#3B82F6' },
  'backend':        { bg: 'rgba(0,232,157,0.1)',    border: 'rgba(0,232,157,0.3)',    text: '#00E89D' },
  'data':           { bg: 'rgba(255,200,0,0.1)',    border: 'rgba(255,200,0,0.3)',    text: '#FFC800' },
  'ml':             { bg: 'rgba(139,92,246,0.1)',   border: 'rgba(139,92,246,0.3)',   text: '#8B5CF6' },
  'default':        { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.12)', text: '#9BA1B0' },
};

export const getCategoryColor = (category) => {
  if (!category) return categoryColors.default;
  const key = category.toLowerCase().replace(/\s+/g, '-');
  return categoryColors[key] || categoryColors.default;
};
```

