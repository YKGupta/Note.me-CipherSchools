export function addToLocalStorage(key, value)
{
    if(typeof value === "object")
        localStorage.setItem(key, JSON.stringify(value));
    else
        localStorage.setItem(key, value);
}

export function getFromLocalStorage(key)
{
    const data = localStorage.getItem(key);
    if(!data)
        return null;

    try{
        return JSON.parse(data);
    }
    catch(err){
        return data;
    }
}

export function removeFromLocalStorage(key)
{
    localStorage.removeItem(key);
}

export function updateLocalStorage(key, newValue)
{
    if(localStorage.getItem(key))
    {
        localStorage.setItem(key, newValue);
        return true;
    }
    return false;
}