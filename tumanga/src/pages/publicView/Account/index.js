import React from "react";

import Header from "../../../components/publicFolder/Header/Header";
import Footer from "components/publicFolder/Footer/Footer";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import SliderName from "components/publicFolder/SliderName/SliderName";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import AsideAccount from "components/publicFolder/AsideAccount/AsideAccount";
import NavAccountResp from "components/publicFolder/NavAccountResp/NavAccountResp";

export default function Account() {
    return (
        <>
            <Header />
            <SocialNetwork />
            <SliderName name="Mi Cuenta" />
            <main className="center">
                <div className="containerGlobalProducts">
                    <AsideAccount />
                    <NavAccountResp />
                    <section class="containerInformation">
                        <h2 class="subtitle">Mi Información</h2>
                    </section>
                </div>
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}