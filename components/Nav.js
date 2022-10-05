import styles from '../styles/Nav.module.scss';
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.nav_logo}>
                    <a href='https://github.com/Mikadev1996'>
                        <p>Hello</p>
                    </a>
                </div>

                <div>
                    Profile Link
                </div>

            </div>
        </nav>
    )
}

export default Nav;