import { api_URL, getToken } from "./config";

export function getOrderId(id){

    let token = getToken()

    return fetch(`${api_URL}/order/${id}`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, data }) => {
            return status === "success" ? {data} : {message}
        })
    
}


export function createOrder(body){

    let token = getToken()

    return fetch(`${api_URL}/order`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, saveOrder }) => {
            return status === "success" ? {saveOrder} : {message}
        })
    
}

export function addProductOrder(body){

    let token = getToken()

    return fetch(`${api_URL}/order`, {
        method: "PATCH",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, orderUpdate }) => {
            return status === "success" ? {orderUpdate} : {message}
        })
    
}

export function getOrderProccess(){

    let token = getToken()

    return fetch(`${api_URL}/order/process`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, orders }) => {
            return status === "success" ? {orders} : {message}
        })
    
}

export function getShoppingCart(){

    let token = getToken()

    return fetch(`${api_URL}/order/cart`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, cart, products }) => {
            return status === "success" ? {cart, products} : {message}
        }) 
    
}

export function deleteProductCart(body){

    let token = getToken()

    return fetch(`${api_URL}/order/product`, {
        method: "PUT",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, orderUpdate }) => {
            return status === "success" ? {orderUpdate} : {message}
        })
    
}