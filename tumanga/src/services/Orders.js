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