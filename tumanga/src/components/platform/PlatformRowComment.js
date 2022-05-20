import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";

export default function PlatformRowComment({ comment }) {

    const deleteComment = () => {
        alert("eliminando: "+comment._id)
    }

    return (
        <tr>
            <td className="tableTrId" title={comment._id}>{comment._id}</td>
            <td><Moment format="DD/MM/YYYY">{comment.date}</Moment></td>
            <td>{comment.name}</td>
            <td>{comment.message}</td>
            <td>{comment.product_name}</td>
            <td>{comment.user_id}</td>
            <td>{comment.score}</td>
            <td><i onClick={deleteComment}><FontAwesomeIcon icon={faXmark} /></i></td>
        </tr>
    )

}