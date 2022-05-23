import { useEffect, useState } from "react";
import { getBestsellers } from "services/Admin";
import "./Statistics.css";
import StatisticsCol from './StatisticsCol';

export default function Statistics() {

    const [data, setData] = useState([])

    const fetchBestsellers = () => {
        getBestsellers().then(info => {
            setData(info)
            console.log(info);
        })
    }

    useEffect(() => {
        fetchBestsellers()
    }, [])

    return (
        <div className="statisticsContainer">
            <div className="statisticsBorder">
                {data.map(col =>
                    <StatisticsCol data={col} key={col._id} />
                )}
                {/* <div className="statisticsCol" style={{ height: "40px" }}></div>
                <div className="statisticsCol" style={{ height: "40px" }}></div>
                <div className="statisticsCol" style={{ height: "40px" }}></div>
                <div className="statisticsCol" style={{ height: "40px" }}></div> */}
            </div>
        </div>
    );
}