import React, { useState } from 'react'
import person from '../../mock-data/person.json'
export const Context = React.createContext();


export const Provider = ({ children }) => {
    const [state, setState] = useState(person)


    console.log(state)
    return <Context.Provider value={[state, setState]}>{children}</Context.Provider>
}