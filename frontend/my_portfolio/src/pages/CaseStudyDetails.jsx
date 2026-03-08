import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { caseStudyAPI } from "../services/apis";
import { media } from "../../media";

const Page = styled.div`
  padding: 8rem 4rem;
  max-width: 900px;
  margin: auto;

  ${media.tablet}{
    padding:6rem 2rem;
  }
`;

const Title = styled.h1`
  font-size:2.5rem;
  margin-bottom:1rem;
`;

const Summary = styled.p`
  font-size:1.1rem;
  color:${({theme})=>theme.colors.textSecondary};
  margin-bottom:2rem;
`;

const Image = styled.img`
  width:100%;
  border-radius:12px;
  margin-bottom:2rem;
`;

const Content = styled.div`
  line-height:1.8;
  font-size:1rem;

  h2{
    margin-top:2rem;
  }

  p{
    margin:1rem 0;
  }
`;

const TechStack = styled.div`
  margin-top:2rem;
  display:flex;
  gap:.5rem;
  flex-wrap:wrap;
`;

const Tag = styled.span`
  background:${({theme})=>theme.colors.bgTertiary};
  padding:.3rem .6rem;
  border-radius:6px;
  font-size:.8rem;
`;

const Links = styled.div`
  margin-top:2rem;
  display:flex;
  gap:1rem;
`;

const Button = styled.a`
  padding:.6rem 1.2rem;
  background:${({theme})=>theme.colors.accent};
  color:white;
  border-radius:6px;
  text-decoration:none;
`;
const Thumbnail = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
`;
const CaseStudyDetails = () => {

  const { slug } = useParams();

  const [data,setData] = useState(null);

  useEffect(()=>{
    fetchCase();
  },[slug]);

  const fetchCase = async () => {

    const res = await caseStudyAPI.getBySlug(slug);

    setData(res.data);
  };

  if(!data) return null;

  const tags = data.tech_stack
    ? data.tech_stack.split(",")
    : [];

return (
  <Page>
    <Title>{data.title}</Title>
    <Summary>{data.summary}</Summary>

    {/* Single thumbnail at top */}
    {data.thumbnail && (
      <Thumbnail src={data.thumbnail} alt={data.title} />
    )}

    <TechStack>
      {tags.map((tag, i) => <Tag key={i}>{tag.trim()}</Tag>)}
    </TechStack>

    {/* Content already contains all other images uploaded via editor */}
    <Content dangerouslySetInnerHTML={{ __html: data.content }} />

    <Links>
      {data.github_url && <Button href={data.github_url} target="_blank">Github</Button>}
      {data.live_url && <Button href={data.live_url} target="_blank">Live Site</Button>}
    </Links>
  </Page>
);
}
export default CaseStudyDetails;