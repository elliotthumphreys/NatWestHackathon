import React, { useState } from 'react'

export const Context = React.createContext();


export const Provider = ({ children }) => {
    const [state, setState] = useState({})

    return <Context.Provider value={[state, setState]}>{children}</Context.Provider>
}