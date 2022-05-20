import React from "react";
import PlatformModalOrders from "./PlatformModalOrders";

export default function PlatformTableResponsiveOrders({ dataEmpty, titles, data }) {

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
                            {data.map(info => {
                                return (
                                    <PlatformModalOrders data={info} key={info._id} />
                                )
                            })}
                        </main>
                    </>
                }
            </div>
        </>
    )

}