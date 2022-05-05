import React, { useEffect, useState } from "react";

import Header from "../../../components/publicFolder/Header/Header";
import Footer from "components/publicFolder/Footer/Footer";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import SliderName from "components/publicFolder/SliderName/SliderName";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import AsideAccount from "components/publicFolder/AsideAccount/AsideAccount";
import NavAccountResp from "components/publicFolder/NavAccountResp/NavAccountResp";
import DataAccount from "components/publicFolder/DataAccount/DataAccount";
import PasswordAccount from "../PasswordAccount/PasswordAccount";
import DeleteAccount from "components/publicFolder/DeleteAccount/DeleteAccount";
import useUser from "hooks/useUser";

export default function Account() {

    const { loading, userData, setUserData } = useUser()

    return (
        <>
            <Header />
            <SocialNetwork />
            <SliderName name="Mi Cuenta" />
            <main className="center">
                <div className="containerGlobalProducts">
                    <AsideAccount />
                    <NavAccountResp />
                    <section className="containerInformation">
                        <h2 className="subtitle">Mi Información</h2>
                        {loading
                            ? <h2>Cargando...</h2>
                            : (
                                <>
                                    <DataAccount data={userData} change={setUserData} />
                                    <div className="lineAccount"></div>
                                    <PasswordAccount />
                                    <div className="lineAccount"></div>
                                    <DeleteAccount />
                                </>
                            )
                        }
                    </section>
                </div>
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}