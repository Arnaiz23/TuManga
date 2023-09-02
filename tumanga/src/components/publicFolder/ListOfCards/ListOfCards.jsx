import React, { useState } from "react";

import useUser from "@/hooks/useUser";
import { getUserCards } from "@/services/Cards";
import CardItem from "@components/publicFolder/CardItem/CardItem";
import Spinner from "@components/publicFolder/Spinner/Spinner";
import AddAddress from "@components/publicFolder/AddAddress/AddAddress";

export default function ListOfCards() {
  const { loading } = useUser();
  const [cards, setCards] = useState([]);
  const error = useState("No tienes tarjetas")[0];
  const [cardsEmpty, setCardsEmpty] = useState(false);

  useState(() => {
    getUserCards().then((data) => {
      if (data.message) {
        setCardsEmpty(true);
        return;
      }

      setCards(data.cards);
    });
  }, []);

  return (
    <>
      <div className="containerGrid">
        <AddAddress type={"tarjeta"} change={setCards} empty={setCardsEmpty} />
        {loading ? (
          <Spinner />
        ) : cardsEmpty ? (
          <h3 className="userDataEmpty">{error}</h3>
        ) : (
          cards.map((card) => (
            <CardItem
              data={card}
              key={card._id}
              change={setCards}
              empty={setCardsEmpty}
            />
          ))
        )}
      </div>
    </>
  );
}
