import { apiURL, getToken } from "./config";

export function getUserComments() {
  const token = getToken();

  return fetch(`${apiURL}/comments/user`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, comments }) => {
      return status === "success" ? { comments } : { message };
    });
}

export function deleteUserComment(id) {
  const token = getToken();

  return fetch(`${apiURL}/comment/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, comments, productComments }) => {
      return status === "success" ? { comments, productComments } : { message };
    });
}

export function createComment(body) {
  const token = getToken();

  return fetch(`${apiURL}/comment`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, allComments }) => {
      return status === "success" ? { allComments } : { message };
    });
}
