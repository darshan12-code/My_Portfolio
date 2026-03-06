import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillsMarquee from '../components/home/SkillsMarquee';
import Timeline from '../components/home/Timeline';
import Counters from '../components/home/Counters';
import FeaturedProjects from '../components/home/FeaturedProjects';

const Home = () => (
  <>
    <Hero />
    <About />
    <SkillsMarquee />
    <Counters />
    <Timeline />
    <FeaturedProjects />
  </>
);

export default Home;