import { apiURL } from "./config"

export default function getFilters() {
  let type = window.location.pathname.split("/")[2]

  if (type === "mangas") type = "manga"

  return fetch(`${apiURL}/filters/${type}`)
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}
