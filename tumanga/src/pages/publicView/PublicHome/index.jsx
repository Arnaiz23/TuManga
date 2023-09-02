import React from "react";

import Header from "../../../components/publicFolder/Header/Header";
import Footer from "components/publicFolder/Footer/Footer";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import Slider from "components/publicFolder/Slider/Slider";
import NewsProducts from "components/publicFolder/NewsProducts/NewsProducts";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";

export default function PublicHome() {

    return (
        <>
            <Header />
            <Slider />
            <SocialNetwork />
            <NewsProducts />
            <BtnUp />
            <Footer />
        </>
    )
}