import styles from '../styles/Home.module.scss'
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import {useState} from 'react';
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import {config} from '../constants';

export default function Home({posts}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className='app' data-theme={theme}>
            <Meta title='Forum Home' description='Forum/Blog social media app created with Next'/>

            <Nav />
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