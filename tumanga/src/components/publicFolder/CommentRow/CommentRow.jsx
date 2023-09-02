import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteUserComment } from "services/Comments";
import Swal from "sweetalert2";
import Moment from "react-moment";
import "moment/locale/es";

export default function CommentRow({
  comment,
  userId,
  currentlUser,
  change,
  changeEmpty,
}) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let stars2 = [];
    for (let i = 1; i <= 5; i++) {
      stars2.push(i);
    }
    setStars(stars2);
  }, []);

  const deleteComment = () => {
    deleteUserComment(comment._id).then((data) => {
      change(data.productComments);
      Swal.fire("Comentario", "Comentario eliminado correctamente", "success");

      if (data.productComments.length === 0) changeEmpty(true);
    });
  };

  return (
    <>
      <div className="lineComments"></div>
      <div className="row">
        <header>
          <h4>{comment.name || "No tiene nombre"}</h4>
          <p>
            <Moment format="D/MM/YYYY">{comment.date}</Moment>
          </p>
        </header>
        <section>
          <div className="rowStars">
            {stars.map((star) => {
              return (
                <i key={star + comment._id}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={comment.score >= star ? "starsActive" : ""}
                  />
                </i>
              );
            })}
          </div>
          <p>{comment.message}</p>
        </section>
        {/* Show only in the case if the user is owner */}
        {currentlUser === userId && (
          <footer>
            <i onClick={deleteComment}>
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </footer>
        )}
      </div>
      <div className="lineComments"></div>
    </>
  );
}
