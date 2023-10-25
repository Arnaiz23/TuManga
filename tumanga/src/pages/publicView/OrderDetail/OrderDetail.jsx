import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"

import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP"
import Footer from "@/components/publicFolder/Footer/Footer"
import Header from "@/components/publicFolder/Header/Header"
import SliderName from "@/components/publicFolder/SliderName/SliderName"
import SocialNetwork from "@/components/publicFolder/SocialNetworks/SocialNetworks"
import Spinner from "@/components/publicFolder/Spinner/Spinner"
import { getFormatDate } from "@/libs/libDate"
import { apiURL } from "@/services/config"
import { getOrderId } from "@/services/Orders"

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
      const date = new Date(data.data.realized_date)
      const realizedDate = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date)
      data.data.realizedDate = realizedDate
      const deliveredDate = getFormatDate({
        timestamp: data.data.delivered_date,
      })
      data.data.deliveredDate = deliveredDate

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
            <p>Comprado {order.realizedDate}</p>
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
              <h3>Entregado: {order.deliveredDate}</h3>
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
