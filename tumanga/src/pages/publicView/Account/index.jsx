import React, { useContext } from "react"
import AsideAccount from "@components/publicFolder/AsideAccount/AsideAccount"
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP"
import DataAccount from "@components/publicFolder/DataAccount/DataAccount"
import DeleteAccount from "@components/publicFolder/DeleteAccount/DeleteAccount"
import Footer from "@components/publicFolder/Footer/Footer"
import Header from "@components/publicFolder/Header/Header"
import NavAccountResp from "@components/publicFolder/NavAccountResp/NavAccountResp"
import SliderName from "@components/publicFolder/SliderName/SliderName"
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks"
import Spinner from "@components/publicFolder/Spinner/Spinner"
import PasswordAccount from "@pages/publicView/PasswordAccount/PasswordAccount"

import OrderContext from "@/context/OrderContext"
import useUser from "@/hooks/useUser"

export default function Account() {
  const { loading } = useUser()
  const { userData, setUserData } = useContext(OrderContext)

  return (
    <>
      <Header />
      <SocialNetwork />
      <SliderName name="Mi Cuenta" />
      <main className="center">
        <div className="containerGlobalProducts">
          <AsideAccount />
          <NavAccountResp />
          <section className="containerInformation">
            <h2 className="subtitle">Mi Información</h2>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <DataAccount data={userData} change={setUserData} />
                <div className="lineAccount"></div>
                <PasswordAccount />
                <div className="lineAccount"></div>
                <DeleteAccount />
              </>
            )}
          </section>
        </div>
      </main>
      <BtnUp />
      <Footer />
    </>
  )
}
