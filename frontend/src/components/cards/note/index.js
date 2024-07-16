import React, { useState } from 'react';
import styles from './note.module.scss';
import formatDate from '../../../utils/formatDate';

const Note = (props) => {

    const [expand, setExpand] = useState(false);
    const [noteText, setNoteText] = useState("");
    const {text, date, color} = props;

    return (
        <article className={styles.container} style={{backgroundColor: color}}>
            <div className={styles.content}>
                {
                    !text.length ?
                    <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} className={styles.textarea} />
                    :
                    <>
                        <p className={`${expand ? styles.expanded : ""}`}>{text}</p>
                        {
                            text.length > 100 &&
                            <button onClick={() => setExpand(!expand)}>read {expand ? "less" : "more"}</button>
                        }
                    </>
                }
            </div>
            <footer className={styles.footer}>{formatDate(date)}</footer>
        </article>
    )
}

export default Note;
