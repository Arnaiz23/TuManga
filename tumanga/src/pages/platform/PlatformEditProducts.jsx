import React from "react"
import PlatformEditFormProduct from "@components/platform/PlatformFormEditProduct"
import PlatformHeader from "@components/platform/PlatformHeader"
import PlatformNav from "@components/platform/PlatformNav"
import PlatformNavResponsive from "@components/platform/PlatformNavResponsive"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"

export default function PlatformEditProducts({ params }) {
  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformEditFormProduct
        title={"Editar producto"}
        type="editProduct"
        data={params.id}
      />
      <BtnUp />
    </div>
  )
}
