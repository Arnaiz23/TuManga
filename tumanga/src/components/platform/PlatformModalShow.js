import React, { useState } from "react";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import { Link } from "wouter";

export default function PlatformModalShow({ user }) {

    const [modalShowData, setModalShowData] = useState(false)

    const handleShowModal = (e) => {
        setModalShowData(true)
    }

    return (
        <>
            <div className="rowTable">
                <p className="tableTrId" title={user._id}>{user._id}</p>
                <p className="tableTrId" title={user.email}>{user.email}</p>
                <p className="btnShowModal"><i onClick={handleShowModal}><FontAwesomeIcon icon={faEye} /></i></p>
                <Link to={`/platform/user/${user._id}`}><p className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></p></Link>
            </div>
            {modalShowData && <ModalInfo type="platformUsers" change={setModalShowData} data={user} />}
        </>
    )

}