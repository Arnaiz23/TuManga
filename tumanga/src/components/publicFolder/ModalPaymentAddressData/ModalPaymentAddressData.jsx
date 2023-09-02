import React, { useState } from "react";
import { createAddress } from "services/Address";
import Swal from "sweetalert2";

export default function ModalPaymentAddressData({
  changeLastAddress,
  closeModal,
  changeAddressEmpty,
  closeModalLast,
}) {
  const [newAddress, setNewAddress] = useState({
    name: "",
    number: "",
    floor: "",
    name_person: "",
    location: "",
    telephone: "",
  });

  const handleFormAddress = (e) => {
    e.preventDefault();

    const regexpName = /^[a-zA-Záéíóú ]+$/;
    const regexpAddress = /^[a-zA-Z0-9 ]+$/;
    const regexpNumber = /^[0-9]+$/;
    const regexpPhone = /^[0-9]{9}$/;

    if (
      newAddress.name === "" ||
      newAddress.location === "" ||
      newAddress.name_person === "" ||
      newAddress.telephone === ""
    ) {
      return Swal.fire(
        "Datos no válidos",
        "Debes rellenar todos los campos obligatorios",
        "warning",
      );
    }

    if (!regexpName.test(newAddress.name_person)) {
      return Swal.fire(
        "Nombre",
        "No puede contener números ni caractéres especiales",
        "error",
      );
    }

    if (!regexpAddress.test(newAddress.name)) {
      return Swal.fire(
        "Dirección",
        "No puede contener caractéres especiales",
        "error",
      );
    }

    if (
      (newAddress.floor !== "" && !regexpNumber.test(newAddress.floor)) ||
      (newAddress.number !== "" && !regexpNumber.test(newAddress.number))
    ) {
      return Swal.fire(
        "Datos no válidos",
        "No puede contener letras ni caractéres especiales",
        "error",
      );
    }

    if (!regexpPhone.test(newAddress.telephone)) {
      return Swal.fire(
        "Datos no válidos",
        "Número de teléfono no válido",
        "error",
      );
    }

    createAddress(newAddress).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar crearla",
          "error",
        );
      }
      changeLastAddress(data.allAddress[data.allAddress.length - 1]);
      Swal.fire("Dirección", "Dirección creada con éxito", "success");
      changeAddressEmpty(false);
      closeModalLast(false);
      closeModal(false);
    });
  };

  const changeData = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modalCenter">
      <section>
        <h2>Nueva dirección</h2>
        <form onSubmit={handleFormAddress}>
          <section>
            <div className="formField">
              <label htmlFor="name">
                Nombre{" "}
                <span className="obligatoryFields" title="Campo obligatorio">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name_person"
                onChange={changeData}
              />
            </div>
            <div className="formField">
              <label htmlFor="address">
                Dirección{" "}
                <span className="obligatoryFields" title="Campo obligatorio">
                  *
                </span>
              </label>
              <input
                type="text"
                id="address"
                name="name"
                onChange={changeData}
              />
            </div>
            <div className="formField">
              <label htmlFor="number">Numero</label>
              <input
                type="number"
                id="number"
                name="number"
                onChange={changeData}
              />
            </div>
            <div className="formField">
              <label htmlFor="floor">Piso</label>
              <input
                type="number"
                id="floor"
                name="floor"
                onChange={changeData}
              />
            </div>
            <div className="formField">
              <label htmlFor="location">
                Localidad{" "}
                <span className="obligatoryFields" title="Campo obligatorio">
                  *
                </span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                onChange={changeData}
              />
            </div>
            <div className="formField">
              <label htmlFor="telephone">
                Teléfono{" "}
                <span className="obligatoryFields" title="Campo obligatorio">
                  *
                </span>
              </label>
              <input
                type="number"
                id="telephone"
                name="telephone"
                onChange={changeData}
              />
            </div>
          </section>
          <div className="formButton">
            <button className="btn btn-success">Añadir dirección</button>
          </div>
        </form>
      </section>
    </div>
  );
}
