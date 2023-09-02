import { apiURL, getToken } from "./config";

export function getStatistics() {
  const token = getToken();

  return fetch(`${apiURL}/total/data`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
}

export function getAllUsers() {
  const token = getToken();

  // ! /admin/users/:filter?

  return fetch(`${apiURL}/admin/users`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, users, newArrayRoles }) => {
      return status === "success" ? { users, newArrayRoles } : { message };
    });
}

export function searchData(search, option) {
  const token = getToken();

  return fetch(`${apiURL}/admin/search/${search}&${option}`, {
    headers: new Headers({
      Authorization: `BEarer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, userSearch, productSearch }) => {
      return status === "success" ? { userSearch, productSearch } : { message };
    });
}

export function getOnerUser(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/user/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, userFind, roleName }) => {
      return status === "success" ? { userFind, roleName } : { message };
    });
}

export function getAllRoles() {
  const token = getToken();

  return fetch(`${apiURL}/admin/roles`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, roles }) => {
      return status === "success" ? { roles } : { message };
    });
}

export function updateOneUser(id, body) {
  const token = getToken();

  return fetch(`${apiURL}/admin/user/${id}`, {
    method: "PUT",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, userUpdate }) => {
      return status === "success" ? { userUpdate } : { message };
    });
}

export function createUser(body) {
  const token = getToken();

  return fetch(`${apiURL}/admin/user`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, userSave }) => {
      return status === "success" ? { userSave } : { message };
    });
}

export function getAllProducts() {
  const token = getToken();

  return fetch(`${apiURL}/products`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, products }) => {
      return status === "success" ? { products } : { message };
    });
}

export function uploadImage(id, image) {
  const token = getToken();

  return fetch(`${apiURL}/image/${id}`, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
    body: image,
  })
    .then((res) => res.json())
    .then(({ status, message, productUpdate }) => {
      return status === "success" ? { productUpdate } : { message };
    });
}

export function updateProduct(body, id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/product/${id}`, {
    method: "PUT",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, productUpdate }) => {
      return status === "success" ? { productUpdate } : { message };
    });
}

export function createProduct(body) {
  const token = getToken();

  return fetch(`${apiURL}/product`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, productid }) => {
      return { status, productid };
    });
}

export function deleteProduct(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/product/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, productDelete }) => {
      return status === "success" ? { productDelete } : { message };
    });
}

export function deleteUser(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/user/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, userDelete }) => {
      return status === "success" ? { userDelete } : { message };
    });
}

export function getAllOrders() {
  const token = getToken();

  return fetch(`${apiURL}/admin/orders`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, orders, newArray }) => {
      return status === "success" ? { orders, newArray } : { message };
    });
}

export function searchRole(search) {
  const token = getToken();

  return fetch(`${apiURL}/admin/role/search/${search}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, resultSearch }) => {
      return status === "success" ? { resultSearch } : { message };
    });
}

export function createRole(body) {
  const token = getToken();

  return fetch(`${apiURL}/admin/role`, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, saveRole }) => {
      return status === "success" ? { saveRole } : { message };
    });
}

export function getOneRole(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/role/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, role }) => {
      return status === "success" ? { role } : { message };
    });
}

export function updateRole(id, body) {
  const token = getToken();

  return fetch(`${apiURL}/admin/role/${id}`, {
    method: "PUT",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, updateRole }) => {
      return status === "success" ? { updateRole } : { message };
    });
}

export function deleteRole(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/role/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, deleteRole }) => {
      return status === "success" ? { deleteRole } : { message };
    });
}

export function getAllComments() {
  const token = getToken();

  return fetch(`${apiURL}/admin/comments`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, comments, newArray }) => {
      return status === "success" ? { comments, newArray } : { message };
    });
}

export function deleteCommentAdmin(id) {
  const token = getToken();

  return fetch(`${apiURL}/admin/comment/${id}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, allComments }) => {
      return status === "success" ? { allComments } : { message };
    });
}

export function getBestsellers() {
  const token = getToken();

  return fetch(`${apiURL}/products/sales/5`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ products }) => {
      return products;
    });
}
