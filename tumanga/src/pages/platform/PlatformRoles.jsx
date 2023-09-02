import React, { useEffect, useState } from "react"

import PlatformHeader from "@/components/platform/PlatformHeader.jsx"
import PlatformMainRowTitle from "@/components/platform/PlatformMainRowTitle.jsx"
import PlatformNav from "@/components/platform/PlatformNav.jsx"
import PlatformNavResponsive from "@/components/platform/PlatformNavResponsive.jsx"
import PlatformSearchModal from "@/components/platform/PlatformSearchModal.jsx"
import PlatformTableResponsiveRoles from "@/components/platform/PlatformTableResponsiveRoles.jsx"
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx"
import Spinner from "@/components/publicFolder/Spinner/Spinner.jsx"
import { getAllRoles } from "@/services/Admin.js"

const TABLE_TITLES_RESPONSIVE = ["id", "nombre", "editar"]

export default function PlatformRoles() {
  const [loading, setLoading] = useState(false)
  const [roles, setRoles] = useState([])
  const [rolesEmpty, setRolesEmpty] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const fetchRoles = () => {
    setLoading(true)
    getAllRoles().then((data) => {
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
          <PlatformMainRowTitle
            title="Roles"
            nameAdd="Rol"
            changeModal={setModalOpen}
            setDataData={setRoles}
            link="role"
            type={"roles"}
            setDataEmpty={setRolesEmpty}
          />
          <PlatformSearchModal
            setDataData={setRoles}
            setDataEmpty={setRolesEmpty}
            changeModal={setModalOpen}
            modal={modalOpen}
            title="Rol"
            type="roles"
          />

          {loading ? (
            <Spinner />
          ) : (
            <>
              <PlatformTableResponsiveRoles
                data={roles}
                titles={TABLE_TITLES_RESPONSIVE}
                dataEmpty={rolesEmpty}
                setDataData={setRoles}
              />
            </>
          )}
        </div>
      </main>
      <BtnUp />
    </div>
  )
}
