import React, { useState } from "react";
import { createUser, updateOneUser } from "services/Admin";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import PlatformSectionNewUser from "./PlatformSectionNewUser";
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
            if (update.message) return alert(update.message)
            setUser(update.userUpdate)
            Swal.fire(
                'Usuario',
                'Usuario actualizado con éxito',
                'success'
            )
        })

    }

    const [newUser, setNewUser] = useState({
        "email": "",
        "password": "",
        "role": "",
        "name": "",
        "last_name": "",
        "state": ""
    })

    const setLocation = useLocation()[1]

    const handleCreate = () => {
        if (newUser.email === "" || newUser.password === "" || newUser.role === "" || newUser.state === "") {
            return Swal.fire(
                'Datos incorrectos',
                'Debes rellenar todos los campos obligatorios',
                'warning'
            )
        }

        const regexpPassword = /^[a-zA-Z0-9*/$%&Ç]{6,16}$/

        if(!regexpPassword.test(newUser.password)){
            return Swal.fire(
                'Datos incorrectos',
                'La contraseña no cumple con los requisitos',
                'error'
            )
        }

        const regexpEmail = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/

        if(!regexpEmail.test(newUser.email)){
            return Swal.fire(
                'Datos incorrectos',
                'El correo no cumple con los requisitos'
            )
        }

        createUser(newUser).then(data => {
            if(data.message === "This email already exists"){
                return Swal.fire(
                    'Datos incorrectos',
                    'Ya existe un usuario con ese correo',
                    'error'
                )
            }
            Swal.fire(
                'Usuario',
                'Usuario creado con éxito',
                'success'
            )
            setLocation("/platform/users")
        })
    }

    return (
        <main className="adminMain">
            <div className="containerAdminCenter">
                <header>
                    <h2>{title}</h2>
                </header>
                {
                    type === "user" && <PlatformSectionUser data={data} setUser={setUser} user={user} setRole={setRole} role={role} />
                }
                {
                    type === "newUser" && <PlatformSectionNewUser user={newUser} setUser={setNewUser} />
                }
                <footer>
                    {
                        type === "user" && <button className="btn btn-success" onClick={handleUpdate}>Guardar</button>
                    }
                    {
                        type === "newUser" && <button className="btn btn-success" onClick={handleCreate}>Guardar</button>
                    }
                </footer>
            </div>
        </main>
    )

}