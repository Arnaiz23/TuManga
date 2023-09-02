import React from "react";

import AsideAccount from "@components/publicFolder/AsideAccount/AsideAccount";
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP";
import Footer from "@components/publicFolder/Footer/Footer";
import Header from "@components/publicFolder/Header/Header";
import NavAccountResp from "@components/publicFolder/NavAccountResp/NavAccountResp";
import SliderName from "@components/publicFolder/SliderName/SliderName";
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks";
import ListOfCards from "@components/publicFolder/ListOfCards/ListOfCards";

export default function CardsAccount() {
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
            <h2 className="subtitle">Mis Tarjetas</h2>
            <ListOfCards />
          </section>
        </div>
      </main>
      <BtnUp />
      <Footer />
    </>
  );
}
