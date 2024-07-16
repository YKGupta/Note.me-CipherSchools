import React from 'react';
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import { Icon } from '@iconify/react/dist/iconify.js';
import sideData from '../../../data/sidebar.json';
import { useNavigate } from 'react-router-dom';
import { addToLocalStorage, getFromLocalStorage } from '../../../utils/localstorage';
import { NOTES_DATA } from '../../../config/types';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleClick = (src) => {
        if(src.title === "Add Notes")
        {
            const oldData = getFromLocalStorage(NOTES_DATA);
            const newData = [{
                id: oldData.length + 1,
                color: "rgb(151, 210, 188, 0.4)",
                text: "",
                createdAt: new Date().toISOString()
            }, ...oldData];
            addToLocalStorage(NOTES_DATA, newData);
        }
    };

    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type="dark" className={styles.logo} />
            <section>
                {
                    sideData.map((item, index) => 
                        <article key={index} onClick={() => handleClick(item)}>
                            <Icon icon={item.icon} />
                        </article>
                    )
                }
            </section>
            <article className={styles.logout} onClick={() => navigate('/')}>
                <Icon icon="material-symbols:logout" />
            </article>
        </aside>
    )
}

export default Sidebar;
