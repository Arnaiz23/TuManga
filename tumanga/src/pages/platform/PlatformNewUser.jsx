import React from "react"
import PlatformEditForm from "@components/platform/PlatformFormEdit"
import PlatformHeader from "@components/platform/PlatformHeader"
import PlatformNav from "@components/platform/PlatformNav"
import PlatformNavResponsive from "@components/platform/PlatformNavResponsive"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"

export default function PlatformNewUser() {
  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformEditForm title="Añadir Usuario" type={"newUser"} />
      <BtnUp />
    </div>
  )
}
