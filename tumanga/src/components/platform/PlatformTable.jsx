import React, { useContext } from "react"
import PlatformUserTable from "@components/platform/PlatformUserTable"

import AdminContext from "@/context/AdminContext"

export default function PlatformTable({
  titles,
  users,
  usersEmpty,
  roleArray,
}) {
  const { userData } = useContext(AdminContext)

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
            {users.map((user, index) => (
              <PlatformUserTable
                user={user}
                key={user._id}
                roleArray={roleArray}
                index={index}
                userData={userData}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
