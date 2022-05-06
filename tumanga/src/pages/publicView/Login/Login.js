import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { login, userChangeState } from "services/Users";
import useToken from "hooks/useToken";
import { useLocation } from "wouter";
import Swal from "sweetalert2";

export default function Login() {

    const [userData, setUserData] = useState({
        "email": "",
        "password": "",
        "remember": false
    })

    const { setTokenInfo } = useToken()
    const [location, setLocation] = useLocation()

    const inputPasswordRef = React.createRef()
    const hidePasswordRef = React.createRef()
    const showPasswordRef = React.createRef()

    const handleForm = (e) => {
        e.preventDefault()

        if (userData.email !== "" && userData.password !== "") {
            
            login(userData).then(res => {
                if (res.token) {

                    if (res.userState !== undefined) {
                        Swal.fire({
                            title: 'Cuenta deshabilitada',
                            text: "Tu cuenta esta deshabilitada. ¿Quieres volver a ponerla activa??",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Activar'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                localStorage.setItem("token", JSON.stringify(res.token))
                                userChangeState().then(data => {
                                    if (data.userUpdate) {
                                        Swal.fire(
                                            'Activada',
                                            'Tu cuenta ha sido activada',
                                            'success'
                                        )
                                        setTokenInfo(res.token)
                                        setLocation("/")
                                    }else{
                                        alert(data.message)
                                        // localStorage.removeItem("token")
                                    }
                                })

                            } else {
                                Swal.fire(
                                    'Deshabilitada',
                                    'Tu cuenta seguirá deshabilitada',
                                    'success'
                                )
                                    e.target.reset()
                            }
                        })
                    } else {
                        localStorage.setItem("token", JSON.stringify(res.token))
                        setTokenInfo(res.token)
                        setLocation("/")
                    }
                } else {
                    alert(res)
                }
            })
        } else {
            alert("Rellene todos los datos")
        }
    }

    const changeData = (event) => {

        let valor = event.target.value

        if (event.target.name === "remember") {
            valor = event.target.checked
        }

        setUserData({
            ...userData,
            [event.target.name]: valor
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

    return (
        <div className="centerLog">
            <div className="containerCenter">
                <div className="containerLogLeft">
                    <h2>¿No tienes cuenta?</h2>
                    <Link to="/register"><button className="btn btn-light">Registrarse</button></Link>
                </div>
                <div className="containerLogRight">
                    <div className="contentLog">
                        <h2>Iniciar sesión</h2>
                        <form onSubmit={handleForm}>
                            <div className="inputsLog">
                                <input type="text" id="" placeholder="Email" name="email" onChange={changeData} />
                                <div className="inputPassword">
                                    <input type="password" id="inputPassword" placeholder="Password" name="password" onChange={changeData} ref={inputPasswordRef} />
                                    <i className="passwordShow" id="passwordShow" ref={showPasswordRef} onClick={togglePassword}><FontAwesomeIcon icon={faEye} /></i>
                                    <i id="passwordHide" ref={hidePasswordRef} onClick={togglePassword}><FontAwesomeIcon icon={faEyeSlash} /></i>
                                </div>
                            </div>
                            <span className="containerRemember">
                                <input type="checkbox" id="remember" name="remember" onChange={changeData} />
                                <label htmlFor="remember">Recuerdame</label>
                            </span>
                            <button className="btn btn-info">Iniciar sesión</button>
                        </form>
                        <a className="forgetPassword" href="recoverPassword.html">¿Olvidastes la contraseña?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}