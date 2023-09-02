import React, { useContext, useState } from "react"

import { api_URL } from "@/services/config"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "wouter"
import { addProductOrder, createOrder } from "@/services/Orders"
import Swal from "sweetalert2"
import OrderContext from "@/context/OrderContext"

export default function CardProduct({ product }) {
  const [btnCart, setBtnCart] = useState(true)
  const { user, orderProcess, setOrderProcess, setOrder, setCount } =
    useContext(OrderContext)

  const addCart = () => {
    setBtnCart(false)
    createOrder({ id_product: product._id }).then((data) => {
      if (data.message) {
        setBtnCart(true)
        return setOrderProcess(true)
      }

      Swal.fire(
        "Carrito",
        "Producto añadido correctamente al pedido",
        "success",
      )
      setBtnCart(true)
      setOrderProcess(true)
      setOrder(data.saveOrder)
      setCount(data.saveOrder.products.length)
    })
  }

  const addCartProcess = () => {
    setBtnCart(false)
    addProductOrder({ id_product: product._id }).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar añadirlo",
          "error",
        )
      }

      Swal.fire(
        "Carrito",
        "Producto añadido correctamente al pedido",
        "success",
      )
      setBtnCart(true)
      setOrder(data.orderUpdate)
      setCount(data.orderUpdate.products.length)
    })
  }

  return (
    <div className="card" id="cardTemplate" key={product._id}>
      {/* Create default */}
      {/* <img src={`${api_URL}/image/${product.image}`} alt={`Portada del volumen de ${product.name}`} /> */}
      <Link to={`/product/${product._id}`}>
        {product.image !== null ? (
          <img
            loading="lazy"
            src={`${api_URL}/image/${product.image}`}
            alt={`Portada del volumen de ${product.name}`}
          />
        ) : (
          <img
            loading="lazy"
            src="https://ia-latam.com/wp-content/uploads/2018/12/No-image-found-1.jpg"
            alt={`Portada del volumen de ${product.name}`}
          />
        )}
      </Link>
      <footer className="cardFooter">
        <h3>{product.name}</h3>
        <div className="priceContainer">
          <p className="price">{product.price}€</p>
          {product.stock > 0 ? (
            <p className="textStock">
              <i>
                <FontAwesomeIcon icon={faCheck} />
              </i>
              STOCK
            </p>
          ) : (
            <p className="textStockOut">
              <i>
                <FontAwesomeIcon icon={faXmark} />
              </i>
              AGOTADO
            </p>
          )}
        </div>
        {product.stock > 0 && user && (
          <button
            className={btnCart ? "addCart" : "addCart addCartChecked"}
            onClick={orderProcess ? addCartProcess : addCart}
          >
            <i id="iconCart">
              <FontAwesomeIcon icon={btnCart ? faShoppingCart : faCheck} />
            </i>
          </button>
        )}
      </footer>
    </div>
  )
}
