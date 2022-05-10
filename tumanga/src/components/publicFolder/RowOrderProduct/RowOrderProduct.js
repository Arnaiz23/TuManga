import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderContext from "context/OrderContext";
import React, { useContext } from "react";
import { api_URL } from "services/config";
import { deleteProductCart } from "services/Orders";

export default function RowOrderProduct({ data }) {

    const { order, setOrder, setCount } = useContext(OrderContext)

    const deleteItem = () => {
        deleteProductCart({"id_product" : data.product_id}).then(data => {
            if(data.message) return alert(data.message)
            setOrder(data.orderUpdate)
            setCount(data.orderUpdate.products.length)
        })
    }

    return (
        <div className="row">
            <img src={`${api_URL}/image/${data.image}`} alt={`imagen portada ${data.name}`} />
            <div className="contentShopping">
                <h4 className="titleBlue">{data.name}</h4>
                <div>
                    <p>Cantidad: {data.quantity}</p>
                    <p>Precio: {data.total_price}€</p>
                </div>
            </div>
            <span>
                <i onClick={deleteItem}><FontAwesomeIcon icon={faRectangleXmark} /></i>
            </span>
        </div>
    )
}