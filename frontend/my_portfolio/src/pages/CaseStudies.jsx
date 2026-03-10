// src/pages/CaseStudies.jsx
import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/cards/ProjectCard";
import PageHero from "../components/ui/PageHero";
import { useCaseStudies } from "../hooks/useApiData";
import PageLoader from "../components/ui/PageLoader";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LoadMoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const LoadMoreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CountLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
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
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>

      {hasMore && (
        <LoadMoreWrap>
          <LoadMoreBtn onClick={() => setVisible((v) => v + LOAD_MORE_COUNT)}>
            Load more ↓
          </LoadMoreBtn>
          <CountLabel>
            Showing {shown.length} of {projects.length}
          </CountLabel>
        </LoadMoreWrap>
      )}
    </Page>
  );
};

export default CaseStudies;