import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import Button from '../../../shared-components/Button'
import Header from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner';

const RecipientBio = ({match:{params}}) => {
    const [ person, setPerson ] = useContext(Context)
    const currentPerson = person[params.person]

    return <div>
        <Header/>
        <div className='recipient-bio'>
            <InfoBanner person={currentPerson} />
            <div className='bio-section'>
                <p>
                    {currentPerson.story}
                </p>
            </div>
            <Button label='DONATE' className='grey-button' link={`donate/${currentPerson.id}`}/>
        </div>
    </div>
}
export default RecipientBio