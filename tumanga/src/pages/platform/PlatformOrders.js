import PlatformHeader from "components/platform/PlatformHeader";
import PlatformMainRowTitle from "components/platform/PlatformMainRowTitle";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import PlatformSearchModal from "components/platform/PlatformSearchModal";
import PlatformTableOrders from "components/platform/PlatformTableOrders";
import PlatformTableResponsiveOrders from "components/platform/PlatformTableResponsiveOrders";
import React, { useEffect, useState } from "react";
import { getAllOrders } from "services/Admin";

const TABLE_TITLES = ["id", "fecha pedido", "id cliente", "fecha envio", "Nº productos", "Teléfono", "Total"]
const TABLE_TITLES_RESPONSIVE = ["id", "Nº productos", "ver"]

export default function PlatformOrders() {

    const [orders, setOrders] = useState([])
    const [ordersEmpty, setOrdersEmpty] = useState(false)
    const [loading, setLoading] = useState(false)

    let fetchOrders = () => {
        setLoading(true)
        getAllOrders().then(data => {
            if (data.message) {
                setOrdersEmpty(true)
                setLoading(false)
                return
            }
            setOrders(data.orders)
            setOrdersEmpty(false)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className="gridAdmin">
            <PlatformHeader />
            <PlatformNav />
            <PlatformNavResponsive />
            <main className="adminMain">
                <div className="containerDataAdmin">

                    <header className="rowAdminTitle">
                        <h2>Pedidos</h2>
                    </header>

                    {loading
                        ? <h2>Cargando...</h2>
                        : (
                            <>
                                <PlatformTableOrders dataEmpty={ordersEmpty} data={orders} titles={TABLE_TITLES} />
                                <PlatformTableResponsiveOrders data={orders} titles={TABLE_TITLES_RESPONSIVE} dataEmpty={ordersEmpty} />
                            </>
                        )
                    }

                </div>
            </main>
        </div>
    )

}