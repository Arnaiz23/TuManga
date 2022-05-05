import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export default function Register() {

    return (
        <div className="centerLog">
            <div className="containerCenter">
                <div className="containerLogLeft containerWhite">
                    <div className="contentLog">
                        <h2>Registrarse</h2>
                        <form>
                            <div className="inputsLog">
                                <input type="text" id="" placeholder="Email" />
                                    <div className="inputPassword">
                                        <input type="password" id="inputPassword" placeholder="Password" />
                                        <i className="passwordShow" id="passwordShow"><FontAwesomeIcon icon={faEye} /></i>
                                            <i id="passwordHide"><FontAwesomeIcon icon={faEyeSlash} /></i>
                                    </div>
                                    <div className="inputPassword">
                                        <input type="password" id="inputPassword2" placeholder="Confirmar Password" />
                                        <i className="passwordShow" id="passwordShow2"><FontAwesomeIcon icon={faEye} /></i>
                                            <i id="passwordHide2"><FontAwesomeIcon icon={faEyeSlash} /></i>
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