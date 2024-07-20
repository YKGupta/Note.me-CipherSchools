import React, { useContext, useState } from 'react';
import styles from './popup.module.scss';
import formatDate from '../../../utils/formatDate';
import changeAlpha from '../../../utils/changeAlpha';
import { Icon } from '@iconify/react';
import NotesContext from '../../../context/notes/Context';
import complementaryColor from '../../../utils/complementaryColor';

const Popup = ({ text, date, color, onClose, id }) => {

    const { updateNote, deleteNote } = useContext(NotesContext);
    const [noteText, setNoteText] = useState(text);

    const bgColor = changeAlpha(color, 1);
    const textColor = complementaryColor(bgColor);

    const handleSave = () => {
        updateNote(id, noteText);
        onClose();
    };

    const handleDelete = () => {
        deleteNote(id);
        onClose();
    };

    return (
        <article className={styles.container} style={{backgroundColor: bgColor}}>
            <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} style={{color: textColor}} />
            <footer style={{color: textColor}}>{formatDate(date)}</footer>
            <div className={styles.closeBtn} style={{color: textColor}} onClick={onClose}>
                <Icon icon="charm:cross" />
            </div>
            <div className={styles.saveBtn} style={{color: textColor}} onClick={handleSave}>
                <Icon icon="mingcute:save-line" />
            </div>
            <div className={styles.deleteBtn} style={{color: textColor}} onClick={handleDelete}>
                <Icon icon="ic:outline-delete" />
            </div>
        </article>
    );
}

export default Popup;
