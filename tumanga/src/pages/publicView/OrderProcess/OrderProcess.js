import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import ListOfOrder from "components/publicFolder/ListOfOrder/ListOfOrder";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";
import useOrderData from "hooks/useOrderData";
import React from "react";

export default function OrderProcess() {

    const { order } = useOrderData()

    return (
        <>
            <Header />
            <SliderName name="Carrito" />
            <SocialNetwork />
            <main className="center">
                <div className="containerCenterRadius">
                    <div className="optionsRight">
                        <p className="totalPriceShopping">Total:
                            {order.length !== 0
                                ? order.total
                                : 0}
                            €</p>
                    </div>

                    <div className="containerProductCenter">
                        {order.length !== 0
                            ? <ListOfOrder products={order.products} />
                            : <h2>Actualmente tu carrito esta vacío</h2>
                        }
                    </div>
                    <div className="optionsRight">
                        {order.length !== 0 && <button className="btn btn-success">Finalizar compra</button>}
                    </div>

                </div>
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}