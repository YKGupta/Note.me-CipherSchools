import React, { useContext } from 'react';
import styles from './loader.module.scss';
import BrandLogo from '../brand';
import ProgressBar from '../../atoms/progress bar';
import ThemeContext from '../../../context/theme/context';

const Loader = (props) => {

    const {percentage, text} = props;
    const {theme} = useContext(ThemeContext);

    return (
        <article className={styles.container} style={{backgroundColor: theme === "light" ? "var(--white)" : "var(--gray-dark)", color: theme === "dark" ? "var(--white) " : "var(--black)"}}>
            <BrandLogo type={theme} />
            <ProgressBar percentage={`${percentage}%`} />
            <p style={{ color: theme === "light" ? "var(--gray)" : "var(--white-light)"}}>{text}</p>
        </article>
    )
}

export default Loader;
