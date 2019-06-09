import React, { useContext } from 'react'
import AdminHeader from '../AdminHeader'
import { Context } from '../../../Context'
import Input from '../../../shared-components/Input'

const Stats = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>

        </AdminHeader>
    )
}

export default Stats