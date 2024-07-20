import React, { useState } from 'react';
import NotesContext from '../Context';
import { toast } from 'react-toastify';
import { API_HOST } from '../../../config/types';
import { getFromLocalStorage } from '../../../utils/localstorage';

const NotesProvider = (props) => {

    const [notes, setNotes] = useState([]);

    const getAllNotes = async () => {
        try
        {
            const response = await fetch(`${API_HOST}/note/read`, {
				method: "GET",
				headers: {
					"Auth-Token": getFromLocalStorage("token")
				}
			});

            const json = await response.json();

            if(json.success)
            {
                setNotes(json.notes);
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

    const addNote = async (text, color) => {
        try
        {
            const response = await fetch(`${API_HOST}/note/create`, {
                method: "POST",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text, color })
            });

            const json = await response.json();

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
        }
        catch(error)
        {
            toast.error(error);
        }
    };

    const updateNote = async (id, text) => {
        try
        {
            const response = await fetch(`${API_HOST}/note/update/${id}`, {
                method: "PUT",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text })
            });

            const json = await response.json();

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
        }
        catch(error)
        {
            toast.error(error);
        }
    };

    const deleteNote = async (id, text) => {
        try
        {
            const response = await fetch(`${API_HOST}/note/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Auth-Token": getFromLocalStorage("token"),
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();

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
