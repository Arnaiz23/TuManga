import React from "react";

import Header from "@components/publicFolder/Header/Header.jsx";
import Footer from "@components/publicFolder/Footer/Footer.jsx";
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks.jsx";
import Slider from "@components/publicFolder/Slider/Slider.jsx";
import NewsProducts from "@components/publicFolder/NewsProducts/NewsProducts.jsx";
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP.jsx";

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
  );
}
