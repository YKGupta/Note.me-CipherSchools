import React from 'react';
import styles from './loader.module.scss';
import BrandLogo from '../brand';
import ProgressBar from '../../atoms/progress bar';

const Loader = (props) => {

    const {percentage} = props;

    return (
        <article className={styles.container}>
            <BrandLogo />
            <ProgressBar percentage={percentage} />
        </article>
    )
}

export default Loader;
