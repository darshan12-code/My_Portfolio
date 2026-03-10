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
        <ViewAllLink to="/case-studies">View All Work →</ViewAllLink>
      </Footer>
    </Section>
  );
};

export default FeaturedProjects;