import React from 'react'

const Tour = ({id,name, info, image, price, removeTour}) => {
  return (
    <section className='tourComponent'>
        <img src={image} alt={name}/>
        <div className='tourBody'>
            <div className='tourHeader'>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
            <p>{info}</p>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    </section>
  )
}

export default Tour