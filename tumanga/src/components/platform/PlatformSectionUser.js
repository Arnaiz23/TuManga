import Spinner from "components/publicFolder/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import { getOnerUser } from "services/Admin";
import Swal from "sweetalert2";

export default function PlatformSectionUser({ data, setData, user, setUser, role, setRole }) {

    // const [user, setUser] = useState({})
    // const [role, setRole] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOnerUser(data).then(user => {
            if (user.message) {
                setLoading(false)
                return Swal.fire(
                    'Lo sentimos',
                    'Hubo un error al intentar recuperar al usuario',
                    'error'
                )
            }
            setRole(user.roleName)
            setUser(user.userFind)
            setLoading(false)
        })
    }, [data, setUser, setRole])

    const handleChangeData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            {loading
                ? <Spinner />
                : <>
                    <div className="inputAdmin">
                        <label htmlFor="name">Nombre</label>
                        {user.name !== undefined
                            ? <input type="text" id="name" name="name" value={user.name} onChange={handleChangeData} />
                            : <input type="text" id="name" name="name" value="" onChange={handleChangeData} />
                        }
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="lastName">Apellidos</label>
                        {user.last_name !== undefined
                            ? <input type="text" id="lastName" name="last_name" value={user.last_name} onChange={handleChangeData} />
                            : <input type="text" id="lastName" name="last_name" value="" onChange={handleChangeData} />
                        }
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="role">Rol</label>
                        <select id="role" name="role" defaultValue={role} onChange={handleChangeData}>
                            <option value="admin">Admin</option>
                            <option value="owner">Owner</option>
                            <option value="empleado">Empleado</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChangeData} />
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" title="Escriba una contraseña si desea cambiarla" placeholder="Escriba una contraseña si desea cambiarla" onChange={handleChangeData} />
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="state">Estado</label>
                        <select id="state" name="state" onChange={handleChangeData} defaultValue={user.state}>
                            <option value="Active">Activo</option>
                            <option value="Disabled">Desactivado</option>
                        </select>
                    </div>
                </>
            }
        </section>
    )
}