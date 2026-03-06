import { useState, useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../components/ui/SectionHeader";
import FilterTab from "../components/ui/FilterTab";
import ProjectCard from "../components/cards/ProjectCard";
import { filterCategories } from "../data/siteData";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";

const Page = styled.div`
  padding: 8rem 4rem ${({ theme }) => theme.spacing.section};
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;

  ${media.tablet} {
    padding: 8rem 2rem;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const CaseStudies = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await caseStudyAPI.getAll();
      console.log(res);
      
      const formatted = res?.data?.data?.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.summary,
        tags: item.tech_stack ? item.tech_stack.split(",") : [],
        category: "fullstack", // optional if you don't store category
        image: "/placeholder-project.png",
        link: `/case-studies/${item.slug}`,
      }));

      setProjects(formatted);
    } catch (error) {
      console.error("Failed to load case studies", error);
    }
  };

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Page>
      <SectionHeader number="02" title="CASE STUDIES" />

      <Filters>
        {filterCategories.map((cat) => (
          <FilterTab
            key={cat.key}
            active={filter === cat.key}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </FilterTab>
        ))}
      </Filters>

      <Grid>
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>
    </Page>
  );
};

export default CaseStudies;