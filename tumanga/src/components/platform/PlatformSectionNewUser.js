import React from "react";

export default function PlatformSectionNewUser({ user, setUser }) {

    const handleChanges = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            <div className="inputAdmin">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" onChange={handleChanges} />
            </div>
            <div className="inputAdmin">
                <label htmlFor="lastName">Apellidos</label>
                <input type="text" id="lastName" name="last_name" onChange={handleChanges} />
            </div>
            <div className="inputAdmin">
                <label htmlFor="role">Rol <span className="obligatoryFields">*</span></label>
                <select id="role" name="role" onChange={handleChanges} defaultValue="0">
                    <option value="0" disabled>Seleccione una opción...</option>
                    <option value="admin">Admin</option>
                    <option value="owner">Owner</option>
                    <option value="empleado">Empleado</option>
                    <option value="usuario">Usuario</option>
                </select>
            </div>
            <div className="inputAdmin">
                <label htmlFor="email">Email <span className="obligatoryFields">*</span></label>
                <input type="email" id="email" name="email" onChange={handleChanges} title={`Ejemplo: \n    prueba@gmail.com`} />
            </div>
            <div className="inputAdmin">
                <label htmlFor="password">Password <span className="obligatoryFields">*</span></label>
                <div className="inputPassword">
                    <input type="password" id="password" name="password" onChange={handleChanges} title={`Requisitos:\n* Letras mayúsculas, letras minúsculas y números\n* Caractéres: *,/,$,%,&,Ç\n* Longitud: mín 6 - máx 16`}/>
                    <i className="fa-solid fa-eye passwordShow" id="passwordShow"></i>
                    <i className="fa-solid fa-eye-slash" id="passwordHide"></i>
                </div>
            </div>
            <div className="inputAdmin">
                <label htmlFor="state">Estado <span className="obligatoryFields">*</span></label>
                <select id="state" name="state" onChange={handleChanges} defaultValue="0">
                    <option value="0" disabled>Seleccione una opción</option>
                    <option value="Active">Activo</option>
                    <option value="Disabled">Desactivado</option>
                </select>
            </div>
        </section>
    )

}