import Link from "next/link";
import moment from "moment";
import styles from '../styles/Post.module.css';

const PostList = ({posts}) => {

    const PostItem = ({post}) => {
        const dateFormatted = moment(Date.now()).format('DD/MM/YYYY');

        return (
            <div className={styles.post_container}>
                <div className={styles.post_likes_container}>
                    <p>123 Likes</p>
                </div>

                <div className={styles.post_info}>
                    <div className={styles.post_header}>
                        <p>Posted by user/someUser1234 {dateFormatted} </p>
                        <h2>Post Title</h2>
                    </div>

                    <div className={styles.post_text}>
                        Text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem consequuntur dolor eos itaque laborum, laudantium minima natus nihil, nobis odit, officia optio perspiciatis quasi ratione tempore tenetur vitae.
                    </div>

                    <div>
                        <a><p>View Comments</p></a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.post_list_container}>
            <PostItem/>
        </div>
    )
}

export default PostList;