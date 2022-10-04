import useLocalStorage from 'use-local-storage';
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import {useEffect, useState} from 'react';

export default function Home() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }


    
    return (
        <div className={styles.app} data-theme={theme}>
            <Meta title='Forum Home' description='Forum/Blog social media app created with Next'/>

            <main className={styles.main}>

            </main>

            <Footer/>
        </div>
    )
}
