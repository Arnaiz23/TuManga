import { apiURL } from "./config";

export default function getNewsProducts() {
  return fetch(`${apiURL}/products/new`)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
