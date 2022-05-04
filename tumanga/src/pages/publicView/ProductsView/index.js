import React from "react";
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

import Paginate from "components/publicFolder/Paginate/Paginate";
import useProducts from "hooks/useProducts";

export default function ProductsView() {

    const [location, setLocation] = useLocation()

    const { loading, products, count } = useProducts()

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
                {/* <Paginate size={count} /> */}
                <Paginate  />
            </main>
            <button id="btn-up" onClick={goUp} ref={btnUpRef}><i><FontAwesomeIcon icon={faAngleUp} /></i></button>
            <Footer />
        </>
    )
}