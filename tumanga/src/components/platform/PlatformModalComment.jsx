import React from "react"

export default function PlatformModalComment({ data, arrayEmails }) {
  const date = new Date(data.date)
  const dateFormat = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`

  return (
    <section>
      <div className="modalInfo">
        <label htmlFor="id">ID</label>
        <p>{data._id}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="name">TITULO</label>
        <p>{data.name}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="message">MENSAJE</label>
        <p>{data.message}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="date">Fecha pedido</label>
        <p>{dateFormat}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="product_name">PRODUCTO</label>
        <p>{data.product_name}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="score">Puntuación</label>
        <p>{data.score}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="user">USUARIO</label>
        <p>{arrayEmails}</p>
      </div>
    </section>
  )
}
