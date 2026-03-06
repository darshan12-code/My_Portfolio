import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();

  return <h1>Blog: {slug}</h1>;
};

export default BlogDetails;