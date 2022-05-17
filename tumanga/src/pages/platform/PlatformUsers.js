import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformMainRowTitle from "components/platform/PlatformMainRowTitle";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import PlatformSearchModal from "components/platform/PlatformSearchModal";
import PlatformTable from "components/platform/PlatformTable";
import PlatformTableResponsive from "components/platform/PlatformTableResponsive";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "services/Admin";

const TITLES_TABLE = ["id", "email", "estado", "fecha registro", "rol", "nºpedidos", ""]
const TITLES_TABLE_RESPONSIVE = ["id", "email", "show", "edit"]

export default function PlatformUsers() {

    const [modalOpen, setModalOpen] = useState(false)
    const [usersEmpty, setUsersEmpty] = useState(false)
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)

    let fecthDataUsers = () => {
        setLoading(true)
        getAllUsers().then(data => {
            if (data.message) {
                setUsersEmpty(true)
                setLoading(false)
                return
            }
            setUsersData(data.users)
            setLoading(false)

        })
    }

    useEffect(() => {
        fecthDataUsers()
    }, [])

    return (
        <div className="gridAdmin">
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformHeader />
            <main className="adminMain">
                <div className="containerDataAdmin">
                    <PlatformMainRowTitle title="Usuarios" nameAdd="usuario" changeModal={setModalOpen} />
                    <PlatformSearchModal changeModal={setModalOpen} modal={modalOpen} title="usuario" />
                    {loading
                        ? <h2>Cargando...</h2>
                        : (
                            <>
                                <PlatformTable titles={TITLES_TABLE} users={usersData} />
                                <PlatformTableResponsive titles={TITLES_TABLE_RESPONSIVE} users={usersData} />
                            </>
                        )
                    }

                </div>
            </main >
        </div >
    )

}