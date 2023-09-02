import { api_URL } from "./config";

export default function getFilters() {
  let type = window.location.pathname.split("/")[2];

  if (type === "mangas") type = "manga";

  return fetch(`${api_URL}/filters/${type}`)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
