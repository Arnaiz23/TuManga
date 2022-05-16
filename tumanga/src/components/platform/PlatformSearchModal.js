import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlatformSearchModal({ changeModal, modal, title }) {

    const handleChangeModal = () => {
        changeModal(false)
    }

    return (
        <div className={modal ? "modalSearchAdmin modalSearchAdminShow" : "modalSearchAdmin"}>
            <h3>Búsqueda:</h3>
            <form>
                <input type="text" name="" id="" className="inputSearchAdminModal"
                    placeholder={`Busca un ${title}...`} />
                <input type="submit" value="Buscar" className="btn btn-primary" />
            </form>
            <i className="iconCloseModal" onClick={handleChangeModal}><FontAwesomeIcon icon={faXmark} /></i>
        </div>
    )

}