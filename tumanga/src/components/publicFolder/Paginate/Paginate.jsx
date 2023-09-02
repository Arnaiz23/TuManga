import useProducts from "@/hooks/useProducts"
import React, { useEffect, useState } from "react"

export default function Paginate({ size }) {
  const [count2, setCount2] = useState([])

  const { setPage, count, page } = useProducts()

  useEffect(() => {
    const options = () => {
      let data = []

      for (let i = 1; i <= count; i++) {
        data.push(i)
      }

      setCount2(data)
    }
    options()
  }, [count])

  const changePage = (e) => {
    setPage(e.target.innerHTML - 1)
  }

  return (
    <div className="containerPaginator">
      <div className="paginator">
        {count2.map((number) => {
          if (page + 1 === number) {
            return (
              <p key={number} onClick={changePage} className="pageActive">
                {number}
              </p>
            )
          } else {
            return (
              <p key={number} onClick={changePage}>
                {number}
              </p>
            )
          }
        })}
      </div>
    </div>
  )
}
