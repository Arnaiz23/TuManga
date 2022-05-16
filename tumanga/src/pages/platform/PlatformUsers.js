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


                    <div className="modalInformation">
                        <div className="modalCenter">
                            <header>
                                <i className="fa-solid fa-xmark"></i>
                            </header>
                            <main>
                                <div className="modalInfo">
                                    <label htmlFor="id">ID</label>
                                    <p>1</p>
                                </div>
                                <div className="modalInfo">
                                    <label htmlFor="email">EMAIL</label>
                                    <p>admin@admin.com</p>
                                </div>
                                <div className="modalInfo">
                                    <label htmlFor="state">ESTADO</label>
                                    <p>Activo</p>
                                </div>
                                <div className="modalInfo">
                                    <label htmlFor="id">FECHA REGISTRO</label>
                                    <p>11/04/2022</p>
                                </div>
                                <div className="modalInfo">
                                    <label htmlFor="role">ROL</label>
                                    <p>Admin</p>
                                </div>
                                <div className="modalInfo">
                                    <label htmlFor="orders">Nº PEDIDOS</label>
                                    <p>0</p>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )

}