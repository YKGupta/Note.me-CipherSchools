import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import { getFromLocalStorage } from '../../utils/localstorage';
import Popup from '../../components/cards/popup';
import NotesContext from '../../context/notes/Context';
import SearchContext from '../../context/search/context';
import ThemeContext from '../../context/theme/context';

const Notes = () => {

    const { notes, getAllNotes } = useContext(NotesContext);
    const {searchText} = useContext(SearchContext);
    const [selectedNote, setSelectedNote] = useState({});
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {

        if(!getFromLocalStorage("token")){
            navigate('/');
            return;
        }

        getAllNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <section className={styles.container} style={{backgroundColor: theme === "light" ? "var(--white)" : "var(--gray-dark)"}}>
            {
                selectedNote.color &&
                <Popup {...selectedNote} onClose={() => setSelectedNote({})} />
            }
            <Greeting />
            <main className={styles.main}>
                {
                    notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => <Note key={item._id} onSelect={() => setSelectedNote({ text: item.text, date: item.createdAt, color: item.color, id: item._id })} text={item.text} date={item.createdAt} color={item.color} />)
                }
            </main>
        </section>
    )
}

export default Wrapper(Notes);
