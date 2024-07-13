import React, { useState } from 'react';
import styles from './form.module.scss';
import Button from '../../../../components/atoms/button';
import Input from '../../../../components/atoms/input';
import BrandLogo from '../../../../components/shared/brand';

const Form = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <section className={styles['form-container']}>
            <div className={styles.form}>
                <BrandLogo />
                <Button 
                    text="Join With Google"
                    icon="bi:google"
                    className="google"
                    isDisabled={false}
                    color="#F7685C"
                />
                <div className={styles.option}>
                    <span>or join with email address</span>
                </div>
                <article className={styles.details}>
                    <Input type="email" placeHolder="Enter your email id" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeHolder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </article>
                <Button 
                    text="Continue"
                    icon="material-symbols:login"
                    className="emailBtn"
                    isDisabled={false}
                    color="#30C58D"
                />
            </div>
        </section>
    )
}

export default Form;
