import {
  faAngleDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";
// import Moment from "react-moment";
// import "moment/locale/es";
import Swal from "sweetalert2";

import { apiURL } from "@/services/config";
import { getOrderId } from "@/services/Orders";
import Spinner from "@components/publicFolder/Spinner/Spinner";

export default function OrderWindow({ data }) {
  const [order, setOrder] = useState(null);
  const [loadingOrder, setLoadingOrder] = useState(false);

  const modalRef = React.createRef();

  useEffect(() => {
    setLoadingOrder(true);
    getOrderId(data.id).then((info) => {
      if (info.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar recuperar el pedido",
          "error",
        );
      }
      setOrder(info.data);
      setLoadingOrder(false);
    });
  }, [data.id]);

  const showInfo = () => {
    modalRef.current.classList.toggle("modalOrderActive");
  };

  let today = new Date();

  return loadingOrder || order === null ? (
    <Spinner />
  ) : (
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
            <p>12/12/12</p>
            // <p>
            //   <Moment format="D MMM YYYY">{order.realizeddate}</Moment>
            // </p>
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
            <p className="greySmall">
              <Moment format="D MMM YYYY">{order.realizeddate}</Moment>
            </p>
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
                  <h4>{order.address.nameperson}</h4>
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
          <Link to={`/order/${data.id}`}>Ver detalles del pedido</Link>
        </div>
      </header>
      <section>
        {order.delivereddate.split("-")[1] >= today.getMonth() &&
        order.delivereddate.split("-")[2].substring(0, 2) > today.getDate() ? (
          <h4>
                Entrega 12/12/12
                {/*
            Entrega <Moment fromNow>{order.delivereddate}</Moment>
                */}
          </h4>
        ) : (
          <h4>
                Entregado 12/12/12
                {/*
            Entregado <Moment fromNow>{order.delivereddate}</Moment>
                */}
          </h4>
        )}

        {data.products.map((product) => {
          return (
            <div className="row" key={product.id}>
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
          );
        })}
      </section>
    </div>
  );
}
