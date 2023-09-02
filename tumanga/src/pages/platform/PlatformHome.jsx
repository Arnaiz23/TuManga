import React, { useContext, useEffect } from "react"
import PlatformHeader from "@components/platform/PlatformHeader"
import PlatformMain from "@components/platform/PlatformMain"
import PlatformNav from "@components/platform/PlatformNav"
import PlatformNavResponsive from "@components/platform/PlatformNavResponsive"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"
import Swal from "sweetalert2"

import AdminContext from "@/context/AdminContext"
import { getUser } from "@/services/Users"

export default function PlatformHome() {
  const { setUserData } = useContext(AdminContext)

  const fetchDataUser = () => {
    getUser().then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar recuperarlo",
          "error",
        )
      }
      setUserData(data.userInfo)
    })
  }

  useEffect(() => {
    fetchDataUser()
  }, [])

  return (
    <div className="gridAdmin">
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformHeader />
      <PlatformMain />
      <BtnUp />
    </div>
  )
}
