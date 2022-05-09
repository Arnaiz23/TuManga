import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { createComment } from "services/Comments";
import { getUser } from "services/Users";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import CommentRow from "../CommentRow/CommentRow";

export default function CommentsContainer({ comments, empty, change, changeEmpty }) {

    const [user, setUser] = useState(false)
    const location = useLocation()[0]
    const [userId, setUserId] = useState('')
    const [comment, setComment] = useState({
        "message": "",
        "product_id": location.split("/")[2],
        "score": 0,
        "name": ""
    })

    const sendComment = (e) => {
        e.preventDefault()

        createComment(comment).then(data => {
            if (data.message) return alert(data.message)

            change(data.allComments)

            Swal.fire(
                'Comentario',
                'Comentario creado satisfactoriamente',
                'success'
            )

            changeEmpty(false)

            e.target.reset()
        })
    }

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const stars = [1, 2, 3, 4, 5]

    useEffect(() => {
        getUser().then(data => {
            if (data.message) {
                setUser(false)
            } else {
                setUser(true)
                setUserId(data.userFind._id)
            }
        })
    }, [])

    return (
        <div className="containerComments">
            <h3>Comentarios</h3>
            {user &&
                <form onSubmit={sendComment}>
                    <div className="containerCommentData">
                        <input type='text' placeholder="Escribe tu nombre" name="name" onChange={handleChange}></input>
                        <span className="rowStars rowStarsSelect">
                            {stars.map(i =>
                                <React.Fragment key={i}>
                                    <input type="radio" id={`star${i}`} name="starsScore" />
                                    <label htmlFor={`star${i}`} className="starsSelect" ><i><FontAwesomeIcon icon={faStar} /></i></label>
                                </React.Fragment>
                            )}
                        </span>
                    </div>
                    <textarea id="" cols="30" rows="10" placeholder="Escribe tu comentario..." name="message" onChange={handleChange}></textarea>
                    <div>
                        <button className="btn btn-success">Enviar</button>
                    </div>
                </form>
            }
            {
                empty
                    ? <h3 className="userDataEmpty">No hay comentarios</h3>
                    : (
                        comments.map(comment => <CommentRow comment={comment} key={comment._id} userId={comment.user_id} currentlUser={userId} change={change} changeEmpty={changeEmpty} />)
                    )
            }
        </div>
    )
}