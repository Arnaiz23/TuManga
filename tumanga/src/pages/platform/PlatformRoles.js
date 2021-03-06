import PlatformHeader from "components/platform/PlatformHeader";
import PlatformMainRowTitle from "components/platform/PlatformMainRowTitle";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import PlatformSearchModal from "components/platform/PlatformSearchModal";
import PlatformTableResponsiveRoles from "components/platform/PlatformTableResponsiveRoles";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Spinner from "components/publicFolder/Spinner/Spinner";
import React, {  useEffect, useState } from "react";
import { getAllRoles } from "services/Admin";

const TABLE_TITLES_RESPONSIVE = ["id", "nombre", "editar"]

export default function PlatformRoles() {

    const [loading, setLoading] = useState(false)
    const [roles, setRoles] = useState([])
    const [rolesEmpty, setRolesEmpty] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    let fetchRoles = () => {
        setLoading(true)
        getAllRoles().then(data => {
            setRoles(data.roles)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchRoles()
    }, [])

    return (
        <div className="gridAdmin">
            <PlatformHeader />
            <PlatformNav />
            <PlatformNavResponsive />
            <main className="adminMain">
                <div className="containerDataAdmin">

                    <PlatformMainRowTitle title="Roles" nameAdd="Rol" changeModal={setModalOpen}  setDataData={setRoles} link="role" type={"roles"} setDataEmpty={setRolesEmpty} />
                    <PlatformSearchModal setDataData={setRoles} setDataEmpty={setRolesEmpty} changeModal={setModalOpen} modal={modalOpen} title="Rol" type="roles" />

                    {loading
                        ? <Spinner />
                        : (
                            <>
                                <PlatformTableResponsiveRoles data={roles} titles={TABLE_TITLES_RESPONSIVE} dataEmpty={rolesEmpty} setDataData={setRoles} />
                            </>
                        )
                    }

                </div>
            </main>
            <BtnUp />
        </div>
    )

}