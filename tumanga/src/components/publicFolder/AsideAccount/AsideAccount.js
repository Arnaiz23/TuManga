import React from "react";
import { useRoute } from "wouter";
import { Link } from "wouter";

export default function AsideAccount() {

    const ActiveLink = props => {
        const [isActive] = useRoute(props.href);
        return (
            <Link {...props}>
                <p className={isActive ? "activeUnderline" : ""}>{props.children}</p>
            </Link>
        );
    };

    return (
        <aside className="containerAside">
            <ul>
                <li>
                    <ActiveLink href="/account">Mi Información</ActiveLink>
                </li>
                <div className="lineAside"></div>
                <li>
                    <ActiveLink href="/account/orders">Mis Pedidos</ActiveLink>
                </li>
                <div className="lineAside"></div>
                <li>
                    <ActiveLink href="/account/address">Mis Direcciones</ActiveLink>
                </li>
                <div className="lineAside"></div>
                <li>
                    <ActiveLink href="/account/cards">Mis Tarjetas</ActiveLink>
                </li>
                <div className="lineAside"></div>
                <li>
                    <ActiveLink href="/account/comments">Mis Comentarios</ActiveLink>
                </li>
            </ul>
        </aside>
    )
}