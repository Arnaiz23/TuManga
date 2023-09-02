import { api_URL } from "./config";

export default function getOneProduct(id) {
  return fetch(`${api_URL}/product/${id}`)
    .then((res) => res.json())
    .then((response) => response);
}
