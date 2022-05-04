import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CommentRow({ comment }) {

    const [stars, setStars] = useState([])

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
                <h4>{comment.name || "No tiene nombre"}</h4>
                <p>{comment.date}</p>
            </header>
            <main>
                <div className="rowStars">
                    {
                        stars.map(star => {
                            return <i><FontAwesomeIcon icon={faStar} className={(comment.score >= star) ? "starsActive" : ""} key={star+comment._id} /></i>
                        })
                    }
                </div>
                <p>{comment.message}</p>
            </main>
            {/* Show only in the case if the user is owner */}
            {/* <footer>
                <i><FontAwesomeIcon icon={faTrash} /></i>
            </footer> */}
        </div>
    )
}