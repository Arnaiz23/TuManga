import React, { useState } from "react";

import { api_URL } from "services/config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "wouter";
import { Link } from "wouter";

export default function CardProduct({ product }) {

    const [btnCart, setBtnCart] = useState(true)

    const addCart = () => {
        // alert("Add this product")
        setBtnCart(false)
        setTimeout(() => setBtnCart(true), 500)
    }

    return (
        <div className="card" id="cardTemplate" key={product._id}>
            {/* Create default */}
            {/* <img src={`${api_URL}/image/${product.image}`} alt={`Portada del volumen de ${product.name}`} /> */}
            <Link to={`/product/${product._id}`}>
                {
                    product.image !== null
                        ? (
                            <img src={`${api_URL}/image/${product.image}`} alt={`Portada del volumen de ${product.name}`} />
                        )
                        : (
                            <img src="https://www.normaeditorial.com/upload/media/albumes/0001/21/c5d840b61ed5a355bccb3484e12a61b77ba9499b.jpeg" alt={`Portada del volumen de ${product.name}`} />
                        )
                }
            </Link>
            <footer className="cardFooter">
                <h3>{product.name}</h3>
                <div className="priceContainer">
                    <p className="price">{product.price}€</p>
                    {
                        product.stock > 0
                            ? (<p className="textStock"><i><FontAwesomeIcon icon={faCheck} /></i>STOCK</p>)
                            : (<p className="textStockOut"><i><FontAwesomeIcon icon={faXmark} /></i>AGOTADO</p>)
                    }
                </div>
                <button className={btnCart ? "addCart" : "addCart addCartChecked"} onClick={addCart}><i id="iconCart"><FontAwesomeIcon icon={
                    btnCart ? faShoppingCart : faCheck
                } /></i></button>
            </footer>
        </div>
    )
}