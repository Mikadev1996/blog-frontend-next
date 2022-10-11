import {useState} from "react";

const AddComment = ({postid, handleNewComment}) => {
    const [text, setText] = useState("")

    const postComment = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: "Anonymous",
            text: text,
        })

        fetch(`https://shielded-hamlet-48088.herokuapp.com/api/comments/${postid}`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                handleNewComment(data.comment)
                resetTextArea();
                setText("");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const resetTextArea = () => {
        const textArea = document.getElementById('text-box');
        textArea.value = "";
    }

    return (
        <form onSubmit={postComment} className='add-comment-container'>
            <textarea id='text-box' placeholder='What are your thoughts?' onChange={e => setText(e.target.value)}/>

            <div className='submit-comment-container'>
                <button type='submit' className='submit-comment'>Comment</button>
            </div>
        </form>
    )
}

export default AddComment;