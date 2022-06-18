import React from 'react';
import { useState } from 'react';

const Tour = ({id,name, info, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  const readMoreBtn = () => {
    let status ='Show more';
    readMore? status='Show less': status='Show more';
    return status;
  }

  return (
    <section className='tourComponent'>
        <img src={image} alt={name}/>
        <div className='tourBody'>
            <div className='tourHeader'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <p>
              {readMore ? info : `${info.substring(0,180)}...`}
              <button className='showMoreBtn' onClick={() => setReadMore(!readMore)}>{readMore?'Show less':'Read more'}</button>
            </p>
            <button className='notInterestedBtn' onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    </section>
  )
}

export default Tour