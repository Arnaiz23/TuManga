import React, { useEffect, useState } from "react"
import PlatformSectionNewUser from "@components/platform/PlatformSectionNewUser"
import PlatformSectionUser from "@components/platform/PlatformSectionUser"
import Swal from "sweetalert2"
import { useLocation } from "wouter"

import {
  createUser,
  deleteUser,
  getAllRoles,
  updateOneUser,
} from "@/services/Admin"

export default function PlatformEditForm({ title, type, data }) {
  const [user, setUser] = useState({})
  const [role, setRole] = useState("")
  const [roles, setRoles] = useState([])

  useEffect(() => {
    getAllRoles().then((data) => {
      const array = []
      data.roles.map((role) => array.push(role.name))
      setRoles(array)
    })
  }, [setRoles])

  const handleUpdate = () => {
    if (!roles.includes(user.role)) {
      user.role = role
    }

    updateOneUser(data, user).then((update) => {
      if (update.message) {
        return Swal.fire(
          "Lo sentimos",
          "Hubo un error al intentar modificarlo",
          "error",
        )
      }
      setUser(update.userUpdate)
      Swal.fire("Usuario", "Usuario actualizado con éxito", "success")
      setLocation("/platform/users")
    })
  }

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    last_name: "",
    state: "",
  })

  const setLocation = useLocation()[1]

  const handleCreate = () => {
    if (
      newUser.email === "" ||
      newUser.password === "" ||
      newUser.role === "" ||
      newUser.state === ""
    ) {
      return Swal.fire(
        "Datos incorrectos",
        "Debes rellenar todos los campos obligatorios",
        "warning",
      )
    }

    const regexpPassword = /^[a-zA-Z0-9*/$%&Ç]{6,16}$/

    if (!regexpPassword.test(newUser.password)) {
      return Swal.fire(
        "Datos incorrectos",
        "La contraseña no cumple con los requisitos",
        "error",
      )
    }

    const regexpEmail = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/

    if (!regexpEmail.test(newUser.email)) {
      return Swal.fire(
        "Datos incorrectos",
        "El correo no cumple con los requisitos",
        "error",
      )
    }

    createUser(newUser).then((data) => {
      if (data.message === "This email already exists") {
        return Swal.fire(
          "Datos incorrectos",
          "Ya existe un usuario con ese correo",
          "error",
        )
      }
      Swal.fire("Usuario", "Usuario creado con éxito", "success")
      setLocation("/platform/users")
    })
  }

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez eliminado, no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(user._id).then((data) => {
          if (data.message) {
            return Swal.fire(
              "Lo sentimos",
              "Hubo un error al intentar crearlo",
              "error",
            )
          }

          Swal.fire("Usuario", "Usuario eliminado correctamente", "success")

          setLocation("/platform/users")
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "El usuario está a salvo", "error")
      }
    })
  }

  return (
    <main className="adminMain">
      <div className="containerAdminCenter">
        <header>
          <h2>{title}</h2>
        </header>
        {type === "user" && (
          <PlatformSectionUser
            data={data}
            setUser={setUser}
            user={user}
            setRole={setRole}
            role={role}
          />
        )}
        {type === "newUser" && (
          <PlatformSectionNewUser user={newUser} setUser={setNewUser} />
        )}
        <footer>
          {type === "user" && (
            <button className="btn btn-danger" onClick={handleDelete}>
              Eliminar
            </button>
          )}
          {type === "user" && (
            <button className="btn btn-success" onClick={handleUpdate}>
              Guardar
            </button>
          )}
          {type === "newUser" && (
            <button className="btn btn-success" onClick={handleCreate}>
              Guardar
            </button>
          )}
        </footer>
      </div>
    </main>
  )
}
