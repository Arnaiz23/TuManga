import { getToken, api_URL } from './config'

export function getUserCards(){

    let token = getToken()

    return fetch(`${api_URL}/cards/user`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, cards }) => {
            return status === "success" ? {cards} : {message}
        })
    
}