import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.scss'
import formStyles from '../styles/Forms.module.scss'
import {useState} from "react";
import {config} from "../constants";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Login() {
    const url = config.url.BASE_URL;
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTestLogIn = (e) => {
        e.preventDefault();
        const formData = {
            method: 'POST',
            body: JSON.stringify({
                username: 'testUser1',
                password: '123',
            }),
            headers:{'Content-Type': 'application/json'}
        }

        fetch(`${url}/users/log-in`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.token !== undefined) {
                    localStorage.setItem('token', JSON.stringify(data.token));
                    router.push('/');
                }
                else {
                    window.alert("Error, incorrect user/password");
                }
            })
            .catch(err => console.log(err));
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const formData = {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers:{'Content-Type': 'application/json'}
        }

        fetch(`${url}/users/log-in`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.token !== undefined) {
                    localStorage.setItem('token', JSON.stringify(data.token));
                    router.push('/');
                }
                else {
                    window.alert("Error, incorrect user/password");
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className='app'>
            <div className={styles.panel_art}> </div>
            <main className={formStyles.main}>
                <div className={formStyles.form_container}>
                    <div className={formStyles.form_header}>
                        <h1>Log in</h1>
                        <p>By continuing, you agree to our User Agreement and Privacy Policy</p>
                        <hr/>
                    </div>
                    <form method='POST'>
                        <div className={formStyles.form_control}>
                            <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className={formStyles.form_control}>
                            <input type="password" placeholder="Password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div>
                            <button className={formStyles.form_submit} type="submit" onClick={(e) => handleLogIn(e)}>LOG IN</button>
                        </div>
                        <div>
                            <button className={formStyles.form_submit} type="submit" onClick={(e) => handleTestLogIn(e)}>Test Account</button>
                        </div>
                        <div className={formStyles.signup_redirect}>
                            <p>New? <Link href='/signup'>SIGN UP</Link></p>
                        </div>
                    </form>
                </div>
            </main>
            <div className={styles.home}><Link href='/'>Home</Link></div>
        </div>
    )
}
