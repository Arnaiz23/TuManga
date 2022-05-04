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

import Paginate from "components/publicFolder/Paginate/Paginate";
import useProducts from "hooks/useProducts";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";

export default function ProductsView() {

    const [location, setLocation] = useLocation()
    const [filter, setFilter] = useState([])
    const { loading, products, count, setReloadPage } = useProducts(filter)

    // console.log(filter);

    let type = ""

    if (location.includes("mangas")) {
        type = "mangas"
    } else if (location.includes("merchandising")) {
        type = "merchandising"
    }

    return (
        <>
            <Header />
            <SocialNetwork />
            <SliderName name={type} />
            <main className="center">
                <ModalProductFilter />
                <div className="containerGlobalProducts">
                    <FilterProducts change={setFilter} />
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
            <BtnUp />
            <Footer />
        </>
    )
}