import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import React, { useContext } from "react";
import OrderContext from "context/OrderContext";
import RowPayment from "components/publicFolder/RowPayment/RowPayment";
import RowPaymentProducts from "components/publicFolder/RowPaymentProducts/RowPaymentProducts";

export default function Payment() {

    const { order } = useContext(OrderContext)

    return (
        <>
            <Header />
            <SliderName name="pago" />
            <SocialNetwork />
            <main className="center">
                <div className="containerPayment">
                    <div className="paymentLeft">
                        <RowPayment type={"address"} />
                        <div className="linePayment"></div>
                        <RowPayment type={"billing"} />
                        <div className="linePayment"></div>
                        <RowPaymentProducts order={order} />
                    </div>
                    <div className="paymentRight">
                        <button className="btn btn-success">Finalizar Compra</button>
                        <div className="linePayment"></div>
                        <div className="paymentRightPrice">
                            <h3>Resumen del pedido</h3>
                            <p>Precio: {order.total}€</p>
                        </div>
                    </div>
                </div>
            </main>
            <BtnUp />
            <Footer />
        </>
    )

}