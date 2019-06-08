import React, { useState, useContext } from 'react'
import { Context } from '../Context'

const RecipientBio = () => {
    const [ person, setPerson ] = useContext(Context)

    return <div className='recipient-bio'>
        <img className='cover-image' src={person.image} />
        <div className='header-info'>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
        </div>
        <div className='bio-section'>
            <p>
                {person.story}
            </p>
        </div>
        <button className="donate-btn">DONATE</button>
    </div>
}
export default RecipientBio