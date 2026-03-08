import styled from "styled-components"
import { blogAPI } from "../services/apis"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Container = styled.div`
max-width:800px;
margin:auto;
padding:8rem 2rem;
`

const Title = styled.h1`
font-size:2rem;
margin-bottom:1rem;
`

const Meta = styled.div`
color:#999;
margin-bottom:2rem;
`

const Content = styled.div`
line-height:1.7;

pre{
background:#111;
padding:1rem;
overflow:auto;
}

img{
max-width:100%;
}
`
const BackButton = styled.button`
  margin-bottom: 2rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;
const BlogDetail = () => {
const navigate = useNavigate()
const {slug} = useParams()

const [blog,setBlog] = useState(null)

useEffect(()=>{
loadBlog()
},[slug])

const loadBlog = async ()=>{

const res = await blogAPI.getBySlug(slug)

setBlog(res.data)
console.log(res.data);

}

if(!blog) return <p>Loading...</p>

return (

<Container>
<BackButton onClick={() => navigate("/blog")}>
  <ArrowLeft size={16} /> Back
</BackButton>
<Title>{blog.title}</Title>

<Meta>
{blog.category} • {new Date(blog.created_at).toDateString()}
</Meta>

{blog.content_type === "text" ? (
  <Content>
    {blog.content}
  </Content>
) : (
  <Content
    dangerouslySetInnerHTML={{
      __html: blog.content
    }}
  />
)}
</Container>

)

}

export default BlogDetail