import React, { useState } from "react";

const Context = React.createContext({})

export function OrderContextProvider({children}){

    const [order, setOrder] = useState([])
    const [user, setUser] = useState(false)
    const [count, setCount] = useState(0)

    return <Context.Provider value={{order, setOrder, count, setCount, user, setUser}}>
        {children}
    </Context.Provider>
}

export default Context