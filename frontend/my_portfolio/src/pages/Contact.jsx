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
  { label: "Type",      value: "Full-time / Freelance", color: "#3B82F6" },
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