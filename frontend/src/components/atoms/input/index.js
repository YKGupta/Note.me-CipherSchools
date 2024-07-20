import React from 'react';
// eslint-disable-next-line
import styles from './input.module.scss';

const Input = (props) => {

    const { type, placeHolder, onChange, className } = props;

    return (
        <input type={`${type}`} placeholder={`${placeHolder}`} onChange={onChange} className={`${className}`} />
    )
}

export default Input;
