import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export default function Login() {
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
                        <form>
                            <div className="inputsLog">
                                <input type="text" id="" placeholder="Email" />
                                    <div className="inputPassword">
                                        <input type="password" id="inputPassword" placeholder="Password" />
                                            <i className="passwordShow" id="passwordShow"><FontAwesomeIcon icon={faEye} /></i>
                                            <i id="passwordHide"><FontAwesomeIcon icon={faEyeSlash} /></i>
                                    </div>
                            </div>
                            <span className="containerRemember">
                                <input type="checkbox" id="remember" />
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