import React from "react";
import "moment/locale/es"
import Moment from "react-moment";

export default function PlatformModalUsers({ data, roleName }) {

    return (
        <section>
            <div className="modalInfo">
                <label htmlFor="id">ID</label>
                <p>{data._id}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="email">EMAIL</label>
                <p>{data.email}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="name">NOMBRE</label>
                <p>{data.name}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="last_name">APELLIDOS</label>
                <p>{data.last_name}</p>
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
                <p className="capitalize">{roleName}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="orders">Nº PEDIDOS</label>
                <p>{data.cart.length}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="address">Nº DIRECCIONES</label>
                <p>{data.address.length}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="billing">Nº FACTURACIONES</label>
                <p>{data.billing.length}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="comments">Nº COMENTARIOS</label>
                <p>{data.comments.length}</p>
            </div>
        </section>
    )

}