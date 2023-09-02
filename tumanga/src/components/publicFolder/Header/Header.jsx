import React, { useContext, useState } from "react";
import { Link } from "wouter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import Brand from '/BrandTransparent.png'

import Nav from "@components/publicFolder/Nav/Nav.jsx";
import useToken from "@/hooks/useToken.js";
import useOrderData from "@/hooks/useOrderData.js";
import ProductHeader from "@components/publicFolder/ProductHeader/ProductHeader.jsx";

import OrderContext from "@/context/OrderContext.jsx";
import { useLocation } from "wouter";
import useUser from "@/hooks/useUser.js";

export default function Header() {

    const [navActive, setNavActive] = useState('')
    const [search, setSearch] = useState('')
    const [modalSearch, setModalSearch] = useState(false)
    const setLocation = useLocation()[1]

    const { count, order } = useOrderData()
    const { setUser, user, setOrderProcess } = useContext(OrderContext)

    const { tokenInfo } = useToken()

    useUser()

    let changeNavState = () => {
        navActive === '' ? setNavActive('navActive') : setNavActive('')
    }

    const handleChangeInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (modalSearch) {
            setModalSearch(false)
        }
        if (search === "") return setLocation(`/`)
        setLocation(`/search/${search}`)
        e.target.reset()
    }

    const openModalSearch = () => {
        setModalSearch(true)
    }

    const hideModalSearch = () => {
        setModalSearch(false)
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
                <form className="headerSearch" onSubmit={handleSearch}>
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                    <input type="search" id="headerSearch" placeholder="Busca en nuestro catálogo" onChange={handleChangeInput} />
                </form>
                <div className="headerOptions">
                    <span id="iconSearch" onClick={openModalSearch}>
                        <i className="fa-solid fa-search"><FontAwesomeIcon icon={faSearch} /></i>
                    </span>
                    <section className={modalSearch ? 'modalSearchBackground modalSearchBackgroundShow' : 'modalSearchBackground'}>
                        <span className="closeModalSearch" onClick={hideModalSearch}>
                            <i className="fa-solid fa-xmark"><FontAwesomeIcon icon={faXmark} /></i>
                        </span>
                        <section>
                            <form className="inputSearchContainer" onSubmit={handleSearch}>
                                {modalSearch && <input type="search" name="" id="" autoFocus placeholder="Busca en nuestro catálogo" onChange={handleChangeInput} />}
                                <button type="submit" role="search"><i className="fa-solid fa-search"><FontAwesomeIcon icon={faSearch} /></i></button>
                            </form>
                        </section>
                    </section>
                    <span id="spanBadge" className={user ? '' : 'iconShoppingHide'}>
                        <Link to="/order">
                            <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                            {order && count >= 1 && <span className="badge">{count}</span>}
                        </Link>
                    </span>

                    {order.length !== 0 && order.products.length !== 0 && user &&
                        <div className="containerCart">
                            {order.products.map((data, index) => {
                                if (index >= 3) return ""
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
            <Nav state={navActive} user={setUser} changeProcess={setOrderProcess} />
        </>
    )
}
