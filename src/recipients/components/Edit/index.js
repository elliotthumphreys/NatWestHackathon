import React, { useContext, useState } from 'react'
import AdminHeader from '../AdminHeader'
import { Context } from '../../../Context'
import Input from '../../../shared-components/Input'
import Button from '../../../shared-components/Button'
import SelectInput from '../SelectInput'
import { Delete } from '@material-ui/icons'
import styles from 'styled-components'

const Edit = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)

    const [pots, setPots] = useState(persons.find(_ => _.id === id).pots)

    const [showMessage, setShowMessage] = useState(false)

    const [failedDeletedMessage, setFailedDeletedMessage] = useState('')

    const deletePot = id => {
        setShowMessage(false)
        const pot = pots.find(_ => _.id === id)
        if(pot.amount > 0){
            setShowMessage(true)
            setFailedDeletedMessage(`The pot ${pot.name} can not be deleted due to the balance of £${pot.amount}`)
        }else{
            setPots(pots.filter(_ => _.id !== id))
        }
    }

    const Message = styles.p`
        color: red;
        width: 80%;
        font-size: 0.9em;
        margin: 0 auto;
        padding: 0.5em;
    `

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>
            {showMessage && <Message>{failedDeletedMessage}</Message> }
            {
                pots.map(_ => (
                    <a onClick={() => deletePot(_.id)}>
                        <Delete />
                        <h3>{`${_.name} £${_.amount}`}</h3>
                    </a>
                ))
            }
        </AdminHeader>
    )
}

export default Edit