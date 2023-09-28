import { useParams } from "react-router-dom";
import useBlogPageInfo from "../../hooks/useBlogPageInfo";
import CommentForm from "./CommentForm";

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
                        <CommentForm validateUserComment={validateUserComment} currentUser={currentUser}/>
                    )}
                </>
            )}
        </div>
    );
}

export default BlogPostPage;