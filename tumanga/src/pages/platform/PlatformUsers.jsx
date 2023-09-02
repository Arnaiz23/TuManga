import PlatformHeader from "@components/platform/PlatformHeader"
import PlatformMainRowTitle from "@components/platform/PlatformMainRowTitle"
import PlatformNav from "@components/platform/PlatformNav"
import PlatformNavResponsive from "@components/platform/PlatformNavResponsive"
import PlatformSearchModal from "@components/platform/PlatformSearchModal"
import PlatformTable from "@components/platform/PlatformTable"
import PlatformTableResponsive from "@components/platform/PlatformTableResponsive"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"
import Spinner from "@components/publicFolder/Spinner/Spinner"
import React, { useEffect, useState } from "react"
import { getAllUsers } from "@/services/Admin"

const TITLES_TABLE = [
  "id",
  "email",
  "estado",
  "fecha registro",
  "rol",
  "nºpedidos",
  "Edit",
]
const TITLES_TABLE_RESPONSIVE = ["id", "email", "show", "edit"]

export default function PlatformUsers() {
  const [modalOpen, setModalOpen] = useState(false)
  const [usersEmpty, setUsersEmpty] = useState(false)
  const [usersData, setUsersData] = useState([])
  const [roleArray, setRoleArray] = useState([])
  const [loading, setLoading] = useState(false)

  let fecthDataUsers = () => {
    setLoading(true)
    getAllUsers().then((data) => {
      if (data.message) {
        setUsersEmpty(true)
        setLoading(false)
        return
      }
      setUsersData(data.users)
      setRoleArray(data.newArrayRoles)
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
          <PlatformMainRowTitle
            title="Usuarios"
            nameAdd="usuario"
            changeModal={setModalOpen}
            setDataEmpty={setUsersEmpty}
            setDataData={setUsersData}
            link="user"
            type={"users"}
          />
          <PlatformSearchModal
            setDataEmpty={setUsersEmpty}
            setDataData={setUsersData}
            changeModal={setModalOpen}
            modal={modalOpen}
            title="usuario"
            type="users"
          />
          {loading ? (
            <Spinner />
          ) : (
            <>
              <PlatformTable
                titles={TITLES_TABLE}
                users={usersData}
                usersEmpty={usersEmpty}
                roleArray={roleArray}
              />
              <PlatformTableResponsive
                titles={TITLES_TABLE_RESPONSIVE}
                users={usersData}
                usersEmpty={usersEmpty}
                roleArray={roleArray}
              />
            </>
          )}
        </div>
      </main>
      <BtnUp />
    </div>
  )
}
