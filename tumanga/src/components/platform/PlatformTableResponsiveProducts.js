import React from "react";
import PlatformModalShow from "./PlatformModalShow";
import PlatformModalShowProducts from "./PlatformModalShowProducts";

export default function PlatformTableResponsiveProducts({ titles, products, productsEmpty }) {

    return (
        <>
            <div className="containerTableResponsive">
                {productsEmpty
                    ? <h2>No hay productos con esas condiciones</h2>
                    : <>
                        <header>
                            {titles.map(title => <b key={title}>{title}</b>)}
                        </header>
                        <section>
                            {products.map(product => {
                                return (
                                    <PlatformModalShowProducts product={product} key={product._id} />
                                )
                            })}
                        </section>
                    </>
                }
            </div>
        </>
    )

}