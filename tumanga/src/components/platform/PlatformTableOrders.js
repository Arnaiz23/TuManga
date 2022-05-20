import React from "react";

import Moment from "react-moment";
import 'moment/locale/es'

export default function PlatformTableOrders({ dataEmpty, data, titles }) {

    return (
        <div className="containerTable">
            {dataEmpty
                ? <h2>Actualmente no se han realizado pedidos</h2>
                : <table>
                    <thead>
                        <tr>
                            {titles.map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(info => {
                            return (
                                <tr key={info._id}>
                                    <td title={info._id} className="tableTrId">{info._id}</td>
                                    <td><Moment format="DD/MM/YYYY">{info.order_date}</Moment></td>
                                    <td title={info.id_client} className="tableTrId">{info.id_client}</td>
                                    <td><Moment format="DD/MM/YYYY">{info.send_date}</Moment></td>
                                    <td>{info.products.length}</td>
                                    <td>{info.telephone}</td>
                                    <td>{info.total} €</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )

}