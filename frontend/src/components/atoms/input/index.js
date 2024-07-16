import React from 'react';
import styles from './input.module.scss';

const Input = (props) => {

    const { type, placeHolder, onChange, className, value } = props;

    return (
        <input type={`${type}`} placeholder={`${placeHolder}`} onChange={onChange} className={`${className}`} />
    )
}

export default Input;
