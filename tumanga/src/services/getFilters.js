import { api_URL } from './config'

export default function getFilters() {
    return fetch(`${api_URL}/filters`)
        .then(res => res.json())
        .then(response => {
            return response
        })
}