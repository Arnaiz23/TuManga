import React from "react";
import "moment/locale/es"
import Moment from "react-moment";

export default function PlatformModalUsers({ data }) {

    return (
        <main>
            <div className="modalInfo">
                <label htmlFor="id">ID</label>
                <p>{data._id}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="email">EMAIL</label>
                <p>{data.email}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="state">ESTADO</label>
                {data.state === "Active"
                    ? <p>Activo</p>
                    : <p>Deshabilitado</p>
                }
            </div>
            <div className="modalInfo">
                <label htmlFor="id">FECHA REGISTRO</label>
                <p><Moment format="DD/MM/YYYY">{data.register_date}</Moment></p>
            </div>
            <div className="modalInfo">
                <label htmlFor="role">ROL</label>
                <p>{data.role}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="orders">Nº PEDIDOS</label>
                <p>{data.cart.length}</p>
            </div>
        </main>
    )

}