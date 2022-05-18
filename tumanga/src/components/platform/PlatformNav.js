import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBoxOpen, faClipboardList, faHome, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link } from "wouter";
import AdminContext from "context/AdminContext";
import { api_URL } from "services/config";

export default function PlatformNav() {

    const { userData } = useContext(AdminContext)

    return (
        <nav className="adminNav">
            <header>
                <img src={`${api_URL}/image/DefaultUser2.png`}
                    alt="icon user" />
                <h2>Admin</h2>
            </header>
            <ul>
                <li>
                    <Link to="/platform">
                        <i><FontAwesomeIcon icon={faHome} /></i>
                        <h3>Inicio</h3>
                    </Link>
                </li>
                <li id="btnUser">
                    <Link to="/platform/users">
                        <i><FontAwesomeIcon icon={faUser} /></i>
                        <h3>Usuarios</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/platform/products">
                        <i><FontAwesomeIcon icon={faBook} /></i>
                        <h3>Productos</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/platform/orders">
                        <i><FontAwesomeIcon icon={faBoxOpen} /></i>
                        <h3>Pedidos</h3>
                    </Link>
                </li>
                {/* ! If the user is admin */}
                {userData.roleName === "admin" &&
                    <li>
                        <Link to="/platform/roles">
                            <i><FontAwesomeIcon icon={faWrench} /></i>
                            <h3>Roles</h3>
                        </Link>
                    </li>
                }
                <li>
                    <Link to="/platform/comments">
                        <i><FontAwesomeIcon icon={faClipboardList} /></i>
                        <h3>Comentarios</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}