import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from '../styles/Submit.module.scss';
import {useRouter} from "next/router";
import {config} from "../constants";
import {useEffect, useState} from "react";

export default function Submit() {
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
        <div className='app' data-theme='light'>
            <Nav user={user}/>
            <main className='main'>
                <div>
                    <h1>Create a post</h1>
                    <hr />
                </div>
                <div className={styles.create_container}>
                    <div>
                        <p>Post</p>
                    </div>
                    <div>
                        <input type='text' name='title' placeholder='Title' />
                    </div>
                    <div>
                        <textarea placeholder='Text (optional)'/>
                    </div>

                    <hr/>

                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}