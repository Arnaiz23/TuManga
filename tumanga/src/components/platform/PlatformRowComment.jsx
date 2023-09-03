import React from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2"

import { formatDateCal } from "@/libs/libDate"
import { deleteCommentAdmin } from "@/services/Admin"

export default function PlatformRowComment({
  comment,
  setCommentsEmpty,
  setComments,
  arrayEmails,
}) {
  const dateFormat = formatDateCal({ date: comment.date })

  const deleteComment = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCommentAdmin(comment._id).then((data) => {
          if (data.message) {
            return Swal.fire(
              "Lo sentimos",
              "Hubo un error al intentar eliminarlo",
              "error",
            )
          }

          Swal.fire(
            "Comentario",
            "Comentario eliminado correctamente",
            "success",
          )

          if (data.allComments.length <= 0) return setCommentsEmpty(true)

          setComments(data.allComments)
        })
      } else {
        Swal.fire("Comentario", "El comentario está a salvo", "success")
      }
    })
  }

  return (
    <tr>
      <td className="tableTrId" title={comment._id}>
        {comment._id}
      </td>
      <td>{dateFormat}</td>
      <td>{comment.name}</td>
      <td>{comment.message}</td>
      <td>{comment.product_name}</td>
      <td title={arrayEmails}>{arrayEmails}</td>
      <td>{comment.score}</td>
      <td>
        <i onClick={deleteComment}>
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </td>
    </tr>
  )
}
