import React, { useState } from "react";

const Context = React.createContext({})

export function OrderContextProvider({children}){

    const [order, setOrder] = useState([])
    const [user, setUser] = useState(true)
    const [count, setCount] = useState(0)
    const [orderProcess, setOrderProcess] = useState(false)

    return <Context.Provider value={{order, setOrder, count, setCount, user, setUser, setOrderProcess, orderProcess}}>
        {children}
    </Context.Provider>
}

export default Context