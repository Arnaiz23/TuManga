import React, { useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { searchData, searchRole } from "@/services/Admin"
import { searchProducts } from "@/services/Orders"

export default function PlatformSearchModal({
  changeModal,
  modal,
  title,
  setDataData,
  setDataEmpty,
  type,
}) {
  let [search, setSearch] = useState("")

  const handleChangeModal = () => {
    changeModal(false)
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const fetchSearchUsers = (value) => {
    if (search === "") search = "null"

    if (value) search = "null"
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

  const fetchSearchProducts = (value) => {
    if (search === "") search = "null"

    if (value) search = "null"
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

  const fetchSearchRoles = (value) => {
    if (search === "") search = "null"
    if (value) search = "null"
    searchRole(search).then((data) => {
      if (data.message) {
        setDataEmpty(true)
        changeModal(false)
        return
      }

      setDataData(data.resultSearch)
      setDataEmpty(false)
      changeModal(false)
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (type === "users") {
      fetchSearchUsers()
      return
    }

    if (type === "products") {
      fetchSearchProducts()
      return
    }

    if (type === "roles") {
      fetchSearchRoles()
      
    }
  }

  const handleResetForm = () => {
    if (type === "users") {
      fetchSearchUsers("null")
      return
    }

    if (type === "products") {
      fetchSearchProducts("null")
      return
    }

    if (type === "roles") {
      fetchSearchRoles("null")
      
    }
  }

  return (
    <div
      className={
        modal ? "modalSearchAdmin modalSearchAdminShow" : "modalSearchAdmin"
      }
    >
      <h3>Búsqueda:</h3>
      <form onSubmit={handleSearch}>
        {modal && (
          <input
            type="search"
            name=""
            id=""
            className="inputSearchAdminModal"
            placeholder={`Busca un ${title}...`}
            onChange={handleChangeSearch}
            autoFocus
          />
        )}
        <input
          type="submit"
          value="Buscar"
          className="btn btn-primary"
          onChange={handleChangeSearch}
        />
        <input
          type="reset"
          className="btn btn-danger"
          onClick={handleResetForm}
        />
      </form>
      <i className="iconCloseModal" onClick={handleChangeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </i>
    </div>
  )
}
