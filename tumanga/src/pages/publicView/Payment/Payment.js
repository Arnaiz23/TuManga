import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import React, { useContext, useState } from "react";
import OrderContext from "context/OrderContext";
import RowPayment from "components/publicFolder/RowPayment/RowPayment";
import RowPaymentProducts from "components/publicFolder/RowPaymentProducts/RowPaymentProducts";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import { finishShoppingCart } from "services/Orders";
import Swal from "sweetalert2";
import { useLocation } from "wouter";

export default function Payment() {

    const { order, setOrderProcess } = useContext(OrderContext)

    const [showModalAddress, setShowModalAddress] = useState(false)
    const [showModalBilling, setShowModalBilling] = useState(false)
    const setLocation = useLocation()[1]

    const [dataPayment, setDataPayment] = useState({
        "delivery_address" : "",
        "billing" : "",
        "telephone" : 123456789
    })

    const [ lastAddress, setLastAddress ] = useState({})
    const [ lastBilling, setLastBilling ] = useState({})

    const finishOrder = () => {
        dataPayment.billing = lastBilling._id
        dataPayment.delivery_address = lastAddress._id

        finishShoppingCart(dataPayment).then(data => {
            if(data.message) return alert(data.message)
            Swal.fire(
                'Compra',
                'Compra finalizada con éxito',
                'success'
            )
            setOrderProcess(false)
            setLocation("/")
        })
    }

    return (
        <>
            <Header />
            <SliderName name="pago" />
            <SocialNetwork />
            <main className="center">
                <div className="containerPayment">
                    <div className="paymentLeft">
                        <RowPayment type={"address"} changeModal={setShowModalAddress} changeAddress={setLastAddress} lastAddress={lastAddress} />
                        <div className="linePayment"></div>
                        <RowPayment type={"billing"} changeModal={setShowModalBilling} changeBilling={setLastBilling} lastBilling={lastBilling} />
                        <div className="linePayment"></div>
                        {order.length !== 0 
                            ? <RowPaymentProducts order={order} />
                            : <h2>Cargando...</h2>
                        }
                    </div>
                    <div className="paymentRight">
                        <button className="btn btn-success" onClick={finishOrder}>Finalizar Compra</button>
                        <div className="linePayment"></div>
                        <div className="paymentRightPrice">
                            <h3>Resumen del pedido</h3>
                            <p>Precio: {order.total}€</p>
                        </div>
                    </div>
                </div>
                {showModalAddress && <ModalInfo change={setShowModalAddress} type="paymentAddress" changeLastAddress={setLastAddress} /> }
                {showModalBilling && <ModalInfo change={setShowModalBilling} type="paymentBilling" changeLastBilling={setLastBilling} /> }
            </main>
            <BtnUp />
            <Footer />
        </>
    )

}