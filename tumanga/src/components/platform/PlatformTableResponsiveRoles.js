import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "wouter";

export default function PlatformTableResponsiveRoles({ titles, data, dataEmpty }) {

    return (
        <div className="containerTableResponsive containerTableCool">
            {dataEmpty
                ? <h3>No hay coincidencias</h3>
                : (
                    <>
                        <header>
                            {titles.map(title => <b key={title}>{title}</b>)}
                        </header>
                        <main>
                            {data.map(role => {
                                return (
                                    <div className="rowTable" key={role._id}>
                                        <p className="tableTrId" title={role._id}>{role._id}</p>
                                        <p>{role.name}</p>
                                        <Link to={`/platform/role/${role._id}`}><p className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></p></Link>
                                    </div>
                                )
                            })}
                        </main>
                    </>
                )

            }
        </div>
    )

}