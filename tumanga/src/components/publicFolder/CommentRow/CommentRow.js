import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CommentRow({ comment }) {

    console.log(comment);

    const [stars, setStars] = useState([])

    // ! Modificar lo que se devuelve para que tenga los datos exactos que quiero

    useEffect(() => {
        let stars2 = []
        for(let i = 1; i <= 5; i++){
            stars2.push(i)
        }
        setStars(stars2)
    }, [])

    return (
        <div className="row">
            <header>
                <h4>Adrián {comment.user_id}</h4>
                <p>{comment.date}</p>
            </header>
            <main>
                <div className="rowStars">
                    {
                        stars.map(star => {
                            return <i><FontAwesomeIcon icon={faStar} className={(comment.score >= star) ? "starsActive" : ""} /></i>
                        })
                    }
                    {/* <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                    <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                    <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                    <i><FontAwesomeIcon icon={faStar} className="starsActive" /></i>
                    <i><FontAwesomeIcon icon={faStar} /></i> */}
                </div>
                <p>{comment.message}</p>
            </main>
            <footer>
                <i><FontAwesomeIcon icon={faTrash} /></i>
            </footer>
        </div>
    )
}