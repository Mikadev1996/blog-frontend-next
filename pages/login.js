import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTestLogIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: username,
            password: password,
            date_joined: Date.now(),
            picture_url: "someUrl"
        })
        fetch('http://localhost:3000/api/users/sign-up', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => console.log(data));
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Log In Page</h1>
                <form className='account-form'>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={e => handleTestLogIn(e)} id='test-account-login' className='form-submit' type="submit">Test Account</button>
                    </div>
                </form>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
