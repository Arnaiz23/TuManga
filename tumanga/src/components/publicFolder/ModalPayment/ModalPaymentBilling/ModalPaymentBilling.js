import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ModalPaymentBilling({ modal, change, cards }) {

    const closeModal = () => {
        change(false)
    }

    return (
        <div className={modal ? "dataDown  dataDownShow" : "dataDown"}>
            <div className="row">
                <h2>Mis tarjetas de credito</h2>
                <button className="dataDownClose" onClick={closeModal}><i><FontAwesomeIcon icon={faXmark} /></i> Cerrar</button>
            </div>
            {cards.length > 0
                ? (
                    cards.map((card, index) =>
                        <div key={card._id}>
                            <div className="row">
                                <input type="radio" id="" />
                                <img src="https://mecen.es/wp-content/uploads/2020/04/cc-mastercard.png" alt="imagen logo Mastercard" className="imgBrandCard" />
                                <p>{card.type} que termina en {card.last_4_digits}</p>
                                <h4>{card.card_name}</h4>
                                <p>{card.expiration_date.split("-")[1] + "/" + card.expiration_date.split("-")[0]}</p>
                            </div>
                            {cards.length === 2 && index < 1 && <div className="linePayment"></div>}
                        </div>
                    )
                )
                : <h3>No hay tarjetas</h3>
            }
            <div className="rowEnd">
                <button className="btn btn-success">Añadir tarjeta</button>
            </div>
        </div>
    )
}