import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { searchData } from "services/Admin";
import { Link } from "wouter";

export default function PlatformMainRowTitle({ title, nameAdd, changeModal, setUsersEmpty, setUsersData }) {

    let [search, setSearch] = useState('')

    const handleChangeModal = () => {
        changeModal(true)
    }

    const handleForm = (e) => {
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

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="rowAdminTitle">
            <h2>{title}</h2>
            <div className="containerAdminOptions">
                <form onSubmit={handleForm}>
                    <i className="iconSearch"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleChangeModal} /></i>
                    <input type="text" name="" id="" className="inputSearchAdmin" placeholder={`Busca un ${nameAdd}...`} onChange={handleChange} />
                </form>
                <Link to="/platform/user"><button className="btn btn-success">Añadir {nameAdd}</button></Link>
            </div>
        </div>
    )

}