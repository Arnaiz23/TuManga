import { apiURL } from "./config"

export default function getCommentsProduct(id) {
  return fetch(`${apiURL}/comments/product/${id}`)
    .then((res) => res.json())
    .then(({ status, message, comments }) => {
      return status === "success" ? { comments } : { message, comments }
    })
}
