import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ModalAdddress from "../ModalAddress/ModalAddress";
import ModalNewAddress from "../ModalNewAddress/ModalNewAddress";

export default function ModalInfo({ change, data, type, changeAddress, empty }) {

    const closeModal = () => {
        change(false)
    }
    
    return (
        <div className="modalInformation showModal">
            <div className="modalCenter">
                <header>
                    <i onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></i>
                </header>
                {
                    type === "address" && <ModalAdddress data={data} />
                }
                {
                    type === "newAddress" && <ModalNewAddress change={changeAddress} closeModal={change} empty={empty} />
                }
            </div>
        </div>
    )
}