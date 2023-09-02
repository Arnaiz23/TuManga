export const apiURL = "http://localhost:3900/api/v1"
// export const apiURL = "https://tumanga-arnaizdev-backend.onrender.com/api/v1";

export function getToken() {
  let token
  try {
    token = JSON.parse(localStorage.getItem("token"))
  } catch (error) {
    token = ""
  }

  return token
}
