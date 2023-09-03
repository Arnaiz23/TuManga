import { faBan, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"

import { formatDateCal } from "@/libs/libDate"

export default function PlatformUserTable({
  user,
  roleArray,
  index,
  userData,
}) {
  const dateFormat = formatDateCal({date: user.register_date})

  return (
    <tr key={user._id}>
      <td className="tableTrId" title={user._id}>
        {user._id}
      </td>
      <td className="tableTrId" title={user.email}>
        {user.email}
      </td>
      {user.state === "Active" ? <td>Activo</td> : <td>Deshabilitado</td>}
      <td>{dateFormat}</td>
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
  )
}
