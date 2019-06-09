import React, { useContext } from 'react'
import AdminHeader from '../AdminHeader'
import { Context } from '../../../Context'
import Input from '../../../shared-components/Input'
import Button from '../../../shared-components/Button'

const Add = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>
            <Input label='name' icon={() => {}}/>
            <Input label='type' icon={() => {}}/>
            <Input label='goal amount' icon={() => {}}/>
            <Button label='save pot' link={`/admin/${id}`} className='white-button-pink-background' />
        </AdminHeader>
    )
}

export default Add