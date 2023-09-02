import { apiURL } from "./config";

export default function getFilterProducts(skip = 0, option, type) {
  // let type = window.location.pathname.split("/")[2];

  // if(type === "mangas") type = "comics"

  if (window.location.pathname.split("/")[2] === "merchandising")
    type = "merchandising";

  return fetch(`${apiURL}/filter/product/${type}/${option}&8&${skip}`)
    .then((res) => res.json())
    .then(({ status, message, products, count }) => {
      return status === "success" ? { products, count } : { message };
    });
}
