import { getToken, api_URL } from "./config";

export function getAddressUser() {
  const token = getToken();

  return fetch(`${api_URL}/address/user`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, address }) => {
      return status === "success" ? { address } : { message };
    });
}

export function deleteUserAddress(id) {
  const token = getToken();

  return fetch(`${api_URL}/address/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(({ status, message, newAddress }) => {
      return status === "success" ? { newAddress } : { message };
    });
}

export function createAddress(body) {
  const token = getToken();

  return fetch(`${api_URL}/address`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, allAddress }) => {
      return status === "success" ? { allAddress } : { message };
    });
}

export function getLastAddress() {
  const token = getToken();

  return fetch(`${api_URL}/address/last`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, address }) => {
      return status === "success" ? { address } : { message };
    });
}

export function updateUserAddress(id, body) {
  const token = getToken();

  return fetch(`${api_URL}/address/${id}`, {
    method: "PUT",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, addressUpdate, allAddress }) => {
      return status === "success" ? { addressUpdate, allAddress } : { message };
    });
}
