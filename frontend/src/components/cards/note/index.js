import React from 'react';
import styles from './note.module.scss';
import formatDate from '../../../utils/formatDate';
import { Icon } from '@iconify/react';

const Note = (props) => {

    const {text, date, color, onSelect} = props;

    return (
        <article className={styles.container} style={{backgroundColor: color}}>
            <div className={styles.content}>
                <p>{text}</p>
                {
                    text.length > 100 &&
                    <button onClick={onSelect}>read more</button>
                }
            </div>
            <footer className={styles.footer}>
                <p>{formatDate(date)}</p>
                <article onClick={onSelect}>
                    <Icon icon="tabler:edit" />
                </article>
            </footer>
        </article>
    )
}

export default Note;
