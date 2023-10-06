import { useEffect } from "react";
import useBlogPosts from "../../hooks/useBlogPosts"
import BlogPostCard from "./BlogPostCard";

const BlogList = ({ currentUser, isLoggedIn, cookies }) => {

    const [blogPosts, error, isLoading] = useBlogPosts();
    
    console.log(blogPosts);
    return (
        <>
        {isLoggedIn && (
            <h1 className="welcome-header">Welcome, {currentUser.name}</h1>
        )}
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="main-blog">
                <ul className="blog-list">
                    {/* {blogPosts.map((post) => (
                        <BlogPostCard key={post._id} post={post}
                        currentUser={currentUser} isLoggedIn={isLoggedIn}/>
                    ))} */}

                    {blogPosts.filter((post) => post.published.isPublished).map((p) => (
                        <BlogPostCard key={p._id} post={p} currentUser={currentUser} isLoggedIn={isLoggedIn}/>
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}

export default BlogList;