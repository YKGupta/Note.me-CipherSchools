import React from 'react';
import { Icon } from '@iconify/react';
import styles from './button.module.scss';

function Button(props) {

    const { text, icon, className, handleClick, isDisabled, color } = props;

    return (
        <button onClick={handleClick} disabled={isDisabled} className={`${styles.button} ${className}`} style={{backgroundColor: color}}>
            <Icon icon={`${icon}`}/>
            <h3>{`${text}`}</h3>
        </button>
    )
}

export default Button;
