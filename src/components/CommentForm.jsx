import { useState } from "react";

const CommentForm = ({ currentUser, validateUserComment }) => {

    const [messageInput, setMessageInput] = useState('');

    const handleClick = () => {

    }

    return (
        <form action="" method="POST">
            <div>
            <label htmlFor="comment">{`Commenting as ${currentUser.name}`}</label>
            <textarea name="comment" cols="30" rows="2" required={true}
            onChange={(e) => setMessageInput(e.target.textContent)}>{messageInput}</textarea>
            </div>
            <button type="submit">Add comment</button>
        </form>
    )
}

export default CommentForm;