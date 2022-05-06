import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { register } from "services/Users";
import { useLocation } from "wouter";
import useToken from "hooks/useToken";

export default function Register() {

    const inputPasswordRef = React.createRef()
    const inputPasswordRef2 = React.createRef()
    const showPasswordRef = React.createRef()
    const showPasswordRef2 = React.createRef()
    const hidePasswordRef = React.createRef()
    const hidePasswordRef2 = React.createRef()

    const [location, setLocation] = useLocation()
    const { setTokenInfo } = useToken()

    const [userData, setUserData] = useState({
        "email" : "",
        "password" : "",
        "confirm_password" : ""
    })

    const handleForm = (e) => {
        e.preventDefault()

        const regex = /^[a-zA-Z0-9*/$^Ç]{6,16}$/

        if(userData.email === "" || userData.password === "" || userData.confirm_password === ""){
            alert("Rellena todos los campos")
            return
        }

        if(userData.password !== userData.confirm_password){
            alert("Las contraseñas no coinciden")
            return
        }

        if(!regex.test(userData.password)){
            alert("La contraseña no cumple con los requisitos")
            return
        }

        // ! Send data

        console.log(userData);

        register(userData).then(data => {
            console.log(data);
            if(data.token){
                localStorage.setItem("token", JSON.stringify(data.token))
                setTokenInfo(data.token)
                setLocation("/")
            }else{
                alert(data.message)
            }
        })
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const togglePassword = () => {
        let input = inputPasswordRef.current
        let hide = hidePasswordRef.current
        let show = showPasswordRef.current

        if (input.type === "text") {
            input.type = "password"
            show.classList.toggle("passwordShow")
            hide.classList.toggle("passwordShow")
        } else {
            input.type = "text"
            show.classList.toggle("passwordShow")
            hide.classList.toggle("passwordShow")
        }
    }

    const togglePassword2 = () => {
        let input = inputPasswordRef2.current
        let hide = hidePasswordRef2.current
        let show = showPasswordRef2.current

        if (input.type === "text") {
            input.type = "password"
            show.classList.toggle("passwordShow")
            hide.classList.toggle("passwordShow")
        } else {
            input.type = "text"
            show.classList.toggle("passwordShow")
            hide.classList.toggle("passwordShow")
        }
    }

    return (
        <div className="centerLog">
            <div className="containerCenter">
                <div className="containerLogLeft containerWhite">
                    <div className="contentLog">
                        <h2>Registrarse</h2>
                        <form onSubmit={handleForm}>
                            <div className="inputsLog">
                                <input type="email" id="" placeholder="Email" onChange={handleChange} name="email" />
                                <div className="inputPassword">
                                    <input type="password" id="inputPassword" placeholder="Password" name="password" onChange={handleChange} ref={inputPasswordRef} />
                                    <i className="passwordShow" id="passwordShow" onClick={togglePassword} ref={showPasswordRef}><FontAwesomeIcon icon={faEye} /></i>
                                    <i id="passwordHide" onClick={togglePassword} ref={hidePasswordRef}><FontAwesomeIcon icon={faEyeSlash} /></i>
                                </div>
                                <div className="inputPassword">
                                    <input type="password" id="inputPassword2" placeholder="Confirmar Password" onChange={handleChange} name="confirm_password" ref={inputPasswordRef2} />
                                    <i className="passwordShow" id="passwordShow2" onClick={togglePassword2} ref={showPasswordRef2} ><FontAwesomeIcon icon={faEye}/></i>
                                    <i id="passwordHide2" onClick={togglePassword2} ref={hidePasswordRef2} ><FontAwesomeIcon icon={faEyeSlash} /></i>
                                </div>
                            </div>
                            <button className="btn btn-primary">Registrarse</button>
                        </form>
                    </div>
                </div>
                <div className="containerLogRight containerColumn">
                    <h2>¿Ya tienes cuenta?</h2>
                    <Link to="/login"><button className="btn btn-light">Iniciar sesión</button></Link>
                </div>
            </div>
        </div>
    )

}