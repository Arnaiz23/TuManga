import React from "react";
import { api_URL } from "services/config";

export default function RowBillingPayment({
  card,
  index,
  changeBilling,
  cards,
}) {
  const handleChangeRadio = () => {
    changeBilling(card);
  };

  return (
    <div>
      <div className="row">
        <input type="radio" id="" name="card" onChange={handleChangeRadio} />
        <img
          src={`${api_URL}/image/${card.image}`}
          alt={`imagen logo ${card.type}`}
          className="imgBrandCard"
        />
        <p>
          {card.type} que termina en {card.last_4_digits}
        </p>
        <h4>{card.card_name}</h4>
        <p>
          {card.expiration_date.split("-")[1] +
            "/" +
            card.expiration_date.split("-")[0]}
        </p>
      </div>
      {cards.length === 2 && index < 1 && <div className="linePayment"></div>}
    </div>
  );
}
