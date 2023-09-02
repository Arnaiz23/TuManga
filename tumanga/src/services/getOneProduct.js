import { apiURL } from "./config";

export default function getOneProduct(id) {
  return fetch(`${apiURL}/product/${id}`)
    .then((res) => res.json())
    .then((response) => response);
}
