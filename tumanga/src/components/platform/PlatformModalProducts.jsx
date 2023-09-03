import React from "react"

import { formatDateCal } from "@/libs/libDate"

export default function PlatformModalProducts({ data }) {
  const dateFormat = formatDateCal({ date: data.upload_date })

  return (
    <section>
      <div className="modalInfo">
        <label htmlFor="id">ID</label>
        <p>{data._id}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="name">NOMBRE</label>
        <p className="capitalize">{data.name}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="price">PRECIO</label>
        <p>{data.price}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="upload_date">FECHA SUBIDA</label>
        <p>
          {dateFormat}
        </p>
      </div>
      <div className="modalInfo">
        <label htmlFor="description">DESCRIPCION</label>
        <p>{data.description}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="short_description">DESCRIPCION CORTA</label>
        <p>{data.short_description}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="state">ESTADO</label>
        <p className="capitalize">{data.state}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="stock">STOCK</label>
        <p>{data.stock}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="type">TIPO</label>
        <p className="capitalize">{data.type}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="categories">Categorias</label>
        <p>{data.categories.join(" - ")}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="number_sales">Nº DE VENTAS</label>
        <p>{data.number_sales}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="authors">Autores</label>
        <p className="capitalize">{data.authors}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="editorial">Editorial</label>
        <p className="capitalize">{data.editorial}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="series">Series</label>
        <p className="capitalize">{data.series}</p>
      </div>
      <div className="modalInfo">
        <label htmlFor="comments">Nº Comentarios</label>
        <p>{data.comments.length}</p>
      </div>
    </section>
  )
}
