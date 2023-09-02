import React, { useState } from "react";
import { userChangePasswords } from "services/Users";
import Swal from "sweetalert2";

export default function PasswordAccount() {

    const [passwords, setPasswords] = useState({
        "old_password": "",
        "new_password": "",
        "confirm_password": ""
    })

    const changePassword = (e) => {
        e.preventDefault()
        
        if (passwords.confirm_password === "" || passwords.new_password === "" || passwords.old_password === "") {
            Swal.fire(
                'Datos inválidos',
                'Rellene todos los campos',
                'warning'
            )

        } else {
            if (passwords.new_password === passwords.confirm_password) {
                if (passwords.confirm_password === passwords.old_password) {
                    Swal.fire(
                        'Contraseñas incorrectas',
                        'La contraseña antigua y las nuevas son iguales',
                        'error'
                    )
                } else {
                    userChangePasswords(passwords).then(data => {
                        if(data.message){
                            Swal.fire(
                                'Contraseña incorrecta',
                                'La contraseña antigua no coincide',
                                'error'
                            )
                        }else if(data.userUpdate){
                            Swal.fire(
                                'Contraseña',
                                'Contraseña actualizada correctamente',
                                'success'
                            )
                            e.target.reset()
                            setPasswords({
                                "old_password": "",
                                "new_password": "",
                                "confirm_password": ""
                            })
                        }
                    })
                }
            } else {
                Swal.fire(
                    'Contraseñas incorrectas',
                    'Las contraseñas no coinciden',
                    'error'
                )
            }
        }
    }

    const changeData = (event) => {
        setPasswords({
            ...passwords,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="rowAccount">
            <h3>Contraseña</h3>
            <form onSubmit={changePassword}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="userName">Antigua</label>
                        <input type="password" id="userName" name="old_password" onChange={changeData} />
                    </div>
                    <div className="col">
                        <label htmlFor="userLastName">Nueva</label>
                        <input type="password" id="userLastName" name="new_password" onChange={changeData} />
                    </div>
                    <div className="col">
                        <label htmlFor="userLastName">Repetir</label>
                        <input type="password" id="userLastName" name="confirm_password" onChange={changeData} />
                    </div>
                </div>
                <div className="rowBetween">
                    <span className="spanSecurity">
                        <h4>Seguridad:</h4>
                        <ul>
                            <li>Utiliza 6 caracteres o más</li>
                        </ul>
                    </span>
                    <button className="btn btn-success">Guardar</button>
                </div>
            </form>
        </div>
    )
}