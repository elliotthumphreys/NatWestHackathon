import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import { ThinHeader } from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'
import Button from '../../../shared-components/Button'

const Donated = ({match:{params}}) => {
    const [ people, setPerson ] = useContext(Context)
    const currentPerson = people.find(person => person.id === params.person)
    const currentPot = currentPerson.pots.find(pot => pot.id === params.pot);
    return <div>
        <ThinHeader/>
        <Link to={`/recipient-bio/${currentPerson.id}`}>
          <InfoBanner person={currentPerson}/>
        </Link>
        <div>
          {currentPot && currentPot.message ? currentPot.message : `Thank you for helping ${currentPerson.name}. Your generous donation of £${params.amount} will help towards ${currentPerson.name}'s ${currentPot ? `goal of ${currentPot.name}` : `goals`}.`}
        </div>
    </div>
}
export default Donated