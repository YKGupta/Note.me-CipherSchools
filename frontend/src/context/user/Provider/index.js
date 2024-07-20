import React, { useContext, useState } from 'react';
import UserContext from '../Context';
import { API_HOST } from '../../../config/types';
import { addToLocalStorage, getFromLocalStorage } from '../../../utils/localstorage';
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
    const { setLoading, setPercentage } = useContext(LoaderContext);

    const login = async () => {
        try
        {
            if(email.trim() === "" || password.trim() === "")
                return;

            setLoading(true);
            setPercentage(40);
            await wait(50);

            const response = await fetch(`${API_HOST}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
                body: JSON.stringify({
                    email,
                    password
                })
			});

            setPercentage(80);
            await wait(50);
            
            const json = await response.json();
            
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

            setLoading(false);
        }
        catch(error)
        {
            console.log(error);
        }
    };

    const signup = async () => {
        try
        {
            if(name.trim() === "" || email.trim() === "" || password.trim() === "")
                return;

            setLoading(true);
            setPercentage(40);
            await wait(50);

            const response = await fetch(`${API_HOST}/signup`, {
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

            setPercentage(80);
            await wait(50);

            const json = await response.json();

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

            setLoading(false);
        }
        catch(error)
        {
            toast.error(error);
        }
    };

    const getUserDetails = async () => {
        try
        {
            const response = await fetch(`${API_HOST}/details`, {
                method: "GET",
                headers: {
                    "Auth-Token": getFromLocalStorage("token")
                }
            });
            
            const json = await response.json();
            
            if(json.success)
            {
                setUser(json.user);
            }
            else
            {
                toast.error(json.message);
            }
        }
        catch(error)
        {
            toast.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ setName, setEmail, setPassword, login, signup, user, getUserDetails, email, password, name }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;
