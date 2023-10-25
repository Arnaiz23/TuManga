import { createRef, useEffect } from "react"
import {
  faAngleDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Swal from "sweetalert2"
import { Link } from "wouter"

import { getFormatDate } from "@/libs/libDate"
import { apiURL } from "@/services/config"

export default function OrderWindow({ data, id }) {
  const modalRef = createRef()

  const deliveredDate = getFormatDate({ timestamp: data.delivered_date })
  const realizedDate = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
  }).format(new Date(data.realized_date))

  const showInfo = () => {
    modalRef.current.classList.toggle("modalOrderActive")
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
            <p>{deliveredDate}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>{data.total} €</p>
          </div>
          <div>
            <h4>Enviar a</h4>
            {data.address ? (
              <>
                <p>{data.address.nameperson}</p>
                <p>{data.address.name}</p>
                <p>Teléfono: {data.address.telephone}</p>
              </>
            ) : (
              <p>Dirección no encontrada</p>
            )}
          </div>
        </div>
        <div className="containerOrderInformation">
          <div>
            <h4>Pedido realizado</h4>
            <p className="greySmall">{realizedDate}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p className="greySmall">{data.total} €</p>
          </div>
          <div id="orderClient" onClick={showInfo}>
            <h4>Enviar a</h4>
            {data.address ? (
              <>
                <p className="greySmall" id="orderUserName">
                  {data.address.nameperson}{" "}
                  <i>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </i>
                </p>
                <div className="modalInformationOrder">
                  <h4>{data.address.name_person}</h4>
                  <p className="greySmall">{data.address.name}</p>
                  <p className="greySmall">
                    Teléfono: {data.address.telephone}
                  </p>
                </div>
              </>
            ) : (
              <p>Dirección no encontrada</p>
            )}
          </div>
        </div>
        <div>
          <Link to={`/order/${id}`}>Ver detalles del pedido</Link>
        </div>
      </header>
      <section>
        {deliveredDate.includes("dentro") ? (
          <h4>Entrega {deliveredDate}</h4>
        ) : (
          <h4>Entregado {deliveredDate}</h4>
        )}

        {data.products.map((product) => {
          return (
            <div className="row" key={product.product_id}>
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
