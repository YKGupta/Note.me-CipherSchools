import React, { useState } from 'react';
import LoaderContext from '../context';

const LoaderProvider = (props) => {

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [percentage, setPercentage] = useState(0);
    // eslint-disable-next-line
    const [loadingText, setLoadingText] = useState("Loading...");

    return (
        <LoaderContext.Provider value={{ loading, setLoading, percentage, setPercentage, loadingText, setLoadingText }}>
            { props.children }
        </LoaderContext.Provider>
    )
}

export default LoaderProvider;
