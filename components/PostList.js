import Link from "next/link";
import moment from "moment";
import styles from '../styles/Post.module.css';

const PostList = ({posts}) => {
    const PostItem = ({post}) => {
        const dateFormatted = moment(Date.now()).format('DD/MM/YYYY');

        return (
            <div className='post-container'>
                <div className='post-likes-container'>
                    <p>123 Likes</p>
                </div>

                <div className='post-info'>
                    <Link href='/posts/[id]' as={`/posts/123`}>
                        <div className="post-header">
                            <p className='post-header-text'>Posted by user/someUser1234 {dateFormatted} </p>
                            <h2>Post Title</h2>
                        </div>

                        <div className="post-text">
                            Text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem consequuntur dolor eos itaque laborum, laudantium minima natus nihil, nobis odit, officia optio perspiciatis quasi ratione tempore tenetur vitae.
                        </div>

                        <div className="post-links">
                            <a><p className='post-links-text'>View Comments</p></a>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <PostItem/>
        </div>
    )
}

export default PostList;