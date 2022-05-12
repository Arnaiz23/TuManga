import { api_URL } from "./config";

export function forgetPassword(body){

    return fetch(`${api_URL}/email`, {
        method: "POST",
        headers: new Headers({
            "Content-type" : "application/json"
        }),
        body: JSON.stringify(body)
    })
        .then(res => res.json()) 
        .then(({ message }) => {
            return {message}
        })
    
}