import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PlatformModalComment from "@components/platform/PlatformModalComment"
import PlatformModalOrderData from "@components/platform/PlatformModalOrderData"
import PlatformModalProducts from "@components/platform/PlatformModalProducts"
import PlatformModalUsers from "@components/platform/PlatformModalUsers"
import ModalAdddress from "@components/publicFolder/ModalAddress/ModalAddress"
import ModalNewAddress from "@components/publicFolder/ModalNewAddress/ModalNewAddress"
import ModalNewCard from "@components/publicFolder/ModalNewCard/ModalNewCard"
import ModalPaymentAddressData from "@components/publicFolder/ModalPaymentAddressData/ModalPaymentAddressData"
import ModalPaymentBillingData from "@components/publicFolder/ModalPaymentBillingData/ModalPaymentBillingData"

export default function ModalInfo({
  change,
  data,
  type,
  changeAddress,
  changeCard,
  empty,
  changeLastAddress,
  changeLastBilling,
  changeBillingEmpty,
  changeAddressEmpty,
  closeModalLast,
  emails,
  arrayEmails,
  roleName,
}) {
  const closeModal = () => {
    change(false)
  }

  return (
    <div className="modalInformation showModal">
      <div className="modalCenter">
        <header>
          <i onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </header>
        {type === "address" && (
          <ModalAdddress
            data={data}
            changeAddress={changeAddress}
            closeModal={change}
          />
        )}
        {type === "newAddress" && (
          <ModalNewAddress
            change={changeAddress}
            closeModal={change}
            empty={empty}
          />
        )}
        {type === "newCard" && (
          <ModalNewCard change={changeCard} closeModal={change} empty={empty} />
        )}
        {type === "paymentAddress" && (
          <ModalPaymentAddressData
            changeLastAddress={changeLastAddress}
            closeModal={change}
            changeAddressEmpty={changeAddressEmpty}
            closeModalLast={closeModalLast}
          />
        )}
        {type === "paymentBilling" && (
          <ModalPaymentBillingData
            changeLastBilling={changeLastBilling}
            closeModal={change}
            changeBillingEmpty={changeBillingEmpty}
            closeModalLast={closeModalLast}
          />
        )}
        {type === "platformUsers" && (
          <PlatformModalUsers data={data} roleName={roleName} />
        )}
        {type === "platformProducts" && <PlatformModalProducts data={data} />}
        {type === "platformOrders" && (
          <PlatformModalOrderData data={data} emails={emails} />
        )}
        {type === "platformComments" && (
          <PlatformModalComment data={data} arrayEmails={arrayEmails} />
        )}
      </div>
    </div>
  )
}
