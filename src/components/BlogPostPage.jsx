import { useParams } from "react-router-dom";

const BlogPostPage = () => {

    const { blogId } = useParams();

    return <h1>{blogId}</h1>
}

export default BlogPostPage;