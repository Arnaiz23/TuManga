import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import React from "react";

export default function Payment(){

    return (
        <>
            <Header />
            <SliderName name="pago" />
            <SocialNetwork />

            <BtnUp />
            <Footer />
        </>
    )
    
}