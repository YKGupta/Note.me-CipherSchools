import React, { useContext, useState } from 'react';
import styles from './note.module.scss';
import formatDate from '../../../utils/formatDate';
import { Icon } from '@iconify/react';
import ThemeContext from '../../../context/theme/context';

const Note = (props) => {

    const [hovering, setHovering] = useState(false);

    const { theme } = useContext(ThemeContext);
    const {text, date, color, onSelect} = props;

    return (
        <article className={styles.container} style={{backgroundColor: color}} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div className={styles.content}>
                <p style={{color: theme === "light" ? "var(--gray-dark)" : "var(--white)"}}>{text}</p>
                {
                    text.length > 100 &&
                    <button onClick={onSelect} style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}}>read more</button>
                }
            </div>
            <footer className={styles.footer} style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}}>
                <p>{formatDate(date)}</p>
                {
                    hovering &&
                    <article onClick={onSelect}>
                        <Icon icon="tabler:edit" />
                    </article>
                }
            </footer>
        </article>
    )
}

export default Note;
