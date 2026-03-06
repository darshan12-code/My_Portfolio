import { useParams } from "react-router-dom";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  return <h1>Case Study: {slug}</h1>;
};

export default CaseStudyDetails;