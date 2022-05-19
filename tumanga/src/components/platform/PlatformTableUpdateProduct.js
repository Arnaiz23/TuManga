import React, { useEffect, useState } from "react";
import { api_URL } from "services/config";
import getOneProduct from 'services/getOneProduct'

export default function PlatformTableUpdateProduct({ data, product, setProduct, setImage, image }) {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOneProduct(data).then(data => {
            setProduct(data.product)
            setLoading(false)
        })
    }, [data, setProduct])

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <section>
            {loading
                ? (
                    <h2>Cargando...</h2>
                )
                : (
                    <>
                        <div className="inputAdmin">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="price">Precio</label>
                            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="description">Descripción</label>
                            <textarea value={product.description} name="description" id="description" onChange={handleChange}></textarea>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="short_description">Descripción Corta</label>
                            <textarea value={product.short_description} name="short_description" id="short_description" onChange={handleChange}></textarea>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="state">Estado</label>
                            <select id="state" name="state" defaultValue={product.state} onChange={handleChange}>
                                <option value="new">Nuevo</option>
                                <option value="old">Antiguo</option>
                            </select>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="stock">Stock</label>
                            <input type="number" id="stock" name="stock" value={product.stock} onChange={handleChange} />
                        </div>
                        {/* <div className="inputAdmin">
                    <label htmlFor="stock">Categorias</label>
                    <input type="number" id="stock" name="stock" value={product.stock} />
                </div> */}
                        <div className="inputAdmin">
                            <label htmlFor="type">Tipo</label>
                            <select id="type" name="type" defaultValue={product.type} onChange={handleChange}>
                                <option value="manga">Manga</option>
                                <option value="novela ligera">Novela Ligera</option>
                                <option value="merchandising">Merchandising</option>
                            </select>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="authors">Autor</label>
                            <input type="text" id="authors" name="authors" value={product.authors} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="editorial">Editorial</label>
                            <input type="text" id="editorial" name="editorial" value={product.editorial} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="series">Serie</label>
                            <input type="text" id="series" name="series" value={product.series} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="image">Imagen</label>
                            <input type="file" name="image" id="image" onChange={handleImage}></input>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="actual_image">Imagen Actual</label>
                            <img className="imageSmall" src={`${api_URL}/image/${product.image}`} alt={`portada del manga ${product.name}`} />
                        </div>
                    </>
                )
            }
        </section>
    )

}