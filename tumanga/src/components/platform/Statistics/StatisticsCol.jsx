import React from "react"
import "./StaticticsCol.css"

export default function statisticsCol({ data }) {
  return (
    <div
      className="statisticsCol"
      style={{ height: `${data.number_sales * 20}px` }}
      title={`Nombre: ${data.name}\nVentas: ${data.number_sales}`}
    >
      <div className="statisticsName">{data.name}</div>
      <div className="statisticsScore">{data.number_sales}</div>
    </div>
  )
}
