import React, { useState } from "react";
import { createProduct, deleteProduct, updateProduct, uploadImage } from "services/Admin";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import PlatformTableNewProduct from "./PlatformTableNewProduct";
import PlatformTableUpdateProduct from "./PlatformTableUpdateProduct";

const ERROR_RESPONSES = {
    "The categories are invalid": "Las categorias no son válidas",
    "This product has not been updated": `Error al actualizarse el producto.\nReinténtelo más tarde.`
}

export default function PlatformEditFormProduct({ title, type, data }) {

    let [product, setProduct] = useState({})
    const [image, setImage] = useState()
    const [categories, setCategories] = useState([])
    const [newCategories, setNewCategories] = useState([])

    const handleUpdate = () => {

        const regexpNumber = /^[0-9]+$/
        const regexpNames = /^[a-zA-Záéíóú !?¿*]+$/

        if (!regexpNumber.test(product.price) || !regexpNumber.test(product.stock)) {
            return Swal.fire(
                'Datos erróneos',
                'Los campos precio y stock solo deben contener números',
                'error'
            )
        }

        /* if (!regexpNames.test(product.authors) || !regexpNames.test(product.editorial) || !regexpNames.test(product.series)) {
            return Swal.fire(
                'Datos erróneos',
                'El autor, editorial y serie solo puede contener letras',
                'error'
            )
        } */

        product.categories = categories

        updateProduct(product, product._id).then(data => {
            console.log(data);
            if (data.message) {
                return Swal.fire(
                    'Error datos',
                    ERROR_RESPONSES[data.message],
                    'error'
                )
            }

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

    let [newProduct, setNewProduct] = useState({
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

        const regexpNumber = /^[0-9]+$/
        const regexpNames = /^[a-zA-Záéíóú !?¿*]+$/

        newProduct.price = parseInt(newProduct.price)
        newProduct.stock = parseInt(newProduct.stock)
        newProduct.categories = newCategories

        if (newProduct.name === "" || newProduct.description === "" || newProduct.short_description === "" || newProduct.state === "" || newProduct.stock === 0 || newProduct.categories.length <= 0 || newProduct.state === "" || image === undefined) {
            return Swal.fire(
                'Campos vacíos',
                'Debes rellenar todos los campos obligatorios',
                'warning'
            )
        }

        if (!regexpNumber.test(newProduct.price) || !regexpNumber.test(newProduct.stock)) {
            return Swal.fire(
                'Datos erróneos',
                'Los campos precio y stock solo deben contener números',
                'error'
            )
        }

        /* if (!regexpNames.test(newProduct.authors) || !regexpNames.test(newProduct.editorial) || !regexpNames.test(newProduct.series)) {
            return Swal.fire(
                'Datos erróneos',
                'El autor, editorial y serie solo puede contener letras',
                'error'
            )
        } */



        createProduct(newProduct).then(data => {
            if (data.status !== "success") return alert(data)

            const formData = new FormData();
            formData.append(
                'file0',
                image,
                image.name
            );

            uploadImage(data.product_id, formData).then(data => {
                if (data.message) return alert(data.message)
                Swal.fire(
                    'Producto',
                    'Producto creado correctamente',
                    'success'
                )
                setLocation("/platform/products")
            })
        })
    }

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una vez eliminado, no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product._id).then(data => {
                    if (data.message) return alert(data.message)

                    Swal.fire(
                        'Producto',
                        'Producto eliminado correctamente',
                        'success'
                    )

                    setLocation("/platform/products")

                })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelado',
                    'El producto está a salvo',
                    'error'
                )
            }
        })

    }

    return (
        <main className="adminMain">
            <div className="containerAdminCenter">
                <header>
                    <h2>{title}</h2>
                </header>
                {
                    type === "editProduct" && <PlatformTableUpdateProduct data={data} product={product} setProduct={setProduct} setImage={setImage} image={image} setCategories={setCategories} categories={categories} />
                }
                {
                    type === "createProduct" && <PlatformTableNewProduct setNewProduct={setNewProduct} newProduct={newProduct} setImage={setImage} categories={newCategories} setCategories={setNewCategories} />
                }
                <footer>
                    {
                        type === "editProduct" && <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    }
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