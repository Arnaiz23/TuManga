import React, { useState } from "react";
import { createAddress } from "services/Address";
import Swal from "sweetalert2";

export default function ModalNewAddress({ change, closeModal }) {

    const [address, setAddress] = useState({
        "name": "",
        "number": "",
        "floor": "",
        "name_person": "",
        "location": ""
    })

    const handleData = (e) => {
        setAddress({
            ...address,
            [e.target.name] : e.target.value
        })
    }

    const handleFormAddress = (e) => {
        e.preventDefault()

        if(address.name === "" || address.name_person === "" || address.location === ""){
            return alert("Rellene los campos obligatorios")
        }

        createAddress(address).then(data => {
            if(data.message) return alert(data.message)

            change(data.allAddress)
            Swal.fire(
                'Dirección',
                'Nueva dirección creada correctamente',
                'success'
            )
            closeModal(false)
        })
    }

    return (
        <div className="newAddress">
            <h2>Nueva dirección</h2>
            <form className="newAddressForm" onSubmit={handleFormAddress}>
                <section className="newAddressData">
                    <div className="newAddressGroup">
                        <label htmlFor="name">Nombre de la calle <span className="obligatoryFields">*</span></label>
                        <input type="text" id="name" name="name" onChange={handleData} />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="number">Número</label>
                        <input type="number" id="number" name="number" onChange={handleData} />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="floor">Piso</label>
                        <input type="number" id="floor" name="floor" onChange={handleData} />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="location">Localidad <span className="obligatoryFields">*</span></label>
                        <input type="text" id="location" name="location" onChange={handleData} />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="name_person">Nombre <span className="obligatoryFields">*</span></label>
                        <input type="text" id="name_person" name="name_person" onChange={handleData} />
                    </div>
                </section>
                <input type="submit" className="btn btn-success" value="Crear dirección" />
            </form>
        </div>
    )
}