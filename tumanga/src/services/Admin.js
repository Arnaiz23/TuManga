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

export function getAllUsers() {

    let token = getToken()

    // ! /admin/users/:filter?

    return fetch(`${api_URL}/admin/users`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, users }) => {
            return status === "success" ? { users } : { message }
        })

}

export function searchData(search, option) {

    let token = getToken()

    return fetch(`${api_URL}/admin/search/${search}&${option}`, {
        headers: new Headers({
            "Authorization": `BEarer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, userSearch, productSearch }) => {
            return status === "success" ? { userSearch, productSearch } : { message }
        })

}

export function getOnerUser(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/user/${id}`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, userFind, roleName }) => {
            return status === "success" ? { userFind, roleName } : { message }
        })

}


export function getAllRoles() {

    let token = getToken()

    return fetch(`${api_URL}/admin/roles`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, roles }) => {
            return status === "success" ? { roles } : { message }
        })

}

export function updateOneUser(id, body) {

    let token = getToken()

    return fetch(`${api_URL}/admin/user/${id}`, {
        method: "PUT",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, userUpdate }) => {
            return status === "success" ? {userUpdate} : {message}
        })
    
}

export function createUser(body){

    let token = getToken()

    return fetch(`${api_URL}/admin/user`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, userSave }) => {
            return status === "success" ? {userSave} : {message}
        })
    
}