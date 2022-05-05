import React from "react";
import { userChangeState } from "services/Users";

import Swal from 'sweetalert2'

export default function DeleteAccount() {

    const deleteAccount = () => {
        Swal.fire({
            title: '¿Seguro que no prefieres deshabilitar la cuenta?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Deshabilitar',
            denyButtonText: `Eliminar`,
          }).then((result) => {
            if (result.isConfirmed) {
                // Disabled
                userChangeState().then(data => {
                    if(data.userUpdate){
                        Swal.fire('Deshabilitada', 'La cuenta ha sido deshabilitada satisfactoriamente', 'success')
                        localStorage.removeItem("token")
                    }else{
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
                      Swal.fire('Eliminada', 'La cuenta ha sido eliminada satisfactoriamente', 'success')
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