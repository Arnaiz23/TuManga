import PlatformHeader from "@/components/platform/PlatformHeader.jsx"
import PlatformNav from "@/components/platform/PlatformNav.jsx"
import PlatformNavResponsive from "@/components/platform/PlatformNavResponsive.jsx"
import PlatformTableOrders from "@/components/platform/PlatformTableOrders.jsx"
import PlatformTableResponsiveOrders from "@/components/platform/PlatformTableResponsiveOrders.jsx"
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx"
import Spinner from "@/components/publicFolder/Spinner/Spinner.jsx"
import React, { useEffect, useState } from "react"
import { getAllOrders } from "@/services/Admin.js"

const TABLE_TITLES = [
  "id",
  "fecha pedido",
  "cliente",
  "fecha envio",
  "Nº productos",
  "Total",
]
const TABLE_TITLES_RESPONSIVE = ["id", "Nº productos", "ver"]

export default function PlatformOrders() {
  const [orders, setOrders] = useState([])
  const [arrayEmail, setArrayEmail] = useState([])
  const [ordersEmpty, setOrdersEmpty] = useState(false)
  const [loading, setLoading] = useState(false)

  let fetchOrders = () => {
    setLoading(true)
    getAllOrders().then((data) => {
      if (data.message) {
        setOrdersEmpty(true)
        setLoading(false)
        return
      }
      setOrders(data.orders)
      setOrdersEmpty(false)
      setLoading(false)
      setArrayEmail(data.newArray)
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

          {loading ? (
            <Spinner />
          ) : (
            <>
              <PlatformTableOrders
                dataEmpty={ordersEmpty}
                data={orders}
                titles={TABLE_TITLES}
                emails={arrayEmail}
              />
              <PlatformTableResponsiveOrders
                data={orders}
                titles={TABLE_TITLES_RESPONSIVE}
                dataEmpty={ordersEmpty}
                emails={arrayEmail}
              />
            </>
          )}
        </div>
      </main>
      <BtnUp />
    </div>
  )
}
