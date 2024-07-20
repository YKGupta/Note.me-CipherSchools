import React, { useContext } from 'react';
import styles from './login.module.scss';
import Left from './sections/left';
import Form from './sections/form';
import Loader from '../../components/shared/loader';
import LoaderContext from '../../context/loader/context';

const Login = () => {

    const { loading, percentage } = useContext(LoaderContext);

    return (
        <>
            { 
                loading ?
                <Loader percentage={percentage} />
            :
                <main className={styles.container}>
                    <Left />
                    <Form />
                </main>
            }
        </>
    )
}

export default Login;
