import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { api_URL } from "services/config";

import OrderContext from "context/OrderContext";
import { addProductOrder, createOrder } from "services/Orders";
import Swal from "sweetalert2";

export default function ProductDetail({ product }) {

    const { user, orderProcess, setOrderProcess, setOrder, setCount } = useContext(OrderContext)

    const addCart = () => {

        if (orderProcess) {
            addProductOrder({ "id_product": product._id }).then(data => {
                if (data.message) return alert(data.message)
                setOrderProcess(true)
                setOrder(data.orderUpdate)
                setCount(data.orderUpdate.products.length)
                Swal.fire(
                    'Producto',
                    'Producto añadido al carrito',
                    'success'
                )
            })
        } else {
            createOrder({ "id_product": product._id }).then(data => {
                if (data.message) return alert(data.message)
                setOrderProcess(true)
                setOrder(data.saveOrder)
                setCount(data.saveOrder.products.length)
                Swal.fire(
                    'Producto',
                    'Producto añadido al carrito',
                    'success'
                )
            })
        }
        /* 
        setOrderProcess(true)
            setOrder(data.saveOrder)
            setCount(data.saveOrder.products.length)
        */
    }

    return (
        <div className="containerCenterRadius">
            <div className="containerProduct">
                {
                    product.image !== null
                        ? (
                            <img src={`${api_URL}/image/${product.image}`} alt="portada volumen Tokyo Revengers 04" />
                        )
                        : (
                            <img src="https://www.normaeditorial.com/upload/media/albumes/0001/21/c5d840b61ed5a355bccb3484e12a61b77ba9499b.jpeg" alt="portada volumen Tokyo Revengers 04" />
                        )
                }
                <section className="informationProduct">
                    <header>
                        <h3>{product.name}</h3>
                        <div className="rowStars">
                            <span>
                                {/* starsActive */}
                                <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                                <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                                <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                                <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                                <i><FontAwesomeIcon icon={faStar} /></i>
                            </span>
                            {/* <p>({product.comments.length})</p> */}
                        </div>
                        <div className="rowPriceStock">
                            <p className="price">{product.price} €</p>
                            <p>Disponibilidad: <b>{product.stock > 0 ? 'En Stock' : 'Agotado'}</b></p>
                        </div>
                        {
                            user &&
                            (
                                product.stock > 0
                                    ? (
                                        <button className="btn btn-success" onClick={addCart}>Añadir a la cesta</button>
                                    )
                                    : (
                                        <button className="btn btn-warning">Añadir a la cesta</button>
                                    )
                            )
                        }
                    </header>
                    <main>
                        <ul>
                            {product.author &&
                                <li><b>Autores:</b>
                                    <p>{product.authors}</p>
                                </li>
                            }
                            {product.editorial &&
                                <li><b>Editorial:</b>
                                    <p>{product.editorial}</p>
                                </li>
                            }
                            {product.series &&
                                <li><b>Serie:</b>
                                    <p>{product.series}</p>
                                </li>
                            }
                        </ul>
                        {product.categories &&
                            <section className="productCategories">
                                <header>
                                    <b>Categorías:</b>
                                </header>
                                <footer>
                                    <p>{product.categories.join(" - ")}</p>
                                </footer>
                            </section>
                        }
                    </main>
                    <footer>
                        <p>
                            {product.description}
                        </p>
                    </footer>
                </section>
            </div>
        </div>
    )
}