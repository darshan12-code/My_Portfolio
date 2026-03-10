// src/pages/CaseStudies.jsx
import styled from "styled-components";
import ProjectCard from "../components/cards/ProjectCard";
import { useCaseStudies } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";
import PageHero from "../components/ui/PageHero";

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 6rem 2rem 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const CaseStudies = () => {
  // Reads from React Query cache — no API call if navigated back within staleTime
  const { data: projects = [], isLoading } = useCaseStudies();

  // Show full-screen loader while first fetch is in flight
  if (isLoading) return <PageLoader label="Loading projects…" />;

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
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>
    </Page>
  );
};

export default CaseStudies;