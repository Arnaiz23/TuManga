
import React, { useEffect, useState } from "react";

import AsideAccount from "components/publicFolder/AsideAccount/AsideAccount";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Footer from "components/publicFolder/Footer/Footer";
import Header from "components/publicFolder/Header/Header";
import NavAccountResp from "components/publicFolder/NavAccountResp/NavAccountResp";
import SliderName from "components/publicFolder/SliderName/SliderName";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";

import useUser from "hooks/useUser"
import OrderWindow from "components/publicFolder/OrderWindow/OrderWindow";
import { getUserOrders } from "services/Users";

export default function OrdersAccount() {

    const { loading } = useUser()
    const [loadingOrders, setLoadingOrders] = useState(false)
    const [error, setError] = useState('false')
    const [orderEmpty, setOrderEmpty] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setLoadingOrders(true)
        loading &&
            getUserOrders().then(data => {
                if (data.message) {
                    setOrderEmpty(true)
                    setError(data.message)
                    return
                }

                setOrders(data.orders)
            })
        setLoadingOrders(false)
    }, [loading])

    return (
        <>
            <Header />
            <SocialNetwork />
            <SliderName name="Mi Cuenta" />
            <main className="center">
                <div className="containerGlobalProducts">
                    <AsideAccount />
                    <NavAccountResp />
                    <section className="containerInformation">
                        <h2 className="subtitle">Mis Pedidos</h2>
                        {loadingOrders
                            ? <h2>Cargando...</h2>
                            : (
                                orderEmpty
                                    ? (
                                        <h3 className="userDataEmpty">{error}</h3>
                                    )
                                    : (
                                        <>
                                            {
                                                orders.map(order => <OrderWindow key={order._id} data={order} />)
                                            }
                                        </>
                                    )
                            )
                        }
                    </section>
                </div>
            </main>
            <BtnUp />
            <Footer />
        </>
    )
}