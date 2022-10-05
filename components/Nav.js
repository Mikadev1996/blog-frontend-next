import styles from '../styles/Nav.module.scss';
import Link from "next/link";

const Nav = ({user}) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.nav_item}>
                    <a href='https://github.com/Mikadev1996'>
                        <p>Forum</p>
                    </a>
                </div>

                <div className={styles.nav_item}>
                    <Link href='/signup'><button className={styles.sign_up}>Sign Up</button></Link>
                    <Link href='/login'><button className={styles.log_in}>Log In</button></Link>
                    <Link href='/submit'><div className={styles.submit}><img src='/plus.png' alt='submit'/></div></Link>
                    <div className={styles.nav_profile}>
                        <p>Pic</p>
                        <p>Username</p>
                        <img src='/chevron.png' alt='chevron' width={10} height={10}/>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav;