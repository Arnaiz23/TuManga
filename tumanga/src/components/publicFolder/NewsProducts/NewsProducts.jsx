import React, { useContext, useEffect, useState } from "react"
import ListOfProducts from "@components/publicFolder/ListOfProducts/ListOfProducts.jsx"
import Spinner from "@components/publicFolder/Spinner/Spinner.jsx"

import OrderContext from "@/context/OrderContext.jsx"
import getNewsProducts from "@/services/getNewsProducts.js"

export default function NewsProducts() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  // const { orderProcess } = useOrderData()
  const { orderProcess } = useContext(OrderContext)

  useEffect(() => {
    setLoading(true)
    getNewsProducts().then((res) => {
      setLoading(false)
      setProducts(res.products)
      // console.log(res.products);
    })
  }, [orderProcess])

  return (
    <main className="center">
      <h2 className="subtitle">Novedades</h2>

      {loading ? <Spinner /> : <ListOfProducts products={products} />}
    </main>
  )
}
