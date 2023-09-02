import React, { useEffect, useState } from "react"

import useUser from "@/hooks/useUser"
import { getAddressUser } from "@/services/Address"
import AddAddress from "@components/publicFolder/AddAddress/AddAddress"
import AddressCard from "@components/publicFolder/AddressCard/AddressCard"
import Spinner from "@components/publicFolder/Spinner/Spinner"

export default function ListOfAddress() {
  const { loading } = useUser()
  const [address, setAddress] = useState([])
  const error = useState("No tienes direcciones registradas")[0]
  const [addressEmpty, setAddressEmpty] = useState(false)

  useEffect(() => {
    getAddressUser().then((data) => {
      if (data.message) {
        setAddressEmpty(true)
        return
      }

      setAddress(data.address)
    })
  }, [setAddress])

  return (
    <>
      <div className="containerGrid">
        <AddAddress
          change={setAddress}
          empty={setAddressEmpty}
          type={"dirección"}
        />
        {loading ? (
          <Spinner />
        ) : addressEmpty ? (
          <h3 className="userDataEmpty">{error}</h3>
        ) : (
          address.map((addressData) => (
            <AddressCard
              key={addressData._id}
              data={addressData}
              change={setAddress}
              empty={setAddressEmpty}
            />
          ))
        )}
      </div>
    </>
  )
}
