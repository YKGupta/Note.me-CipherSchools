import React from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar';

const Main = () => {

    return (
        <div className={styles.container}>
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
