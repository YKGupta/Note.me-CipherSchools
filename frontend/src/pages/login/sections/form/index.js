import React, { useContext, useState } from 'react';
import styles from './form.module.scss';
import Button from '../../../../components/atoms/button';
import Input from '../../../../components/atoms/input';
import BrandLogo from '../../../../components/shared/brand';
import UserContext from '../../../../context/user/Context';
import ThemeContext from '../../../../context/theme/context';

const Form = () => {

    const [registering, setRegistering] = useState(false);
    const { setName, setEmail, setPassword, login, signup, name, email, password } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles['form-container']}>
            <div className={styles.form}>
                <BrandLogo />
                <Button 
                    text={!registering ? "Sign Up" : "Log in"}
                    icon={!registering ? "mdi:register-outline" : "material-symbols:login"}
                    className="signup"
                    isDisabled={false}
                    color="#F7685C"
                    handleClick={() => setRegistering(!registering)}
                />
                <div className={styles.option}>
                    <span style={{backgroundColor: theme === "light" ? "var(--white)" : "var(--black)", color: theme === "light" ? "var(--gray)" : "var(--gray)"}}>or login with email address</span>
                </div>
                <article className={styles.details}>
                    {
                        registering &&
                        <Input type="text" placeHolder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    }
                    <Input type="email" placeHolder="Enter your email id" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeHolder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </article>
                <Button 
                    text="Continue"
                    icon={registering ? "mdi:register-outline" : "material-symbols:login"}
                    className="emailBtn"
                    isDisabled={registering ? (name.trim() === "" || email.trim() === "" || password.trim() === "") : (email.trim() === "" || password.trim() === "")}
                    color="#30C58D"
                    handleClick={registering ? signup : login}
                />
            </div>
        </section>
    )
}

export default Form;
