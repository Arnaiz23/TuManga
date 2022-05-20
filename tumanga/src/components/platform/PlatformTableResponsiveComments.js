import React from "react";
import PlatformRowCommentsResponsive from "./PlatformRowCommentsResponsive";

export default function PlatformTableResponsiveComments({ dataEmpty, data, titles }) {

    return (
        <>
            <div className="containerTableResponsive">
                {dataEmpty
                    ? <h2>No hay usuarios con esas condiciones</h2>
                    : <>
                        <header>
                            {titles.map(title => <b key={title}>{title}</b>)}
                        </header>
                        <main>
                            {data.map(comment => {
                                return (
                                    <PlatformRowCommentsResponsive
                                        comment={comment}
                                        key={comment._id}
                                    />
                                )
                            })}
                        </main>
                    </>
                }
            </div>
        </>
    )

}