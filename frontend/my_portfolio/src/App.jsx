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