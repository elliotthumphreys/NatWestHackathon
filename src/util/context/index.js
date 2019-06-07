import React, { useState } from 'react'

export const Context = React.createContext()

export const Provider = ({ children }) => {
    const [something, setSomething] = useState({})

    return <Context.Provider value={[something, setSomething]}>{children}</Context.Provider>
}