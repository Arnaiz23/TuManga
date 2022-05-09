import React, { useState } from "react";

const Context = React.createContext({})

export function OrderContextProvider({children}){

    const [order, setOrder] = useState([])
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    return <Context.Provider value={{order, setOrder, count, setCount, products, setProducts}}>
        {children}
    </Context.Provider>
}

export default Context