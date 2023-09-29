import { useParams } from "react-router-dom";
import useBlogPageInfo from "../../hooks/useBlogPageInfo";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

const BlogPostPage = ({ isLoggedIn, currentUser, validateUserComment }) => {

    const { postId } = useParams();

    const { blogItem, error, isLoading, comments, setComments } = useBlogPageInfo(postId);

    return (
        <div className="post-wrapper">
            {isLoading ? (
                <div className="loading-spinner"></div>
            ) : (
                <>
                    <h1>{blogItem.title}</h1>
                    <p>{blogItem.content}</p>
                    <CommentSection isLoggedIn={isLoggedIn} currentUser={currentUser} validateUserComment={validateUserComment} blogItem={blogItem} comments={comments} setComments={setComments}/>
                </>
            )}
        </div>
    );
}

export default BlogPostPage;