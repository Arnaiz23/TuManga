import React from "react";
import { api_URL } from "services/config";

export default function RowOrderProduct({ data }) {
    return (
        <div className="row">
            <img src={`${api_URL}/image/${data.image}`} alt={`imagen portada ${data.name}`} />
            <div className="contentShopping">
                <h4 className="titleBlue">{data.name}</h4>
                <div>
                    <p>Cantidad: {data.quantity}</p>
                    <p>Precio: {data.total_price}€</p>
                </div>
            </div>
            <span>
                <i className="fa-solid fa-rectangle-xmark"></i>
            </span>
        </div>
    )
}