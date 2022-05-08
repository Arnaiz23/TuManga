import {useContext, useEffect, useState } from "react";

import ProductContext from "context/ProductsContext";
import getFilterProducts from "services/getFilterProducts";

export default function useProducts(){

    const [page, setPage] = useState(0)
    const { products, setProducts, count, setCount } = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [filter, setFilter] = useState(["null"])

    const setReloadPage = useState(false)[1]

    useEffect(() => {

        setLoading(true)

        getFilterProducts((8*page), filter).then(data =>{
            if(data.message) return setError(true)
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setLoading(false)
        })

        setReloadPage(false)

    },[page, filter])

    return { loading, products, setPage, count, page, setReloadPage, setProducts, setCount, setFilter, error, filter }
    
}