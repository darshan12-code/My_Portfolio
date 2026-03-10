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