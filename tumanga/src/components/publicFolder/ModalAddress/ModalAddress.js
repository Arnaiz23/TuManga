import React from 'react';

export default function ModalAdddress({ data }) {
    
    return (
        <main>
            <div className="modalInfo">
                <label htmlFor="email">Nombre calle</label>
                <p>{data.name}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="state">Número</label>
                {data.number
                    ? <p>{data.number}</p>
                    : <p>No hay número</p>
                }
            </div>
            <div className="modalInfo">
                <label htmlFor="id">Piso</label>
                {data.floor 
                    ? <p>{data.floor}</p>
                    : <p>No hay piso</p>
                }
            </div>
            <div className="modalInfo">
                <label htmlFor="orders">Localidad</label>
                <p>{data.location}</p>
            </div>
            <div className="modalInfo">
                <label htmlFor="role">Nombre</label>
                <p>{data.name_person}</p>
            </div>
        </main>
    )
}