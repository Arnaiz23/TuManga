import React from "react"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP.jsx"
import Footer from "@components/publicFolder/Footer/Footer.jsx"
import Header from "@components/publicFolder/Header/Header.jsx"
import NewsProducts from "@components/publicFolder/NewsProducts/NewsProducts.jsx"
import Slider from "@components/publicFolder/Slider/Slider.jsx"
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks.jsx"

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
