import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { FloatingInput, FloatingTextArea } from '../components/ui/FloatingInput';
import MagneticButton from '../components/ui/MagneticButton';
import { personalInfo } from '../data/siteData';
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactAPI.send(formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
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
        <FloatingInput label="Your Name" name="name" value={formData.name} onChange={handleChange} />
        <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
        <FloatingTextArea label="Message" name="message" value={formData.message} onChange={handleChange} />
        <MagneticButton type="submit">Send Message →</MagneticButton>
      </Form>
    </Page>
  );
};

export default Contact;
