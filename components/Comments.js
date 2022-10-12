import moment from "moment";
import styles from '../styles/posts[id].module.scss';
import Link from "next/link";

const Comments = ({comments}) => {

    return (
        <div className={styles.comments_section_container}>
            {comments.length > 0 ? comments.map((data) => {
                return (
                    <div className={styles.comments_container} key={data.comment_id}>
                        <div className={styles.comments_header}>
                            <img className={styles.comment_profile_pic} src='https://firebasestorage.googleapis.com/v0/b/instagram-clone-9a4b3.appspot.com/o/default_photo.png?alt=media&token=97360e51-f17e-4989-9ced-a0bd4f066e2b' alt='default'/>
                            <Link href="/profile/[id]" as={`/profile/${data.user_id}`}><a style={{color: '#5b5b5b'}}>{data.username}</a></Link>
                            ·
                            <p style={{color: '#5b5b5b'}} >{moment(data.timestamp).fromNow(true)} ago</p>
                        </div>
                        <p className={styles.comments_text}>
                            {data.text}
                        </p>
                    </div>
                )
            }) : <div className={styles.comments_container}><p>No comments yet :(</p></div>}
        </div>
    )
}

export default Comments;