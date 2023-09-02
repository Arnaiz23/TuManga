import { apiURL } from "./config"

export default function getMangas(skip = 0, filters = []) {
  // console.log(filters);

  return fetch(`${apiURL}/products/mangas/8&${skip}`)
    .then((res) => res.json())
    .then((response) => {
      return response
    })

  /* if (filters.length <= 0) {
        return fetch(`${apiURL}/products/mangas/8&${skip}`)
            .then(res => res.json())
            .then(response => {
                return response
            })

    }else{
        return fetch(`${apiURL}/filter/product/manga/realidad&8&${skip}`)
            .then(res => res.json())
            .then(response => {
                return response
            })
    } */
}
