import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ModalPaymentAddress({ modal, change, address, changeModal, addressEmpty }) {

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
                <button className="dataDownClose" onClick={closeModal}><i><FontAwesomeIcon icon={faXmark} /></i> Cerrar</button>
            </div>
            {!addressEmpty
                ? address.map((data, index) =>
                    <div key={data._id}>
                        <div className="row">
                            <input type="radio" id="" />
                            <h4>{data.name_person}</h4>
                            <p>{data.name}, {data.number && data.number + ","} {data.floor && data.floor + ","} {data.location}</p>
                            <p className="editAddress">Editar dirección</p>
                        </div>
                        { address.length === 2 && index < 1 && <div className="linePayment" />}
                    </div>
                )
                : <h3>No hay direcciones</h3>
            }
            <div className="rowEnd">
                <button className="btn btn-success" onClick={addAddress}>Añadir dirección</button>
            </div>
        </div>
    )
}