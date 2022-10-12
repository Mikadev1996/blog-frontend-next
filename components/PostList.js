import Link from "next/link";
import moment from "moment";
import styles from '../styles/Post.module.scss';
import {config} from "../constants";
import {useState} from "react";

const PostList = ({posts}) => {
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             }
    //         })
    //     })
    //
    //     const hiddenElements = document.querySelectorAll('.hidden');
    //     console.log(hiddenElements)
    //     hiddenElements.forEach((item) => observer.observe(item));
    // }, [])

    const PostItem = ({post}) => {
        const [likes, setLikes] = useState(post.likes);
        const dateFormatted = moment(Date.now()).format('DD/MM/YYYY');

        const likePost = (postid) => {
            const url = config.url.BASE_URL;
            const token = JSON.parse(localStorage.getItem('token'));
            const formData = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            }

            fetch(`${url}/posts/${postid}/like`, formData)
                .then(r => r.json())
                .then(data => {
                    setLikes(likes + 1);
                })
                .catch(err => console.log(err));
        }

        return (
            <div className={`${styles.post_container}`}>
                <div className={styles.post_likes_container}>
                    <img onClick={() => likePost(post.post_id)} src="/upvote.svg" alt="upvote" className={styles.upvote}/>
                    <p><strong>{likes}</strong></p>
                </div>
                <Link href="/posts/[id]" as={`/posts/${post.post_id}`}>
                    <div className={styles.post_info}>
                        <div className={styles.post_header}>
                            <Link href="/profile/[id]" as={`/profile/${post.user_id}`}>
                                <p>Posted by user/{post.username} {dateFormatted} {post.edited ? <small>*edited</small> : ''}</p>
                            </Link>
                            <h2>{post.title}</h2>
                        </div>

                        <div className={styles.post_text}>
                            {post.text}
                        </div>

                        <div>
                            <a><p style={{cursor: 'pointer'}}>View Comments</p></a>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div className={styles.post_list_container}>
            {posts.length > 0 && posts.map((post) => {
                return (
                    <PostItem post={post} key={post.post_id}/>
                )
            })}
        </div>
    )
}

export default PostList;