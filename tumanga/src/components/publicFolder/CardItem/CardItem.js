import React, { useEffect, useState } from 'react';

export default function CardItem({ data }) {

    const [date, setDate] = useState('')

    useEffect(() => {
        let date = data.expiration_date.split("-")
        let month = date[1]
        let year = date[0]

        year = month+"/"+year[2]+year[3]
        setDate(year)
    },[])
    
    return (
        <>
            <div className="cardTarget" id="templateCard">
                <header>
                    <img src="https://mecen.es/wp-content/uploads/2020/04/cc-mastercard.png" alt="imagen logo Mastercard" className="imgBrandCard" />
                    <h3>{data.type}</h3>
                </header>
                <main>
                    <h4>{data.name}</h4>
                    <p>{date}</p>
                </main>
                <footer>
                    ************{data.last_4_digits}
                </footer>
            </div>
        </>
    )
}