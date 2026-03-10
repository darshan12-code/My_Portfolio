// src/App.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

// CHANGED: import the configured client instead of creating inline with no options
import queryClient from "./services/queryClient.jsx";

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
      <AnimatePresence mode="sync" initial={false}>
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