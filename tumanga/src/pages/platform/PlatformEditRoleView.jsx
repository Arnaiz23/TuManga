import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"

import PlatformEditRole from "@/components/platform/PlatformEditRole.jsx"
import PlatformHeader from "@/components/platform/PlatformHeader.jsx"
import PlatformNav from "@/components/platform/PlatformNav.jsx"
import PlatformNavResponsive from "@/components/platform/PlatformNavResponsive.jsx"
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx"
import { getOneRole } from "@/services/Admin.js"

export default function PlatformEditRoleView({ params }) {
  const [role, setRole] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchRole = () => {
    setLoading(true)
    getOneRole(params.id).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar recuperarlo",
          "error",
        )
      }

      setRole(data.role)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchRole()
  }, [params.id])

  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformEditRole
        type={"role"}
        role={role}
        loading={loading}
        setRole={setRole}
      />
      <BtnUp />
    </div>
  )
}
