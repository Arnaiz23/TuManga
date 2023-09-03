import React, { useEffect, useState } from "react"
import Spinner from "@components/publicFolder/Spinner/Spinner"
import {
  faAngleDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2"
import { Link } from "wouter"

import { getFormatDate } from "@/libs/libDate"
import { apiURL } from "@/services/config"
import { getOrderId } from "@/services/Orders"

export default function OrderWindow({ data }) {
  const [order, setOrder] = useState(null)
  const [loadingOrder, setLoadingOrder] = useState(false)

  const modalRef = React.createRef()

  useEffect(() => {
    setLoadingOrder(true)
    getOrderId(data._id).then((info) => {
      if (info.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar recuperar el pedido",
          "error",
        )
      }

      const deliveredDate = getFormatDate({timestamp: info.data.delivered_date})
      const realizedDate = getFormatDate({timestamp: info.data.realized_date})

      info.data.delivered_date = deliveredDate
      info.data.realized_date = realizedDate

      setOrder(info.data)
      setLoadingOrder(false)
    })
  }, [data.id])

  const showInfo = () => {
    modalRef.current.classList.toggle("modalOrderActive")
  }

  const today = new Date()

  if (loadingOrder || order === null) {
    return <Spinner />
  }

  return (
    <div className="containerOrder">
      <header>
        <button className="btnShowOrderInfo" onClick={showInfo}>
          <i>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </i>
        </button>
        <div className="modalOrderInfo" ref={modalRef}>
          <div>
            <h4>Pedido realizado</h4>
            <p>{order.delivered_date}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>{data.total} €</p>
          </div>
          <div>
            <h4>Enviar a</h4>
            {order.address ? (
              <>
                <p>{order.address.nameperson}</p>
                <p>{order.address.name}</p>
                <p>Teléfono: {order.address.telephone}</p>
              </>
            ) : (
              <p>Dirección no encontrada</p>
            )}
          </div>
        </div>
        <div className="containerOrderInformation">
          <div>
            <h4>Pedido realizado</h4>
            <p className="greySmall">{order.realized_date}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p className="greySmall">{data.total} €</p>
          </div>
          <div id="orderClient" onClick={showInfo}>
            <h4>Enviar a</h4>
            {order.address ? (
              <>
                <p className="greySmall" id="orderUserName">
                  {order.address.nameperson}{" "}
                  <i>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </i>
                </p>
                <div className="modalInformationOrder">
                  <h4>{order.address.name_person}</h4>
                  <p className="greySmall">{order.address.name}</p>
                  <p className="greySmall">
                    Teléfono: {order.address.telephone}
                  </p>
                </div>
              </>
            ) : (
              <p>Dirección no encontrada</p>
            )}
          </div>
        </div>
        <div>
          <Link to={`/order/${data._id}`}>Ver detalles del pedido</Link>
        </div>
      </header>
      <section>
        {order.delivered_date.includes("dentro") ? (
          <h4>Entrega {order.delivered_date}</h4>
        ) : (
          <h4>Entregado {order.delivered_date}</h4>
        )}

        {data.products.map((product) => {
          return (
            <div className="row" key={product._id}>
              {product.image === null ? (
                <img
                  loading="lazy"
                  src="https://www.normaeditorial.com/upload/media/albumes/0001/21/c5d840b61ed5a355bccb3484e12a61b77ba9499b.jpeg"
                  alt="portada tokyo revengers 04"
                />
              ) : (
                <img
                  loading="lazy"
                  src={`${apiURL}/image/${product.image}`}
                  alt="portada tokyo revengers 04"
                />
              )}
              <h3>
                {product.name} X{product.quantity}
              </h3>
            </div>
          )
        })}
      </section>
    </div>
  )
}
