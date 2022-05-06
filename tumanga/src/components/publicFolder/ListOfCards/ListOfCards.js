import useUser from "hooks/useUser";
import React, { useState } from "react";
import { getUserCards } from "services/Cards";
import CardItem from "../CardItem/CardItem";

export default function ListOfCards() {

    const { loading } = useUser()
    const [cards, setCards] = useState([])
    const [error, setError] = useState('')
    const [cardsEmpty, setCardsEmpty] = useState(false)

    useState(() => {

        getUserCards().then(data => {
            if (data.message) {
                setError(data.message)
                setCardsEmpty(true)
                return
            }

            setCards(data.cards)

        })

    }, [])

    return (
        <>
            <div className="containerGrid">
                {
                    loading
                        ? <h1>Cargando...</h1>
                        : (
                            cardsEmpty
                                ? <h3 className="userDataEmpty">{error}</h3>
                                : (
                                    cards.map(card => <CardItem data={card} key={card._id} />)
                                )
                        )
                }
            </div>
        </>
    )

}