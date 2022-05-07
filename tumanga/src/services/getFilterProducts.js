import { api_URL } from './config'

export default function getFilterProducts(skip = 0, option) {

    let type = window.location.pathname.split("/")[2];

    if(type === "mangas") type = "manga"
    
    return fetch(`${api_URL}/filter/product/${type}/${option}&8&${skip}`)
        .then(res => res.json())
        .then(({ status, message, products, count }) => {
            return status === "success" ? {products, count} : {message}
        })
}