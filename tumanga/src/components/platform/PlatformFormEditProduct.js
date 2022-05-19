import React, { useState } from "react";
import { updateProduct, uploadImage } from "services/Admin";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import PlatformTableUpdateProduct from "./PlatformTableUpdateProduct";

// const ROLES = ["admin", "empleado", "owner", "usuario"]

export default function PlatformEditFormProduct({ title, type, data }) {

    let [product, setProduct] = useState({})
    const [image, setImage] = useState()
    // const [role, setRole] = useState('')

    const handleUpdate = () => {

        // ! Validate the data

        updateProduct(product, product._id).then(data => {
            if (data.message) return alert(data.message)

            if (image !== undefined) {
                const formData = new FormData();
                formData.append(
                    'file0',
                    image,
                    image.name
                );
                uploadImage(product._id, formData).then(data => {
                    if (data.message) return alert(data.message)
                    setProduct(data.productUpdate)
                    Swal.fire(
                        'Producto',
                        'Producto actualizado correctamente',
                        'success'
                    )
                })
            } else {
                setProduct(data.productUpdate)
                Swal.fire(
                    'Producto',
                    'Producto actualizado correctamente',
                    'success'
                )
            }

        })


    }

    const [newProduct, setNewProduct] = useState({
        "name": "",
        "price": 0,
        "description": "",
        "short_description": "",
        "state": "",
        "stock": 0,
        "categories": [],
        "type": "",
        "number_sales": 0,
        "authors": "",
        "editorial": "",
        "series": "",
        "comments": []
    })

    const setLocation = useLocation()[1]

    const handleCreate = () => {
        alert("Create")
    }

    return (
        <main className="adminMain">
            <div className="containerAdminCenter">
                <header>
                    <h2>{title}</h2>
                </header>
                {
                    type === "editProduct" && <PlatformTableUpdateProduct data={data} product={product} setProduct={setProduct} setImage={setImage} image={image} />
                }
                <footer>
                    {
                        type === "editProduct" && <button className="btn btn-success" onClick={handleUpdate}>Guardar</button>
                    }
                    {
                        type === "createProduct" && <button className="btn btn-success" onClick={handleCreate}>Guardar</button>
                    }
                </footer>
            </div>
        </main>
    )

}