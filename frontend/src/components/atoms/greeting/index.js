import React, { useContext, useEffect } from 'react';
import styles from './greeting.module.scss';
import UserContext from '../../../context/user/Context';
import { getFromLocalStorage } from '../../../utils/localstorage';
import ThemeContext from '../../../context/theme/context';

const Greeting = () => {

    const { user, getUserDetails } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if(!getFromLocalStorage("token"))
            return;
        if(!user.name)
            getUserDetails();
        // eslint-disable-next-line
    }, []);

    return (
        <section className={styles.container}>
            <h2 style={{color: theme === "dark" ? "var(--white)" : "var(--gray-dark)"}}>Hello, <span>{user.name}! 👋🏻</span></h2>
            <p style={{color: theme === "dark" ? "var(--white-light)" : "#4D4D4D"}}>All your notes are here, in one place!</p>
        </section>
    )
}

export default Greeting;
