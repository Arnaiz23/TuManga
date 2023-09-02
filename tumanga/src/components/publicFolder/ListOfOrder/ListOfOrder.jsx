import React from "react"
import RowOrderProduct from "../RowOrderProduct/RowOrderProduct"

export default function ListOfOrder({ products }) {
  return products.map((product) => (
    <RowOrderProduct key={product._id} data={product} />
  ))
}
