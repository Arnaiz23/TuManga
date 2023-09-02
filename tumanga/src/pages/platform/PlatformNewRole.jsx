import React from "react"

import PlatformEditRole from "@/components/platform/PlatformEditRole.jsx"
import PlatformHeader from "@/components/platform/PlatformHeader.jsx"
import PlatformNav from "@/components/platform/PlatformNav.jsx"
import PlatformNavResponsive from "@/components/platform/PlatformNavResponsive.jsx"
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx"

export default function PlatformNewRole({ params }) {
  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformEditRole type={"newRole"} />
      <BtnUp />
    </div>
  )
}
