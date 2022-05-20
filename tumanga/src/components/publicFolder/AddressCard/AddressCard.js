import React, { useState } from "react";
import { deleteUserAddress } from "services/Address";
import Swal from "sweetalert2";
import ModalInfo from "../ModalInfo/ModalInfo";

export default function AddressCard({ data, change, empty }) {

    const [showModal, setShowModal] = useState(false)

    const deleteAddress = () => {
        deleteUserAddress(data._id).then(data => {
            if (data.message) {
                return alert(data.message)
            }

            Swal.fire(
                'Eliminado',
                'La dirección se ha eliminado con éxito',
                'success'
            )
            change(data.newAddress)
            if (data.newAddress.length === 0) empty(true)
        })
    }

    const editAddress = () => {
        setShowModal(true)
    }

    return (
        <div className="cardMac">
            <header>
                <span></span><span></span><span></span>
            </header>
            <section>
                <h3>{data.name_person}</h3>
                <div className="containerAddressData">
                    <h4>{data.name}</h4>
                    <h4>{data.telephone}</h4>
                </div>
                <div className="containerAddressInfo">
                    <p>{data.number}</p>
                    <p>{data.floor}</p>
                </div>
                <div className="containerAddressActions">
                    <p onClick={editAddress}>Editar</p>
                    <div className="lineHorizontal"></div>
                    <p onClick={deleteAddress}>Eliminar</p>
                </div>
            </section>
            {showModal && <ModalInfo change={setShowModal} data={data} type="address" changeAddress={change} />}
        </div>
    )
}