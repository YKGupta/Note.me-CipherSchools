import React, { useContext } from 'react';
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import { Icon } from '@iconify/react/dist/iconify.js';
import sideData from '../../../data/sidebar.json';
import { useNavigate } from 'react-router-dom';
import generateRandomColor from '../../../utils/genRandomColor';
import NotesContext from '../../../context/notes/Context';
import UserContext from '../../../context/user/Context';

const Sidebar = () => {

    const { addNote } = useContext(NotesContext);
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = (src) => {
        if(src.title === "Add Notes")
        {
            addNote("Type your note...", generateRandomColor(0.4));
        }
    };

    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} onlyDark={true} className={styles.logo} onClick={() => navigate('/notes')} />
            <section>
                {
                    sideData.map((item, index) => 
                        <article key={index} onClick={() => handleClick(item)} className={index === 0 ? styles.active : ""}>
                            <Icon icon={item.icon} />
                        </article>
                    )
                }
            </section>
            <article className={styles.logout} onClick={logout}>
                <Icon icon="material-symbols:logout" />
            </article>
        </aside>
    )
}

export default Sidebar;
