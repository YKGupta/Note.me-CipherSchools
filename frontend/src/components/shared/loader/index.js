import React, { useContext } from 'react';
import styles from './loader.module.scss';
import BrandLogo from '../brand';
import ProgressBar from '../../atoms/progress bar';
import ThemeContext from '../../../context/theme/context';

const Loader = (props) => {

    const {percentage} = props;
    const {theme} = useContext(ThemeContext);

    return (
        <article className={styles.container} style={{backgroundColor: theme === "light" ? "var(--white)" : "var(--black)", color: theme === "dark" ? "var(--white) " : "var(--black)"}}>
            <BrandLogo type={theme} />
            <ProgressBar percentage={`${percentage}%`} />
        </article>
    )
}

export default Loader;
