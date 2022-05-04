import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail({ product }) {

    const addCart = () => {
        alert("Añadido")
    }

    return (
        <div className="containerCenterRadius">
            <div className="containerProduct">
                <img src="https://www.normaeditorial.com/upload/media/albumes/0001/21/c5d840b61ed5a355bccb3484e12a61b77ba9499b.jpeg" alt="portada volumen Tokyo Revengers 04" />
                    <section className="informationProduct">
                        <header>
                            <h3>{product.name}</h3>
                            <div className="rowStars">
                                <span>
                                    {/* starsActive */}
                                    <i><FontAwesomeIcon icon={faStar} className="starsActive"/></i>
                                    <i><FontAwesomeIcon icon={faStar} className="starsActive"/></i>
                                    <i><FontAwesomeIcon icon={faStar} className="starsActive"/></i>
                                    <i><FontAwesomeIcon icon={faStar} className="starsActive"/></i>
                                    <i><FontAwesomeIcon icon={faStar} /></i>
                                </span>
                                {/* <p>({product.comments.length})</p> */}
                            </div>
                            <div className="rowPriceStock">
                                <p className="price">{product.price} €</p>
                                <p>Disponibilidad: <b>{product.stock > 0 ? 'En Stock' : 'Agotado'}</b></p>
                            </div>
                            <button className="btn btn-success" role="button" onClick={addCart}>Añadir a la cesta</button>
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