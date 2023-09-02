import { api_URL, getToken } from "./config";

export function getOrderId(id) {
  const token = getToken();

  return fetch(`${api_URL}/order/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, data }) => {
      return status === "success" ? { data } : { message };
    });
}

export function createOrder(body) {
  const token = getToken();

  return fetch(`${api_URL}/order`, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, saveOrder }) => {
      return status === "success" ? { saveOrder } : { message };
    });
}

export function addProductOrder(body) {
  const token = getToken();

  return fetch(`${api_URL}/order`, {
    method: "PATCH",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, orderUpdate }) => {
      return status === "success" ? { orderUpdate } : { message };
    });
}

export function getOrderProccess() {
  const token = getToken();

  try {
    return fetch(`${api_URL}/order/process`, {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((res) => res.json())
      .then(({ status, message, orders }) => {
        return status === "success" ? { orders } : { message };
      });
  } catch (error) {
    console.log("Error token");
  }
}

export function getShoppingCart() {
  const token = getToken();

  return fetch(`${api_URL}/order/cart`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then((res) => res.json())
    .then(({ status, message, cart, products }) => {
      return status === "success" ? { cart, products } : { message };
    });
}

export function deleteProductCart(body) {
  const token = getToken();

  return fetch(`${api_URL}/order/product`, {
    method: "PUT",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, orderUpdate }) => {
      return status === "success" ? { orderUpdate } : { message };
    });
}

export function finishShoppingCart(body) {
  const token = getToken();

  return fetch(`${api_URL}/order`, {
    method: "PUT",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ status, message, orderUpdate }) => {
      return status === "success" ? { orderUpdate } : { message };
    });
}

export function searchProducts(search) {
  return fetch(`${api_URL}/search/products/${search}`)
    .then((res) => res.json())
    .then(({ status, message, searchProducts }) => {
      return status === "success" ? { searchProducts } : { message };
    });
}
