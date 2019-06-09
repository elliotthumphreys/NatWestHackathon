import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Context } from '../../../Context'
import Button from '../../../shared-components/Button'
import InfoBanner from '../InfoBanner';
import { ThinHeader } from '../../../shared-components/Header';
import { Link } from 'react-router-dom'

const Start = ({ match: { params } }) => {
  const [people, setPerson] = useContext(Context)
  const currentPerson = people.find(person => person.id === params.person)
  return <div>
    <ThinHeader></ThinHeader>
    <div className='background'>
      <Link className='header-info' to={`/recipient-bio/${currentPerson.id}`}>
        <InfoBanner person={currentPerson}/>
      </Link>
      <div className="body-container">
        <p className="donate-msg">Donate to a category</p>
        <div className="pot-container">
          {
            currentPerson.pots.map((pot, index) =>
              <Button label={pot.name} className="grey-button" link={`/donate/${currentPerson.id}/${pot.id}`}/>
            )
          }
        </div>
      </div>
    </div>

  </div>
}

export default Start