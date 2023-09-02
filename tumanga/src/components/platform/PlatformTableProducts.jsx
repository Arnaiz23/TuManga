import React from "react";
import "moment/locale/es"
import PlatformRowProducts from "./PlatformRowProducts";

export default function PlatformTableProducts({ titles, products, productsEmpty }) {

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
                                <PlatformRowProducts
                                    product={product}
                                    key={product._id}
                                />
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )

}