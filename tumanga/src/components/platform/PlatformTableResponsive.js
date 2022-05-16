import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PlatformTableResponsive({ titles, users }) {

    return (
        <div className="containerTableResponsive">
            <header>
                {titles.map(title => <b key={title}>{title}</b>)}
            </header>
            <main>
                {users.map(user => {
                    return (
                        <div className="rowTable" key={user._id}>
                            <p>{user._id}</p>
                            <p>{user.email}</p>
                            <p className="btnShowModal"><i><FontAwesomeIcon icon={faEye} /></i></p>
                            <p className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></p>
                        </div>
                    )
                })}
            </main>
        </div>
    )

}