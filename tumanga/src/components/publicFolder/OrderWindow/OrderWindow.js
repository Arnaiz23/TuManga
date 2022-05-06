import { faAngleDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { api_URL } from "services/config";
import { getOrderId } from "services/Orders";

export default function OrderWindow({ data }) {

    const [order, setOrder] = useState(null)
    const [loadingOrder, setLoadingOrder] = useState(false)

    const modalRef = React.createRef()

    useEffect(() => {
        setLoadingOrder(true)
        getOrderId(data).then(data => {
            if(data.message){
                alert(data.message)
                return
            }

            setOrder(data.data)
            setLoadingOrder(false)
        })
    }, [setOrder])

    const showInfo = () => {
        modalRef.current.classList.toggle("modalOrderActive")
    }

    return (
        loadingOrder || order === null
        ? <h1>Cargando...</h1>
        : (
            <div className="containerOrder">
            <header>
                <button className="btnShowOrderInfo" role="button" onClick={showInfo}>
                    <i><FontAwesomeIcon icon={faEllipsisVertical} /></i>
                </button>
                <div className="modalOrderInfo" ref={modalRef}>
                    <div>
                        <h4>Pedido realizado</h4>
                        <p>{order.realized_date}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p>{order.total} €</p>
                    </div>
                    <div>
                        <h4>Enviar a</h4>
                        <p>{order.address.name_person}</p>
                        <p>{order.address.name}</p>
                        <p>Teléfono: {order.telephone}</p>
                    </div>
                </div>
                <div className="containerOrderInformation">
                    <div>
                        <h4>Pedido realizado</h4>
                        <p className="greySmall">{order.realized_date}</p>
                    </div>
                    <div>
                        <h4>Total</h4>
                        <p className="greySmall">{order.total} €</p>
                    </div>
                    <div id="orderClient">
                        <h4>Enviar a</h4>
                        <p className="greySmall" id="orderUserName">{order.address.name_person} <i
                            ><FontAwesomeIcon icon={faAngleDown} /></i></p>
                        <div className="modalInformationOrder">
                            <h4>{order.address.name_person}</h4>
                            <p className="greySmall">{order.address.name}</p>
                            <p className="greySmall">Teléfono: {order.telephone}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="orderDetails.html">Ver detalles del pedido</a>
                </div>
            </header>
            <main>
                <h4>Entregado el {order.delivered_date}</h4>

                {
                    order.products.map(product => {
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
                                <h3>{product.name}</h3>
                            </div>
                        )
                    })
                }
            </main>
        </div>
        )
    )
}