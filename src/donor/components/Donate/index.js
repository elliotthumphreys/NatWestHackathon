import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import Button from '../../../shared-components/Button'
import Header, { ThinHeader } from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner';

const Donate = ({match:{params}}) => {
    const [ person, setPerson ] = useContext(Context)
    const currentPerson = person[params.person]

    return <div>
        <ThinHeader/>
        <InfoBanner person={currentPerson}></InfoBanner>
        <select>
          <option>Split pot</option>
          {
            currentPerson.pots.map((pot, index) => 
              <option value={pot.name}>{pot.name}</option>
            )
          }
        </select>
    </div>
}
export default Donate