import React from "react"
import PlatformTableOrdersRow from "@components/platform/PlatformTableOrdersRow"

export default function PlatformTableOrders({
  dataEmpty,
  data,
  titles,
  emails,
}) {
  return (
    <div className="containerTable">
      {dataEmpty ? (
        <h2>Actualmente no se han realizado pedidos</h2>
      ) : (
        <table>
          <thead>
            <tr>
              {titles.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((info, index) => (
              <PlatformTableOrdersRow
                info={info}
                index={index}
                emails={emails}
                key={info._id}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
