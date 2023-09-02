import React from "react"

import PlatformModalOrders from "./PlatformModalOrders"

export default function PlatformTableResponsiveOrders({
  dataEmpty,
  titles,
  data,
  emails,
}) {
  return (
    <>
      <div className="containerTableResponsive">
        {dataEmpty ? (
          <h2>No hay usuarios con esas condiciones</h2>
        ) : (
          <>
            <header>
              {titles.map((title) => (
                <b key={title}>{title}</b>
              ))}
            </header>
            <section>
              {data.map((info, index) => {
                return (
                  <PlatformModalOrders
                    data={info}
                    key={info._id}
                    emails={emails[index]}
                  />
                )
              })}
            </section>
          </>
        )}
      </div>
    </>
  )
}
