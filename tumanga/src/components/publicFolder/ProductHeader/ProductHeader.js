import React from "react";
import { api_URL } from "services/config";

export default function ProductHeader({ data }) {
    return (
        <>
            <div className="cardCart">
                <img src={`${api_URL}/image/${data.image}`} alt={`portada de ${data.name}`} />
                <div>
                    <h4>{data.name}</h4>
                    <span className="amountCart">
                        <p>Cant: </p>
                        <p>1</p>
                    </span>
                </div>
            </div>
            <div className="lineCart"></div>
        </>
    )
}