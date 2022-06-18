import React from 'react'

const Birthday = ({people}) => {
    return (
    <>
        {people.map((person) => {
            const {id, name, age, image} = person;        
            return(
                <section className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </section>
            )
        })}
    </> 
    )
}

export default Birthday