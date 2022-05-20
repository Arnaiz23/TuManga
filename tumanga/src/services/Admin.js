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
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, userUpdate }) => {
            return status === "success" ? { userUpdate } : { message }
        })

}

export function createUser(body) {

    let token = getToken()

    return fetch(`${api_URL}/admin/user`, {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, userSave }) => {
            return status === "success" ? { userSave } : { message }
        })

}


export function getAllProducts() {

    let token = getToken()

    return fetch(`${api_URL}/products`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, products }) => {
            return status === "success" ? { products } : { message }
        })

}

export function uploadImage(id, image) {

    let token = getToken()

    return fetch(`${api_URL}/image/${id}`, {
        method: "POST",
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        }),
        body: image
    })
        .then(res => res.json())
        .then(({ status, message, productUpdate }) => {
            return status === "success" ? { productUpdate } : { message }
        })

}

export function updateProduct(body, id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/product/${id}`, {
        method: "PUT",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, productUpdate }) => {
            return status === "success" ? { productUpdate } : { message }
        })

}

export function createProduct(body) {

    let token = getToken()

    return fetch(`${api_URL}/product`, {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, product_id }) => {
            return { status, product_id }
        })

}

export function deleteProduct(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/product/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, productDelete }) => {
            return status === "success" ? { productDelete } : { message }
        })

}


export function deleteUser(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/user/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, userDelete }) => {
            return status === "success" ? { userDelete } : { message }
        })

}

export function getAllOrders() {

    let token = getToken()

    return fetch(`${api_URL}/admin/orders`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, orders }) => {
            return status === "success" ? { orders } : { message }
        })

}

export function searchRole(search) {

    let token = getToken()

    return fetch(`${api_URL}/admin/role/search/${search}`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, resultSearch }) => {
            return status === "success" ? { resultSearch } : { message }
        })

}

export function createRole(body) {

    let token = getToken()

    return fetch(`${api_URL}/admin/role`, {
        method: "POST",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, saveRole }) => {
            return status === "success" ? { saveRole } : { message }
        })

}

export function getOneRole(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/role/${id}`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, role }) => {
            return status === "success" ? { role } : { message }
        })

}

export function updateRole(id, body) {

    let token = getToken()

    return fetch(`${api_URL}/admin/role/${id}`, {
        method: "PUT",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, updateRole }) => {
            return status === "success" ? { updateRole } : { message }
        })

}

export function deleteRole(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/role/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, deleteRole }) => {
            return status === "success" ? { deleteRole } : { message }
        })

}

export function getAllComments() {


    let token = getToken()

    return fetch(`${api_URL}/admin/comments`, {
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, comments }) => {
            return status === "success" ? { comments } : { message }
        })
}

export function deleteCommentAdmin(id) {

    let token = getToken()

    return fetch(`${api_URL}/admin/comment/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization": `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, allComments }) => {
            return status === "success" ? { allComments } : { message }
        })

}