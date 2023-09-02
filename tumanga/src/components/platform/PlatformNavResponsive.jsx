import {
  faBook,
  faBoxOpen,
  faClipboardList,
  faHome,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { apiURL } from "@/services/config"
import { Link } from "wouter"
import AdminContext from "@/context/AdminContext"

export default function PlatformNavResponsive() {
  const { userData } = useContext(AdminContext)

  return (
    <div className="smallNav">
      <header>
        <img src={`${apiURL}/image/DefaultUser2.png`} alt="icon user" />
      </header>
      <ul>
        <li>
          <Link to="/platform">
            <i>
              <FontAwesomeIcon icon={faHome} />
            </i>
          </Link>
        </li>
        <li id="btnUser2">
          <Link to="/platform/users">
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
          </Link>
        </li>
        <li>
          <Link to="/platform/products">
            <i>
              <FontAwesomeIcon icon={faBook} />
            </i>
          </Link>
        </li>
        <li>
          <Link to="/platform/orders">
            <i>
              <FontAwesomeIcon icon={faBoxOpen} />
            </i>
          </Link>
        </li>
        {userData.roleName === "admin" && (
          <li>
            {/* ! If the user is admin */}
            <Link to="/platform/roles">
              <i>
                <FontAwesomeIcon icon={faWrench} />
              </i>
            </Link>
          </li>
        )}
        <li>
          <Link to="/platform/comments">
            <i>
              <FontAwesomeIcon icon={faClipboardList} />
            </i>
          </Link>
        </li>
      </ul>
    </div>
  )
}
