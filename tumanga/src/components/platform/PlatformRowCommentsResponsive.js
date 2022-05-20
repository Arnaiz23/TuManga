import { faEye, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalInfo from "components/publicFolder/ModalInfo/ModalInfo";
import React, { useState } from "react";
import { deleteCommentAdmin } from "services/Admin";
import Swal from "sweetalert2";

export default function PlatformRowCommentsResponsive({ comment, setCommentsEmpty, setComments }) {

    const [modalShowData, setModalShowData] = useState(false)

    const handleShowDetail = () => {
        setModalShowData(true)
    }

    const deleteComment = () => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una vez eliminado, no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar.',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCommentAdmin(comment._id).then(data => {
                    if (data.message) return alert(data.message)

                    Swal.fire(
                        'Comentario',
                        'Comentario eliminado correctamente',
                        'success'
                    )

                    if(data.allComments.length <= 0) return setCommentsEmpty(true)

                    setComments(data.allComments)

                })
            }else{
                Swal.fire(
                    'Comentario',
                    'El comentario está a salvo',
                    'success'
                )
            }
        })


    }

    return (
        <>
            <div className="rowTable">
                <p className="tableTrId" title={comment._id}>{comment._id}</p>
                <p className="tableTrId" title={comment.product_name}>{comment.product_name}</p>
                <p className="btnShowModal"><i onClick={handleShowDetail}><FontAwesomeIcon icon={faEye} /></i></p>
                <p className="btnShowModal"><i onClick={deleteComment}><FontAwesomeIcon icon={faXmark} /></i></p>
            </div>
            {modalShowData && <ModalInfo type="platformComments" change={setModalShowData} data={comment} />}
        </>
    )

}