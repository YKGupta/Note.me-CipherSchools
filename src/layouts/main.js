import React, { Suspense } from 'react';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/sidebar';

const Main = () => {
    return (
        <Suspense fallback={<></>}>
            <Sidebar />
            <main className={styles.main}>
                {/* Navbar */}
                <section classNane={styles.content}>
                    <Outlet />
                </section>
            </main>
        </Suspense>
    )
}

export default Main;
