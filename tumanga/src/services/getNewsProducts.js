import { api_URL } from "./config";

export default function getNewsProducts() {
  return fetch(`${api_URL}/products/new`)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
