import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import Button from '../../../shared-components/Button'
import {ThinHeader} from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner';
import { Link } from 'react-router-dom'

const RecipientBio = ({match:{params}}) => {
    const [ people, setPerson ] = useContext(Context)
    const currentPerson = people.find(person => person.id === params.person)

    return <div>
        <ThinHeader/>
        <div className='recipient-bio'>
            <Link to={`/recipient-bio/${currentPerson.id}`}>
                <InfoBanner person={currentPerson}/>
            </Link>
            <div className='bio-section'>
                <p>
                    {currentPerson.story}
                </p>
            </div>
            <Button label='DONATE' className='grey-button' link={`/start/${currentPerson.id}`}/>
        </div>
    </div>
}
export default RecipientBio