import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RowBillingPayment from "components/publicFolder/RowBillingPayment/RowBillingPayment";
import React from "react";

export default function ModalPaymentBilling({
  modal,
  change,
  cards,
  changeModal,
  changeBilling,
}) {
  const closeModal = () => {
    change(false);
  };

  const showModal = () => {
    changeModal(true);
  };

  return (
    <div className={modal ? "dataDown  dataDownShow" : "dataDown"}>
      <div className="row">
        <h2>Mis tarjetas de credito</h2>
        <button className="dataDownClose" onClick={closeModal}>
          <i>
            <FontAwesomeIcon icon={faXmark} />
          </i>{" "}
          Cerrar
        </button>
      </div>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <RowBillingPayment
            key={card._id}
            card={card}
            index={index}
            changeBilling={changeBilling}
            cards={cards}
          />
        ))
      ) : (
        <h3 className="emptyDataPayment">No hay tarjetas</h3>
      )}
      <div className="rowEnd">
        <button className="btn btn-success" onClick={showModal}>
          Añadir tarjeta
        </button>
      </div>
    </div>
  );
}
