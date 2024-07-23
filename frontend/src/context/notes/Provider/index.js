import React, { useContext, useState } from 'react';
import NotesContext from '../Context';
import { toast } from 'react-toastify';
import { getFromLocalStorage } from '../../../utils/localstorage';
import LoaderContext from '../../loader/context';
import wait from '../../../utils/wait';

const NotesProvider = (props) => {

    const [notes, setNotes] = useState([]);
    const { setLoading, setPercentage, setLoadingText } = useContext(LoaderContext);

    const getAllNotes = async () => {
        try
        {
            setLoading(true);
            setPercentage(0);
            setLoadingText("Initiating requests...");
            await wait(50);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/note/read`, {
				method: "GET",
				headers: {
					"Auth-Token": getFromLocalStorage("token")
				}
			});

            setLoadingText("Interpreting reponse...");
            setPercentage(60);
            await wait(50);
            
            const json = await response.json();

            setLoadingText("Just a moment...");
            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                setNotes(json.notes);
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

    const addNote = async (text, color) => {
        try
        {
            setLoading(true);
            setPercentage(0);
            setLoadingText("Initiating requests...");
            await wait(50);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/note/create`, {
                method: "POST",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text, color })
            });

            setLoadingText("Interpreting reponse...");
            setPercentage(60);
            await wait(50);

            const json = await response.json();

            setLoadingText("Just a moment...");
            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                const newNote = json.note;
                const newNotes = notes.slice();
                newNotes.push(newNote);
                setNotes(newNotes);
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

    const updateNote = async (id, text) => {
        try
        {
            setLoading(true);
            setPercentage(0);
            setLoadingText("Initiating requests...");
            await wait(50);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/note/update/${id}`, {
                method: "PUT",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text })
            });

            setLoadingText("Interpreting reponse...");
            setPercentage(60);
            await wait(50);

            const json = await response.json();

            setLoadingText("Just a moment...");
            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                const newNotes = notes.slice();
                for(let i = 0; i < newNotes.length; i++)
                {
                    if(newNotes[i]._id === id)
                    {
                        newNotes[i].text = text;
                        break;
                    }
                }
                setNotes(newNotes);
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

    const deleteNote = async (id, text) => {
        try
        {
            setLoading(true);
            setPercentage(0);
            setLoadingText("Initiating requests...");
            await wait(50);
            setPercentage(10);
            setLoadingText("Waiting for server response...");
            await wait(50);

            const response = await fetch(`${process.env.REACT_APP_API_HOST}/note/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                }
            });

            setLoadingText("Interpreting reponse...");
            setPercentage(60);
            await wait(50);

            const json = await response.json();

            setLoadingText("Just a moment...");
            setPercentage(100);
            await wait(50);

            if(json.success)
            {
                const newNotes = notes.slice();
                for(let i = 0; i < newNotes.length; i++)
                {
                    if(!newNotes[i])
                        continue;
                    if(newNotes[i]._id === id)
                    {
                        delete newNotes[i];
                        break;
                    }
                }
                setNotes(newNotes);
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

    return (
        <NotesContext.Provider value={{ notes, setNotes, getAllNotes, addNote, updateNote, deleteNote }}>
            { props.children }
        </NotesContext.Provider>
    )
}

export default NotesProvider;
