import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import React, { useState } from "react";

export default function PlatformModalOrders({ data, emails }) {

    const [modalShowData, setModalShowData] = useState(false)

    const handleShowModal = (e) => {
        setModalShowData(true)
    }

    return (
        <>
            <div className="rowTable">
                <p className="tableTrId" title={data._id}>{data._id}</p>
                <p>{data.products.length}</p>
                <p className="btnShowModal"><i onClick={handleShowModal}><FontAwesomeIcon icon={faEye} /></i></p>
            </div>
            {modalShowData && <ModalInfo type="platformOrders" change={setModalShowData} data={data} emails={emails} />}
        </>
    )
    
}