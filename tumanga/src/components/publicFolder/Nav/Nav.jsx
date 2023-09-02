import React, { useContext, useEffect } from "react";
import { Link } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import useToken from "hooks/useToken";
import { useLocation } from "wouter";
import OrderContext from "context/OrderContext";

const ROLES = ["owner", "admin", "empleado"]

export default function Nav({ state, user, changeProcess }) {

    let navState = state

    const { tokenInfo, setTokenInfo } = useToken()
    const setLocation = useLocation()[1]
    const { userData, setUserData } = useContext(OrderContext)

    let navRef = React.createRef()

    useEffect(() => {
        navState = state
    }, [state])

    let closeNav = () => {
        let navItem = navRef.current
        navItem.classList.remove('navActive')
    }

    const logout = () => {
        localStorage.removeItem("token")
        setTokenInfo(false)
        user(false)
        setUserData({})
        changeProcess(false)
        setLocation("/")
    }

    return (
        <nav id="navHome" className={navState} ref={navRef}>
            <i className="closeNav" onClick={closeNav}><FontAwesomeIcon icon={faXmark} /></i>
            <div className="navOptions">
                <ul>
                    <li><Link to="/"><i className="fa-solid fa-house"></i>Inicio</Link></li>
                    <li><Link to="/products/mangas"><i className="fa-solid fa-book"></i>Mangas</Link></li>
                    <li><Link to="/products/merchandising"><i className="fa-solid fa-child-reaching"></i>Merchandising</Link></li>
                    <li>
                        {tokenInfo
                            && (
                                <Link to="/account"><i className="fa-solid fa-user"></i>Mi Cuenta</Link>
                            )
                        }
                    </li>
                </ul>
            </div>
            {ROLES.includes(userData.roleName) && <Link to="/platform"><button className="btn btn-light" id="btnAccessPanel">Acceder al panel</button></Link>}
            {tokenInfo
                ? (<button className="btn btn-danger" id="btnLogout" onClick={logout}>Cerrar sesión</button>)
                : (<Link to="/login"><button className="btn btn-success">Login</button></Link>)
            }
        </nav>
    )
}