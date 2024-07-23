import React, { useState } from 'react';
import ThemeContext from '../context';
import { getFromLocalStorage } from '../../../utils/localstorage';

const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
