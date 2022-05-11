import { getToken, api_URL } from './config'

export function getUserCards() {

    let token = getToken()

    return fetch(`${api_URL}/cards/user`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, cards }) => {
            return status === "success" ? { cards } : { message }
        })

}

export function createCard(body) {

    let token = getToken()

    return fetch(`${api_URL}/card`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, allCards }) => {
            return status === "success" ? {allCards} : {message}
        })
}


export function deleteUserCard(id){

    let token = getToken()

    return fetch(`${api_URL}/card/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, cards }) => {
            return status === "success" ? {cards} : {message}
        })
    
}


export function getLastCards(){

    let token = getToken()

    return fetch(`${api_URL}/cards/last`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, cards }) => {
            return status === "success" ? {cards} : {message}
        })
    
}