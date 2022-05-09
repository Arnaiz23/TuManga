import React from "react";

export default function RowOrderProduct({ data }) {
    return (
        <div className="row">
            <img src="./assets/images/tokyorevnegers4.jpeg" alt="imagen portada Tokyo Revengers 04" />
            <div className="contentShopping">
                <h4 className="titleBlue">Tokyo Revengers 04</h4>
                <div>
                    <p>Cantidad: 1</p>
                    <p>Precio: 15€</p>
                </div>
            </div>
            <span>
                <i className="fa-solid fa-rectangle-xmark"></i>
            </span>
        </div>
    )
}