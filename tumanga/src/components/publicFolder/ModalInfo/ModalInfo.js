import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ModalAdddress from "../ModalAddress/ModalAddress";
import ModalNewAddress from "../ModalNewAddress/ModalNewAddress";
import ModalNewCard from "../ModalNewCard/ModalNewCard";
import ModalPaymentAddressData from "../ModalPaymentAddressData/ModalPaymentAddressData";
import ModalPaymentBillingData from "../ModalPaymentBillingData/ModalPaymentBillingData";

export default function ModalInfo({ change, data, type, changeAddress, changeCard, empty, changeLastAddress, changeLastBilling }) {

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
                {
                    type === "newCard" && <ModalNewCard change={changeCard} closeModal={change} empty={empty} />
                }
                {
                    type === "paymentAddress" && <ModalPaymentAddressData changeLastAddress={changeLastAddress} closeModal={change} />
                }
                {
                    type === "paymentBilling" && <ModalPaymentBillingData changeLastBilling={changeLastBilling} closeModal={change} />
                }
            </div>
        </div>
    )
}