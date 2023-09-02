import React, { useEffect, useState } from "react"
// import Moment from "react-moment";
// import "moment/locale/es";
import Swal from "sweetalert2"

import { apiURL } from "@/services/config"
import { getOrderId } from "@/services/Orders"
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP"
import Header from "@/components/publicFolder/Header/Header"
import SliderName from "@/components/publicFolder/SliderName/SliderName"
import SocialNetwork from "@/components/publicFolder/SocialNetworks/SocialNetworks"
import Spinner from "@/components/publicFolder/Spinner/Spinner"
import Footer from "@/components/publicFolder/Footer/Footer"

export default function OrderDetail({ params }) {
  const [order, setOrder] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getOrderId(params.id).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar recuperarlo",
          "error",
        )
      }
      setOrder(data.data)
      setLoading(false)
    })
  }, [params.id])

  return (
    <>
      <Header />
      <SliderName name="Detalles Pedido" />
      <SocialNetwork />
      <main className="center">
        {loading ? (
          <Spinner />
        ) : (
          <div className="containerOrderDetails">
            <h2>Detalles del pedido</h2>
            <p>
              Comprado 12/12/12
              {/*
// <Moment format="D MMM YYYY">{order.realized_date}</Moment>
              */}
            </p>
            <div className="container">
              {order.address ? (
                <div className="col">
                  <h3>Dirección de envío</h3>
                  <h4>{order.address.name_person}</h4>
                  <p>{order.address.name}</p>
                  <p>Teléfono: {order.address.telephone}</p>
                </div>
              ) : (
                <div className="col">
                  <h3>Dirección de envío</h3>
                  <h4>Dirección no encontrada</h4>
                </div>
              )}
              <div className="lineCommentsSeparator"></div>
              <div className="col">
                <h3>Método de pago</h3>
                {order.payment ? (
                  <div className="row">
                    <img
                      src={`${apiURL}/image/${order.payment.image}`}
                      className="imgBrandCard"
                      alt={`imagen logo ${order.payment.type}`}
                    />
                    <p>****{order.payment.last_4_digits}</p>
                  </div>
                ) : (
                  <div className="row">
                    <h4>Tarjeta no encontrada</h4>
                  </div>
                )}
                <div>
                  <h3>Total</h3>
                  <p>{order.total}€</p>
                </div>
              </div>
            </div>
            <div className="container containerColumn">
              <h3>
                Entregado: 12/12/12
                {/*
                // Entregado <Moment fromNow>{order.delivered_date}</Moment>
                  */}
              </h3>
              {order.products &&
                order.products.length > 0 &&
                order.products.map((product) => (
                  <div className="row" key={product._id}>
                    <img
                      src={`${apiURL}/image/${product.image}`}
                      alt={`portada ${product.name}`}
                    />
                    <h3>{product.name}</h3>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
      <BtnUp />
      <Footer />
    </>
  )
}
