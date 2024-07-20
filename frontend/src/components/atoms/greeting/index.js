import React, { useContext, useEffect } from 'react';
import styles from './greeting.module.scss';
import UserContext from '../../../context/user/Context';
import { getFromLocalStorage } from '../../../utils/localstorage';

const Greeting = () => {

    const { user, getUserDetails } = useContext(UserContext);

    useEffect(() => {
        if(!getFromLocalStorage("token"))
            return;
        getUserDetails();
        // eslint-disable-next-line
    }, []);

    return (
        <section className={styles.container}>
            <h2>Hello, <span>{user.name}! 👋🏻</span></h2>
            <p>All your notes are here, in one place!</p>
        </section>
    )
}

export default Greeting;
