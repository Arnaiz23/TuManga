import React, { useState } from "react";

const Context = React.createContext({})

export function ProductsContextProvider({children}){

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    return <Context.Provider value={{products, setProducts, count, setCount}}>
        {children}
    </Context.Provider>
}

export default Context