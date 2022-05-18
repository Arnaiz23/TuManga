import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "moment/locale/es"
import { Link } from "wouter";

export default function PlatformTableProducts({ titles, products, productsEmpty }) {

    const handleShowDetail = () => {
        
    }
    
    return (
        <div className="containerTable">
            {productsEmpty
                ? <h2>No hay productos para estas condiciones</h2>
                : <table>
                    <thead>
                        <tr>
                            {titles.map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr key={product.name}>
                                    <td className="tableTrId" title={product._id}>{product._id}</td>
                                    <td className="tableTrId" title={product.name}>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.number_sales}</td>
                                    <td onClick={handleShowDetail}><i><FontAwesomeIcon icon={faEye} /></i></td>
                                    <Link to={`/platform/product/${product._id}`}><td className="btnEditData"><i><FontAwesomeIcon icon={faPenToSquare} /></i></td></Link>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )

}