import React from "react";
import { deleteUser, userChangeState } from "services/Users";

import Swal from 'sweetalert2'
import { useLocation } from "wouter";

export default function DeleteAccount() {

    const [location, setLocation] = useLocation()

    const deleteAccount = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Seguro que no prefieres deshabilitar la cuenta?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Deshabilitar',
            denyButtonText: `Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                // Disabled
                userChangeState().then(data => {
                    if (data.userUpdate) {
                        Swal.fire('Deshabilitada', 'La cuenta ha sido deshabilitada satisfactoriamente', 'success')
                        localStorage.removeItem("token")
                        setLocation("/")
                    } else {
                        console.log(data);
                    }
                })
            } else if (result.isDenied) {
                // Delete
                Swal.fire({
                    title: '¿Estas seguro de eliminarla?',
                    text: "Si la eliminas ya no habrá vuelta atrás",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#b10005',
                    cancelButtonColor: '#6e7881',
                    confirmButtonText: 'Sí, eliminarla'
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteUser().then(res => {
                            if (res.userDelete) {
                                Swal.fire('Eliminada', 'La cuenta ha sido eliminada satisfactoriamente', 'success')
                                localStorage.removeItem("token")
                                setLocation("/")
                            } else {
                                console.log(res);
                            }
                        })
                    }
                })

            }
        })
    }

    return (
        <div className="colCenter">
            <h3>Eliminar Cuenta</h3>
            <button className="btn btn-danger" role="button" onClick={deleteAccount}>Eliminar</button>
        </div>
    )
}