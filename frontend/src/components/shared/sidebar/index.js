import React, { useContext } from 'react';
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import { Icon } from '@iconify/react/dist/iconify.js';
import sideData from '../../../data/sidebar.json';
import { useNavigate } from 'react-router-dom';
import generateRandomColor from '../../../utils/genRandomColor';
import NotesContext from '../../../context/notes/Context';
import { removeFromLocalStorage } from '../../../utils/localstorage';

const Sidebar = () => {

    const { addNote } = useContext(NotesContext);
    const navigate = useNavigate();

    const handleClick = (src) => {
        if(src.title === "Add Notes")
        {
            addNote("", generateRandomColor(0.4));
        }
    };

    const handleLogout = () => {
        removeFromLocalStorage("token");
        navigate('/');
    };

    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type="dark" className={styles.logo} onClick={() => navigate('/notes')} />
            <section>
                {
                    sideData.map((item, index) => 
                        <article key={index} onClick={() => handleClick(item)} className={index === 0 ? styles.active : ""}>
                            <Icon icon={item.icon} />
                        </article>
                    )
                }
            </section>
            <article className={styles.logout} onClick={handleLogout}>
                <Icon icon="material-symbols:logout" />
            </article>
        </aside>
    )
}

export default Sidebar;
