import React, { useState } from "react"
import ModalInfo from "@components/publicFolder/ModalInfo/ModalInfo"
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "wouter"

export default function PlatformRowProducts({ product }) {
  const [modalShowData, setModalShowData] = useState(false)

  const handleShowDetail = () => {
    setModalShowData(true)
  }

  return (
    <>
      <tr key={product.name}>
        <td className="tableTrId" title={product._id}>
          {product._id}
        </td>
        <td className="tableTrId" title={product.name}>
          {product.name}
        </td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.number_sales}</td>
        <td onClick={handleShowDetail}>
          <i>
            <FontAwesomeIcon icon={faEye} />
          </i>
        </td>
        <Link to={`/platform/product/${product._id}`}>
          <td className="btnEditData">
            <i>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
          </td>
        </Link>
      </tr>
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
