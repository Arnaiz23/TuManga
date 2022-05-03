import React from "react";

export default function FilterCheckbox({ name, size }) {
    return (
        <div className={size ? '' : "optionFilter"}>
            <input type="checkbox" id="" className="checkboxFilter" />
            <p>{name}</p>
        </div>
    )
}