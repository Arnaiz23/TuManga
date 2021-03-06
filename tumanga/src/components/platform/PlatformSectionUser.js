import Spinner from "components/publicFolder/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import { getAllRoles, getOnerUser } from "services/Admin";
import Swal from "sweetalert2";

export default function PlatformSectionUser({ data, setData, user, setUser, role, setRole }) {

    // const [user, setUser] = useState({})
    // const [role, setRole] = useState('')
    const [loading, setLoading] = useState(false)
    const [roles, setRoles] = useState([])

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

    useEffect(() => {
        getAllRoles().then(data => {
            setRoles(data.roles)
        })
    }, [setRoles])

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
                            {
                                roles.map(role => <option value={role.name} key={role._id}>{role.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChangeData} />
                    </div>
                    <div className="inputAdmin">
                        <label htmlFor="password">Contrase??a</label>
                        <input type="password" name="password" id="password" title="Escriba una contrase??a si desea cambiarla" placeholder="Escriba una contrase??a si desea cambiarla" onChange={handleChangeData} />
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