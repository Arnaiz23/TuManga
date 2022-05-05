import { api_URL } from "./config";

let token = JSON.parse(localStorage.getItem("token"))

export function getUser() {
    return fetch(`${api_URL}/user`, {
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-type' : 'application/json'
        })
    })
        .then(res => res.json())
        .then(({ status, userInfo }) => {
            if(status === "success"){
                return userInfo
            }else{
                return status
            }
        })
}

export function updateUser(body) {

    return fetch(`${api_URL}/user`, {
        method: "put",
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-type' : 'application/json'
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(response => response)
}