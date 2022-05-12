import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import ListOfProducts from "components/publicFolder/ListOfProducts/ListOfProducts";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import Spinner from "components/publicFolder/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import { searchProducts } from "services/Orders";

export default function SearchProducts({ params }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        searchProducts(params.search).then(data => {
            if (data.message) return alert(data.message)
            setProducts(data.searchProducts)
            setLoading(false)
        })

    }, [params.search])

    return (
        <>
            <Header />
            <SliderName name={`Busqueda: ${params.search}`} />
            <SocialNetwork />
            <main className="center">
                {loading
                    ? <Spinner />
                    : <ListOfProducts products={products} />
                }
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}