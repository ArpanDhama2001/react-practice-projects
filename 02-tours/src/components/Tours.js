import React from 'react'

import Tour from './Tour'

const Tours = ({tours}) => {
    return(
        <section className='toursComponent'>
            <div>
                <h1>Tours</h1>
            </div>
            <div>
            {tours.map((tour) => {
                    return(
                        <Tour key={tour.id} {...tour} />
                    )
            })}
            </div>
        </section>
    )
}

export default Tours