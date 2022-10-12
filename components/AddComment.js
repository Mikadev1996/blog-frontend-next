import {useState} from "react";
import styles from '../styles/posts[id].module.scss';
import {config} from "../constants";

const AddComment = ({username, postid, handleNewComment}) => {
    const [text, setText] = useState("")
    const url = config.url.BASE_URL;

    const postComment = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));

        const formData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                username: "Anonymous",
                text: text,
            })
        }

        fetch(`${url}/comments/${postid}`, formData)
            .then(r => r.json())
            .then(data => {
                handleNewComment(data[0])
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
        <form onSubmit={postComment} className={styles.add_comment_container}>
            <p>Comment as <strong style={{color: '#0079D3', cursor: 'default'}} >{username}</strong></p>
            <textarea id='text-box' className={styles.comment_textarea} placeholder='What are your thoughts?' onChange={e => setText(e.target.value)} required/>

            <div className={styles.submit_comment_container}>
                <button type='submit' className={styles.submit_comment}>Comment</button>
            </div>
        </form>
    )
}

export default AddComment;