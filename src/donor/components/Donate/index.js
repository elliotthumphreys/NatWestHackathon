import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import { ThinHeader } from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'
import Input from '../../../shared-components/Input'
import Slider from '@material-ui/lab/Slider'
import Button from '../../../shared-components/Button'
import { NativeSelect } from '@material-ui/core';

const Donate = ({match:{params}}) => {
    const [ people, setPerson ] = useContext(Context)
    const currentPerson = people.find(person => person.id === params.person)
    let [ amount, setAmount ] = useState(10)
    let [ pot, setPot ] = useState(params.pot.id)
    return <div>
        <ThinHeader/>
        <Link to={`/recipient-bio/${currentPerson.id}`}>
          <InfoBanner person={currentPerson}/>
        </Link>
        <NativeSelect defaultValue={params.pot} onChange={(event) => setPot(event.target.value)}>
          <option value='split'>Split pot</option>
          {
            currentPerson.pots.map((pot, index) => 
              <option value={pot.id}>{pot.name}</option>
            )
          }
        </NativeSelect>
        <Input label='Donation Message' icon={() => <Edit />} onChange={() => {}}/>
        <Slider
          value={amount}
          aria-labelledby="label"
          onChange={(event, value) => setAmount(value)}
          step={1}
          min={1} max={100}
        />
        <Input type='number' label='Amount (GBP) £' icon={() => {}} value={amount} onChange={setAmount}/>
        <Button label='DONATE' className='grey-button' link={`/donated/${currentPerson.id}/${pot}/${amount}`}/>
    </div>
}
export default Donate