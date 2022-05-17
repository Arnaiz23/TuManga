import React from "react";

export default function PlatformModalUsers({ data }) {

    console.log(data);

    return (
        <main>
            <div className="modalInfo">
                <label htmlFor="id">ID</label>
                <p>1</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="email">EMAIL</label>
                <p>admin@admin.com</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="state">ESTADO</label>
                <p>Activo</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="id">FECHA REGISTRO</label>
                <p>11/04/2022</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="role">ROL</label>
                <p>Admin</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="orders">Nº PEDIDOS</label>
                <p>0</p>
            </div>
        </main>
    )

}