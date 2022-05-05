import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { updateUser } from "services/Users";

export default function DataAccount() {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const { setUserData, userData, loading } = useUser()
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
                setUserData({userUpdate})
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
        if (userData.userFind !== undefined) {
            setName(userData.userFind.name)
            setLastName(userData.userFind.last_name)
        }else if(userData.userUpdate !== undefined){
            setName(userData.userUpdate.name)
            setLastName(userData.userUpdate.last_name)
        }
    }, [setUserData, userData, loadingUpdate])

    return (
        <div className="rowAccount">
            <h3>Datos de mi cuenta</h3>
            {loading
                ? (
                    <h2>Cargando...</h2>
                )
                : (
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
                )
            }
        </div>
    )
}