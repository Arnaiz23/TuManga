import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import SliderName from "components/publicFolder/SliderName/SliderName";
import ModalProductFilter from "components/publicFolder/ModalProductFilter/ModalProductFilter";
import FilterProducts from "components/publicFolder/FilterProducts/FilterProducts";
import ListOfProducts from "components/publicFolder/ListOfProducts/ListOfProducts";

import getMangas from "services/getMangas";
import Paginate from "components/publicFolder/Paginate/Paginate";

const INITIAL_PAGE = 1

export default function ProductsView() {

    const [location, setLocation] = useLocation()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)

    let type = ""

    if (location.includes("mangas")) {
        type = "mangas"
    } else if (location.includes("merchandising")) {
        type = "merchandising"
    }

    const btnUpRef = React.createRef()

    window.onscroll = () => {
        var scroll = document.documentElement.scrollTop;

        if (scroll > 100) {
            btnUpRef.current.style.transform = "scale(1)";
        } else if (scroll < 100) {
            btnUpRef.current.style.transform = "scale(0)";
        }

    }

    const goUp = () => {
        var currentScroll = document.documentElement.scrollTop;

        if (currentScroll > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    useEffect(() => {

        if(page > 0) return
    
        setLoading(true)

        getMangas().then(data => {
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setLoading(false)
        })

        let pageNumber = location.split("/")[location.split("/").length-1]
        setPage(pageNumber)
        
    }, [])

    useEffect(async () => {

        if(page === 0) return

        setLoading(true)
        // ! Fallaaaaaaa !!!!!!!!
        let pageNumber = location.split("/")[location.split("/").length-1]
        console.log(pageNumber);
        setPage(pageNumber)
        console.log(page);

        getMangas(8*page).then(data => {
            setProducts(data.products)
            setLoading(false)
        })
        // alert("Hey")

    },[location])

    return (
        <>
            <Header />
            <SocialNetwork />
            <SliderName name={type} />
            <main className="center">
                <ModalProductFilter />
                <div className="containerGlobalProducts">
                    <FilterProducts />
                    <div className="containerProducts">
                        {loading
                            ? <h2>Cargando...</h2>
                            : <ListOfProducts products={products} />
                        }
                    </div>
                </div>
                <Paginate size={count} />
            </main>
            <button id="btn-up" onClick={goUp} ref={btnUpRef}><i><FontAwesomeIcon icon={faAngleUp} /></i></button>
            <Footer />
        </>
    )
}