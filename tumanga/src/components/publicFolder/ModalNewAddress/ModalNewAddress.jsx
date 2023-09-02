import React, { useState } from "react"
import Swal from "sweetalert2"

import { createAddress } from "@/services/Address"

export default function ModalNewAddress({ change, closeModal, empty }) {
  const [address, setAddress] = useState({
    name: "",
    number: "",
    floor: "",
    name_person: "",
    location: "",
    telephone: "",
  })

  const handleData = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormAddress = (e) => {
    e.preventDefault()

    const regexpPhone = /^[0-9]{9}$/

    if (
      address.name === "" ||
      address.name_person === "" ||
      address.location === "" ||
      address.telephone === ""
    ) {
      return Swal.fire(
        "Datos erróneos",
        "Debes rellenar todos los datos obligatorios",
        "warning",
      )
    }

    if (!regexpPhone.test(address.telephone)) {
      return Swal.fire(
        "Datos erróneos",
        "Número de teléfono no válido",
        "error",
      )
    }

    createAddress(address).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar crearla",
          "error",
        )
      }

      change(data.allAddress)
      Swal.fire("Dirección", "Nueva dirección creada correctamente", "success")
      closeModal(false)
      empty(false)
    })
  }

  return (
    <div className="newAddress">
      <h2>Nueva dirección</h2>
      <form className="newAddressForm" onSubmit={handleFormAddress}>
        <section className="newAddressData">
          <div className="newAddressGroup">
            <label htmlFor="name">
              Nombre de la calle <span className="obligatoryFields">*</span>
            </label>
            <input type="text" id="name" name="name" onChange={handleData} />
          </div>
          <div className="newAddressGroup">
            <label htmlFor="number">Número</label>
            <input
              type="number"
              id="number"
              name="number"
              onChange={handleData}
            />
          </div>
          <div className="newAddressGroup">
            <label htmlFor="floor">Piso</label>
            <input
              type="number"
              id="floor"
              name="floor"
              onChange={handleData}
            />
          </div>
          <div className="newAddressGroup">
            <label htmlFor="location">
              Localidad <span className="obligatoryFields">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              onChange={handleData}
            />
          </div>
          <div className="newAddressGroup">
            <label htmlFor="name_person">
              Nombre <span className="obligatoryFields">*</span>
            </label>
            <input
              type="text"
              id="name_person"
              name="name_person"
              onChange={handleData}
            />
          </div>
          <div className="newAddressGroup">
            <label htmlFor="telephone">
              Número de teléfono <span className="obligatoryFields">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              onChange={handleData}
            />
          </div>
        </section>
        <input
          type="submit"
          className="btn btn-success"
          value="Crear dirección"
        />
      </form>
    </div>
  )
}
