import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "moment/locale/es"
import Moment from "react-moment";
import { Link } from "wouter";

export default function PlatformTable({ titles, users, usersEmpty }) {

    return (
        <div className="containerTable">
            {usersEmpty
                ? <h2>No hay usuarios para estas condiciones</h2>
                : <table>
                    <thead>
                        <tr>
                            {titles.map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td className="tableTrId" title={user._id}>{user._id}</td>
                                    <td className="tableTrId" title={user.email}>{user.email}</td>
                                    {user.state === "Active"
                                        ? <td>Activo</td>
                                        : <td>Deshabilitado</td>
                                    }
                                    <td><Moment format="DD/MM/YYYY">{user.register_date}</Moment></td>
                                    <td>{user.role}</td>
                                    <td>{user.cart.length}</td>
                                    <Link to={`/platform/user/${user._id}`}><td className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></td></Link>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )

}