import styles from '../../../styles/Post.module.scss';
import { useRouter } from "next/router";
import { config } from "../../../constants";
import Meta from "../../../components/Meta";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import {useEffect, useState} from "react";

const post = ({data}) => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({});
    const router = useRouter();
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
                setUser(data);
            })
    }

    return (
        <div className={styles.app} data-theme='light'>
            <Meta title={data.post.text} />
            <Nav user={user}/>
            <main className='main'>
                This is post {data.post.post_id}
                <p>{data.post.text}</p>
                <Link href='/'>Go Back</Link>
            </main>
            <Footer />
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