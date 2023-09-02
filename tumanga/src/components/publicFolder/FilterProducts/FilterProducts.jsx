import React, { useContext, useEffect, useState } from "react";
import getFilters from "services/getFilters";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import ProductContext from "context/ProductsContext";
import getFilterProducts from "services/getFilterProducts";
import useProducts from "hooks/useProducts";

export default function FilterProducts({ type }) {

    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState([])
    const [actualFilters, setActualFilters] = useState([])

    const mangaRef = React.createRef()
    const novelaRef = React.createRef()

    const { page } = useProducts()

    const { setActualType, actualType, setProducts, filter, setCount } = useContext(ProductContext)

    useEffect(() => {
        setLoading(true)
        getFilters().then(res => {
            setLoading(false)
            setFilters(res.categories)
            // console.log(res.products);
        })
        setActualType("comics")
    }, [setActualType])

    const handleChange = (e) => {
        // setActualType(e.target.name)
        // ! Comprobar que hay alguno check, sino "comics"
        // ! Uncheck el otro

        if(!mangaRef.current.checked && !novelaRef.current.checked){
            setActualType("comics")
        }else if(mangaRef.current.checked && !novelaRef.current.checked && e.target.name === "manga"){ 
            setActualType("manga")
        }else{
            setActualType("novela")
        }
        
        getFilterProducts((8*page), filter, actualType).then(data =>{
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
        })

    }

    return (
        <div className="containersFilters">
            {type === "mangas"
                && (
                    <div className="containerFilter">
                        <header>Tipos</header>
                        <div className="lineFilter"></div>
                        <div className="optionFilter">
                            <input type="checkbox" id="" className="checkboxFilter" name="manga" onClick={handleChange} ref={mangaRef} />
                            <p>Manga</p>
                        </div>
                        <div className="optionFilter">
                            <input type="checkbox" id="" className="checkboxFilter" name="novela" onClick={handleChange} ref={novelaRef} />
                            <p>Novela ligera</p>
                        </div>
                    </div>
                )}
            <div className="containerFilter">
                <header>Categorias</header>
                <div className="lineFilter"></div>
                {
                    loading
                        ? <h3>Cargando...</h3>
                        : (
                            filters.map(filter => <FilterCheckbox name={filter} key={filter} actualFilters={actualFilters} changeActualFilters={setActualFilters} />)
                        )
                }
            </div>
        </div>
    )
}