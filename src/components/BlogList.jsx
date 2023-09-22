import useBlogPosts from "../../hooks/useBlogPosts"
import BlogPostCard from "./BlogPostCard";

const BlogList = () => {

    const [blogPosts, error, isLoading] = useBlogPosts();
    
    return (
        !isLoading ? (
            <ul className="blog-list">
                {blogPosts.map((post) => (
                    <BlogPostCard key={post._id} post={post}/>
                ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default BlogList;