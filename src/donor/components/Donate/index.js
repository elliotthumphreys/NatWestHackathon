import React, { useState, useContext } from 'react'
import { Context } from '../../../Context'
import { ThinHeader } from '../../../shared-components/Header'
import InfoBanner from '../InfoBanner'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'
import Input from '../../../shared-components/Input'
import Slider from '@material-ui/lab/Slider'

const Donate = ({match:{params}}) => {
    const [ people, setPerson ] = useContext(Context)
    const currentPerson = people.find(person => person.id === params.person)
    let [ amount, setAmount ] = useState(10)
    return <div>
        <ThinHeader/>
        <Link to={`/recipient-bio/${currentPerson.id}`}>
          <InfoBanner person={currentPerson}/>
        </Link>
        <select defaultValue={params.pot}>
          <option>Split pot</option>
          {
            currentPerson.pots.map((pot, index) => 
              <option value={pot.id}>{pot.name}</option>
            )
          }
        </select>
        <Input label='Donation Message' icon={() => <Edit />} onChange={() => {}}/>
        <Slider
          value={Number(amount)}
          aria-labelledby="label"
          onChange={(event, value) => setAmount(Number(value).toFixed(2))}
          min={1} max={100}
        />
        <Input type='number' label='Amount (GBP) £' icon={() => {}} value={Number(amount)} onChange={(event, value) => setAmount(value)}/>
    </div>
}
export default Donate