import React from 'react';
import styles from './greeting.module.scss';

const Greeting = () => {
    return (
        <section className={styles.container}>
            <h2>Hello, <span>Yash! 👋🏻</span></h2>
            <p>All your notes are here, in one place!</p>
        </section>
    )
}

export default Greeting;
