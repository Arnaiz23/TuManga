import { api_URL } from './config'

export default function getFilterProducts(skip = 0, option) {
    return fetch(`${api_URL}/filter/product/manga/${option}&8&${skip}`)
        .then(res => res.json())
        .then(response => {
            return response
        })
}