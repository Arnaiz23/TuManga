import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import { deleteUserCard } from "@/services/Cards";
import { apiURL } from "@/services/config";

export default function CardItem({ data, empty, change }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    let date = data.expiration_date.split("-");
    let month = date[1];
    let year = date[0];

    year = month + "/" + year[2] + year[3];
    setDate(year);
  }, []);

  const deleteCard = () => {
    deleteUserCard(data._id).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar eliminarla",
          "error",
        );
      }

      change(data.cards);
      Swal.fire("Tarjeta", "Tarjeta eliminada correctamente", "success");
      if (data.cards.length === 0) empty(true);
    });
  };

  return (
    <>
      <div className="cardTarget">
        <header>
          <img
            src={`${apiURL}/image/${data.image}`}
            alt={`imagen logo ${data.type}`}
            className="imgBrandCard"
          />
          <h3>{data.type}</h3>
        </header>
        <section>
          <h4>{data.name}</h4>
          <p>{date}</p>
          <p>{data.card_name}</p>
        </section>
        <footer>************{data.last_4_digits}</footer>
        <i onClick={deleteCard}>
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </div>
    </>
  );
}
