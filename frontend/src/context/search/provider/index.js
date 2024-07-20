import React, { useState } from 'react';
import SearchContext from '../context';

const SearchProvider = (props) => {

    const [searchText, setSearchText] = useState("");

    return (
        <SearchContext.Provider value={{searchText, setSearchText}}>
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;
