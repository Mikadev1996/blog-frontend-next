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
                    {!user && <Link href='/signup'><button className={styles.sign_up}>Sign Up</button></Link>}
                    {!user && <Link href='/login'><button className={styles.log_in}>Log In</button></Link>}
                    {user && <button className={styles.log_in}>Log Out</button>}
                    {user && <Link href='/submit'><div className={styles.submit}><img src='/plus.png' alt='submit'/></div></Link>}
                    {user &&
                    <Link href="/profile/[id]" as={`/profile/${user.user_id}`}>
                        <div className={styles.nav_profile}>
                            <p>Pic</p>
                            <p>{user.username}</p>
                            <img src='/chevron.png' alt='chevron' width={10} height={10}/>
                        </div>
                    </Link>}
                </div>

            </div>
        </nav>
    )
}

export default Nav;