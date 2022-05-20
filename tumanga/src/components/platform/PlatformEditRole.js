import Spinner from "components/publicFolder/Spinner/Spinner";
import React, { useState } from "react";
import { createRole, deleteRole, updateRole } from "services/Admin";
import Swal from "sweetalert2";
import { useLocation } from "wouter";

export default function PlatformEditRole({ type, role, loading, setRole }) {

    const [newRole, setNewRole] = useState({
        "name": ""
    })

    const setLocation = useLocation()[1]

    const handleCreate = () => {

        if (newRole.name === "") {
            return Swal.fire(
                'Datos erróneos',
                "Rellene todos los campos obligatorios",
                'warning'
            )
        }

        createRole(newRole).then(data => {
            if (data.message) return alert(data.message)

            Swal.fire(
                'Rol',
                'Rol creado con éxito',
                'success'
            )
            setLocation("/platform/roles")
        })
    }

    const handleUpdate = () => {

        if (role.name === "") {
            return Swal.fire(
                'Datos erróneos',
                'Debes rellenar los campos obligatorios',
                'warning'
            )
        }

        updateRole(role._id, role).then(data => {
            if(data.message) return alert(data.message)
            
            Swal.fire(
                'Rol',
                'Rol actualizado con éxito',
                'success'
            )
        })
    }

    const handleDelete = () => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una vez eliminado, no podrás recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'No, cancelar',
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
          }).then((result) => {
            if (result.isConfirmed) {
              deleteRole(role._id).then(data => {
                  if(data.message) return alert(data.message)

                  Swal.fire(
                    'Rol',
                    'El rol ha sido eliminado correctamente',
                    'success'
                  )

                  setLocation("/platform/roles")
              })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire(
                'Cancelado',
                'El rol está a salvo',
                'error'
              )
            }
          })
        
    }

    const handleChangeData = (e) => {
        setNewRole({
            ...newRole,
            [e.target.name]: e.target.value.toLocaleLowerCase()
        })
    }

    const handleChangeDataUpdate = (e) => {
        setRole({
            ...role,
            [e.target.name]: e.target.value.toLocaleLowerCase()
        })
    }

    return (
        <main className="adminMain">
            <div className="containerAdminCenter">
                <header>
                    <h2>Rol</h2>
                </header>
                {
                    type === "newRole" && (
                        <section>
                            <div className="inputAdmin">
                                <label htmlFor="name">Nombre <span className="obligatoryFields">*</span></label>
                                <input type="text" id="name" name="name" value={newRole.name} onChange={handleChangeData} />
                            </div>
                        </section>
                    )
                }
                {
                    type === "role" &&
                    <section>
                        {loading
                            ? <Spinner />
                            : (

                                <div className="inputAdmin">
                                    <label htmlFor="name">Nombre <span className="obligatoryFields">*</span></label>
                                    <input type="text" id="name" name="name" value={role.name} onChange={handleChangeDataUpdate} />
                                </div>

                            )}
                    </section>
                }
                <footer>
                    {
                        type === "role" && <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    }
                    {
                        type === "role" && <button className="btn btn-success" onClick={handleUpdate}>Guardar</button>
                    }
                    {
                        type === "newRole" && <button className="btn btn-success" onClick={handleCreate}>Guardar</button>
                    }
                </footer>
            </div>
        </main>
    )

}