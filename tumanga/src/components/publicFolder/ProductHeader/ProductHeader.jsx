import React from "react";
import { api_URL } from "services/config";

export default function ProductHeader({ data, index }) {
    return (
        <>
            <div className="cardCart">
                <img src={`${api_URL}/image/${data.image}`} alt={`portada de ${data.name}`} />
                <div>
                    <h4>{data.name}</h4>
                    <span className="amountCart">
                        <p>Cant: </p>
                        <p>{data.quantity}</p>
                    </span>
                </div>
            </div>
            {index < 2 && <div className="lineCart"></div>}
        </>
    )
}