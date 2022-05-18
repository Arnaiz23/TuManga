import React, { useState } from "react";
import { updateOneUser } from "services/Admin";
import Swal from "sweetalert2";
import PlatformSectionUser from "./PlatformSectionUser";

const ROLES = ["admin", "empleado", "owner", "usuario"]

export default function PlatformEditForm({ title, type, data }) {

    let [user, setUser] = useState({})
    const [role, setRole] = useState('')

    const handleUpdate = () => {
        if (!ROLES.includes(user.role)) {
            user.role = role
        }

        updateOneUser(data, user).then(update => {
            if(update.message) return alert(update.message)
            setUser(update.userUpdate)
            Swal.fire(
                'Usuario',
                'Usuario actualizado con éxito',
                'success'
            )
        })

    }

    return (
        <main className="adminMain">
            <div className="containerAdminCenter">
                <header>
                    <h2>EDITAR {title}</h2>
                </header>
                {
                    type === "user" && <PlatformSectionUser data={data} setUser={setUser} user={user} setRole={setRole} role={role} />
                }
                <footer>
                    <button className="btn btn-success" onClick={handleUpdate}>Guardar</button>
                </footer>
            </div>
        </main>
    )

}