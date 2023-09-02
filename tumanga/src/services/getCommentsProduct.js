import { api_URL } from "./config";

export default function getCommentsProduct(id) {
  return fetch(`${api_URL}/comments/product/${id}`)
    .then((res) => res.json())
    .then(({ status, message, comments }) => {
      return status === "success" ? { comments } : { message, comments };
    });
}
