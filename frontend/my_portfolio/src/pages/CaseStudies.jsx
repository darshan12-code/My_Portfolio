import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";
import PageHero from "../components/ui/PageHero";

const Page = styled.div`
  padding: 4rem 4rem;
  max-width: 1100px;
  margin: auto;

  ${media.tablet} {
    padding: 6rem 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 2rem;
`;

const CaseStudies = () => {

  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    fetchCaseStudies();
  },[]);

const fetchCaseStudies = async () => {
  const res = await caseStudyAPI.getAll();

  const formatted = res.data.data.map(item => ({
    id: item.id,
    title: item.title,
    description: item.summary,
    image: item.thumbnail || null,   // ← just use directly, no parsing
    tags: item.tech_stack ? item.tech_stack.split(",") : [],
    link: `/case-studies/${item.slug}`
  }));

  setProjects(formatted);
};
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

        {projects.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
          />
        ))}

      </Grid>

    </Page>
  );
};

export default CaseStudies;