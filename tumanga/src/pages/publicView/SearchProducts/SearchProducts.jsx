import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx"
import Footer from "@/components/publicFolder/Footer/Footer.jsx"
import Header from "@/components/publicFolder/Header/Header.jsx"
import ListOfProducts from "@/components/publicFolder/ListOfProducts/ListOfProducts.jsx"
import SliderName from "@/components/publicFolder/SliderName/SliderName.jsx"
import SocialNetwork from "@/components/publicFolder/SocialNetworks/SocialNetworks.jsx"
import Spinner from "@/components/publicFolder/Spinner/Spinner.jsx"
import React, { useEffect, useState } from "react"
import { searchProducts } from "@/services/Orders.js"

export default function SearchProducts({ params }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    searchProducts(params.search).then((data) => {
      if (data.message) {
        setProducts([])
        setLoading(false)
        return
      }
      setProducts(data.searchProducts)
      setLoading(false)
    })
  }, [params.search])

  return (
    <>
      <Header />
      <SliderName name={`Busqueda: '${decodeURI(params.search)}'`} />
      <SocialNetwork />
      <main className="center">
        {loading ? (
          <Spinner />
        ) : products.length > 0 ? (
          <ListOfProducts products={products} />
        ) : (
          <div className="searchEmpty">
            <h2>No hay productos que coincidan con la búsqueda</h2>
          </div>
        )}
      </main>
      <BtnUp />
      <Footer />
    </>
  )
}
