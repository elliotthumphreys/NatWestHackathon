import React, { useState } from 'react'

export const Context = React.createContext();


export const Provider = ({ children }) => {
    const [state, setState] = useState({})

    return <ContentContext.Provider value={[state, setState]}>{children}</ContentContext.Provider>
}