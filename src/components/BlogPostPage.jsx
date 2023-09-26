import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBlogPageInfo from "../../hooks/useBlogPageInfo";

const BlogPostPage = () => {

    const { postId } = useParams();

    const [blogData, error, isLoading] = useBlogPageInfo(postId);

    return (
        <div className="post-wrapper">
            {isLoading ? (
                <div className="loading-spinner"></div>
            ) : (
                <>
                    <h1>{blogData.title}</h1>
                    <p>{blogData.content}</p>
                </>
            )}
        </div>
    );
}

export default BlogPostPage;