import useUser from "hooks/useUser";
import React, { useState } from "react";
import { userChangePasswords } from "services/Users";

export default function PasswordAccount() {

    const [passwords, setPasswords] = useState({
        "old_password": "",
        "new_password": "",
        "confirm_password": ""
    })

    const changePassword = (e) => {
        e.preventDefault()
        
        if (passwords.confirm_password === "" || passwords.new_password === "" || passwords.old_password === "") {
            alert("Rellene todos los campos")
        } else {
            if (passwords.new_password === passwords.confirm_password) {
                if (passwords.confirm_password === passwords.old_password) {
                    alert("La contraseña antigua y las nuevas son iguales")
                } else {
                    userChangePasswords(passwords).then(data => {
                        if(data.message){
                            alert(data.message)
                        }else if(data.userUpdate){
                            alert("La password se ha actualizado correctamente")
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
                alert("Las passwords no coinciden")
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
                        <input type="text" id="userName" name="old_password" onChange={changeData} />
                    </div>
                    <div className="col">
                        <label htmlFor="userLastName">Nueva</label>
                        <input type="text" id="userLastName" name="new_password" onChange={changeData} />
                    </div>
                    <div className="col">
                        <label htmlFor="userLastName">Repetir</label>
                        <input type="text" id="userLastName" name="confirm_password" onChange={changeData} />
                    </div>
                </div>
                <div className="rowBetween">
                    <span className="spanSecurity">
                        <h4>Seguridad:</h4>
                        <ul>
                            <li>Utiliza 6 caracteres o más</li>
                        </ul>
                    </span>
                    <button className="btn btn-success" role="button">Guardar</button>
                </div>
            </form>
        </div>
    )
}