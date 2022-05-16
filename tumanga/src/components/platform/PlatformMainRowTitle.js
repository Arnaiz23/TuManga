import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PlatformMainRowTitle({ title, nameAdd, changeModal }) {

    const handleChangeModal = () => {
        changeModal(true)
    }

    return (
        <div className="rowAdminTitle">
            <h2>{title}</h2>
            <div className="containerAdminOptions">
                <form>
                    <i className="iconSearch"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleChangeModal} /></i>
                    <input type="text" name="" id="" className="inputSearchAdmin" placeholder={`Busca un ${nameAdd}...`} />
                </form>
                <button className="btn btn-success">Añadir {nameAdd}</button>
            </div>
        </div>
    )

}