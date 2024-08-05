import React, { useContext, useState } from 'react';
import UserContext from '../Context';
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../../../utils/localstorage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderContext from '../../loader/context';
import wait from '../../../utils/wait';

const UserProvider = (props) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ user, setUser ] = useState({});
    const navigate = useNavigate();
    const { setLoading, setPercentage, setLoadingText } = useContext(LoaderContext);

    const login = async () => {
        try
        {
            if(email.trim() === "" || password.trim() === "")
                return;

            setLoading(true);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
                body: JSON.stringify({
                    email,
                    password
                })
			});

            
            if(response.status === 500)
            {
                throw new Error("Unable to log you in");
            }

            setPercentage(60);
            setLoadingText("Validating data...");
            await wait(50);
            
            const json = await response.json();
            
            setPercentage(90);
            setLoadingText("Just a moment...");
            await wait(50);
            
            setName("");
            setEmail("");
            setPassword("");
            
            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                addToLocalStorage("token", json.data.token);
                navigate('/notes');
            }
            else
            {
                toast.error(json.message);
            }
        }
        catch(error)
        {
            toast.error(error.message);
        }
        finally
        {
            setLoading(false);
        }
    };

    const signup = async () => {
        try
        {
            if(name.trim() === "" || email.trim() === "" || password.trim() === "")
                return;

            setLoading(true);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
			});

            setPercentage(60);
            setLoadingText("Validating data...");
            await wait(50);

            if(response.status === 500)
            {
                throw new Error("Unable to sign you up");
            }

            const json = await response.json();

            setPercentage(90);
            setLoadingText("Just a moment...");
            await wait(50);
            
            setName("");
            setEmail("");
            setPassword("");

            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                addToLocalStorage("token", json.data.token);
                navigate('/notes');
            }
            else
            {
                toast.error(json.message);
            }
        }
        catch(error)
        {
            toast.error(error.message);
        }
        finally
        {
            setLoading(false);
        }
    };

    const getUserDetails = async () => {
        try
        {
            setLoading(true);
            setPercentage(10);
            setLoadingText("Trying to log in...");
            await wait(50);
            
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/details`, {
                method: "GET",
                headers: {
                    "Auth-Token": getFromLocalStorage("token")
                }
            });
            
            setPercentage(70);
            setLoadingText("Validating response...");
            await wait(50);
            
            const json = await response.json();

            if(response.status === 500)
            {
                throw new Error("Unable to fetch details");
            }

            setPercentage(90);
            setLoadingText("Just a moment...");
            await wait(50);
            
            if(json.success)
            {
                setUser(json.user);
                return true;
            }
            else
            {
                toast.error(json.message);
                return false;
            }
        }
        catch(error)
        {
            toast.error(error.message);
            return false;
        }
        finally
        {
            setLoading(false);
        }
    };

    const logout = () => {
        removeFromLocalStorage("token");
        setUser({});
        navigate('/');
    };

    return (
        <UserContext.Provider value={{ setName, setEmail, setPassword, login, signup, user, getUserDetails, logout, email, password, name }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;
