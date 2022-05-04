import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import CommentsContainer from "components/publicFolder/CommentsContainer/CommentsContainer";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import ProductDetail from "components/publicFolder/ProductDetail/ProductDetail";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import React, { useEffect, useState } from "react";
import getCommentsProduct from "services/getCommentsProduct";
import getOneProduct from "services/getOneProduct";

export default function ProductView({ params }) {

    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect((() => {

        setLoading(true)
        
        getOneProduct(params.id)
            .then(data => {
                setProduct(data.product)
                setLoading(false)
            })

        getCommentsProduct(params.id)
            .then(data => {
                setComments(data.comments)
                setLoading(false)
            })
    }), [])

    return (
        <>
            <Header />
            <SliderName name={"Producto"} />
            <SocialNetwork />
            <main className="center">
                <ProductDetail product={product} />
                <CommentsContainer comments={comments} />
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}