import React, { useState } from "react";
import { Link } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

import Brand from 'BrandTransparent.png'

import Nav from "components/Nav/Nav";

export default function Header() {

    const [ navActive, setNavActive ] = useState('')

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
                        <Link to="/">
                            <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                            <span className="badge">4</span>
                        </Link>
                    </span>
                    {/* <div className="containerCart">
                    <div className="cardCart">
                        <img src="./assets/images/tokyorevnegers4.jpeg" alt="portada de Tokyo revengers 04" />
                        <div>
                            <h4>Tokyo Revenger 04</h4>
                            <span className="amountCart">
                                <p>Cant: </p>
                                <p>1</p>
                            </span>
                        </div>
                    </div>
                    <div className="lineCart"></div>
                    <div className="cardCart">
                        <img src="./assets/images/tokyorevnegers4.jpeg" alt="portada de Tokyo revengers 04" />
                        <div>
                            <h4>Tokyo Revenger 04</h4>
                            <span className="amountCart">
                                <p>Cant: </p>
                                <p>1</p>
                            </span>
                        </div>
                    </div>
                    <div className="totalCart">
                        <p>Total</p>
                        <p>100€</p>
                    </div>
                </div> */}

                    <span>
                        <Link to="/account">
                            {/* <i className="fa-regular fa-user"></i> */}
                            <i><FontAwesomeIcon icon={faUser} /></i>
                        </Link>
                    </span>
                    <span onClick={changeNavState}>
                        {/* <i id="buttonMenu">&#9776;</i> */}
                        <i><FontAwesomeIcon icon={faBars} /></i>
                    </span>
                </div>
            </header>
            <Nav state={navActive} />
        </>
    )
}