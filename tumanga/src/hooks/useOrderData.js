import {useContext, useEffect, useState } from "react";

import OrderContext from "context/OrderContext";

import { getOrderProccess } from "services/Orders";

export default function useOrderData(){

    const { order, setOrder, count, setCount } = useContext(OrderContext)
    const [orderProcess, setOrderProcess] = useState(false)

    useEffect(() => {

        getOrderProccess().then(data => {
            if(data.orders) setOrderProcess(true)
            setCount(data.orders.products.length)
        })

    },[order])

    return { order, setOrder, count, setCount, orderProcess, setOrderProcess }
    
}