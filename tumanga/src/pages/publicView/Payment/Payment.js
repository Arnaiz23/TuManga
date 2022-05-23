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
import Spinner from "components/publicFolder/Spinner/Spinner";

export default function Payment() {

    const { order, setOrderProcess } = useContext(OrderContext)

    const [showModalAddress, setShowModalAddress] = useState(false)
    const [showModalBilling, setShowModalBilling] = useState(false)
    const setLocation = useLocation()[1]

    const [dataPayment, setDataPayment] = useState({
        "delivery_address" : "",
        "billing" : ""
    })

    const [ lastAddress, setLastAddress ] = useState({})
    const [ lastBilling, setLastBilling ] = useState({})

    const [addressEmpty, setAddressEmpty] = useState(true)
    const [billingEmpty, setBillingEmpty] = useState(true)

    const [modalOpenAddress, setModalOpenAddress] = useState(false)
    const [modalOpenBilling, setModalOpenBilling] = useState(false)

    const finishOrder = () => {
        dataPayment.billing = lastBilling._id
        dataPayment.delivery_address = lastAddress._id

        if(dataPayment.billing === undefined || dataPayment.billing === undefined){
            return Swal.fire(
                'Datos incorrectos',
                'Rellene todos los datos necesario',
                'error'
            )
        }

        finishShoppingCart(dataPayment).then(data => {
            if(data.message) {
                return Swal.fire(
                    'Lo sentimos',
                    'Hubo un error al intentar finalizarlo',
                    'error'
                )
            }
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
                        <RowPayment type={"address"} changeModal={setShowModalAddress} changeAddress={setLastAddress} lastAddress={lastAddress} addressEmpty={addressEmpty} changeAddressEmpty={setAddressEmpty} modal={modalOpenAddress} changeModalLast={setModalOpenAddress} />
                        <div className="linePayment"></div>
                        <RowPayment type={"billing"} changeModal={setShowModalBilling} changeBilling={setLastBilling} lastBilling={lastBilling} billingEmpty={billingEmpty} changeBillingEmpty={setBillingEmpty} modal={modalOpenBilling} changeModalLast={setModalOpenBilling} />
                        <div className="linePayment"></div>
                        {order.length !== 0 
                            ? <RowPaymentProducts order={order} />
                            : <Spinner />
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
                {showModalAddress && <ModalInfo change={setShowModalAddress} type="paymentAddress" changeLastAddress={setLastAddress} changeAddressEmpty={setAddressEmpty} closeModalLast={setModalOpenAddress} /> }
                {showModalBilling && <ModalInfo change={setShowModalBilling} type="paymentBilling" changeLastBilling={setLastBilling} changeBillingEmpty={setBillingEmpty} closeModalLast={setModalOpenBilling} /> }
            </main>
            <BtnUp />
            <Footer />
        </>
    )

}