export const apiURL = import.meta.env.VITE_API_URL

export function getToken() {
  let token
  try {
    token = JSON.parse(localStorage.getItem("token"))
  } catch (error) {
    token = ""
  }

  return token
}
