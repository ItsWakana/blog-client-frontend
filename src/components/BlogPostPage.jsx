import { useParams } from "react-router-dom";
import useBlogPageInfo from "../../hooks/useBlogPageInfo";
import CommentForm from "./CommentForm";
import { useState } from "react";

const BlogPostPage = ({ isLoggedIn, currentUser, validateUserComment }) => {

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
                    <div className="message-container">

                    </div>
                    {isLoggedIn && (
                        <CommentForm validateUserComment={validateUserComment} currentUser={currentUser} blogData={blogData}/>
                    )}
                    <h2>Comments</h2>
                    <ul className="comment-list">
                        {blogData.comments.map((comment) => (
                            <li className="comment-list__comment" key={comment._id}>
                                <p>{comment.author.name}</p>
                                <p>{comment.content}</p>
                                <p>{comment.createdAt}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default BlogPostPage;