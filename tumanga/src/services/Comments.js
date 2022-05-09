import { api_URL, getToken } from "./config";

export function getUserComments(){

    let token = getToken()

    return fetch(`${api_URL}/comments/user`, {
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, comments }) => {
            return status === "success" ? {comments} : {message}
        })
    
}

export function deleteUserComment(id) {

    let token = getToken()

    return fetch(`${api_URL}/comment/${id}`, {
        method: "DELETE",
        headers: new Headers({
            "Authorization" : `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, message, comments, productComments }) => {
            return status === "success" ? {comments, productComments} :  {message}
        })
    
}

export function createComment(body){

    let token = getToken()

    return fetch(`${api_URL}/comment`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, allComments }) => {
            return status === "success" ? {allComments} : {message}
        })
    
}