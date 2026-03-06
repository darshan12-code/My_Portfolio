import styled from 'styled-components';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../cards/ProjectCard';
import { projects } from '../../data/siteData';
import { media } from '../../../media';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 4rem;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const FeaturedProjects = () => (
  <Section>
    <SectionHeader number="04" title="FEATURED WORK" />
    <Grid>
      {projects.slice(0, 4).map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </Grid>
  </Section>
);

export default FeaturedProjects;
