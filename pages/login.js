import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.scss'
import formStyles from '../styles/Forms.module.scss'
import {useState} from "react";
import {config} from "../constants";
import Link from "next/link";

export default function Login() {
    const url = config.url.BASE_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTestLogIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: username,
            password: password,
        })
        fetch(`${url}/users/log-in`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => console.log(data));
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
                            <input type="text" placeholder="Username" id="username" name='username'/>
                        </div>

                        <div className={formStyles.form_control}>
                            <input type="password" placeholder="New password" id="password" maxLength="16" name='password'/>
                        </div>

                        <div>
                            <button className={formStyles.form_submit} type="submit">LOG IN</button>
                        </div>
                        <div className={formStyles.signup_redirect}>
                            <p>New? <Link href='/signup'>SIGN UP</Link></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
