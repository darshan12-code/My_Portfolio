import { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/cards/ProjectCard';
import PageHero from '../components/ui/PageHero';
import LoadMoreButton from '../components/ui/LoadMoreButton';
import { useCaseStudies } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) { padding: 6rem 1.5rem 4rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const CaseStudies = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const { data: projects = [], isLoading } = useCaseStudies();

  if (isLoading) return <PageLoader label="Loading projects…" />;

  const shown   = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <Page>
      <PageHero
        number="02"
        eyebrow="Mission Dossier"
        title="Case"
        titleAccent="Studies"
        subtitle="Full-stack projects, technical write-ups, and production work."
        badge={`${projects.length} Projects`}
      />

      <Grid>
        {shown.map(p => <ProjectCard key={p.id} project={p} />)}
      </Grid>

      {/* ← LoadMoreButton */}
      {hasMore && (
        <LoadMoreButton
          shown={shown.length}
          total={projects.length}
          onLoad={() => setVisible(v => v + LOAD_MORE_COUNT)}
        />
      )}
    </Page>
  );
};

export default CaseStudies;