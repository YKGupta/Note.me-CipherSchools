import React from 'react';
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import NotesData from '../../data/notes.json';

const Notes = () => {
    return (
        <section className={styles.container}>
            <Greeting />
            <main className={styles.main}>
                {
                    NotesData.map((item, index) => <Note key={item.id} text={item.text} date={item.createdAt} color={item.color} />)
                }
            </main>
        </section>
    )
}

export default Wrapper(Notes);
