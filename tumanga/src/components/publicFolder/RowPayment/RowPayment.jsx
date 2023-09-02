import React, { useEffect } from "react";

import useGetDataPayment from "@/hooks/useGetDataPayment";
import { apiURL } from "@/services/config";
import ModalPaymentAddress from "@components/publicFolder/ModalPayment/ModalPaymentAddress";
import ModalPaymentBilling from "@components/publicFolder/ModalPayment/ModalPaymentBilling/ModalPaymentBilling";

export default function RowPayment({
  type,
  changeModal,
  changeAddress,
  lastBilling,
  lastAddress,
  changeBilling,
  addressEmpty,
  changeAddressEmpty,
  billingEmpty,
  changeBillingEmpty,
  modal,
  changeModalLast,
}) {
  // ! Peticion direcciones
  // const [modalOpen, setModalOpen] = useState(false)
  const { address, billing, loadingAddress, loadingBilling } =
    useGetDataPayment();
  /* const [addressEmpty, setAddressEmpty] = useState(true)
    const [billingEmpty, setBillingEmpty] = useState(true) */
  /* const [ lastAddress, setLastAddress ] = useState({})
    const [ lastbilling, setLastBilling ] = useState({}) */

  useEffect(() => {
    if (address.length > 0 && type === "address") {
      changeAddress(address[0]);
      changeAddressEmpty(false);
    }
    if (billing.length > 0 && type === "billing") {
      changeBilling(billing[0]);
      changeBillingEmpty(false);
    }
  }, [
    address,
    billing,
    changeAddress,
    changeBilling,
    changeBillingEmpty,
    changeAddressEmpty,
    type,
  ]);

  const openModal = () => {
    changeModalLast(true);
    // setModalOpen(true)
  };

  return (
    <>
      {type === "address" && (
        <>
          <div className="row">
            <h2>1</h2>
            <h3>Dirección de envío</h3>
            {console.log(lastBilling)}
            {loadingAddress && address.length === 0 ? (
              <h3>Cargando...</h3>
            ) : !addressEmpty ? (
              <div className="col">
                <h4>{lastAddress.name_person}</h4>
                <p>{lastAddress.name}</p>
                <p>{lastAddress.telephone}</p>
                {/* <h4>{address[0].name_person}</h4>
                                            <p>{address[0].name}</p> */}
              </div>
            ) : (
              <div className="col">
                <h4>Este usuario no tiene direcciones</h4>
              </div>
            )}
            <p className="changeData" onClick={openModal}>
              Cambiar
            </p>
          </div>
          <ModalPaymentAddress
            modal={modal}
            change={changeModalLast}
            address={address}
            changeModal={changeModal}
            addressEmpty={addressEmpty}
            changeAddress={changeAddress}
          />
        </>
      )}
      {type === "billing" && (
        <>
          <div className="row">
            <h2>2</h2>
            <h3>Método de pago</h3>
            {loadingBilling && billing.length === 0 ? (
              <h3>Cargando...</h3>
            ) : !billingEmpty ? (
              <div className="row">
                <img
                  src={`${apiURL}/image/${lastBilling.image}`}
                  alt={`imagen logo ${lastBilling.type}`}
                  className="imgBrandCard"
                />
                {/* <img src={`${apiURL}/image/${billing[0].image}`} alt={`imagen logo ${billing[0].type}`} className="imgBrandCard" /> */}
                <p>
                  <b>{lastBilling.type}</b> que termina en{" "}
                  <b>{lastBilling.last_4_digits}</b>
                </p>
              </div>
            ) : (
              <div className="row">
                <h4>Este usuario no tiene tarjetas</h4>
              </div>
            )}
            <p className="changeData" onClick={openModal}>
              Cambiar
            </p>
          </div>
          <ModalPaymentBilling
            modal={modal}
            change={changeModalLast}
            cards={billing}
            changeModal={changeModal}
            changeBilling={changeBilling}
          />
        </>
      )}
    </>
  );
}
