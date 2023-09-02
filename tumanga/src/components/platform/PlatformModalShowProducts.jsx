import React, { useState } from "react"
import ModalInfo from "@components/publicFolder/ModalInfo/ModalInfo"
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"

export default function PlatformModalShowProducts({ product }) {
  const [modalShowData, setModalShowData] = useState(false)

  const handleShowModal = (e) => {
    setModalShowData(true)
  }

  return (
    <>
      <div className="rowTable">
        <p className="tableTrId" title={product._id}>
          {product._id}
        </p>
        <p className="tableTrId" title={product.name}>
          {product.name}
        </p>
        <p className="btnShowModal">
          <i onClick={handleShowModal}>
            <FontAwesomeIcon icon={faEye} />
          </i>
        </p>
        <Link to={`/platform/product/${product._id}`}>
          <p className="btnEditData">
            <i>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
          </p>
        </Link>
      </div>
      {modalShowData && (
        <ModalInfo
          type="platformProducts"
          change={setModalShowData}
          data={product}
        />
      )}
    </>
  )
}
