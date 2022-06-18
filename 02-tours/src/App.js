import React, { useState, useEffect } from 'react'

import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => {
            if(tour.id !== id) return tour;
        })
        setTours(newTours);
    }

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
                        <div className='toursComponent loading'>
                            <h1>Loading...</h1>
                        </div>
                    )
                } else if(tours.length && !loading) {
                    return(
                        <Tours tours={tours} removeTour={removeTour}/>
                    )
                } else {
                    return(
                        <section className='toursComponent noTours'>
                            <h1>No Tours</h1>
                            <button className='refreshBtn' onClick={() => fetchTours()}>Refresh</button>
                        </section>
                    )
                }
}

export default App