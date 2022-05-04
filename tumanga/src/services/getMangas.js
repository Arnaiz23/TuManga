import { api_URL } from "./config";

export default function getMangas(skip = 0) {
    return fetch(`${api_URL}/products/mangas/8&${skip}`)
        .then(res => res.json())
        .then(response => {
            return response
        })
}