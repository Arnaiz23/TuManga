import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "wouter";
import { Link } from "wouter";

export default function NavAccountResp() {

    const [stateNav, setStateNav] = useState('')

    const ActiveLink = props => {
        const [isActive] = useRoute(props.href);
        return (
            <Link {...props}>
                <a className={isActive ? "submenuOptionActive" : ""}>{props.children}</a>
            </Link>
        );
    };

    const openNav = () => {
        setStateNav('submenuActive')
    }

    const closeNav = () => {
        setStateNav('')
    }

    return (
        <>
            <button className="btnSubmenu" onClick={openNav}><i><FontAwesomeIcon icon={faEllipsisVertical} /></i></button>
            <nav className={`submenuFloat ${stateNav}`}>
                <header>
                    <button role="button" id="closeModalAccount" onClick={closeNav}>
                        <i><FontAwesomeIcon icon={faXmark} /></i>
                        Cerrar
                    </button>
                </header>
                <main>
                    <ul>
                        <li>
                            <ActiveLink href="/account">Mi Información</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/account/orders">Mis Pedidos</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/account/address">Mis Direcciones</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/account/cards">Mis Tarjetas</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/account/comments">Mis Comentarios</ActiveLink>
                        </li>
                    </ul>
                </main>
            </nav>
        </>
    )
}