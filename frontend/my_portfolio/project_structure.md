## Project Structure

Folder PATH listing for volume Data
Volume serial number is F8CC-00EB
D:.
|   .gitignore
|   eslint.config.js
|   index.html
|   media.js
|   package-lock.json
|   package.json
|   project_structure.md
|   README.md
|   structure.txt
|   vite.config.js
| 
|               
+---public
|       vite.svg
|       
\---src
    |   App.css
    |   App.jsx
    |   index.css
    |   main.jsx
    |   
    +---assets
    |       myphoto_cutout.png
    |       noise.png
    |       react.svg
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
    |   |       FloatingShapes.jsx
    |   |       ParallaxWrapper.jsx
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
    |   |       
    |   \---ui
    |           FilterTab.jsx
    |           FloatingInput.jsx
    |           MagneticButton.jsx
    |           NotFound.jsx
    |           RichEditor.jsx
    |           SectionHeader.jsx
    |           Tag.jsx
    |           
    +---contexts
    |       AuthContext.jsx
    |       
    +---data
    |       siteData.jsx
    |       
    +---hooks
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
    |       
    +---styles
    |       globalStyles.js
    |       theme.js
    |       
    \---utils

## File Contents


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
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import NoiseOverlay from "./components/layout/NoiseOverlay";
import FloatingShapes from "./components/effects/FloatingShapes";
import WaterWaves from "./components/effects/WaterWaves";
import PageTransition from "./components/layout/PageTransition";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./components/ui/NotFound";
import BlogDetail from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
        }}
      >
        Loading...
      </div>
    );
  }

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        <Route
          path="/case-studies"
          element={<PageTransition><CaseStudies /></PageTransition>}
        />
        <Route path="/case-studies/:slug" element={<PageTransition><CaseStudyDetails/></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />

        <Route path="/blog/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
        <Route
          path="/contact"
          element={<PageTransition><Contact /></PageTransition>}
        />

        <Route
          path="/admin/login"
          element={<PageTransition><AdminLogin /></PageTransition>}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Admin />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <NoiseOverlay />
            <FloatingShapes />
            <WaterWaves />
            <ScrollProgress />

            <Navbar />

            <AnimatedRoutes />

            <Footer />
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
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
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
  outline: 4px auto -webkit-focus-ring-color;
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
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0D0F14;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
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
import { Link } from 'react-router-dom';
import React from 'react';
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

const CategoryBadge = styled.span`
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 600;
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

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 600;
  text-decoration: underline;
`;

const BlogCard = ({ post }) => (
  <Card
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Meta>
      <CategoryBadge>{post.category}</CategoryBadge>
      <span>Â·</span>
      <span>{post.readTime}</span>
    </Meta>
    <Title>{post.title}</Title>
    <Excerpt>{post.excerpt}</Excerpt>
    <Date>{post.date}</Date>
    <ReadMoreLink to={post.link}>Read More â†’</ReadMoreLink>
  </Card>
);


export default React.memo(BlogCard);
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\cards\ProjectCard.jsx

```
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
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
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
      <Arrow>â†’</Arrow>
    </Card>
  );
};
export default ProjectCard;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\FloatingShapes.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const ShapesContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.behind};
  pointer-events: none;
  overflow: hidden;
`;

const shapes = [
  { type: 'hexagon', size: 120, x: '5%', y: '15%', color: 'rgba(30,58,95,0.15)', depth: 0.02, duration: 25 },
  { type: 'circle', size: 80, x: '90%', y: '25%', color: 'rgba(255,45,107,0.08)', depth: 0.03, duration: 30 },
  { type: 'triangle', size: 100, x: '85%', y: '60%', color: 'rgba(0,232,157,0.08)', depth: 0.015, duration: 20 },
  { type: 'hexagon', size: 60, x: '8%', y: '70%', color: 'rgba(59,130,246,0.1)', depth: 0.025, duration: 35 },
  { type: 'circle', size: 140, x: '50%', y: '80%', color: 'rgba(255,107,74,0.06)', depth: 0.01, duration: 28 },
];

const shapePaths = {
  hexagon: 'M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z',
  triangle: 'M50 0 L100 86.6 L0 86.6 Z',
};

const ShapeWrapper = styled(motion.div)`
  position: absolute;
  will-change: transform;
  filter: blur(0.5px);
`;

const Shape = ({ shape, mousePos }) => {
  const offsetX = mousePos.x * shape.depth * 100;
  const offsetY = mousePos.y * shape.depth * 100;

  return (
    <ShapeWrapper
      style={{ left: shape.x, top: shape.y, width: shape.size, height: shape.size }}
      animate={{
        y: [0, -20, -10, -25, 0],
        rotate: [0, 5, 10, 3, 0],
        x: offsetX,
      }}
      transition={{ duration: shape.duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {shape.type === 'circle' ? (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="48" fill="none" stroke={shape.color} strokeWidth="1.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path d={shapePaths[shape.type]} fill="none" stroke={shape.color} strokeWidth="1.5" />
        </svg>
      )}
    </ShapeWrapper>
  );
};

const FloatingShapes = () => {
  const mousePos = useMousePosition();
  return (
    <ShapesContainer>
      {shapes.map((shape, i) => (
        <Shape key={i} shape={shape} mousePos={mousePos} />
      ))}
    </ShapesContainer>
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\effects\WaterWaves.jsx

```
import styled, { keyframes } from "styled-components";

const wave = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
`;

const WaveContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 120px;
  background: linear-gradient(
    to top,
    rgba(0, 150, 255, 0.25),
    rgba(0, 150, 255, 0)
  );

  animation: ${wave} 12s linear infinite;
  pointer-events: none;
  z-index: 1;
`;

const WaterWaves = () => {
  return <WaveContainer />;
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
  display: flex;
  gap: 1.5rem;
  ${media.mobile} { flex-direction: column; }
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

const About = () => (
  <Section>
    <SectionHeader number="01" title="ABOUT ME" />
    <Bio
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {personalInfo.bio}
    </Bio>
    <Traits>
      {aboutTraits.map((t, i) => (
        <TraitCard
          key={t.label}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <Emoji>{t.emoji}</Emoji>
          <TraitLabel>{t.label}</TraitLabel>
          <TraitDesc>{t.description}</TraitDesc>
        </TraitCard>
      ))}
    </Traits>
  </Section>
);

export default About;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\Counters.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { counters } from '../../data/siteData';
import { media } from '../../../media';

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
    <CounterCard ref={ref}>
      <Value>{count}{suffix}</Value>
      <Label>{label}</Label>
    </CounterCard>
  );
};

const Counters = () => (
  <Section>
    <Grid>
      {counters.map((c) => (
        <Counter key={c.label} target={c.value} suffix={c.suffix} label={c.label} />
      ))}
    </Grid>
  </Section>
);

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
    <Section>
      <SectionHeader number="04" title="FEATURED WORK" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
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
import photo from '../../assets/myphoto_cutout.png';
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 4rem 4rem;
  position: relative;
  background: ${({ theme }) => theme.colors.gradientHero};

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    padding: 6rem 2rem 4rem;
    gap: 3rem;
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
  gap: 1rem;
  ${media.tablet} { justify-content: center; }
`;

const Right = styled.div`
  flex-shrink: 0;
`;

const PhotoWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 30vw, 400px);
  height: clamp(350px, 38vw, 500px);
`;

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
              <MagneticButton>View Work â†’</MagneticButton>
              <MagneticButton variant="outline">Contact</MagneticButton>
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
          <GlowRing />
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
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\home\Timeline.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { experience } from '../../data/siteData';
import { media } from '../../../media';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const List = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0; bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.borderDefault};

    ${media.tablet} { left: 20px; }
  }
`;

const Item = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    ${media.tablet} { flex-direction: row; text-align: left; }
  }

  ${media.tablet} {
    padding-left: 3rem;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 2.5rem;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  box-shadow: ${({ theme }) => theme.colors.shadowGlowPink};
  transform: translateX(-50%);

  ${media.tablet} { left: 20px; }
`;

const Card = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${media.tablet} { max-width: 100%; }
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
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
const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 0.5rem;`;

const Timeline = () => (
  <Section>
    <SectionHeader number="03" title="EXPERIENCE" />
    <List>
      {experience.map((exp, i) => (
        <Item
          key={exp.id}
          initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Dot />
          <Card>
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company> Â· {exp.location}
            <Period>{exp.period}</Period>
            <Desc>{exp.description}</Desc>
            <Tags>{exp.tech.map((t) => <Tag key={t}>{t}</Tag>)}</Tags>
          </Card>
          <div style={{ flex: 1 }} />
        </Item>
      ))}
    </List>
  </Section>
);

export default Timeline;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\layout\Footer.jsx

```
import styled from 'styled-components';
import { personalInfo } from '../../data/siteData';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FooterWrapper = styled.footer`
  padding: 3rem 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover { color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Socials>
      <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
      <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer"><FiLinkedin size={20} /></a>
      <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer"><FiTwitter size={20} /></a>
    </Socials>
    <p>Â© {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
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

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: ${({ theme }) => theme.transitions.default};

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(13,15,20,0.72)" : "transparent"};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(20px)" : "none"};

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255,255,255,0.06)" : "transparent"};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${media.tablet} {
    display: none;
  }
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
  color: ${({ theme }) => theme.colors.accentGreen};

  &:hover {
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;

  font-size: 0.75rem;
  font-weight: 600;

  border-radius: 999px;

  border: 1px solid rgba(255,80,80,0.4);
  color: #ff4d4d;

  background: transparent;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255,80,80,0.1);
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

const MobileMenu = styled(motion.div)`
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem 0;

  background: rgba(13,15,20,0.95);
  backdrop-filter: blur(20px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};

  ${media.desktop} {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

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

      <DesktopLinks>
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
            <DashboardLink to="/admin">Dashboard</DashboardLink>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        )}
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen(!mobileOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
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

const PageTransition = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
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


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\components\ui\MagneticButton.jsx

```
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Btn = styled(motion.button)`
  position: relative;
  padding: ${({ $size }) =>
    $size === "sm" ? "0.4rem 0.9rem" : "0.875rem 2rem"};

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};

  background: ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return "transparent";
      case "edit":
        return "#2563eb";
      case "delete":
        return "#ef4444";
      case "nav":
        return theme.colors.bgSecondary;
      case "ghost":
        return "transparent";
      default:
        return theme.colors.gradientPinkBlue;
    }
  }};

  border: ${({ $variant, theme }) =>
    $variant === "outline"
      ? `1px solid ${theme.colors.borderDefault}`
      : "none"};

  border-radius: ${({ theme }) => theme.borderRadius.full};

  cursor: pointer;
  overflow: hidden;

  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);

    box-shadow: ${({ $variant, theme }) =>
      $variant === "delete"
        ? "0 0 12px rgba(239,68,68,0.5)"
        : theme.colors.shadowGlowPink};
  }
`;
const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-expand 0.6s ease-out forwards;
  pointer-events: none;

  @keyframes ripple-expand {
    to { transform: scale(4); opacity: 0; }
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

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin-top: 0.5rem;
`;

const SectionHeader = ({ number, title }) => (
  <Wrapper
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <Label>.{number}</Label>
    <Title>{title}</Title>
  </Wrapper>
);

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
        x: (e.clientX / window.innerWidth - 0.5) * 2,   // -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 2,   // -1 to 1
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
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { blogAPI, caseStudyAPI, contactAPI,uploadAPI  } from "../services/apis";

import SectionHeader from "../components/ui/SectionHeader";
import MagneticButton from "../components/ui/MagneticButton";
import RichEditor from "../components/ui/RichEditor";

const ITEMS_PER_PAGE = 9;

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
const schemas = {
  blogs: [
    { name: "title", label: "Blog Title", type: "text" },
    { name: "excerpt", label: "Excerpt", type: "textarea" },
    { name: "category", label: "Category", type: "text" },
    { name: "content_type", label: "Editor Type", type: "radio" },
    { name: "content", label: "Blog Content", type: "editor" },
    { name: "is_published", label: "Publish", type: "checkbox" }
  ],
cases: [
  { name: "title", label: "Project Title", type: "text" },
  { name: "summary", label: "Summary", type: "textarea" },
  { name: "category", label: "Category", type: "text" },
  { name: "tech_stack", label: "Tech Stack", type: "text" },
  { name: "github_url", label: "Github URL", type: "text" },
  { name: "live_url", label: "Live URL", type: "text" },
  { name: "thumbnail", label: "Thumbnail Image", type: "thumbnail" }, // â† changed
  { name: "company_project", label: "Company Project", type: "checkbox" },
  { name: "content", label: "Case Study Content", type: "editor" },
  { name: "is_published", label: "Publish", type: "checkbox" }
],
  messages: [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "message", label: "Message", type: "textarea" }
  ]
};

const closeForm = () => {
  
  setShowForm(false);
  setEditItem(null);
  setFormData({});  // â† resets all inputs
};


  const fetchData = async () => {
    const [b, c, m] = await Promise.all([
      blogAPI.getAll(1, 100),
      caseStudyAPI.getAll(1, 100),
      contactAPI.getAll(1, 100),
    ]);

    setBlogs(b.data.data || []);
    setCases(c.data.data || []);
    setMessages(m.data.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [tab]);

  const dataset =
    tab === "blogs" ? blogs : tab === "cases" ? cases : messages;

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = dataset.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);
const openCreate = () => {
  setEditItem(null);

  const empty = {};

  schemas[tab].forEach((field) => {          // field is the object
    if (field.name === "is_published") empty[field.name] = true;
    else if (field.name === "content_type") empty[field.name] = "rich";
    else empty[field.name] = "";
  });

  setFormData(empty);
  setShowForm(true);
};
const openEdit = (item) => {
  setEditItem(item);

  const fields = schemas[tab].map(f => f.name);
  const filtered = {};

  fields.forEach(name => {
    filtered[name] = item[name] ?? "";
  });

  // Only add content_type for blogs, nothing extra
  if (tab === "blogs") {
    filtered.content_type = item.content_type || "rich";
  }

  setFormData(filtered);  // â† no extra spread, strictly schema fields only
  setShowForm(true);
};

const handleSave = async () => {
  if (tab === "blogs") {
    const payload = { ...formData };
    editItem
      ? await blogAPI.update(editItem.id, payload)
      : await blogAPI.create(payload);
  }

  if (tab === "cases") {
    const form = new FormData();
    form.append("title", formData.title || "");
    form.append("summary", formData.summary || "");
    form.append("content", formData.content || "");
    form.append("category", formData.category || "");
    form.append("tech_stack", formData.tech_stack || "");
    form.append("github_url", formData.github_url || "");
    form.append("live_url", formData.live_url || "");
    form.append("thumbnail", formData.thumbnail || "");  // â† single URL already set
    form.append("company_project", formData.company_project ? "true" : "false");
    form.append("is_published", formData.is_published ? "true" : "false");

    editItem
      ? await caseStudyAPI.update(editItem.id, form)
      : await caseStudyAPI.create(form);
  }

  closeForm();
  fetchData();
};

  const handleDelete = async (id) => {
    if (!window.confirm("Delete item?")) return;

    if (tab === "blogs") await blogAPI.delete(id);
    if (tab === "cases") await caseStudyAPI.delete(id);

    fetchData();
  };

  const previewText = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]+>/g, "").slice(0, 140) + "...";
  };
const uploadMediaToCloudinary = async (file, type) => {
  try {
    const res = await uploadAPI.uploadMedia(file, type);
    const uploaded = res.data.files[0];
    return uploaded?.url || null;
  } catch (err) {
    console.error("Media upload failed:", err);
    return null;
  }
};
  return (
    <Page>
      <Sidebar>
        <SideLink onClick={() => setTab("blogs")}>
          Blogs ({blogs.length})
        </SideLink>

        <SideLink onClick={() => setTab("cases")}>
          Case Studies ({cases.length})
        </SideLink>

        <SideLink onClick={() => setTab("messages")}>
          Messages ({messages.length})
        </SideLink>
      </Sidebar>

      <Content>
        <SectionHeader title="ADMIN DASHBOARD" number="âš¡" />

        <Welcome>
          Welcome <Accent>{user?.name}</Accent>
        </Welcome>

        {tab !== "messages" && (
          <ActionRow>
            <MagneticButton onClick={openCreate}>
              + Create {tab === "blogs" ? "Blog" : "Case Study"}
            </MagneticButton>
          </ActionRow>
        )}

        <CardGrid>
          {paginated.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <h3>{item.title || item.name}</h3>

                {tab !== "messages" && (
                  <CardActions>
                    <IconButton onClick={() => openEdit(item)}>
                      <Pencil size={16} />
                    </IconButton>

                    <IconButton
                      $danger
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 size={16} />
                    </IconButton>
                  </CardActions>
                )}
              </CardHeader>

              <CardBody>
                {tab === "blogs" && (
                  <>
                    <Meta>{item.category}</Meta>
                    <p>{previewText(item.excerpt || item.content)}</p>
                  </>
                )}

                {tab === "cases" && (
                  <>
                    <Meta>{item.tech_stack}</Meta>
                    <p>{previewText(item.summary)}</p>
                  </>
                )}

                {tab === "messages" && (
                  <>
                    <Meta>{item.email}</Meta>
                    <p>{previewText(item.message)}</p>
                  </>
                )}
              </CardBody>
            </Card>
          ))}
        </CardGrid>

        <Pagination>
          <MagneticButton
            variant="nav"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowBigLeft />
          </MagneticButton>

          <span>
            {page} / {totalPages || 1}
          </span>

          <MagneticButton
            variant="nav"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowBigRight />
          </MagneticButton>
        </Pagination>

        <AnimatePresence>
          {showForm && (
            <ModalOverlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeForm()}
            >
              <ModalCard
                as={motion.div}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{editItem ? `Edit ${tab}` : `Create ${tab}`}</h3>
              <FormGrid>
                                {Object.entries(formData).map(([key, value]) => {

                                      if (key === "content" && (tab === "blogs" || tab === "cases")) {
                        // For cases always rich, for blogs check content_type
                        if (tab === "cases" || formData.content_type === "rich") {
                          return (
                            <EditorBlock key={key}>
                              <Label>{tab === "cases" ? "Case Study Content" : "Blog Content"}</Label>
                              <RichEditor
                                value={value || ""}
                                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                                uploadMediaToCloudinary={uploadMediaToCloudinary}
                              />
                            </EditorBlock>
                          );
                        }

                        if (formData.content_type === "html") {
                          return (
                            <FormGroup key={key}>
                              <Label>HTML Content</Label>
                              <Textarea
                                placeholder="Write HTML..."
                                value={value || ""}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                              />
                            </FormGroup>
                          );
                        }

                        if (formData.content_type === "text") {
                          return (
                            <FormGroup key={key}>
                              <Label>Plain Text</Label>
                              <Textarea
                                placeholder="Write plain text..."
                                value={value || ""}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                              />
                            </FormGroup>
                          );
                        }
                      }
                  // CASE STUDY IMAGE UPLOAD
                 
                 if (key === "thumbnail") {
                    return (
                      <FormGroup key={key}>
                        <Label>Thumbnail Image</Label>

                        <ImageUpload
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            // Show local preview instantly while uploading
                            const localUrl = URL.createObjectURL(file);
                            setFormData(prev => ({ ...prev, thumbnail: localUrl }));

                            // Then replace with Cloudinary URL
                            const url = await uploadMediaToCloudinary(file, "image");
                            if (url) setFormData(prev => ({ ...prev, thumbnail: url }));
                          }}
                        />

                        {formData.thumbnail && (
                          <ThumbnailPreview>
                            <img
                              src={formData.thumbnail}
                              alt="thumbnail"
                              onError={(e) => e.target.style.display = "none"}
                            />
                          </ThumbnailPreview>
                        )}
                      </FormGroup>
                    );
                  }
                  // COMPANY PROJECT TOGGLE
                  if (key === "company_project") {
                    return (
                      <ToggleRow key={key}>
                        <Label>Company Project</Label>

                        <input
                          type="checkbox"
                          checked={value || false}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company_project: e.target.checked,
                            })
                          }
                        />
                      </ToggleRow>
                    );
                  }

                  // CONTENT TYPE RADIO
                 
                    if (key === "content_type") {
                      if (tab !== "blogs") return null;  // â† hide for cases
                      return (
                      <RadioGroup key={key}>
                        <Label>Editor Type</Label>

                        <RadioRow>

                          <label>
                            <input
                              type="radio"
                              checked={value === "text"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "text",
                                })
                              }
                            />
                            Plain Text
                          </label>

                          <label>
                            <input
                              type="radio"
                              checked={value === "rich"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "rich",
                                })
                              }
                            />
                            Rich Editor
                          </label>

                          <label>
                            <input
                              type="radio"
                              checked={value === "html"}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  content_type: "html",
                                })
                              }
                            />
                            HTML
                          </label>

                        </RadioRow>
                      </RadioGroup>
                    );
                  }

                  // BOOLEAN FIELDS
                  if (typeof value === "boolean") {
                    return (
                      <CheckboxRow key={key}>
                        <Label>{key.replaceAll("_", " ").toUpperCase()}</Label>

                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [key]: e.target.checked,
                            })
                          }
                        />
                      </CheckboxRow>
                    );
                  }
                    if (key === "summary" || key === "excerpt") {
                      return (
                        <FormGroup key={key}>
                          <Label>{key.replace("_", " ")}</Label>
                          <Textarea
                            value={value || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, [key]: e.target.value })
                            }
                          />
                        </FormGroup>
                      );
                    }
                  // DEFAULT INPUT
                  return (
                    <FormGroup key={key}>
                      <Label>{key.replace("_", " ")}</Label>

                      <Input
                        value={value || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [key]: e.target.value,
                          })
                        }
                      />
                    </FormGroup>
                  );
                })}
                <ButtonRow>
                  <MagneticButton onClick={() => setShowPreview(true)}>
                    Preview
                  </MagneticButton>

                  <MagneticButton variant="edit" onClick={handleSave}>
                    Save
                  </MagneticButton>

                  <MagneticButton onClick={() => closeForm()}>
                    Cancel
                  </MagneticButton>
                </ButtonRow>
                </FormGrid>
              </ModalCard>
            </ModalOverlay>
          )}
        </AnimatePresence>

        {showPreview && (
          <ModalOverlay onClick={() => setShowPreview(false)}>
            <PreviewModal onClick={(e) => e.stopPropagation()}>
              <h1>{formData.title}</h1>

              <Category>{formData.category}</Category>

              <PreviewContent
                dangerouslySetInnerHTML={{
                  __html: formData.content,
                }}
              />

              <MagneticButton onClick={() => setShowPreview(false)}>
                Close
              </MagneticButton>
            </PreviewModal>
          </ModalOverlay>
        )}
      </Content>
    </Page>
  );
};

export default Admin;

/* -------------------- STYLES -------------------- */

const Page = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  padding: 3rem 1rem;
`;

const SideLink = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Welcome = styled.p`
  margin-bottom: 1rem;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardBody = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 6px;
`;

const CardActions = styled.div`
  display: flex;
  gap: 6px;
`;

const IconButton = styled.button`
  border: none;
  background: ${({ danger }) => (danger ? "#ff4d4f" : "#2d2d2d")};
  color: white;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
`;
const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    outline: none;
  }
`;
const ImageUpload = styled.input`
  padding: 10px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  cursor: pointer;
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 6px;
`;

const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  margin-bottom: 12px;
`;

const RadioRow = styled.div`
  display: flex;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${({ theme }) => theme.colors.bgTertiary};
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};

    &:hover {
      border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    }
  }

  input {
    accent-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;
const ThumbnailPreview = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionRow = styled.div`
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 20px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;
const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
`;
const ModalCard = styled.div`
  width: 90vw;
  height: 90vh;
  max-height: 80vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 30px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const EditorBlock = styled.div`
  margin-bottom: 20px;

  .ql-editor {
    min-height: 200px;
  }
`;

const PreviewBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const PreviewContent = styled.div`
  margin-top: 10px;
  line-height: 1.6;

  img {
    max-width: 100%;
  }

  pre {
    background: #111;
    padding: 10px;
    overflow-x: auto;
  }
`;

const PreviewModal = styled.div`
  width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 40px;
  border-radius: 12px;
`;
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
const Category = styled.div`
  margin-bottom: 20px;
  opacity: 0.6;
`;
const TipTapWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bgPrimary};

  .ProseMirror {
    min-height: 200px;
    outline: none;
    line-height: 1.6;
  }

  p {
    margin: 0 0 10px;
  }

  h1, h2, h3 {
    margin: 10px 0;
  }

  code {
    background: #111;
    padding: 4px 6px;
    border-radius: 4px;
  }

  pre {
    background: #111;
    padding: 10px;
    overflow-x: auto;
  }
`;
const Toolbar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  button {
    padding: 6px 10px;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme.colors.bgTertiary};
    cursor: pointer;
  }
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

const Card = styled(motion.div)`
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

  background: rgba(255, 0, 128, 0.08);
  border: 1px solid rgba(255, 0, 128, 0.2);
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
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <IconBox>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="hotpink" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </IconBox>

          <Title>Admin Access</Title>
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

const Page = styled.div`
  padding: 8rem 4rem ${({ theme }) => theme.spacing.section};
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
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
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
      <SectionHeader number="03" title="BLOG" />

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
import styled from "styled-components"
import { blogAPI } from "../services/apis"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Container = styled.div`
max-width:800px;
margin:auto;
padding:8rem 2rem;
`

const Title = styled.h1`
font-size:2rem;
margin-bottom:1rem;
`

const Meta = styled.div`
color:#999;
margin-bottom:2rem;
`

const Content = styled.div`
line-height:1.7;

pre{
background:#111;
padding:1rem;
overflow:auto;
}

img{
max-width:100%;
}
`
const BackButton = styled.button`
  margin-bottom: 2rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;
const BlogDetail = () => {
const navigate = useNavigate()
const {slug} = useParams()

const [blog,setBlog] = useState(null)

useEffect(()=>{
loadBlog()
},[slug])

const loadBlog = async ()=>{

const res = await blogAPI.getBySlug(slug)

setBlog(res.data)
console.log(res.data);

}

if(!blog) return <p>Loading...</p>

return (

<Container>
<BackButton onClick={() => navigate("/blog")}>
  <ArrowLeft size={16} /> Back
</BackButton>
<Title>{blog.title}</Title>

<Meta>
{blog.category} â€¢ {new Date(blog.created_at).toDateString()}
</Meta>

{blog.content_type === "text" ? (
  <Content>
    {blog.content}
  </Content>
) : (
  <Content
    dangerouslySetInnerHTML={{
      __html: blog.content
    }}
  />
)}
</Container>

)

}

export default BlogDetail
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\CaseStudies.jsx

```
import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";

const Page = styled.div`
  padding: 8rem 4rem;
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

      <SectionHeader
        number="02"
        title="CASE STUDIES"
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";

const Page = styled.div`
  padding: 8rem 4rem;
  max-width: 900px;
  margin: auto;

  ${media.tablet}{
    padding:6rem 2rem;
  }
`;

const Title = styled.h1`
  font-size:2.5rem;
  margin-bottom:1rem;
`;

const Summary = styled.p`
  font-size:1.1rem;
  color:${({theme})=>theme.colors.textSecondary};
  margin-bottom:2rem;
`;

const Image = styled.img`
  width:100%;
  border-radius:12px;
  margin-bottom:2rem;
`;

const Content = styled.div`
  line-height:1.8;
  font-size:1rem;

  h2{
    margin-top:2rem;
  }

  p{
    margin:1rem 0;
  }
`;

const TechStack = styled.div`
  margin-top:2rem;
  display:flex;
  gap:.5rem;
  flex-wrap:wrap;
`;

const Tag = styled.span`
  background:${({theme})=>theme.colors.bgTertiary};
  padding:.3rem .6rem;
  border-radius:6px;
  font-size:.8rem;
`;

const Links = styled.div`
  margin-top:2rem;
  display:flex;
  gap:1rem;
`;

const Button = styled.a`
  padding:.6rem 1.2rem;
  background:${({theme})=>theme.colors.accent};
  color:white;
  border-radius:6px;
  text-decoration:none;
`;
const Thumbnail = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
`;
const CaseStudyDetails = () => {

  const { slug } = useParams();

  const [data,setData] = useState(null);

  useEffect(()=>{
    fetchCase();
  },[slug]);

  const fetchCase = async () => {

    const res = await caseStudyAPI.getBySlug(slug);

    setData(res.data);
  };

  if(!data) return null;

  const tags = data.tech_stack
    ? data.tech_stack.split(",")
    : [];

return (
  <Page>
    <Title>{data.title}</Title>
    <Summary>{data.summary}</Summary>

    {/* Single thumbnail at top */}
    {data.thumbnail && (
      <Thumbnail src={data.thumbnail} alt={data.title} />
    )}

    <TechStack>
      {tags.map((tag, i) => <Tag key={i}>{tag.trim()}</Tag>)}
    </TechStack>

    {/* Content already contains all other images uploaded via editor */}
    <Content dangerouslySetInnerHTML={{ __html: data.content }} />

    <Links>
      {data.github_url && <Button href={data.github_url} target="_blank">Github</Button>}
      {data.live_url && <Button href={data.live_url} target="_blank">Live Site</Button>}
    </Links>
  </Page>
);
}
export default CaseStudyDetails;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\pages\Contact.jsx

```
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { FloatingInput, FloatingTextArea } from '../components/ui/FloatingInput';
import MagneticButton from '../components/ui/MagneticButton';
import { media } from '../../media';
import { contactAPI } from '../services/apis';

const Page = styled.div`
  padding: 8rem 4rem ${({ theme }) => theme.spacing.section};
  max-width: 700px;
  margin: 0 auto;
  min-height: 100vh;
  ${media.tablet} { padding: 8rem 2rem; }
`;

const RemoteBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0, 232, 157, 0.08);
  border: 1px solid rgba(0, 232, 157, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: 2rem;

  &::before {
    content: '';
    width: 8px; height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accentGreen};
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }
`;

const Form = styled(motion.form)``;

const slideUp = keyframes`
  from { transform: translateY(16px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${slideUp} 0.3s ease;
  background: ${({ $type, theme }) =>
    $type === 'success'
      ? 'rgba(0, 232, 157, 0.12)'
      : 'rgba(239, 68, 68, 0.12)'};
  border: 1px solid ${({ $type }) =>
    $type === 'success'
      ? 'rgba(0, 232, 157, 0.3)'
      : 'rgba(239, 68, 68, 0.3)'};
  color: ${({ $type }) =>
    $type === 'success' ? '#00e89d' : '#ef4444'};

  ${media.tablet} {
    right: 1rem;
    left: 1rem;
    bottom: 1rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', msg: '' }

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contactAPI.send(formData);
      showToast('success', "Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      showToast('error', 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <SectionHeader number="05" title="GET IN TOUCH" />
      <RemoteBadge>Available for remote work</RemoteBadge>

      <Form
        onSubmit={handleSubmit}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FloatingInput label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
        <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <FloatingTextArea label="Message" name="message" value={formData.message} onChange={handleChange} required />
        <MagneticButton type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message â†’'}
        </MagneticButton>
      </Form>

      <AnimatePresence>
        {toast && (
          <Toast
            $type={toast.type}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {toast.type === 'success' ? 'âœ“' : 'âœ•'} {toast.msg}
          </Toast>
        )}
      </AnimatePresence>
    </Page>
  );
};

export default Contact;
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
  import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/portfolio";

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

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgPrimary}; }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
`;

export default GlobalStyles;
```


### D:\Darshan\Projects\My Portfolio\frontend\my_portfolio\src\styles\theme.js

```
export const theme = {
  colors: {
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
  },
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
    sm: '6px',
    md: '12px',
    lg: '20px',
    xl: '28px',
    full: '9999px',
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
```

