import ListOfProducts from "components/publicFolder/ListOfProducts/ListOfProducts";
import useOrderData from "hooks/useOrderData";
import React, { useContext, useEffect, useState } from "react";
import getNewsProducts from "services/getNewsProducts";
import Spinner from "../Spinner/Spinner";
import OrderContext from "context/OrderContext";

export default function NewsProducts() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    // const { orderProcess } = useOrderData()
    const { orderProcess } = useContext(OrderContext)

    useEffect(() => {
        setLoading(true)
        getNewsProducts().then(res => {
            setLoading(false)
            setProducts(res.products)
            // console.log(res.products);
        })
    }, [orderProcess])

    return (
        <main className="center">
            <h2 className="subtitle">Novedades</h2>
                
                {loading
                    ? <Spinner />
                    : <ListOfProducts products={products} />
                }

        </main>
    )
}