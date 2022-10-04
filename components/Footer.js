import styles from '../styles/Footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <ul className={styles.footer_list}>
                    <li className={styles.selected_lang}>English (UK)</li>
                    <li>Polski</li>
                    <li>Español</li>
                    <li>Français</li>
                    <li>Italiano</li>
                    <li>Lietuvių</li>
                    <li>Română</li>
                    <li>中文</li>
                    <li>Português</li>
                    <li>Deutsch</li>
                </ul>
                <ul className={styles.footer_info}>
                    <Link href='/'><li>Log In</li></Link>
                    <Link href='/sign-up'><li>Sign Up</li></Link>
                    <Link href='https://github.com/Mikadev1996'><li>Mika's GitHub</li></Link>
                    <Link href='/home'><li>Home</li></Link>
                </ul>
                <ul className={styles.footer_info}>
                    <li>Mika © 2022</li>
                </ul>
            </div>
        </footer>
    )
}