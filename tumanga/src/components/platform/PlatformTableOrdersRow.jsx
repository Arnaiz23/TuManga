import { formatDateCal } from "@/libs/libDate"

export default function PlatformTableOrdersRow({ info, emails, index }) {
  const dateOrder = formatDateCal({ date: info.order_date })
  const dateSend = formatDateCal({ date: info.send_date })
  return (
    <tr key={info._id}>
      <td title={info._id} className="tableTrId">
        {info._id}
      </td>
      <td>{dateOrder}</td>
      {/* <td title={info.id_client} className="tableTrId">{info.id_client}</td> */}
      <td title={emails[index]}>{emails[index]}</td>
      <td>{dateSend}</td>
      <td>{info.products.length}</td>
      <td>{info.total} €</td>
    </tr>
  )
}
