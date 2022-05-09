import React, { useState } from "react";
import { createCard } from "services/Cards";
import Swal from "sweetalert2";

export default function ModalNewCard({ change, closeModal, empty }) {

    const [card, setCard] = useState({
        "card_name": "",
        "expiration_date": "",
        "number_card": ""
    })

    const handleData = (e) => {
        setCard({
            ...card,
            [e.target.name]: e.target.value
        })
    }

    const handleFormAddress = (e) => {
        e.preventDefault()

        const regexpName = /^[a-zA-Z ]+$/
        const regexpDate = /^[0-9]{2}[/]{1}[0-9]{2}$/
        const regexpNumber = /^[0-9]{16}$/
        const today = new Date()
        let year = today.getFullYear().toString()
        let month = today.getMonth()+1

        if(month < 10) month = "0"+month
        year = `${year[2]}${year[3]}`

        if (card.card_name === "" || card.expiration_date === "" || card.number_card === "") {
            return alert("Rellene los campos obligatorios")
        }

        if(!regexpNumber.test(card.number_card)){
            return alert("Número de la tarjeta no válido")
        }

        if(!regexpName.test(card.card_name)){
            return alert("El nombre no puede contener ni números ni caractéres especiales")
        }

        if(!regexpDate.test(card.expiration_date)){
            return alert("La fecha debe tener el formato MM/YY")
        }

        let expiration_date = card.expiration_date.split("/")

        if(expiration_date[1] < year){
            return alert("Debe ser una fecha posterior al día de hoy")
        }else if(expiration_date[1] === year && expiration_date[0] < month){
            return alert("Debe ser una fecha posterior al día de hoy")
        }else if(parseInt(expiration_date[0]) > 12 || parseInt(expiration_date[0]) <= 0){
            return alert("Introduzca una fecha válida")
        }

        createCard(card).then(data => {
            if(data.message) return alert(data.message)

            change(data.allCards)
            Swal.fire(
                'Tarjeta',
                'Nueva tarjeta creada correctamente',
                'success'
            )
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
                        <label htmlFor="card_name">Nombre en la tarjeta <span className="obligatoryFields">*</span></label>
                        <input type="text" id="card_name" name="card_name" onChange={handleData} title="Solo puede contener letras" />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="number_card">Numero de la tarjeta <span className="obligatoryFields">*</span></label>
                        <input type="number" id="number_card" name="number_card" onChange={handleData} title="Tienen que ser 16 números" />
                    </div>
                    <div className="newAddressGroup">
                        <label htmlFor="expiration_date">Fecha de expiración <span className="obligatoryFields">*</span></label>
                        <input type="text" id="expiration_date" name="expiration_date" onChange={handleData} title="Formato MM/YY" />
                    </div>
                </section>
                <input type="submit" className="btn btn-success" value="Crear tarjeta" />
            </form>
        </div>
    )

}