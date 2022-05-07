import useProducts from "hooks/useProducts";
import React from "react";

export default function FilterCheckbox({ name, size }) {

    const { setFilter } = useProducts()

    const handleChange = (e) => {
        if(e.target.checked){
            setFilter(e.target.id)
        }else{
            setFilter("null")
        }
        /* change(prevData => {
            if(!prevData.includes(e.target.id)){
                return prevData.concat(e.target.id)
            }else{
                prevData.splice(prevData.indexOf(e.target.id), 1)
                return prevData
            }
        }) */
    }

    return (
        <div className={size ? '' : "optionFilter"}>
            <input type="checkbox" id={name === "realidad virtual" ? "realidad" : name} className="checkboxFilter" onChange={handleChange} />
            <p>{name}</p>
        </div>
    )
}