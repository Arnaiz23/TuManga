import React from "react"

export default function PlatformModalOrderData({ data, emails }) {
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
        //{" "}
        <p>
          // <Moment format="DD/MM/YYYY">{data.order_date}</Moment>
          //{" "}
        </p>
      </div>
      <div className="modalInfo">
        <label htmlFor="send_date">FECHA Envio</label>
        //{" "}
        <p>
          // <Moment format="DD/MM/YYYY">{data.send_date}</Moment>
          //{" "}
        </p>
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
