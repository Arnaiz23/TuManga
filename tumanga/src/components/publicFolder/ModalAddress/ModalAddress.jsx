import React, { useState } from "react"
import Swal from "sweetalert2"

import { updateUserAddress } from "@/services/Address"

export default function ModalAdddress({ data, changeAddress, closeModal }) {
  const [editAddress, setEditAddress] = useState({
    name: data.name,
    number: data.number,
    floor: data.floor,
    name_person: data.name_person,
    location: data.location,
  })

  const handleChangeData = (e) => {
    setEditAddress({
      ...editAddress,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (editAddress.floor === undefined) editAddress.floor = ""
    if (editAddress.number === undefined) editAddress.number = ""
    updateUserAddress(data._id, editAddress).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar actualizarla",
          "error",
        )
      }

      changeAddress(data.allAddress)
      Swal.fire("Dirección", "Dirección actualizada correctamente", "success")
      closeModal(false)
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmitForm} className="formAddress">
        <section>
          <div className="modalInfo newAddressGroup">
            <label htmlFor="email">Nombre calle</label>
            <input
              type="text"
              value={editAddress.name}
              onChange={handleChangeData}
              name="name"
            />
          </div>
          <div className="modalInfo newAddressGroup">
            <label htmlFor="state">Número</label>
            <input
              type="number"
              value={editAddress.number}
              onChange={handleChangeData}
              name="number"
            />
          </div>
          <div className="modalInfo newAddressGroup">
            <label htmlFor="id">Piso</label>
            <input
              type="number"
              value={editAddress.floor}
              onChange={handleChangeData}
              name="floor"
            />
          </div>
          <div className="modalInfo newAddressGroup">
            <label htmlFor="orders">Localidad</label>
            <input
              type="text"
              value={editAddress.location}
              onChange={handleChangeData}
              name="location"
            />
          </div>
          <div className="modalInfo newAddressGroup">
            <label htmlFor="role">Nombre</label>
            <input
              type="text"
              value={editAddress.name_person}
              onChange={handleChangeData}
              name="name_person"
            />
          </div>
        </section>
        <button className="btn btn-success">Editar</button>
      </form>
    </section>
  )
}
