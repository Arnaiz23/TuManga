import { faAngleDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { api_URL } from "services/config";
import { getOrderId } from "services/Orders";
import { Link } from "wouter";
import Moment from "react-moment";
import 'moment/locale/es';

export default function OrderWindow({ data }) {

    const [order, setOrder] = useState(null)
    const [loadingOrder, setLoadingOrder] = useState(false)

    const modalRef = React.createRef()

    useEffect(() => {
        setLoadingOrder(true)
        getOrderId(data._id).then(info => {
            if (info.message) {
                return alert(info.message)
            }
            setOrder(info.data)
            setLoadingOrder(false)
        })
    }, [setOrder])

    const showInfo = () => {
        modalRef.current.classList.toggle("modalOrderActive")
    }

    let today = new Date()

    return (
        loadingOrder || order === null
            ? <h1>Cargando...</h1>
            : (
                <div className="containerOrder">
                    <header>
                        <button className="btnShowOrderInfo" onClick={showInfo}>
                            <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                        </button>
                        <div className="modalOrderInfo" ref={modalRef}>
                            <div>
                                <h4>Pedido realizado</h4>
                                <p><Moment format="D MMM YYYY">{order.realized_date}</Moment></p>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <p>{data.total} €</p>
                            </div>
                            <div>
                                <h4>Enviar a</h4>
                                {order.address
                                    ? (
                                        <>
                                            <p>{order.address.name_person}</p>
                                            <p>{order.address.name}</p>
                                            <p>Teléfono: {data.telephone}</p>
                                        </>
                                    )
                                    : <p>Dirección no encontrada</p>
                                }
                            </div>
                        </div>
                        <div className="containerOrderInformation">
                            <div>
                                <h4>Pedido realizado</h4>
                                <p className="greySmall"><Moment format="D MMM YYYY">{order.realized_date}</Moment></p>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <p className="greySmall">{data.total} €</p>
                            </div>
                            <div id="orderClient">
                                <h4>Enviar a</h4>
                                {order.address
                                    ? (
                                        <>
                                            <p className="greySmall" id="orderUserName">{order.address.name_person} <i
                                            ><FontAwesomeIcon icon={faAngleDown} /></i></p>
                                            <div className="modalInformationOrder">
                                                <h4>{order.address.name_person}</h4>
                                                <p className="greySmall">{order.address.name}</p>
                                                <p className="greySmall">Teléfono: {data.telephone}</p>
                                            </div>
                                        </>
                                    )
                                    : <p>Dirección no encontrada</p>
                                }
                            </div>
                        </div>
                        <div>
                            <Link to={`/order/${data._id}`}>Ver detalles del pedido</Link>
                        </div>
                    </header>
                    <main>
                        {(order.delivered_date.split("-")[1] >= today.getMonth() && order.delivered_date.split("-")[2].substring(0,2) > today.getDate())
                            ? (
                                <h4>Entrega <Moment fromNow>{order.delivered_date}</Moment></h4>
                            )
                            : (
                                <h4>Entregado <Moment fromNow>{order.delivered_date}</Moment></h4>
                            )
                        }

                        {data.products.map(product => {
                            return (
                                <div className="row" key={product._id}>
                                    {
                                        product.image === null
                                            ? (
                                                <img src="https://www.normaeditorial.com/upload/media/albumes/0001/21/c5d840b61ed5a355bccb3484e12a61b77ba9499b.jpeg" alt="portada tokyo revengers 04" />
                                            )
                                            : (
                                                <img src={`${api_URL}/image/${product.image}`} alt="portada tokyo revengers 04" />
                                            )
                                    }
                                    <h3>{product.name} X{product.quantity}</h3>
                                </div>
                            )
                        })}
                    </main>
                </div>
            )
    )
}