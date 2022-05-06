export const api_URL = "http://localhost:3900/api/v1"

export function getToken() {
    let token
    try {
        token = JSON.parse(localStorage.getItem("token"))
    } catch (error) {
        token = ""
    }

    return token
}