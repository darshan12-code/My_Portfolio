import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";

const Page = styled.div`
  padding: 8rem 4rem;
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

      <SectionHeader
        number="02"
        title="CASE STUDIES"
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