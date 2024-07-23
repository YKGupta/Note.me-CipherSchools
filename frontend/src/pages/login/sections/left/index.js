import React, { useContext } from 'react';
import styles from './left.module.scss';
import LoginImageLight from '../../../../assets/login light.png';
import LoginImageDark from '../../../../assets/login dark.png';
import ThemeContext from '../../../../context/theme/context';

const Left = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles.left}>
            <img src={theme === "light" ? LoginImageLight : LoginImageDark} alt="loginPage" />
            <div>
                <h1 style={{color: theme === "light" ? "var(--black)" : "var(--white)"}}>Keep life simple</h1>
                <p style={{color: theme === "light" ? "var(--gray)" : "var(--gray)"}}>Store all your notes in a simple and intuitive app that helps you enjoy what is most important in life.</p>
            </div>
        </section>
    )
}

export default Left;
