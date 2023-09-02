import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { createComment } from "services/Comments";
import { getUser } from "services/Users";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import CommentRow from "../CommentRow/CommentRow";

export default function CommentsContainer({
  comments,
  empty,
  change,
  changeEmpty,
}) {
  const [user, setUser] = useState(false);
  const location = useLocation()[0];
  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState({
    message: "",
    product_id: location.split("/")[2],
    score: 0,
    name: "",
  });

  const sendComment = (e) => {
    e.preventDefault();

    if (comment.message === "" || comment.name === "") {
      return Swal.fire(
        "Datos incorrectos",
        "Rellene todos los campos obligatorios",
        "warning",
      );
    }

    createComment(comment).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar crearlo",
          "error",
        );
      }

      change(data.allComments);

      Swal.fire(
        "Comentario",
        "Comentario creado satisfactoriamente",
        "success",
      );

      changeEmpty(false);

      e.target.reset();
    });
  };

  const handleChange = (e) => {
    let data = e.target.value;
    let name = e.currentTarget.name;

    if (e.currentTarget.classList.contains("starsSelect")) {
      data = parseInt(e.currentTarget.control.value);
      name = "score";
    }

    setComment({
      ...comment,
      [name]: data,
    });
  };

  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    getUser().then((data) => {
      if (data.message) {
        return setUser(false);
      }
      setUser(true);
      setUserId(data.userInfo.userFind._id);
    });
  }, []);

  return (
    <div className="containerComments">
      <h3>Comentarios</h3>
      {user && (
        <form onSubmit={sendComment} autoComplete="off">
          <div className="containerCommentData">
            <input
              type="text"
              placeholder="Escribe tu nombre"
              name="name"
              onChange={handleChange}
            ></input>
            <span className="rowStars rowStarsSelect">
              {stars.map((i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    id={`star${6 - i}`}
                    name="score"
                    value={6 - i}
                  />
                  <label
                    htmlFor={`star${6 - i}`}
                    className="starsSelect"
                    onClick={handleChange}
                    value={i}
                  >
                    <i>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </label>
                </React.Fragment>
              ))}
            </span>
          </div>
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe tu comentario..."
            name="message"
            onChange={handleChange}
          ></textarea>
          <div>
            <button className="btn btn-success">Enviar</button>
          </div>
        </form>
      )}
      {empty ? (
        <h3 className="userDataEmpty">No hay comentarios</h3>
      ) : (
        comments.map((comment) => (
          <CommentRow
            comment={comment}
            key={comment._id}
            userId={comment.user_id}
            currentlUser={userId}
            change={change}
            changeEmpty={changeEmpty}
          />
        ))
      )}
    </div>
  );
}
