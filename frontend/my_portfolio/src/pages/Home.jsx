import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillsMarquee from '../components/home/SkillsMarquee';
import Timeline from '../components/home/Timeline';
import Counters from '../components/home/Counters';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { usePortfolioData } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';


const Home = () => {
  const { data, isLoading, error } = usePortfolioData();

  if (isLoading) return <PageLoader label="Loading data..." />;
  if (error) return <PageLoader label="Loading data..." />;

  return (
    <>
      <Hero personalInfo={data.personalInfo} />
      <About personalInfo={data.personalInfo} />
      <SkillsMarquee skills={data.skills} />
      <Counters counters={data.counters} />
      <Timeline experience={data.experience} />
      <FeaturedProjects />
    </>
  );
};

export default Home;