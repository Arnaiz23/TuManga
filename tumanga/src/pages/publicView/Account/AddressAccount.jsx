import AsideAccount from "components/publicFolder/AsideAccount/AsideAccount";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import ListOfAddress from "components/publicFolder/ListOfAddress/ListOfAddress";
import NavAccountResp from "components/publicFolder/NavAccountResp/NavAccountResp";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";

import React from "react";

export default function AddressAccount() {
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
            <h2 className="subtitle">Mis Direcciones</h2>
            <ListOfAddress />
          </section>
        </div>
      </main>
      <BtnUp />
      <Footer />
    </>
  );
}
