import { api_URL } from "@/services/config.js";

export function forgetPassword(body) {
  return fetch(`${api_URL}/email`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ message }) => {
      return { message };
    });
}

export function recoverPassword(token, body) {
  return fetch(`${api_URL}/recover/${token}`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ message }) => {
      return { message };
    });
}
