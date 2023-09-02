import { apiURL, getToken } from "./config"

export function getUser() {
  const token = getToken()

  return fetch(`${apiURL}/user`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then(({ status, userInfo, message }) => {
      if (status === "success") {
        return { userInfo }
      } else {
        return { message }
      }
    })
}

export function updateUser(body) {
  const token = getToken()

  return fetch(`${apiURL}/user`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => response)
}

export function userChangePasswords(body) {
  const token = getToken()

  return fetch(`${apiURL}/user/password`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, userUpdate, message }) => {
      if (status === "success") {
        return { userUpdate }
      } else {
        return { message }
      }
    })
}

export function userChangeState() {
  const token = getToken()

  return fetch(`${apiURL}/user`, {
    method: "PATCH",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, userUpdate, message }) => {
      if (status === "success") {
        return { userUpdate }
      } else {
        return { message }
      }
    })
}

export function deleteUser() {
  const token = getToken()

  return fetch(`${apiURL}/user`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, userDelete, message }) => {
      if (status === "success") {
        return { userDelete }
      } else {
        return { message }
      }
    })
}

export function login(body) {
  return fetch(`${apiURL}/login`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ message, status, token, userState }) => {
      if (status === "success") {
        return { token, userState }
      } else {
        return message
      }
    })
}

export function register(body) {
  return fetch(`${apiURL}/user`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, token }) => {
      return status === "success" ? { token } : { message }
    })
}

export function getUserOrders() {
  const token = getToken()

  return fetch(`${apiURL}/orders/user`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, orders }) => {
      return status === "success" ? { orders } : { message }
    })
}
