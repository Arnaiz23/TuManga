import React, { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchData } from "services/Admin";

export default function PlatformSearchModal({ changeModal, modal, title, setUsersData, setUsersEmpty }) {

    let [search, setSearch] = useState('')

    const handleChangeModal = () => {
        changeModal(false)
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch= (e) => {
        e.preventDefault()
        if(search === "") search = 'null'
        searchData(search, 'user').then(data => {
            if(data.message) {
                setUsersEmpty(true)
                changeModal(false)
                return
            }
            setUsersData(data.userSearch)
            setUsersEmpty(false)
            changeModal(false)
        })
    }

    const handleResetForm = () => {
        searchData("null", 'user').then(data => {
            if(data.message) {
                setUsersEmpty(true)
                changeModal(false)
                return
            }
            setUsersData(data.userSearch)
            setUsersEmpty(false)
            changeModal(false)
        })
    }

    return (
        <div className={modal ? "modalSearchAdmin modalSearchAdminShow" : "modalSearchAdmin"}>
            <h3>Búsqueda:</h3>
            <form onSubmit={handleSearch}>
                {modal && <input type="text" name="" id="" className="inputSearchAdminModal"
                    placeholder={`Busca un ${title}...`} onChange={handleChangeSearch} autoFocus />}
                <input type="submit" value="Buscar" className="btn btn-primary" onChange={handleChangeSearch} />
                <input type="reset" className="btn btn-danger" onClick={handleResetForm} />
            </form>
            <i className="iconCloseModal" onClick={handleChangeModal}><FontAwesomeIcon icon={faXmark} /></i>
        </div>
    )

}