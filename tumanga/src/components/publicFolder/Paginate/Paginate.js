import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Paginate({ size }) {

    const [count, setCount] = useState([])
    const [location, setLocation] = useLocation()
    const [page, setPage] = useState(1)

    const options = () => {
        let data = []

        for(let i = 1; i <= size; i++){
            data.push(i)
        }

        setCount(data)
    }

    useEffect(() => {
        options()
    }, [size])

    const changePage = (e) => {
        setLocation("/products/mangas/"+e.target.innerHTML)
        setPage(e.target.innerHTML)
    }
    
    return (
        <div className="containerPaginator">
            <div className="paginator">
                {/* <p class="pageActive">1</p> */}
                {
                    count.map(number => <p key={number} onClick={changePage}>{number}</p>)
                }
                {/*  className="pageActive" */}
            </div>
        </div>
    )
}