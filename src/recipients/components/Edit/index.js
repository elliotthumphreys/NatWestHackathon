import React, { useContext, useState } from 'react'
import AdminHeader from '../AdminHeader'
import { Context } from '../../../Context'
import Input from '../../../shared-components/Input'
import Button from '../../../shared-components/Button'
import SelectInput from '../SelectInput'
import { Delete } from '@material-ui/icons'

const Edit = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)

    const [pots, setPots] = useState(persons.find(_ => _.id === id).pots)

    const deletePot = id => {
        setPots(pots.filter(_ => _.id !== id))
    }

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>
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