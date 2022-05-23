import React, { useState } from "react";
import { createCard } from "services/Cards";
import Swal from "sweetalert2";

export default function ModalPaymentBillingData({ changeLastBilling, closeModal, changeBillingEmpty, closeModalLast }){

    const [newCard, setNewCard] = useState({
        "card_name" : "",
        "expiration_date" : "",
        "number_card" : ""
    })

    const handleNewCard = (e) => {
        e.preventDefault()

        const regexpName = /^[a-zA-Z ]+$/
        const regexpNumber = /^[0-9]{16}$/
        const regexpDate = /^[0-9]{2}\/[0-9]{2}$/

        let date = new Date()
        let year = date.toDateString().split(" ")[3]
        let month = date.getMonth()
        if(month < 10) month = '0'+month
        year = year.substring(2)

        if(newCard.card_name === "" || newCard.expiration_date === "" || newCard.number_card === ""){
            return Swal.fire(
                'Error',
                'Debes rellenar todos los datos',
                'warning'
            )
        }

        if(!regexpName.test(newCard.card_name)){
            return Swal.fire(
                'Nombre no válido',
                'No puede contener números ni caractéres especiales',
                'error'
            )
        }

        if(!regexpNumber.test(newCard.number_card)){
            return Swal.fire(
                'Número de tarjeta no válido',
                'Debe contener 16 números',
                'error'
            )
        }

        if(!regexpDate.test(newCard.expiration_date)){
            return Swal.fire(
                'Fecha no válida',
                'El formato de la fecha debe ser MM/YY',
                'error'
            )
        }

        let expiration = newCard.expiration_date.split("/")

        if(Number(expiration[1]) < Number(year)){
            return Swal.fire(
                'Fecha no válida',
                'Introduzca una fecha posterior a la actual',
                'error'
            )
        }else if(Number(expiration[1]) === Number(year) && Number(expiration[0]) < Number(month) ){
            return Swal.fire(
                'Fecha no válida',
                'Introduzca una fecha posterior a la actual',
                'error'
            )
        }else if(Number(expiration[0]) > 12 || Number(expiration[0]) < 0){
            return Swal.fire(
                'Fecha no válida',
                'Mes inválido',
                'error'
            )
        }
        
        createCard(newCard).then(data => {
            if(data.message) {
                return Swal.fire(
                    'Lo sentimos',
                    'Hubo un error al intentar crearla',
                    'error'
                )
            }
            changeLastBilling(data.allCards[data.allCards.length -1 ])
            changeBillingEmpty(false)
            Swal.fire(
                'Tarjeta',
                'Tarjeta creada con éxito',
                'success'
            )
            closeModalLast(false)
            closeModal(false)
        })
    }

    const handleChangeData = (e) => {
        setNewCard({
            ...newCard,
            [e.target.name] : e.target.value
        })
    }
    
    return (
        <div className="modalCenter">
            <section>
                <h2>Nueva tarjeta</h2>
                <form onSubmit={handleNewCard}>
                    <section>
                        <div className="formField">
                            <label htmlFor="name">Nombre <span className="obligatoryFields" title="Campo obligatorio">*</span></label>
                            <input type="text" id="name" name="card_name" onChange={handleChangeData} />
                        </div>
                        <div className="formField">
                            <label htmlFor="number">Numero de la tarjeta <span className="obligatoryFields" title="Campo obligatorio">*</span></label>
                            <input type="number" id="number" name="number_card" onChange={handleChangeData} />
                        </div>
                        <div className="formField">
                            <label htmlFor="expiration_date">Fecha de expiración <span className="obligatoryFields" title="Campo obligatorio">*</span></label>
                            <input type="text" id="expiration_date" name="expiration_date" onChange={handleChangeData} />
                        </div>
                    </section>
                    <div className="formButton">
                        <button className="btn btn-success">Añadir tarjeta</button>
                    </div>
                </form>
            </section>
        </div>
    )
}