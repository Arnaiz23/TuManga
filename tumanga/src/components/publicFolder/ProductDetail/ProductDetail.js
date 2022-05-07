import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { api_URL } from "services/config";

export default function ProductDetail({ product }) {

    const addCart = () => {
        alert("Añadido")
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
                            product.stock > 0
                                ? (
                                    <button className="btn btn-success" onClick={addCart}>Añadir a la cesta</button>
                                )
                                : (
                                    <button className="btn btn-warning">Añadir a la cesta</button>
                                )
                        }
                    </header>
                    <main>
                        <ul>
                            <li><b>Autores:</b>
                                <p>{product.authors}</p>
                            </li>
                            <li><b>Editorial:</b>
                                <p>{product.editorial}</p>
                            </li>
                            <li><b>Serie:</b>
                                <p>{product.series}</p>
                            </li>
                        </ul>
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