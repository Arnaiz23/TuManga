import React from "react";
import CommentRow from "../CommentRow/CommentRow";

export default function CommentsContainer({ comments }) {

    const sendComment = () => {
        alert("Send comment")
    }
    
    return (
        <div className="containerComments">
            <h3>Comentarios</h3>
            <textarea id="" cols="30" rows="10" placeholder="Escribe tu comentario..."></textarea>
            <div>
                <button className="btn btn-success" role="button" onClick={sendComment}>Enviar</button>
            </div>
            {
                (
                    comments.map(comment => {
                        return <>
                            <div className="lineComments"></div>
                            <CommentRow comment={comment} key={comment._id} />
                            <div className="lineComments"></div>
                        </>
                    })
                )
            }
        </div>
    )
}