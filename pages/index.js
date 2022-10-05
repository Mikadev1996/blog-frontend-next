import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import {useEffect, useState} from 'react';
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import {config} from '../constants';
import {useRouter} from "next/router";

export default function Home({posts}) {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({});
    const router = useRouter();
    const url = config.url.BASE_URL;

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

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
                setUser(data);
            })
    }

    return (
        <div className='app' data-theme={theme}>
            <Meta title='Forum Home' description='Forum/Blog social media app created with Next'/>

            <Nav user={user}/>
            <main className='main'>
                <PostList posts={posts}/>
            </main>

            <Footer />
        </div>
    )
}

export const getStaticProps = async () => {
    const url = config.url.BASE_URL;
    const res = await fetch(`${url}/posts`)
    const posts = await res.json();

    return {
        props: {
            posts: posts,
        }
    }
}