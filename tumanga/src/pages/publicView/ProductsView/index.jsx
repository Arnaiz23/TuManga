import React, { useContext } from "react";
import { useLocation } from "wouter";

import Footer from "@components/publicFolder/Footer/Footer";
import Header from "@components/publicFolder/Header/Header";
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks";
import SliderName from "@components/publicFolder/SliderName/SliderName";
import ModalProductFilter from "@components/publicFolder/ModalProductFilter/ModalProductFilter";
import FilterProducts from "@components/publicFolder/FilterProducts/FilterProducts";
import ListOfProducts from "@components/publicFolder/ListOfProducts/ListOfProducts";

import Paginate from "@components/publicFolder/Paginate/Paginate";
import useProducts from "@/hooks/useProducts";
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP";
import Spinner from "@components/publicFolder/Spinner/Spinner";
import ProductContext from "@/context/ProductsContext";

export default function ProductsView() {
  const { products, count, productsEmpty } = useContext(ProductContext);

  let type = "";
  const location = useLocation()[0];

  if (location.includes("mangas")) {
    type = "mangas";
  } else if (location.includes("merchandising")) {
    type = "merchandising";
  }

  const { loading, error } = useProducts();

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
  );
}
