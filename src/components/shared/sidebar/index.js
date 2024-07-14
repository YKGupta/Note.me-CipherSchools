import React from 'react';
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import { Icon } from '@iconify/react/dist/iconify.js';
import sideData from '../../../data/sidebar.json';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type="dark" className={styles.logo} />
            <section>
                {
                    sideData.map((item, index) => 
                        <article key={index}>
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
