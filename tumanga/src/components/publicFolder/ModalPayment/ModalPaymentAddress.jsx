import React from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import RowAddressPayment from "../RowAddressPayment/RowAddressPayment"

export default function ModalPaymentAddress({
  modal,
  change,
  address,
  changeModal,
  addressEmpty,
  changeAddress,
}) {
  const closeModal = () => {
    change(false)
  }

  const addAddress = () => {
    changeModal(true)
  }

  return (
    <div className={modal ? "dataDown  dataDownShow" : "dataDown"}>
      <div className="row">
        <h2>Usadas más recientes</h2>
        <button className="dataDownClose" onClick={closeModal}>
          <i>
            <FontAwesomeIcon icon={faXmark} />
          </i>{" "}
          Cerrar
        </button>
      </div>
      {!addressEmpty ? (
        address.map((data, index) => (
          <RowAddressPayment
            key={data._id}
            data={data}
            index={index}
            address={address}
            changeAddress={changeAddress}
          />
        ))
      ) : (
        <h3 className="emptyDataPayment">No hay direcciones</h3>
      )}
      <div className="rowEnd">
        <button className="btn btn-success" onClick={addAddress}>
          Añadir dirección
        </button>
      </div>
    </div>
  )
}
