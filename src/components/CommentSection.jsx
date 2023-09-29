import { useState } from "react";

const CommentSection = ({ 
    isLoggedIn, 
    currentUser, 
    validateUserComment, 
    blogItem,
    comments,
    setComments
}) => {

    //WE COULD CREATE A USEMESSAGE HOOK THAT TAKES IN THE MESSAGE INPUT AND ALSO THE HANDLE CLICK METHOD, 
    const [messageInput, setMessageInput] = useState('');
    const [messageLoading, setMessageLoading] = useState(false);

    const handleClick = async (e) => {
        setMessageLoading(true);
        e.preventDefault();
        //Attemps to POST request message into the database.
        const newUserComment = await validateUserComment(messageInput, blogItem);
        setMessageLoading(false);
        setComments((prevComments) => [...prevComments, newUserComment]);
    }

    return (
        <>
        {isLoggedIn && (
            <form onSubmit={handleClick} action="" method="POST">
                <div>
                    <label htmlFor="comment">{`Commenting as ${currentUser.name}`}</label>
                    <textarea name="comment" cols="30" rows="2" required={true}
                    onChange={(e) => setMessageInput(e.target.value)} value={messageInput}></textarea>
                </div>
                <button type="submit">Add comment</button>
            </form>
        )}
        <h2>Comments</h2>
        <ul className="comment-list">
            {messageLoading ? (
                <div className="loading-spinner"></div>
            ) : (
                comments.map((comment) => (
                    <li className="comment-list__comment" key={comment._id}>
                        <p>{comment.author.name}</p>
                        <p>{comment.content}</p>
                        <p>{comment.createdAt}</p>
                    </li>
                ))
            )}
        </ul>
        </>
    )
}

export default CommentSection;