import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Nav({ state }) {

    let navState = state

    let navRef = React.createRef()

    useEffect(() => {
        navState = state
    }, [state])

    let closeNav = () => {
        let navItem = navRef.current
        navItem.classList.remove('navActive')
    }

    return (
        <nav id="navHome" className={navState} ref={navRef}>
            <i className="closeNav" onClick={closeNav}><FontAwesomeIcon icon={faXmark} /></i>
            <div className="navOptions">
                <ul>
                    <li><Link to="/"><i className="fa-solid fa-house"></i>Inicio</Link></li>
                    <li><Link to="/products/mangas"><i className="fa-solid fa-book"></i>Mangas</Link></li>
                    <li><Link to="/products/merchandising"><i className="fa-solid fa-child-reaching"></i>Merchandising</Link></li>
                    <li><Link to="account"><i className="fa-solid fa-user"></i>Mi Cuenta</Link></li>
                </ul>
            </div>
            <button className="btn btn-light" id="btnAccessPanel" role="button">Acceder al panel</button>
            <button className="btn btn-danger" id="btnLogout" role="button">Cerrar sesión</button>
        </nav>
    )
}