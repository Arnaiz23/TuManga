import React from "react";
import "moment/locale/es"
import Moment from "react-moment";

export default function PlatformModalProducts({ data }) {

    return (
        <main>
            <div className="modalInfo">
                <label htmlFor="id">ID</label>
                <p>{data._id}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="name">NOMBRE</label>
                <p>{data.name}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="price">PRECIO</label>
                <p>{data.price}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="upload_date">FECHA SUBIDA</label>
                <p><Moment format="DD/MM/YYYY">{data.upload_date}</Moment></p>
            </div>
            <div className="modalInfo">
                <label htmlFor="description">DESCRIPCION</label>
                <p>{data.description}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="short_description">DESCRIPCION CORTA</label>
                <p>{data.short_description}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="state">ESTADO</label>
                <p>{data.state}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="stock">STOCK</label>
                <p>{data.stock}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="type">TIPO</label>
                <p>{data.type}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="categories">Categorias</label>
                <p>{data.categories.join(" - ")}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="number_sales">Nº DE VENTAS</label>
                <p>{data.number_sales}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="authors">Autores</label>
                <p>{data.authors}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="editorial">Editorial</label>
                <p>{data.editorial}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="series">Series</label>
                <p>{data.series}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="comments">Nº Comentarios</label>
                <p>{data.comments.length}</p>
            </div>
        </main>
    )

}