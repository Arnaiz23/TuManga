import React, { useState } from "react";
import { recoverPassword } from "services/RecoverPassword";
import Swal from "sweetalert2";
import { useLocation } from "wouter";

const message_errors = ["Update password successfully!!!", "This user has not been updated", "The passwords agree", "This user doesn't exists", "Passwords do not match", "Password invalids", "Data not found"]

export default function RecoverPassword({ params }){

    const setLocation = useLocation()[1]

    const [password, setPassword] = useState({
        "password" : "",
        "confirm_password" : ""
    })

    const handleFormPassword = (e) => {
        e.preventDefault()

        const regexpPassword = /^[a-zA-Z0-9*/$^Ç]{6,16}$/

        if(password.password === "" || password.confirm_password === ""){
            return Swal.fire(
                'Datos inválidos',
                'Debes rellenar todos los campos',
                'warning'
            )
        }

        if(password.password !== password.confirm_password){
            return Swal.fire(
                'Datos inválidos',
                'Las contraseñas no coinciden',
                'error'
            )
        }

        if(!regexpPassword.test(password.password)){
            return Swal.fire(
                'Datos inválidos',
                'Las contraseñas no cumplen los requisitos',
                'error'
            )
        }
        
        recoverPassword(params.token, password).then(data => {
            if(data.message === message_errors[0]){
                Swal.fire(
                    'Contraseña actualizada',
                    'Contraseña actualizada correctamente',
                    'success'
                )
                setLocation("/login")
            }else if(data.message === message_errors[1]){
                return Swal.fire(
                    'Error',
                    'Lo sentimos, la contraseña no ha podido actualizarse',
                    'error'
                )
            }else if(data.message === message_errors[2]){
                return Swal.fire(
                    'Error',
                    'No puedes repetir ninguna contraseña antigua',
                    'error'
                )
            }else if(data.message === message_errors[3]){
                setLocation("/login")
            }else if(data.message === message_errors[4]){
                return Swal.fire(
                    'Error',
                    'Las contraseñas no coinciden',
                    'error'
                )
            }else if(data.message === message_errors[5]){
                return Swal.fire(
                    'Error',
                    'Las contraseñas no cumplen los requisitos',
                    'error'
                )
            }else if(data.message === message_errors[6]){
                return Swal.fire(
                    'Error',
                    'Debes rellenar todos los datos',
                    'error'
                )
            }
        })
    }

    const handleChange = (e) => {
        setPassword({
            ...password,
            [e.target.name] : e.target.value
        })
    }
    
    return (
        <div className="centerLog">
            <div className="containerCenter">
                <div className="containerRecover">
                    <header>
                        <span></span><span></span><span></span>
                    </header>
                    <main>
                        <h2>Recuperar la contraseña</h2>
                        <form onSubmit={handleFormPassword}>
                            <div className="inputRecover">
                                <label htmlFor="newPassword">Nueva Contraseña</label>
                                <input type="password" id="newPassword" name="password" title="De 6 a 16 caractéres" onChange={handleChange} />
                            </div>
                            <div className="inputRecover">
                                <label htmlFor="repeatPassword">Repetir Contraseña</label>
                                <input type="password" id="repeatPassword" name="confirm_password" title="De 6 a 16 caractéres" onChange={handleChange} />
                            </div>
                            <button className="btn btn-success">Enviar</button>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}