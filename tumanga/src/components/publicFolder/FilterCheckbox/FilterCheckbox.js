import React from "react";

export default function FilterCheckbox({ name, size, change }) {

    const handleChange = (e) => {
        change(prevData => {
            if(!prevData.includes(e.target.id)){
                return prevData.concat(e.target.id)
            }else{
                prevData.splice(prevData.indexOf(e.target.id), 1)
                return prevData
            }
        })
    }

    return (
        <div className={size ? '' : "optionFilter"}>
            <input type="checkbox" id={name} className="checkboxFilter" onChange={handleChange} />
            <p>{name}</p>
        </div>
    )
}