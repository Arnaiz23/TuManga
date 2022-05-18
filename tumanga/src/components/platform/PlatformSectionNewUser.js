import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PlatformSectionNewUser({ user, setUser }) {

    const showRef = React.createRef()
    const hideRef = React.createRef()
    const passwordRef = React.createRef()

    const handleChanges = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const showPassword = () => {
        hideRef.current.classList.add("passwordShow")
        showRef.current.classList.remove("passwordShow")
        passwordRef.current.type = "text"
    }

    const hidePassword = () => {
        showRef.current.classList.add("passwordShow")
        hideRef.current.classList.remove("passwordShow")
        passwordRef.current.type = "password"
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
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChanges}
                        ref={passwordRef}
                        title={`Requisitos:\n* Letras mayúsculas, letras minúsculas y números\n* Caractéres: *,/,$,%,&,Ç\n* Longitud: mín 6 - máx 16`}
                    />
                    <i className="passwordShow" id="passwordShow" ref={showRef} onClick={showPassword}><FontAwesomeIcon icon={faEye} /></i>
                    <i id="passwordHide" onClick={hidePassword} ref={hideRef}><FontAwesomeIcon icon={faEyeSlash} /></i>
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