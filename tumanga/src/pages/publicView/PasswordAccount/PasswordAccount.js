import useUser from "hooks/useUser";
import React, { useState } from "react";

export default function PasswordAccount() {

    const { userData, setUserData } = useUser()
    // const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [passwords, setPasswords] = useState({
        "old_password": "",
        "new_password": "",
        "confirm_password": ""
    })

    const changePassword = (e) => {
        e.preventDefault()
        // ! Create a route to change the password (old, new, confirm)
        if(passwords.new_password === passwords.confirm_password){
            alert("La password se van a cambiar")
        }else{
            alert("Las passwords no coinciden")
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