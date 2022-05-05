import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { updateUser } from "services/Users";

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
                alert("Usuario actualizado")
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
                    <button className="btn btn-success" role="button">Guardar</button>
                </div>
            </form>
        </div>
    )
}