import React from "react";

export default function RowAddressPayment({ data, address, index, changeAddress }) {

    const handleChangeRadio = () => {
        changeAddress(data)
    }

    return (
        <div>
            <div className="row rowStart rowGap4">
                <input type="radio" id="" value={data._id} name="address" onChange={handleChangeRadio} />
                <h4>{data.name_person}</h4>
                <p>{data.name}, {data.telephone}, {data.number && data.number + ","} {data.floor && data.floor + ","} {data.location}</p>
            </div>
            {address.length === 2 && index < 1 && <div className="linePayment" />}
        </div>
    )
}