import PlatformHeader from "components/platform/PlatformHeader";
import PlatformMainRowTitle from "components/platform/PlatformMainRowTitle";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import PlatformSearchModal from "components/platform/PlatformSearchModal";
import PlatformTable from "components/platform/PlatformTable";
import PlatformTableProducts from "components/platform/PlatformTableProducts";
import PlatformTableResponsiveProducts from "components/platform/PlatformTableResponsiveProducts";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "services/Admin";

const TITLES_TABLE = ["id", "name", "price", "stock", "number sales", "show", "edit"]
const TITLES_TABLE_RESPONSIVE = ["id", "name", "show", "edit"]

export default function PlatformProducts(){

    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [productsEmpty, setProductsEmpty] = useState(false)
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        setLoading(true)
        getAllProducts().then(data => {
            if(data.message){
                setProductsEmpty(true)
                setLoading(false)
                return
            }
            setProductsData(data.products)
            setProductsEmpty(false)
            setLoading(false)
        })
    },[])

    return (
        <div className="gridAdmin">
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformHeader />
            <main className="adminMain">
                <div className="containerDataAdmin">
                    <PlatformMainRowTitle title="Productos" nameAdd="producto" changeModal={setModalOpen} setDataEmpty={setProductsEmpty} setDataData={setProductsData} link={"product"} type="products" />
                    <PlatformSearchModal setDataEmpty={setProductsEmpty} setDataData={setProductsData} changeModal={setModalOpen} modal={modalOpen} title="producto" type="products" />
                    {loading
                        ? <h2>Cargando...</h2>
                        : (
                            <>
                                <PlatformTableProducts titles={TITLES_TABLE} products={productsData} productsEmpty={productsEmpty} name="productos" />
                                <PlatformTableResponsiveProducts titles={TITLES_TABLE_RESPONSIVE} products={productsData} productsEmpty={productsEmpty} />
                            </>
                        )
                    }

                </div>
            </main >
        </div >
    )
    
}