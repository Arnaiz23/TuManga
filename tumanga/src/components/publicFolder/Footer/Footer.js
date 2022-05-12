import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "wouter";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footerTop">
                <div className="footerAccount footerContainer">
                    <h4 className="footerSubtitle">Mi Cuenta</h4>
                    <div className="footerLine"></div>
                    <ul className="footerContainerOptions">
                        <li><Link to="/account"><i><FontAwesomeIcon icon={faAngleRight} /></i>Mi Cuenta</Link></li>
                        <li><Link to="/account/orders"><i><FontAwesomeIcon icon={faAngleRight} /></i>Historial de pedidos</Link></li>
                        <li><Link to="/account/address"><i><FontAwesomeIcon icon={faAngleRight} /></i>Mis Direcciones</Link></li>
                    </ul>
                </div>
                <div className="footerInformation footerContainer">
                    <h4 className="footerSubtitle">Información Legal</h4>
                    <div className="footerLine"></div>
                    <ul className="footerContainerOptions">
                        <li><i><FontAwesomeIcon icon={faAngleRight} /></i>Aviso Legal</li>
                        <li><i><FontAwesomeIcon icon={faAngleRight} /></i>Política de cookies</li>
                        <li><i><FontAwesomeIcon icon={faAngleRight} /></i>Política de privacidad</li>
                    </ul>
                </div>
                <div className="footerContact footerContainer">
                    <h4 className="footerSubtitle">Contáctanos</h4>
                    <div className="footerLine"></div>
                    <ul className="footerContainerOptions">
                        <li><i><FontAwesomeIcon icon={faPhone} /></i>601 403 189</li>
                        <div className="footerLine"></div>
                        <li><i><FontAwesomeIcon icon={faEnvelope} /></i>tumanga@tumanga.com</li>
                        <div className="footerLine"></div>
                        <li className="noHover">Contacta con nosotros para cualquier duda</li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <h3>&copy;Todos los derechos reservados</h3>
            </div>
        </footer>
    )
}