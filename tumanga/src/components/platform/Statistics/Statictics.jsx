import { useEffect, useState } from "react"
import StatisticsCol from "@components/platform/Statistics/StatisticsCol"

import { getBestsellers } from "@/services/Admin"

import "./Statistics.css"

export default function Statistics() {
  const [data, setData] = useState([])

  const fetchBestsellers = () => {
    getBestsellers().then((info) => {
      setData(info)
    })
  }

  useEffect(() => {
    fetchBestsellers()
  }, [])

  return (
    <div className="statisticsContainer">
      <div className="statisticsBorder">
        {data.map((col) => (
          <StatisticsCol data={col} key={col._id} />
        ))}
      </div>
    </div>
  )
}