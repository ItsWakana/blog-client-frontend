import { useState } from "react";

const CommentSection = ({ 
    isLoggedIn, 
    currentUser, 
    validateUserComment, 
    blogItem 
}) => {

    const [messageInput, setMessageInput] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        //Attemps to POST request message into the database.
        const newUserComment = await validateUserComment(messageInput, blogItem);
        console.log(newUserComment);
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
            {blogItem.comments.map((comment) => (
                <li className="comment-list__comment" key={comment._id}>
                    <p>{comment.author.name}</p>
                    <p>{comment.content}</p>
                    <p>{comment.createdAt}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default CommentSection;