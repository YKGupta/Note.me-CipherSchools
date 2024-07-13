import React from 'react';
import styles from './sidebar.module.scss';
import BrandLogo from '../brand';
import { Icon } from '@iconify/react/dist/iconify.js';
import sideData from '../../../data/sidebar.json';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <BrandLogo logoOnly={true} type="dark" className={styles.logo} />
            <section>
                {
                    sideData.map((item) => 
                        <article key={item.title}>
                            <Icon icon={item.icon} />
                        </article>
                    )
                }
            </section>
            <article>
                <Icon icon="material-symbols:logout" />
            </article>
        </aside>
    )
}

export default Sidebar;
