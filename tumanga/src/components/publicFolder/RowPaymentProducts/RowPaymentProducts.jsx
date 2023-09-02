import React from "react";

import { apiURL } from "@/services/config";

export default function RowPaymentProducts({ order }) {
  const today = new Date();

  return (
    <div className="col lastPayment">
      <div className="rowStart">
        <h2>3</h2>
        <h3>Revisar productos y opciones de envío</h3>
      </div>
      <div className="row">
        <div className="col">
          <h3>
            Entrega estimada:{" "}
            {`${today.getDate() + 3} ${today.toLocaleString("default", {
              month: "short",
            })} ${today.getFullYear()}`}
          </h3>
          {order.products.length > 0 &&
            order.products.map((product) => (
              <div className="row" key={product._id}>
                {product.image === null ? (
                  <img
                    src="https://ia-latam.com/wp-content/uploads/2018/12/No-image-found-1.jpg"
                    alt={`portada ${product.name}`}
                  />
                ) : (
                  <img
                    src={`${apiURL}/image/${product.image}`}
                    alt={`portada ${product.name}`}
                  />
                )}
                <div className="rowInformation">
                  <h4>{product.name}</h4>
                  <p className="price">{product.total_price}€</p>
                  <p>Cant: {product.quantity}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
