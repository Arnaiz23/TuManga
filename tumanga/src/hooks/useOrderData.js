import {useContext, useEffect, useState } from "react";

import OrderContext from "context/OrderContext";

import { getOrderProccess } from "services/Orders";
import useUser from "./useUser";

export default function useOrderData(){

    const { order, setOrder, count, setCount, products, setProducts } = useContext(OrderContext)
    const [orderProcess, setOrderProcess] = useState(false)

    useEffect(() => {


        getOrderProccess().then(data => {
            if(data.message === "Did not work") return
            if(data.orders){
                setOrderProcess(true)
                setOrder(data.orders)
            }
            if(data.products){
                setProducts(data.products)
            }
            setCount(data.orders.products.length)
        })

    },[setOrder])

    return { order, setOrder, count, setCount, orderProcess, setOrderProcess, products }
    
}