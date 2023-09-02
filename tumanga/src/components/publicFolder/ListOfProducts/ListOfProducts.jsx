import React from "react"
import CardProduct from "@components/publicFolder/CardProduct/CardProduct"

export default function ListOfProducts({ products }) {
  return (
    <div className="containerProducts">
      {products.map((product) => (
        <CardProduct product={product} key={product._id} />
      ))}
    </div>
  )
}
