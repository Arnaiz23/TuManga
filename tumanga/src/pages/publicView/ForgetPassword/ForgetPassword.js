import React, { useState } from "react";
import { forgetPassword } from "services/RecoverPassword";
import Swal from "sweetalert2";
import { useLocation } from "wouter";

export default function ForgetPassword() {

    const [email, setEmail] = useState({
        "email" : ""
    })

    const setLocation = useLocation()[1]

    const handleChangeEmail = (e) => {
        setEmail({
            ...email,
            [e.target.name] : e.target.value
        })
    }

    const handleSendEmail = (e) => {
        e.preventDefault()

        const regexpEmail = /^[a-zA-Z]+@[a-z]+.[a-z]+$/

        if(email.email === ""){
            return Swal.fire(
                'Datos',
                'Debes rellenar el email',
                'warning'
            )
        }

        if(!regexpEmail.test(email.email)){
            return Swal.fire(
                'Datos',
                'Debes introducir un email válido',
                'error'
            )
        }

        forgetPassword(email).then(data => {
            Swal.fire(
                'Correo enviado',
                'Revise su correo',
                'success'
            )
            setLocation("/")
        })
    }
    
    return (
        <div className="containerBodyForget">
            <div className="containerMacForget">
                <header>
                    <span className="circleMac" />
                    <span className="circleMac" />
                    <span className="circleMac" />
                </header>
                <section className="mainForget">
                    <section>
                        <h2>Restablecer la contraseña</h2>
                        <form className="formForget" onSubmit={handleSendEmail}>
                            <div className="inputFieldForget">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" onChange={handleChangeEmail} />
                            </div>
                            <button type="submit" className="btn btn-success">Enviar</button>
                        </form>
                    </section>
                    <section className="extraInformationForget">
                        <h2>Información extra</h2>
                        <div className="informationForget">
                            <p>Recuerde:</p>
                            <ul>
                                <li>Una vez enviado, se enviará un email para poder restablecerla</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}