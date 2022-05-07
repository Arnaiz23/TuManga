import React, { useEffect, useState } from "react";
import getFilters from "services/getFilters";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function FilterProducts({ change, filterOrigin }) {

    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState([])

    useEffect(() => {
        setLoading(true)
        getFilters().then(res => {
            setLoading(false)
            setFilters(res.categories)
            // console.log(res.products);
        })
    }, [])

    return (
        <div className="containersFilters">
            <div className="containerFilter">
                <header>Tipos</header>
                <div className="lineFilter"></div>
                <div className="optionFilter">
                    <input type="checkbox" id="" className="checkboxFilter" />
                    <p>Manga</p>
                </div>
                <div className="optionFilter">
                    <input type="checkbox" id="" className="checkboxFilter" />
                    <p>Novela ligera</p>
                </div>
            </div>
            <div className="containerFilter">
                <header>Categorias</header>
                <div className="lineFilter"></div>
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : (
                            filters.map(filter => <FilterCheckbox name={filter} key={filter} change={change} filterOrigin={filterOrigin} />)
                        )
                }
            </div>
        </div>
    )
}