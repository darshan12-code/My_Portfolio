import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FlaskConical, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { media } from "../../media";

/* ── same scan line animation as AdminLogin ──────────────────── */
const scanMove = keyframes`
  0%   { top: 0%;   }
  100% { top: 100%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-6px); }
`;

/* ── layout — identical to AdminLogin ────────────────────────── */
const Page = styled.div`
  min-height: calc(100vh - 64px);   /* subtract navbar height */
  margin-top: 64px;                  /* push below navbar */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gradientHero};

  ${media.tablet} {
    min-height: calc(100vh - 56px);  /* mobile navbar usually shorter */
    margin-top: 56px;
    padding: 1.5rem 1rem;
    align-items: flex-start;         /* don't force center on small screens */
    padding-top: 2rem;
  }
`;
const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgSecondary};
  backdrop-filter: blur(20px);

  ${media.tablet} {
    padding: 1.75rem 1.5rem;   /* tighter on mobile */
  }
`;



const IconBox = styled(motion.div)`
  width: 64px; height: 64px;
  margin: 0 auto 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.demoGradient};
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder};
  animation: ${float} 3s ease-in-out infinite;

  ${media.tablet} {
    width: 48px; height: 48px;   /* smaller on mobile */
    margin-bottom: 0.75rem;
  }
`;
// Badge — use demo tokens:
const Badge = styled.span`
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder2};
  color: ${({ theme }) => theme.colors.demoAccent};
`;

// CredsBox:
const CredsBox = styled.div`
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border: 1px dashed ${({ theme }) => theme.colors.demoAccentBorder};
  margin-bottom: 0.25rem;
`;

// CredsLabel:
const CredsLabel = styled.p`
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.demoAccent};
  margin: 0 0 0.5rem;
`;

// AutoFillBtn:
const AutoFillBtn = styled.button`
  font-size: 0.69rem;
  font-weight: 700;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder};
  background: ${({ theme }) => theme.colors.demoAccentBg2};
  color: ${({ theme }) => theme.colors.demoAccent};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  &:hover { background: ${({ theme }) => theme.colors.demoAccentFocus}; }
`;

// Input focus state — use demo colors:
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color ${({ theme }) => theme.transitions.fast},
              box-shadow    ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.demoAccentBorder};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.demoAccentFocus};
  }
`;

// SubmitBtn — uses demoGradient instead of gradientPinkBlue:
const SubmitBtn = styled(motion.button)`
  width: 100%;
  padding: 0.78rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  background: ${({ theme }) => theme.colors.demoGradient};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: box-shadow ${({ theme }) => theme.transitions.fast},
              opacity    ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    box-shadow: 0 8px 28px ${({ theme }) => theme.colors.demoAccentGlow};
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

// ScanLine — use demoAccent instead of accentPink:
const ScanLine = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.demoAccent},
    transparent
  );
  box-shadow:
    0 0 8px  ${({ theme }) => theme.colors.demoAccentGlow},
    0 0 16px ${({ theme }) => theme.colors.demoAccentBg};
  pointer-events: none;
`;


const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 1.75rem;

  ${media.tablet} {
    margin-bottom: 1.25rem;
  }
`;

/* ── glitch title — same keyframe trick as AdminLogin ─────────── */
const GlitchTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;

  &::before, &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0.08;
  }
  &::before { color: #FF2D6B; transform: translate(-2px, 0); }
  &::after  { color: #3B82F6; transform: translate( 2px, 0); }

  &:hover::before { animation: glitch-clip 0.3s steps(5) infinite; }
  &:hover::after  { animation: glitch-clip 0.3s steps(5) infinite reverse; }

  @keyframes glitch-clip {
    0%  { clip-path: inset(0 0 95% 0);  }
    20% { clip-path: inset(30% 0 50% 0); }
    40% { clip-path: inset(60% 0 20% 0); }
    60% { clip-path: inset(10% 0 80% 0); }
    80% { clip-path: inset(80% 0 5% 0);  }
    100%{ clip-path: inset(0 0 95% 0);   }
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* ── demo badge row — only difference from AdminLogin header ──── */
const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-top: 0.75rem;
`;


const CredsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CredsVal = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;


/* ── form — identical to AdminLogin ──────────────────────────── */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

const InputRow = styled.div`position: relative;`;



const EyeBtn = styled.button`
  position: absolute;
  right: 10px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  display: flex; align-items: center;
  padding: 0;
  &:hover { color: ${({ theme }) => theme.colors.textSecondary}; }
`;

const ErrorBox = styled(motion.div)`
  padding: 0.7rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.accentDangerBg};
  border: 1px solid ${({ theme }) => theme.colors.accentDanger};
  color: ${({ theme }) => theme.colors.accentDangerLight};
  font-size: 0.83rem;
`;



const Divider = styled.div`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  margin: 0.25rem 0;
`;

const FinePrint = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-align: center;
  line-height: 1.55;
  margin: 0;
`;

const FinePrintLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  text-underline-offset: 2px;
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

/* ── component ───────────────────────────────────────────────── */
const DEMO_EMAIL = "demo@portfoliolab.dev";
const DEMO_PASS  = "demo1234";

const DemoLogin = () => {
  const { loginAsDemo, isDemo, demoSession } = useAuth();
  const navigate = useNavigate();

  const [email,    setEmail]    = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASS);
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  // Already logged in as demo — go straight to admin
  if (isDemo && demoSession) return <Navigate to="/admin" replace />;

  const autoFill = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASS);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginAsDemo(email, password);
      navigate("/admin");
    } catch {
      setError("Invalid credentials. Use the demo account details shown above.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Card
        initial={{ scale: 0.85, opacity: 0, rotateX: 15 }}
        animate={{ scale: 1,    opacity: 1, rotateX: 0  }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ perspective: 1000 }}
      >
        <ScanLine
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <IconBox>
            <FlaskConical size={28} color="#EDE8DC" />
          </IconBox>
          <GlitchTitle data-text="Demo Access">Demo Access</GlitchTitle>
          <Subtitle>Explore a live sandboxed admin dashboard</Subtitle>
          <BadgeRow>
            <Badge>Sandbox</Badge>
            <Badge>Full CRUD</Badge>
            <Badge>Image Upload</Badge>
            <Badge>Live Preview</Badge>
          </BadgeRow>
        </Header>

        {/* Credentials box */}
        <CredsBox>
          <CredsLabel>Demo credentials — ready to use</CredsLabel>
          <CredsRow>
            <CredsVal>
              <span>{DEMO_EMAIL}</span>
              <span>{DEMO_PASS}</span>
            </CredsVal>
            <AutoFillBtn type="button" onClick={autoFill}>
              Auto-fill ↓
            </AutoFillBtn>
          </CredsRow>
        </CredsBox>

        {error && (
          <ErrorBox
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1,  y:  0 }}
            style={{ marginBottom: "1rem", marginTop: "0.75rem" }}
          >
            {error}
          </ErrorBox>
        )}

        <Form onSubmit={handleSubmit}>
          <Field
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Label htmlFor="demo-email">Email</Label>
            <Input
              id="demo-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </Field>

          <Field
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Label htmlFor="demo-pass">Password</Label>
            <InputRow>
              <Input
                id="demo-pass"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <EyeBtn
                type="button"
                onClick={() => setShowPass((p) => !p)}
                aria-label="Toggle password visibility"
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </EyeBtn>
            </InputRow>
          </Field>

          <SubmitBtn
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Signing in…" : <> Enter Demo <ArrowRight size={15} /> </>}
          </SubmitBtn>
        </Form>

        <Divider style={{ margin: "1.5rem 0 1rem" }} />

        <FinePrint>
          All changes are sandboxed — real portfolio data is never affected.{" "}
          <FinePrintLink to="/">View the real portfolio →</FinePrintLink>
        </FinePrint>
      </Card>
    </Page>
  );
};

export default DemoLogin;