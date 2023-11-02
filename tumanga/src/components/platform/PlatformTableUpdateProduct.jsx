import React, { useEffect, useState } from "react"
import Spinner from "@components/publicFolder/Spinner/Spinner"

import { apiURL } from "@/services/config"
import getOneProduct from "@/services/getOneProduct"

export default function PlatformTableUpdateProduct({
  data,
  product,
  setProduct,
  setImage,
  setCategories,
  categories,
}) {
  const [loading, setLoading] = useState(false)
  const [newCategorie, setNewCategorie] = useState("")

  const inputCategorieRef = React.createRef()

  useEffect(() => {
    setLoading(true)
    getOneProduct(data).then((data) => {
      setProduct(data.product)
      setLoading(false)
      setCategories(data.product.categories)
    })
  }, [data, setProduct, setCategories])

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleAddCategorie = (e) => {
    e.preventDefault()
    if (newCategorie === "") return
    setCategories([...categories, newCategorie.toLocaleLowerCase()])
    e.target.reset()
    setNewCategorie("")
  }

  const deleteCategorie = (e) => {
    setCategories(categories.filter((cat) => cat !== e.target.innerHTML))
  }

  const handleChangeCategorie = (e) => {
    setNewCategorie(e.target.value)
  }

  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="inputAdmin">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              title={product.name}
            />
          </div>
          <div className="inputAdmin">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="inputAdmin">
            <label htmlFor="description">Descripción</label>
            <textarea
              value={product.description}
              name="description"
              id="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="inputAdmin">
            <label htmlFor="shortdescription">Descripción Corta</label>
            <textarea
              value={product.short_description}
              name="shortdescription"
              id="shortdescription"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="inputAdmin">
            <label htmlFor="state">Estado</label>
            <select
              id="state"
              name="state"
              defaultValue={product.state}
              onChange={handleChange}
            >
              <option value="new">Nuevo</option>
              <option value="old">Antiguo</option>
            </select>
          </div>
          <div className="inputAdmin">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>

          <div className="inputAdmin">
            <label htmlFor="categories">Categorias</label>
            <form className="addCategorie" onSubmit={handleAddCategorie}>
              <input
                type="text"
                id="categories"
                name="categories"
                placeholder="Añade una categoría"
                onChange={handleChangeCategorie}
                ref={inputCategorieRef}
              />
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
            <label htmlFor="type">Tipo</label>
            <select
              id="type"
              name="type"
              defaultValue={product.type}
              onChange={handleChange}
            >
              <option value="manga">Manga</option>
              <option value="novela ligera">Novela Ligera</option>
              <option value="merchandising">Merchandising</option>
            </select>
          </div>
          <div className="inputAdmin">
            <label htmlFor="authors">Autor</label>
            <input
              type="text"
              id="authors"
              name="authors"
              value={product.authors}
              onChange={handleChange}
            />
          </div>
          <div className="inputAdmin">
            <label htmlFor="editorial">Editorial</label>
            <input
              type="text"
              id="editorial"
              name="editorial"
              value={product.editorial}
              onChange={handleChange}
            />
          </div>
          <div className="inputAdmin">
            <label htmlFor="series">Serie</label>
            <input
              type="text"
              id="series"
              name="series"
              value={product.series}
              onChange={handleChange}
            />
          </div>
          <div className="inputAdmin">
            <label>Imagen</label>
            <label htmlFor="image" className="btn btn-primary">
              Subir
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImage}
            ></input>
          </div>
          <div className="inputAdmin">
            <label htmlFor="actualimage">Imagen Actual</label>
            {product.image && (
              <img
                className="imageSmall"
                src={`${apiURL}/image/${product.image}`}
                alt={`portada del manga ${product.name}`}
              />
            )}
          </div>
        </>
      )}
    </section>
  )
}
