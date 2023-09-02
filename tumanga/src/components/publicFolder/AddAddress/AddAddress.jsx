import React, { useState } from "react"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ModalInfo from "../ModalInfo/ModalInfo"

export default function AddAddress({ change, empty, type }) {
  const [showModal, setShowModal] = useState(false)

  const addAddress = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="cardNewAddress" onClick={addAddress}>
        <i>
          <FontAwesomeIcon icon={faCirclePlus} />
        </i>
        <h3>Añadir {type}</h3>
      </div>
      {showModal &&
        (type === "dirección" ? (
          <ModalInfo
            change={setShowModal}
            type="newAddress"
            changeAddress={change}
            empty={empty}
          />
        ) : (
          <ModalInfo
            change={setShowModal}
            type="newCard"
            changeCard={change}
            empty={empty}
          />
        ))}
    </>
  )
}
