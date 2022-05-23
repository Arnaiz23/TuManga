import React, { useEffect, useState } from "react";
import { updateUser } from "services/Users";
import Swal from "sweetalert2";

export default function DataAccount({ data, change }) {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loadingUpdate, setLoadingUpdate] = useState(false)

    const changeData = (e) => {
        e.preventDefault()

        let body = {
            "name": name || "",
            "last_name": lastName || ""
        }

        setLoadingUpdate(true)

        updateUser(body).then(({ status, userUpdate }) => {
            if (status === "success") {
                change({ userUpdate })
                Swal.fire(
                    'Usuario',
                    'Usuario actualizado correctamente',
                    'success'
                )
                e.target.reset()
            }

            setLoadingUpdate(false)
        })
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    useEffect(() => {
        if (data.userFind !== undefined) {
            setName(data.userFind.name)
            setLastName(data.userFind.last_name)
        } else if (data.userUpdate !== undefined) {
            setName(data.userUpdate.name)
            setLastName(data.userUpdate.last_name)
        }
    }, [loadingUpdate])

    return (
        <div className="rowAccount">
            <h3>Datos de mi cuenta</h3>
            <form onSubmit={changeData}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="userName">Nombre</label>
                        <input type="text" id="userName" onChange={handleChangeName} placeholder={name} />
                    </div>
                    <div className="col">
                        <label htmlFor="userLastName">Apellidos</label>
                        <input type="text" id="userLastName" onChange={handleChangeLastName} placeholder={lastName} />
                    </div>
                </div>
                <div className="rowEnd">
                    <button className="btn btn-success">Guardar</button>
                </div>
            </form>
        </div>
    )
}