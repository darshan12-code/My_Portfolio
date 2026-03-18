import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

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
import AdminLogin from "./components/admin/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./components/ui/NotFound";
import BlogDetail from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import CustomCursor from "./components/ui/CustomCursor";
import ComicGrid from "./components/effects/ComicGrid";
import queryClient from "./services/queryClient";
import GlobalStyles from "./styles/globalStyles";
import DemoLogin from "./pages/DemoLogin";
import { ToastProvider } from './components/ui/Toast';
import DemoBanner from "./components/admin/DemoBanner";

const DemoGuard = ({ children, fallback = "/admin" }) => {
  const { isDemo, demoSession } = useAuth();
  if (isDemo && demoSession) return <Navigate to={fallback} replace />;
  return children;
};
// Real admin only
const ProtectedRoute = ({ children }) => {
  const { isAdmin, isDemo, demoSession, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  // Admin always allowed. Demo only allowed if they came through /demo flow.
  return (isAdmin || (isDemo && demoSession))
    ? children
    : <Navigate to="/admin/login" replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"        element={<DemoGuard><Home /></DemoGuard>} />
            <Route path="/contact" element={<DemoGuard><Contact /></DemoGuard>} />
            <Route path="/case-studies"       element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
            <Route path="/blog"               element={<Blog />} />
            <Route path="/blog/:slug"         element={<BlogDetail />} />

            {/* Your real admin — only you */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin"
              element={<ProtectedRoute><Admin /></ProtectedRoute>}
            />

            {/* Demo flow — visitors from your case study live link */}
            <Route path="/demo" element={<DemoLogin />} />

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
      <ToastProvider>                    
        <GlobalStyles />
        <CustomCursor />
        <NoiseOverlay />
        <ComicGrid />
        <FloatingShapes
          mobileMode="spin"
          gyroSensitivity={30}
          desktopSpin={false}
          desktopParallax={true}
        />
        <WaterWaves />
        <ScrollProgress />
          <Navbar />
         <DemoBanner variant="public" />
        <AnimatedRoutes />
        <Footer />
      </ToastProvider>
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