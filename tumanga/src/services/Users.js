import { api_URL } from "./config";

let token

try {
    token = JSON.parse(localStorage.getItem("token"))
} catch (error) {
    token = ""
}

export function getUser() {
    return fetch(`${api_URL}/user`, {
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-type' : 'application/json'
        })
    })
        .then(res => res.json())
        .then(({ status, userInfo, message }) => {
            if(status === "success"){
                return userInfo
            }else{
                return {message}
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

export function userChangePasswords(body) {

    return fetch(`${api_URL}/user/password`, {
        method: "put",
        headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-type' : 'application/json'
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, userUpdate, message }) => {
            if(status === "success"){
                return {userUpdate}
            }else{
                return {message}
            }
        })
    
}

export function userChangeState(){

    return fetch(`${api_URL}/user`, {
        method: "PATCH",
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, userUpdate, message }) => {
            if(status === "success"){
                return {userUpdate}
            }else{
                return {message}
            }
        })
    
    
}

export function deleteUser(){

    return fetch(`${api_URL}/user`, {
        method: "DELETE",
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        })
    })
        .then(res => res.json())
        .then(({ status, userDelete, message }) => {
            if(status === "success"){
                return {userDelete}
            }else{
                return {message}
            }
        })
    
}


export function login (body) {

    return fetch(`${api_URL}/login`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ message, status, token, userState }) => {
            if(status === "success"){
                return {token, userState}
            }else{
                return message
            }
        })
    
}

export function register(body){

    return fetch(`${api_URL}/user`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(({ status, message, token }) => {
            return status === "success" ? {token} : {message}
        })
    
}