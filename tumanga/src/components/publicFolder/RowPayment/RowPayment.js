import useGetDataPayment from "hooks/useGetDataPayment";
import React, { useEffect, useState } from "react";
import { api_URL } from "services/config";
import ModalPaymentAddress from "../ModalPayment/ModalPaymentAddress";
import ModalPaymentBilling from "../ModalPayment/ModalPaymentBilling/ModalPaymentBilling";

export default function RowPayment({ type, changeModal, changeAddress, lastAddress, changeBilling, lastBilling }) {

    // ! Peticion direcciones
    const [modalOpen, setModalOpen] = useState(false)
    const { address, billing, loadingAddress, loadingBilling } = useGetDataPayment()
    /* const [ lastAddress, setLastAddress ] = useState({})
    const [ lastbilling, setLastBilling ] = useState({}) */

    useEffect(() => {
        if(address.length > 0 && type === "address") changeAddress(address[0])
        if(billing.length > 0 && type === "billing") changeBilling(billing[0])
    },[address])

    const openModal = () => {
        setModalOpen(true)
    }

    return (
        <>
            {type === "address" &&
                <>
                    <div className="row">
                        <h2>1</h2>
                        <h3>Dirección de envío</h3>
                        {loadingAddress && address.length === 0
                            ? <h3>Cargando...</h3>
                            : (
                                address.length > 0
                                    ? (
                                        <div className="col">
                                            <h4>{lastAddress.name_person}</h4>
                                            <p>{lastAddress.name}</p>
                                            {/* <h4>{address[0].name_person}</h4>
                                            <p>{address[0].name}</p> */}
                                        </div>
                                    )
                                    : (
                                        <div className="col">
                                            <h4>Este usuario no tiene direcciones</h4>
                                        </div>
                                    )
                            )
                        }
                        <p className="changeData" onClick={openModal}>Cambiar</p>
                    </div>
                    <ModalPaymentAddress modal={modalOpen} change={setModalOpen} address={address} changeModal={changeModal} />
                </>
            }
            {type === "billing" &&
                <>
                    <div className="row">
                        <h2>2</h2>
                        <h3>Método de pago</h3>
                        {loadingBilling && billing.length === 0
                            ? <h3>Cargando...</h3>
                            : (
                                billing.length > 0
                                    ? (
                                        <div className="row">
                                            <img src="https://mecen.es/wp-content/uploads/2020/04/cc-mastercard.png" alt="imagen logo Mastercard" className="imgBrandCard" />
                                            {/* <img src={`${api_URL}/image/${billing[0].image}`} alt={`imagen logo ${billing[0].type}`} className="imgBrandCard" /> */}
                                            <p><b>{lastBilling.type}</b> que termina en <b>{lastBilling.last_4_digits}</b></p>
                                        </div>
                                    )
                                    : (
                                        <div className="row">
                                            <h4>Este usuario no tiene tarjetas</h4>
                                        </div>
                                    )
                            )
                        }
                        <p className="changeData" onClick={openModal}>Cambiar</p>
                    </div>
                    <ModalPaymentBilling modal={modalOpen} change={setModalOpen} cards={billing} changeModal={changeModal} />
                </>
            }
        </>
    )

}