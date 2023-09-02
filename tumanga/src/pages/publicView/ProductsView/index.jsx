import React, { useContext } from "react"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"
import FilterProducts from "@components/publicFolder/FilterProducts/FilterProducts"
import Footer from "@components/publicFolder/Footer/Footer"
import Header from "@components/publicFolder/Header/Header"
import ListOfProducts from "@components/publicFolder/ListOfProducts/ListOfProducts"
import ModalProductFilter from "@components/publicFolder/ModalProductFilter/ModalProductFilter"
import Paginate from "@components/publicFolder/Paginate/Paginate"
import SliderName from "@components/publicFolder/SliderName/SliderName"
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks"
import Spinner from "@components/publicFolder/Spinner/Spinner"
import { useLocation } from "wouter"

import ProductContext from "@/context/ProductsContext"
import useProducts from "@/hooks/useProducts"

export default function ProductsView() {
  const { products, count, productsEmpty } = useContext(ProductContext)

  let type = ""
  const location = useLocation()[0]

  if (location.includes("mangas")) {
    type = "mangas"
  } else if (location.includes("merchandising")) {
    type = "merchandising"
  }

  const { loading, error } = useProducts()

  return (
    <>
      <Header />
      <SocialNetwork />
      <SliderName name={type} />
      <main className="center">
        <ModalProductFilter type={type} />
        <div className="containerGlobalProducts">
          <FilterProducts type={type} />
          <div className="containerProducts">
            {loading ? (
              <Spinner />
            ) : error || productsEmpty ? (
              <h2 className="notMatch">No hay coincidencias</h2>
            ) : (
              <ListOfProducts products={products} />
            )}
          </div>
        </div>
        <Paginate size={count} />
      </main>
      <BtnUp />
      <Footer />
    </>
  )
}
