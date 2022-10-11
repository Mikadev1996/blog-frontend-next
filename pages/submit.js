import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from '../styles/Submit.module.scss';
import {useRouter} from "next/router";
import {config} from "../constants";
import {useEffect, useState} from "react";

export default function Submit() {
    const [user, setUser] = useState({});
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
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

    const submitPost = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                title: title,
                text: text
            })
        }

        fetch(`${url}/posts/create`, formData)
            .then(r => r.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    router.push('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='app' data-theme='light'>
            <Nav user={user}/>
            <main className='main'>
                <div>
                    <h1>Create a post</h1>
                    <hr />
                </div>
                <form className={styles.create_container}>
                    <div>
                        <p>Post</p>
                    </div>
                    <div>
                        <input type='text' name='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} required/>
                    </div>
                    <div>
                        <textarea placeholder='Text (optional)' onChange={(e) => setText(e.target.value)}/>
                    </div>

                    <hr/>

                    <div>
                        <button className={styles.submit} onClick={(e) => submitPost(e)}>Post</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    )
}