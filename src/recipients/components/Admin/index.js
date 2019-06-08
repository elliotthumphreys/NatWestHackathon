import React, { useContext, Fragment } from 'react'
import { Context } from '../../../Context'
import { ThinHeader } from '../../../shared-components/Header'

const Admin = () => {
    const [persons, setPerson] = useContext(Context)

    return (
        <Fragment>
            <ThinHeader/>
            <h3>Admin</h3>
            {persons.map((person, index) => <div key={index}><h2>{person.name}</h2></div>)}
        </Fragment>
    )
}

export default Admin