import React from "react"
import {
  faAngleRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"

import useToken from "@/hooks/useToken.js"

export default function Footer() {
  const { tokenInfo } = useToken()

  return (
    <footer id="footer">
      <div className="footerTop">
        <div className="footerAccount footerContainer">
          <h4 className="footerSubtitle">Mi Cuenta</h4>
          <div className="footerLine"></div>
          <ul className="footerContainerOptions">
            {tokenInfo ? (
              <>
                <li>
                  <Link to="/account">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Mi Cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/account/orders">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Historial de pedidos
                  </Link>
                </li>
                <li>
                  <Link to="/account/address">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Mis Direcciones
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Mi Cuenta
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Historial de pedidos
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    Mis Direcciones
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="footerInformation footerContainer">
          <h4 className="footerSubtitle">Información Legal</h4>
          <div className="footerLine"></div>
          <ul className="footerContainerOptions">
            <li>
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
              Aviso Legal
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
              Política de cookies
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
              Política de privacidad
            </li>
          </ul>
        </div>
        <div className="footerContact footerContainer">
          <h4 className="footerSubtitle">Contáctanos</h4>
          <div className="footerLine"></div>
          <ul className="footerContainerOptions">
            <li>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              601 403 189
            </li>
            <div className="footerLine"></div>
            <li>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              tumanga@tumanga.com
            </li>
            <div className="footerLine"></div>
            <li className="noHover">
              Contacta con nosotros para cualquier duda
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <h3>&copy;Todos los derechos reservados</h3>
      </div>
    </footer>
  )
}
