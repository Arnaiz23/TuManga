import { getToken, api_URL } from './config'

export function getAddressUser(){

    let token = getToken()
    
    return fetch(`${api_URL}/address/user`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, address }) => {
            return status === "success" ? {address} : {message}
        })
}

export function deleteUserAddress(id) {

    let token = getToken()

    return fetch(`${api_URL}/address/${id}`,{
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        }),
        method: "DELETE"
    })
        .then(res => res.json())
        .then(({ status, message, newAddress }) => {
            return status === "success" ? {newAddress} : {message}
        })
    
}

export function createAddress(body) {

    let token = getToken()

    return fetch(`${api_URL}/address`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, allAddress }) => {
            return status === "success" ? {allAddress} : {message}
        })
    
}

export function getLastAddress(){

    let token = getToken()

    return fetch(`${api_URL}/address/last`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, address }) => {
            return status === "success" ? {address} : {message}
        })
    
}