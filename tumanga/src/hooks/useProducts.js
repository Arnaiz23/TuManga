import React, { useContext, useEffect, useState } from "react";
import getMangas from "services/getMangas";
import ProductContext from "context/ProductsContext";

export default function useProducts(){

    const [page, setPage] = useState(0)
    const { products, setProducts } = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)


    useEffect(() => {

        setLoading(true)
        

        getMangas(8*page).then(data => {
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setLoading(false)
        })

    },[page])

    return { loading, products, setPage, count }
    
}