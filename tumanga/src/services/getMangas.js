import { api_URL } from "./config";

export default function getMangas() {
    return fetch(`${api_URL}/products/manga/8&0`)
        .then(res => res.json())
        .then(response => {
            return response
        })
}