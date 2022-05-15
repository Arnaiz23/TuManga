import useProducts from "hooks/useProducts";
import React, { useContext, useEffect } from "react";

import ProductContext from "context/ProductsContext";
import getFilterProducts from "services/getFilterProducts";

export default function FilterCheckbox({ name, size }) {

    const { page } = useProducts()
    const { setProducts, setCount, filter, setFilter, actualType, setProductsEmpty } = useContext(ProductContext)

    const handleChange = (e) => {
        if (e.target.checked) {
            let filterAll = filter
            filterAll.push(e.target.id)
            setFilter(filter)
        } else {
            let filterAll = filter
            filterAll.splice(filterAll.indexOf(e.target.id), 1)
            setFilter(filterAll)
        }

        let finalFilter

        if(filter.length > 0){
            finalFilter = filter.join(";") 
        }else{
            finalFilter = "null"
        }

        getFilterProducts((8*page), finalFilter, actualType).then(data =>{
            if(data.message) return setProductsEmpty(true)
            setProducts(data.products)
            setCount(Math.ceil(data.count / 8))
            setProductsEmpty(false)
        })

    }

    return (
        <div className={size ? '' : "optionFilter"}>
            <input type="checkbox" id={name === "realidad virtual" ? "realidad" : name} className="checkboxFilter" onChange={handleChange} />
            <p>{name}</p>
        </div>
    )
}