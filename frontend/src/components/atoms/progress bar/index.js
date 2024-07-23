import React, { useContext } from 'react';
import styles from './bar.module.scss';
import ThemeContext from '../../../context/theme/context';

const ProgressBar = (props) => {

    const { percentage } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.container} style={{backgroundColor: theme === "light" ? "var(--rose-light)" : "var(--black-light)"}}>
            <span style={{ width: percentage, backgroundColor: theme === "dark" ? "var(--rose)" : "var(--black)" }}></span>
        </div>
    )
}

export default ProgressBar;
