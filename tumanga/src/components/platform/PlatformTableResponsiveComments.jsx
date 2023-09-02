import React from "react"
import PlatformRowCommentsResponsive from "./PlatformRowCommentsResponsive"

export default function PlatformTableResponsiveComments({
  dataEmpty,
  data,
  titles,
  setData,
  setDataEmpty,
  arrayEmails,
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
              {data.map((comment, index) => {
                return (
                  <PlatformRowCommentsResponsive
                    comment={comment}
                    key={comment._id}
                    setComments={setData}
                    setCommentsEmpty={setDataEmpty}
                    arrayEmails={arrayEmails[index]}
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
