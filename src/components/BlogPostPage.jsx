import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBlogPageInfo from "../../hooks/useBlogPageInfo";

const BlogPostPage = () => {

    const { postId } = useParams();

    const [blogData, error, isLoading] = useBlogPageInfo(postId);

    return <h1>{isLoading ? '' : blogData.title}</h1>;
}

export default BlogPostPage;