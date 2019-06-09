import React, { useContext } from 'react'
import { Context } from '../../../Context'
import { Link } from 'react-router-dom'
import { Create, Add, AttachMoney } from '@material-ui/icons'
import AdminHeader from '../AdminHeader'


const AdminConfig = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>
            <Link to={`/admin/${id}/add`}><Add /> Add pots</Link>
            <Link to={`/admin/${id}/edit`}><Create /> Edit pots</Link>
            <Link to={`/admin/${id}/stats`}><AttachMoney /> Spending / Earning</Link>
        </AdminHeader>
    )
}

export default AdminConfig