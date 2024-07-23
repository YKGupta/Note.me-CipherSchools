import React, { useContext } from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar';
import ThemeContext from '../context/theme/context';

const Main = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={styles.container} style={{ backgroundColor: theme === "light" ? "var(--white)" : "var(--gray-dark)"}}>
            <Sidebar />
            <main className={styles.main}>
                <Navbar />
                <section className={styles.content}>
                    <Outlet />
                </section>
            </main>
        </div>
    )
}

export default Main;
