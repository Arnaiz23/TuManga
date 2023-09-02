import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Swal from "sweetalert2";

import { apiURL } from "@/services/config";
import { deleteProductCart } from "@/services/Orders";
import OrderContext from "@/context/OrderContext";

export default function RowOrderProduct({ data }) {
  const { setOrder, setCount } = useContext(OrderContext);

  const deleteItem = () => {
    deleteProductCart({ idproduct: data.product_id }).then((data) => {
      if (data.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar eliminarlo",
          "error",
        );
      }
      setOrder(data.orderUpdate);
      setCount(data.orderUpdate.products.length);
    });
  };

  return (
    <div className="row">
      {data.image !== null ? (
        <img
          src={`${apiURL}/image/${data.image}`}
          alt={`imagen portada ${data.name}`}
        />
      ) : (
        <img
          src={`${apiURL}/image/ImageNotFound.jpg`}
          alt={`Portada del volumen de ${data.name}`}
        />
      )}
      <div className="contentShopping">
        <h4 className="titleBlue">{data.name}</h4>
        <div>
          <p>Cantidad: {data.quantity}</p>
          <p>Precio: {data.totalprice}€</p>
        </div>
      </div>
      <span>
        <i onClick={deleteItem}>
          <FontAwesomeIcon icon={faRectangleXmark} />
        </i>
      </span>
    </div>
  );
}
