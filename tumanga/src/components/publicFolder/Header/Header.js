import React, { useContext, useState } from "react";
import { Link } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

import Brand from 'BrandTransparent.png'

import Nav from "components/publicFolder/Nav/Nav";
import useToken from "hooks/useToken";
import useOrderData from "hooks/useOrderData";
import ProductHeader from "../ProductHeader/ProductHeader";

import OrderContext from "context/OrderContext";

export default function Header() {

    const [navActive, setNavActive] = useState('')

    const { count, order } = useOrderData()
    const { setUser, user } = useContext(OrderContext)

    const { tokenInfo } = useToken()

    let changeNavState = () => {
        // alert("Hola")
        navActive === '' ? setNavActive('navActive') : setNavActive('')
    }

    return (
        <>
            <header id="header">
                <div className="brand">
                    <Link to="/">
                        <img src={Brand} alt="brand arnaizDev" id="imgBrand" />
                        <h1>TuManga</h1>
                    </Link>
                </div>
                <div className="headerSearch">
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                    <input type="text" id="headerSearch" placeholder="Busca en nuestro catálogo" />
                </div>
                <div className="headerOptions">
                    <span id="spanBadge">
                        {user
                            && (
                                <Link to="/order">
                                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                                    {order && count >= 1 && <span className="badge">{count}</span>}
                                </Link>
                            )
                        }
                        {/* <Link to="/order">
                            <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                            {order && count >= 1 && <span className="badge">{count}</span>}
                        </Link> */}
                    </span>

                    {order.length !== 0 && order.products.length !== 0 && user &&
                        <div className="containerCart">
                            {order.products.map((data, index) => {
                                if (index >= 3) return
                                return <ProductHeader key={data._id} data={data} index={index} />
                            })}
                            <div className="totalCart">
                                <p>Total</p>
                                <p>{order.total}€</p>
                            </div>
                        </div>}

                    <span>
                        {tokenInfo
                            ? (
                                <Link to="/account">
                                    {/* <i className="fa-regular fa-user"></i> */}
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                </Link>
                            )
                            : (
                                <Link to="/login">
                                    {/* <i className="fa-regular fa-user"></i> */}
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                </Link>
                            )
                        }
                    </span>
                    <span onClick={changeNavState}>
                        {/* <i id="buttonMenu">&#9776;</i> */}
                        <i><FontAwesomeIcon icon={faBars} /></i>
                    </span>
                </div>
            </header>
            <Nav state={navActive} user={setUser} />
        </>
    )
}