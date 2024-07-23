import React, { useContext } from 'react';
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from '../../atoms/input';
import SearchContext from '../../../context/search/context';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Downloadable from '../downloadable';
import NotesContext from '../../../context/notes/Context';
import UserContext from '../../../context/user/Context';
import ThemeContext from '../../../context/theme/context';
import { addToLocalStorage } from '../../../utils/localstorage';

const Navbar = () => {

    const {searchText, setSearchText} = useContext(SearchContext);
    const { notes } = useContext(NotesContext);
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={styles.header}>
            <article className={styles.searchBar}>
                <Icon icon="material-symbols:search" style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}} />
                <Input type="text" value={searchText} className={styles.field} placeHolder="Search Notes" onChange={(e) => setSearchText(e.target.value)} />
                <article>
                    <PDFDownloadLink document={<Downloadable notes={notes} user={user} />} fileName={`Your Notes - ${new Date().toTimeString()}.pdf`}>
                        {({ blob, url, loading, error }) =>
                            loading ? <Icon icon="eos-icons:loading" style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}} /> : <Icon icon="material-symbols:download-sharp" style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}} />
                        }
                    </PDFDownloadLink>
                </article>
                <article onClick={() => { 
                    addToLocalStorage("theme", theme === "light" ? "dark" : "light");
                        setTheme(theme === "light" ? "dark" : "light"); 
                    } 
                }>
                    <Icon icon={theme === "light" ? "ph:moon" : "ph:sun"} style={{color: theme === "light" ? "var(--gray)" : "var(--white-light)"}} />
                </article>
            </article>
        </header>
    )
}

export default Navbar;
