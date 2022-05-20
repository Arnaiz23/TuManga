import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import PlatformTableComments from "components/platform/PlatformTableComments";
import PlatformTableResponsiveComments from "components/platform/PlatformTableResponsiveComments";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Spinner from "components/publicFolder/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import { getAllComments } from "services/Admin";

const TITLES_TABLE = ["id", "Fecha", "Titulo", "Mensaje", "Producto", "Id usuario", "Puntuacion", "Eliminar"]
const TITLES_TABLE_RESPONSIVE = ["id", "Producto", "Ver", "Eliminar"]

export default function PlatformComments() {

    const [comments, setComments] = useState([])
    const [commentsEmpty, setCommentsEmpty] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchComments = () => {
        setLoading(true)
        getAllComments().then(data => {
            if(data.message){
                setCommentsEmpty(true)
                setLoading(false)
            }

            setComments(data.comments)
            setCommentsEmpty(false)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className="gridAdmin">
            <PlatformHeader />
            <PlatformNav />
            <PlatformNavResponsive />
            <main className="adminMain">
                <div className="containerDataAdmin">
                    <div className="rowAdminTitle">
                        <h2>Comentarios</h2>
                    </div>
                    {loading
                        ? <Spinner />
                        : (
                            <>
                                <PlatformTableComments titles={TITLES_TABLE} data={comments} dataEmpty={commentsEmpty} setData={setComments} setDataEmpty={setCommentsEmpty} />
                                <PlatformTableResponsiveComments titles={TITLES_TABLE_RESPONSIVE} data={comments} dataEmpty={commentsEmpty} setData={setComments} setDataEmpty={setCommentsEmpty} />
                            </>
                        )
                    }

                </div>
            </main>
            <BtnUp />
        </div>
    )

} 