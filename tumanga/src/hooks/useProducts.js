import React, { useContext, useEffect, useState } from "react";
import getMangas from "services/getMangas";
import ProductContext from "context/ProductsContext";

export default function useProducts(filter = []){

    const [page, setPage] = useState(0)
    const { products, setProducts } = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    const [reloadPage, setReloadPage] = useState(false)

    useEffect(() => {

        setLoading(true)

        getMangas((8*page), filter).then(data => {
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setLoading(false)
        })

        setReloadPage(false)

    },[page])
    /* useEffect(() => {

        setLoading(true)

        getMangas((8*page), filter).then(data => {
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setLoading(false)
        })

    },[page]) */

    return { loading, products, setPage, count, page, setReloadPage }
    
}