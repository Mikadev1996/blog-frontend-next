import {config} from "../../../constants";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import PostList from "../../../components/PostList";
import styles from '../../../styles/Profile.module.scss';
import moment from "moment";
import {useEffect, useState} from "react";

const profile = ({user, posts}) => {
    const [userData, setUserData] = useState({})
    const dateFormatted = moment(user.date_joined).format('DD/MM/YYYY');
    const url = config.url.BASE_URL;

    useEffect(() => {
        checkAuth();
    },[])

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
                setUserData(data);
            })
    }

    return (
        <div className='app' data-theme='light'>
            <Nav user={userData}/>
            <main className={styles.profile_main}>
                <PostList posts={posts}/>
                <div className={styles.profile_display}>
                    Hello {user.username}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const url = config.url.BASE_URL;
    const userQuery = await fetch(`${url}/users/${context.params.id}`)
    const user = await userQuery.json();

    const userPostsQuery = await fetch(`${url}/posts/user/${context.params.id}`);
    const userPosts = await userPostsQuery.json();

    return {
        props: {
            user: user,
            posts: userPosts
        }
    }
}

export default profile;