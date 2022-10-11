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
    console.log(data);
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({});
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

    return (
        <div className={PostStyles.app} data-theme='light'>
            <Meta title={data.post.text}/>
            <Nav user={user}/>
            <main className='main'>
                This is post {data.post.post_id}
                <div className='view-post-content-header'></div>
                <div className='view-post-container'>
                    <div className='view-post-content'>
                        <div className='view-post-likes-container'>
                            <p>{data.post.likes} Likes</p>
                            <img src="/upvote.svg" alt='like'/>
                        </div>

                        <div className='view-post-info'>
                            <div className='post-header'>
                                <p>Posted by
                                    user/{data.post.username} {moment(data.post.timestamp).format('DD/MM/YYYY')}</p>
                                <h2>{data.post.title}</h2>
                            </div>

                            <div className='view-post-text'>
                                {data.post.text}
                            </div>

                            <AddComment postid={data.post.post_id}/>
                        </div>
                    </div>
                    <hr className='hr-comments'/>
                    <Comments/>
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