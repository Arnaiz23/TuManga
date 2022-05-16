import { api_URL, getToken } from "./config";

export function getStatistics() {

    let token = getToken()

    return fetch(`${api_URL}/total/data`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then((data) => data)

}

export function getAllUsers(){

    let token = getToken()

    // ! /admin/users/:filter?

    return fetch(`${api_URL}/admin/users`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, users }) => {
            return status === "success" ? {users} : {message}
        })
    
}