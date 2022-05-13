import React, { useState } from "react";

const Context = React.createContext({})

export function ProductsContextProvider({children}){

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState([])
    const [actualType, setActualType] = useState('comics')

    return <Context.Provider value={{products, setProducts, count, setCount, filter, setFilter, actualType, setActualType }}>
        {children}
    </Context.Provider>
}

export default Context