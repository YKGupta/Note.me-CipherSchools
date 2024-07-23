import React, { useContext } from 'react';
import './input.module.scss';
import ThemeContext from '../../../context/theme/context';

const Input = (props) => {

    const { type, placeHolder, onChange, className } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <input type={`${type}`} placeholder={`${placeHolder}`} onChange={onChange} className={`${className}`} style={{backgroundColor: theme === "light" ? "var(--white)" : "var(--gray-dark)", color: theme === "dark" ? "var(--white)" : "var(--black)"}}/>
    )
}

export default Input;
