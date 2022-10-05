import Link from "next/link";
import moment from "moment";
import styles from '../styles/Post.module.scss';

const PostList = ({posts}) => {

    //
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
        const dateFormatted = moment(Date.now()).format('DD/MM/YYYY');

        return (
            <Link href="/posts/[id]" as={`/posts/${post.post_id}`}>
                <div className={`${styles.post_container}`}>
                    <div className={styles.post_likes_container}>
                        <img src="/upvote.svg" alt="upvote" className={styles.upvote}/>
                        <p><strong>{post.likes}</strong></p>
                    </div>

                    <div className={styles.post_info}>
                        <div className={styles.post_header}>
                            <p>Posted by user/{post.username} {dateFormatted} {post.edited ? <small>*edited</small> : ''}</p>
                            <h2>Post Title</h2>
                        </div>

                        <div className={styles.post_text}>
                            {post.text}
                        </div>

                        <div>
                            <a><p>View Comments</p></a>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div className={styles.post_list_container}>
            {posts.map((post) => {
                return (
                    <PostItem post={post} key={post.post_id}/>
                )
            })}
        </div>
    )
}

export default PostList;