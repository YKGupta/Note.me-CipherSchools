import React from 'react';
import styles from './note.module.scss';
import formatDate from '../../../utils/formatDate';

const Note = (props) => {

    const {text, date, color} = props;

    return (
        <article className={styles.container} style={{backgroundColor: color}}>
            <p>{text}</p>
            <footer className={styles.footer}>{formatDate(date)}</footer>
        </article>
    )
}

export default Note;
