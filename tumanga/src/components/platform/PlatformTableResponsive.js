import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import React, { useState } from "react";

export default function PlatformTableResponsive({ titles, users, showModalData }) {


    const [modalShowData, setModalShowData] = useState(false)

    const handleShowModal = (e) => {
        setModalShowData(true)
    }

    return (
        <>
            <div className="containerTableResponsive">
                <header>
                    {titles.map(title => <b key={title}>{title}</b>)}
                </header>
                <main>
                    {users.map(user => {
                        return (
                            <React.Fragment key={user._id}>
                                <div className="rowTable">
                                    <p className="tableTrId" title={user._id}>{user._id}</p>
                                    <p className="tableTrId" title={user.email}>{user.email}</p>
                                    <p className="btnShowModal"><i onClick={handleShowModal}><FontAwesomeIcon icon={faEye} /></i></p>
                                    <p className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></p>
                                </div>
                                {modalShowData && <ModalInfo type="platformUsers" change={setModalShowData} data={user} />}
                            </React.Fragment>
                        )
                    })}
                </main>
            </div>
        </>
    )

}