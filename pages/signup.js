import styles from "../styles/Login.module.scss";
import formStyles from "../styles/Forms.module.scss";
import {config} from "../constants";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export default function SignUp() {
    const url = config.url.BASE_URL;
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
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
            .then(data => console.log(data))
            .then(data => {
                router.push('/');
            })
            .catch(err => console.log(err));
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const formData = {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers:{'Content-Type': 'application/json'}
        }

        fetch(`${url}/users/sign-up`, formData)
            .then(r => r.json())
            .then(r => {
                logIn();
            })
    }


    return (
        <div className='app'>
            <div className={styles.panel_art}> </div>
            <main className={formStyles.main}>
                <div className={formStyles.form_container}>
                    <div className={formStyles.form_header}>
                        <h1>Sign up</h1>
                        <p>By continuing, you are setting up an account and agree to our User Agreement and Privacy Policy</p>
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
                            <button className={formStyles.form_submit} type="submit" onClick={(e) => handleSignUp(e)}>SIGN UP</button>
                        </div>
                        <div className={formStyles.signup_redirect}>
                            <p>Already a user? <Link href='/login'>LOG IN</Link></p>
                        </div>
                    </form>
                </div>
            </main>
            <div className={styles.home}><Link href='/'>Home</Link></div>
        </div>
    )
}