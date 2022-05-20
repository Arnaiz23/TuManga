import { faEye, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import React, { useState } from "react";

export default function PlatformRowCommentsResponsive({ comment }) {

    const [modalShowData, setModalShowData] = useState(false)

    const handleShowDetail = () => {
        setModalShowData(true)
    }

    const deleteComment = () => {
        alert("eliminando: "+comment._id)
    }

    return (
        <>
            <div className="rowTable">
                <p className="tableTrId" title={comment._id}>{comment._id}</p>
                <p className="tableTrId" title={comment.product_name}>{comment.product_name}</p>
                <p className="btnShowModal"><i onClick={handleShowDetail}><FontAwesomeIcon icon={faEye} /></i></p>
                <p className="btnShowModal"><i onClick={deleteComment}><FontAwesomeIcon icon={faXmark} /></i></p>
            </div>
            {modalShowData && <ModalInfo type="platformComments" change={setModalShowData} data={comment} />}
        </>
    )

}