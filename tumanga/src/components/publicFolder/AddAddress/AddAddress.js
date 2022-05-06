import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ModalInfo from "../ModalInfo/ModalInfo";

export default function AddAddress({ change }) {

    const [showModal, setShowModal] = useState(false)

    const addAddress = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className="cardNewAddress" onClick={addAddress}>
                <i><FontAwesomeIcon icon={faCirclePlus} /></i>
                <h3>Añadir dirección</h3>
            </div>
            {showModal && <ModalInfo change={setShowModal} type="newAddress" changeAddress={change} />}
        </>
    )
}