import PlatformEditFormProduct from "@components/platform/PlatformFormEditProduct"
import PlatformHeader from "@components/platform/PlatformHeader"
import PlatformNav from "@components/platform/PlatformNav"
import PlatformNavResponsive from "@components/platform/PlatformNavResponsive"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"
import React from "react"

export default function PlatformNewProduct() {
  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <PlatformEditFormProduct title={"Añadir producto"} type="createProduct" />
      <BtnUp />
    </div>
  )
}
