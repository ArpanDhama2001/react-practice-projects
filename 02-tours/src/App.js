import React, { useState, useEffect } from 'react'

import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const tours = await response.json();
            // console.log(tours);
            setTours(tours);
            setLoading(false)
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if(loading) {
        return(
            <Loading />
        )
    } else {
        return(
            <Tours tours={tours}/>
        )
    }
}

export default App