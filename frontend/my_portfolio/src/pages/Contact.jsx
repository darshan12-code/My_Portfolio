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
          {loading ? 'Sending...' : 'Send Message →'}
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
            {toast.type === 'success' ? '✓' : '✕'} {toast.msg}
          </Toast>
        )}
      </AnimatePresence>
    </Page>
  );
};

export default Contact;