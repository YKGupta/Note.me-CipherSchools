import React, { Suspense } from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar';
import Loader from '../components/shared/loader';

const Main = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className={styles.container}>
                <Sidebar />
                <main className={styles.main}>
                    <Navbar />
                    <section classNane={styles.content}>
                        <Outlet />
                    </section>
                </main>
            </div>
        </Suspense>
    )
}

export default Main;
