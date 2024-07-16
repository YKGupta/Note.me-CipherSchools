import React, { useEffect, useState } from 'react';
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import { getFromLocalStorage } from '../../utils/localstorage';
import { NOTES_DATA } from '../../config/types';

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const data = getFromLocalStorage(NOTES_DATA);

    useEffect(() => {
        if(!data)
            return;
        setNotes(data);
    }, [data]);

    return (
        <section className={styles.container}>
            <Greeting />
            <main className={styles.main}>
                {
                    notes.map((item, index) => <Note key={item.id} text={item.text} date={item.createdAt} color={item.color} />)
                }
            </main>
        </section>
    )
}

export default Wrapper(Notes);
