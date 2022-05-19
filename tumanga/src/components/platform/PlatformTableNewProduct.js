import React, { useState } from "react";

export default function PlatformTableNewProduct({ setNewProduct, newProduct, setImage }) {

    const [loading, setLoading] = useState(false)
    const [newCategorie, setNewCategorie] = useState('')
    const [categories, setCategories] = useState([])

    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleAddCategorie = (e) => {
        e.preventDefault()
        if (newCategorie === "") return
        const categories = newProduct.categories
        categories.push(newCategorie.toLocaleLowerCase())
        setCategories(categories)
        e.target.reset()
        setNewCategorie('')
    }

    const deleteCategorie = (e) => {
        const categories = newProduct.categories
        categories.splice(categories.indexOf(e.target.innerHTML), 1)
        setCategories(categories)
    }

    const handleChangeCategorie = (e) => {
        setNewCategorie(e.target.value)
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
                            <label htmlFor="name">Nombre <span className="obligatoryFields">*</span></label>
                            <input type="text" id="name" name="name" onChange={handleChange} value={newProduct.name} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="price">Precio <span className="obligatoryFields">*</span></label>
                            <input type="number" id="price" name="price" onChange={handleChange} min="0" max="100" value={newProduct.price} />
                        </div> 
                        <div className="inputAdmin">
                            <label htmlFor="description">Descripción <span className="obligatoryFields">*</span></label>
                            <textarea name="description" id="description" onChange={handleChange} value={newProduct.description}></textarea>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="short_description">Descripción Corta <span className="obligatoryFields">*</span></label>
                            <textarea name="short_description" id="short_description" onChange={handleChange} value={newProduct.short_description}></textarea>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="state">Estado <span className="obligatoryFields">*</span></label>
                            <select id="state" name="state" onChange={handleChange} defaultValue="0">
                                <option value="0">Selecciona una opción...</option>
                                <option value="new">Nuevo</option>
                                <option value="old">Antiguo</option>
                            </select>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="stock">Stock <span className="obligatoryFields">*</span></label>
                            <input type="number" id="stock" name="stock" onChange={handleChange} value={newProduct.stock} />
                        </div>

                        <div className="inputAdmin">
                            <label htmlFor="categories">Categorias <span className="obligatoryFields">*</span></label>
                            <form className="addCategorie" onSubmit={handleAddCategorie}>
                                <input type="text" id="categories" name="categories" placeholder="Añade una categoría" onChange={handleChangeCategorie} />
                                <button className="btnCategorieAdd">Add</button>
                            </form>
                            {/* {categories && <p>{categories.join(" - ")}</p>} */}
                            <span className="spanCategoriesAdmin">
                                {categories.map((cat, index) => {
                                    return (
                                        <React.Fragment key={cat + index}>
                                            <b onClick={deleteCategorie}>{cat}</b>
                                            {index < categories.length - 1 && <p> - </p>}
                                        </React.Fragment>
                                    )
                                })}
                            </span>
                        </div>

                        <div className="inputAdmin">
                            <label htmlFor="type">Tipo <span className="obligatoryFields">*</span></label>
                            <select id="type" name="type" onChange={handleChange} defaultValue="0">
                                <option value="0" disabled>Selecciona una opción...</option>
                                <option value="manga">Manga</option>
                                <option value="novela ligera">Novela Ligera</option>
                                <option value="merchandising">Merchandising</option>
                            </select>
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="authors">Autor</label>
                            <input type="text" id="authors" name="authors" value={newProduct.author} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="editorial">Editorial</label>
                            <input type="text" id="editorial" name="editorial" value={newProduct.editorial} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label htmlFor="series">Serie</label>
                            <input type="text" id="series" name="series" value={newProduct.series} onChange={handleChange} />
                        </div>
                        <div className="inputAdmin">
                            <label>Imagen <span className="obligatoryFields">*</span></label>
                            <label htmlFor="image" className="btn btn-primary">Subir</label>
                            <input type="file" name="image" id="image" onChange={handleImage}></input>
                        </div>
                    </>
                )
            }
        </section>
    )
    
}