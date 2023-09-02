import { faBan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "moment/locale/es";
import Moment from "react-moment";
import { Link } from "wouter";
import AdminContext from "context/AdminContext";

export default function PlatformTable({
  titles,
  users,
  usersEmpty,
  roleArray,
}) {
  const { userData } = useContext(AdminContext);

  return (
    <div className="containerTable">
      {usersEmpty ? (
        <h2>No hay usuarios para estas condiciones</h2>
      ) : (
        <table>
          <thead>
            <tr>
              {titles.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td className="tableTrId" title={user._id}>
                    {user._id}
                  </td>
                  <td className="tableTrId" title={user.email}>
                    {user.email}
                  </td>
                  {user.state === "Active" ? (
                    <td>Activo</td>
                  ) : (
                    <td>Deshabilitado</td>
                  )}
                  <td>
                    <Moment format="DD/MM/YYYY">{user.register_date}</Moment>
                  </td>
                  <td>{roleArray[index]}</td>
                  <td>{user.cart.length}</td>
                  {userData.roleName === "admin" ? (
                    <Link to={`/platform/user/${user._id}`}>
                      <td className="btnEditData">
                        <i>
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </i>
                      </td>
                    </Link>
                  ) : (
                    <td className="btnEditData">
                      <i className="banEditUser">
                        <FontAwesomeIcon icon={faBan} />
                      </i>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
