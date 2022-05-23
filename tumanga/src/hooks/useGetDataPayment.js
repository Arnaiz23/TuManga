import { useEffect, useState } from "react";
import { getLastAddress } from "services/Address";
import { getLastCards } from "services/Cards";

export default function useGetDataPayment(){

    const [address, setAddress] = useState([])
    const [billing, setBilling] = useState([])
    const [loadingAddress, setLoadingAddress] = useState(false)
    const [loadingBilling, setLoadingBilling] = useState(false)

    useEffect(() => {

        setLoadingAddress(true)
        setLoadingBilling(true)

        getLastAddress().then(data => {
            setLoadingAddress(false)
            if(data.message) return setAddress([])
            setAddress(data.address)
        })

        getLastCards().then(data => {
            setLoadingBilling(false)
            if(data.message) return setBilling([])
            setBilling(data.cards)
        })
        
    },[setAddress, setBilling])

    return { address, billing, loadingAddress, loadingBilling }
    
}