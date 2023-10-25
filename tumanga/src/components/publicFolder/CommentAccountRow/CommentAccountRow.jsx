import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2"

import { deleteUserComment } from "@/services/Comments"

export default function CommentAccountRow({ data, change, empty }) {
  const date = new Date(data.date)
  const formatDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date)

  const deleteComment = () => {
    deleteUserComment(data._id).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar eliminarlo",
          "error",
        )
      }

      change(data.comments)
      Swal.fire("Comentario", "Comentario eliminado correctamente", "success")
      if (data.comments.length === 0) empty(true)
    })
  }

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="comment">
      <header className="row">
        <div className="rowStars">
          <div className="rowStars">
            {stars.map((i) =>
              i <= data.score ? (
                <i key={`${i}${data._id}`}>
                  <FontAwesomeIcon icon={faStar} className="starsActive" />
                </i>
              ) : (
                <i key={`${i}${data._id}`}>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              ),
            )}
          </div>
        </div>
        <h3>{data.product_name}</h3>
        <i className="deleteComment" onClick={deleteComment}>
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </header>
      <main className="row">
        <p>{data.message}</p>
        <p>{formatDate}</p>
      </main>
    </div>
  )
}
