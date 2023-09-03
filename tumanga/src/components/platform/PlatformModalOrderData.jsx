import React from "react"

import { formatDateCal } from "@/libs/libDate"

export default function PlatformModalOrderData({ data, emails }) {
  const dateFormatOrder = formatDateCal({ date: data.order_date })
  const dateFormatSend = formatDateCal({ date: data.send_date })

  return (
    <section>
      <div className="modalInfo">
        <label htmlFor="id">ID</label>
        <p>{data._id}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="id_client">CLIENTE</label>
        <p>{emails}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="order_date">Fecha pedido</label>
        <p>{dateFormatOrder}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="send_date">FECHA Envio</label>
        <p>{dateFormatSend}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="products">Nº Productos</label>
        <p>{data.products.length}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="total">TOTAL</label>
        <p>{data.total} €</p>
      </div>
    </section>
  )
}
