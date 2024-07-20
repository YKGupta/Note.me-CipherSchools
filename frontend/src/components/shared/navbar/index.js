import React, { useContext } from 'react';
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from '../../atoms/input';
import SearchContext from '../../../context/search/context';

const Navbar = () => {

    const {searchText, setSearchText} = useContext(SearchContext);

    return (
        <header className={styles.header}>
            <article className={styles.searchBar}>
                <Icon icon="material-symbols:search" />
                <Input type="text" value={searchText} className={styles.field} placeHolder="Search Notes" onChange={(e) => setSearchText(e.target.value)} />
                {/* <Icon icon="vaadin:sun-down" /> */}
            </article>
        </header>
    )
}

export default Navbar;
