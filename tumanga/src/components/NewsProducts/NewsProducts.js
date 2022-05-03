import ListOfProducts from "components/ListOfProducts/ListOfProducts";
import React, { useEffect, useState } from "react";
import getNewsProducts from "services/getNewsProducts";

export default function NewsProducts() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getNewsProducts().then(res => {
            setLoading(false)
            setProducts(res.products)
            // console.log(res.products);
        })
    }, [])

    return (
        <main className="center">
            <h2 className="subtitle">Novedades</h2>
            {/* <div className="containerProducts"> */}
                
                {loading
                    ? <h2>Cargando...</h2>
                    : <ListOfProducts products={products} />
                }

            {/* </div> */}
        </main>
    )
}