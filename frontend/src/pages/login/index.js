import React, { useContext, useEffect } from 'react';
import styles from './login.module.scss';
import Left from './sections/left';
import Form from './sections/form';
import Loader from '../../components/shared/loader';
import LoaderContext from '../../context/loader/context';
import UserContext from '../../context/user/Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { loading, percentage } = useContext(LoaderContext);
    const {getUserDetails} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const testToken = async () => {
            const res = await getUserDetails();
            if(!res)
                return;
            navigate('/notes');
        };
        testToken();
        // eslint-disable-next-line
    }, [])
    

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
