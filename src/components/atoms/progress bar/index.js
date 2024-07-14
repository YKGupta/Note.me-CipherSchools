import React from 'react';
import styles from './bar.module.scss';

const ProgressBar = (props) => {

    const { percentage } = props;

    return (
        <div className={styles.container}>
            <span style={{ width: percentage }}></span>
        </div>
    )
}

export default ProgressBar;
