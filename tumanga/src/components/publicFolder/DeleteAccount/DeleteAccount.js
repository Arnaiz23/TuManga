import React from "react";

export default function DeleteAccount({ data }) {

    const deleteAccount = () => {
        window.confirm("Disable or delete?")
    }
    
    return (
        <div className="colCenter">
            <h3>Eliminar Cuenta</h3>
            <button className="btn btn-danger" role="button" onClick={deleteAccount}>Eliminar</button>
        </div>
    )
}