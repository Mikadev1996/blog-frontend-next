import PostStyles from '../../../styles/Post.module.scss';
import styles from '../../../styles/posts[id].module.scss';
import {useRouter} from "next/router";
import {config} from "../../../constants";
import Meta from "../../../components/Meta";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import {useEffect, useState} from "react";
import moment from "moment";
import AddComment from "../../../components/AddComment";
import Comments from "../../../components/Comments";

const post = ({data}) => {
    // console.log(data)
    const [comments, setComments] = useState(data.comments);
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({});
    const [likes, setLikes] = useState(data.post.likes)
    const router = useRouter();
    const url = config.url.BASE_URL;

    useEffect(() => {
        checkAuth();
    }, [])

    function checkAuth() {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

        fetch(`${url}/users/self`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    router.push('/login');
                }
                setUser(data);
            })
    }

    const handleNewComment = (comment) => {
        setComments(comments => [comment, ...comments])
    }

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
        <div className={PostStyles.app} data-theme='light'>
            <Meta title={data.post.text}/>
            <Nav user={user}/>
            <main className='main'>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.likes_container}>
                            <p>{likes} Likes</p>
                            <img className={styles.like_icon} src="/upvote.svg" alt='like' onClick={() => likePost(data.post.post_id)}/>
                        </div>

                        <div className={styles.info}>
                            <div>
                                <p>Posted by
                                    <Link href="/profile/[id]" as={`/profile/${data.post.user_id}`}><a> user/{data.post.username}</a></Link> {moment(data.post.timestamp).format('DD/MM/YYYY')}
                                </p>
                                <h2>{data.post.title}</h2>
                            </div>

                            <div>
                                {data.post.text}
                            </div>

                            <AddComment postid={data.post.post_id} username={user.username} handleNewComment={handleNewComment}/>
                        </div>
                    </div>
                    <hr className={styles.hr_comments}/>
                    <Comments comments={comments}/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const url = config.url.BASE_URL;
    const res = await fetch(`${url}/posts/${context.params.id}`)
    const post = await res.json();

    return {
        props: {
            data: post
        }
    }
}

export default post;