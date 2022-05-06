import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { getAddressUser } from "services/Address";
import AddAddress from "../AddAddress/AddAddress";
import AddressCard from "../AddressCard/AddressCard";

export default function ListOfAddress() {

    const { loading } = useUser()
    const [address, setAddress] = useState([])
    const [error, setError] = useState('false')
    const [addressEmpty, setAddressEmpty] = useState(false)

    useEffect(() => {
        getAddressUser().then(data => {
            if(data.message) {
                setError(data.message)
                setAddressEmpty(true)
            }

            setAddress(data.address)
        })
    },[setAddress])

    return (
        <>
            <div className="containerGrid">
                <AddAddress change={setAddress} />
                {loading
                    ? <h1>Cargando...</h1>
                    : (
                        addressEmpty
                            ? <h3 className="userDataEmpty">{error}</h3>
                            : (
                                address.map(addressData => <AddressCard key={addressData._id} data={addressData} change={setAddress} />)
                            )
                    )
                }
            </div>
        </>
    )
}