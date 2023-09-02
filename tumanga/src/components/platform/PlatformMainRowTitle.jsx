import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import { searchData, searchRole } from "@/services/Admin"
import { searchProducts } from "@/services/Orders"
import { Link } from "wouter"

import AdminContext from "@/context/AdminContext"

export default function PlatformMainRowTitle({
  title,
  nameAdd,
  changeModal,
  setDataEmpty,
  setDataData,
  link,
  type,
}) {
  let [search, setSearch] = useState("")

  const { userData } = useContext(AdminContext)

  const handleChangeModal = () => {
    changeModal(true)
  }

  const fetchSearchUsers = () => {
    searchData(search, "user").then((data) => {
      if (data.message) {
        setDataEmpty(true)
        changeModal(false)
        return
      }
      setDataData(data.userSearch)
      setDataEmpty(false)
      changeModal(false)
    })
  }

  const fetchSearchProducts = () => {
    searchProducts(search).then((data) => {
      if (data.message) {
        setDataEmpty(true)
        return
      }

      setDataData(data.searchProducts)
      setDataEmpty(false)
      changeModal(false)
    })
  }

  const fetchSearchRoles = () => {
    searchRole(search).then((data) => {
      if (data.message) {
        setDataEmpty(true)
        return
      }

      setDataData(data.resultSearch)
      setDataEmpty(false)
      changeModal(false)
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    if (type === "users") {
      if (search === "") search = "null"
      fetchSearchUsers()
      return
    }

    if (type === "products") {
      if (search === "") search = "null"
      fetchSearchProducts()
    }

    if (type === "roles") {
      if (search === "") search = "null"
      fetchSearchRoles()
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="rowAdminTitle">
      <h2>{title}</h2>
      <div className="containerAdminOptions">
        <form onSubmit={handleForm}>
          <i className="iconSearch">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={handleChangeModal}
            />
          </i>
          <input
            type="search"
            name=""
            id=""
            className="inputSearchAdmin"
            placeholder={`Busca un ${nameAdd}...`}
            onChange={handleChange}
          />
        </form>
        {link === "product" && (
          <Link to={`/platform/${link}`}>
            <button className="btn btn-success">Añadir {nameAdd}</button>
          </Link>
        )}
        {userData.roleName === "admin" && link === "user" && (
          <Link to={`/platform/${link}`}>
            <button className="btn btn-success">Añadir {nameAdd}</button>
          </Link>
        )}
        {userData.roleName === "admin" && link === "role" && (
          <Link to={`/platform/${link}`}>
            <button className="btn btn-success">Añadir {nameAdd}</button>
          </Link>
        )}
      </div>
    </div>
  )
}
