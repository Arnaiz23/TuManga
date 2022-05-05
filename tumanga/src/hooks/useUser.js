import React, { useContext, useEffect, useState } from "react";

import { getUser } from "services/Users";

export default function useUser(){

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({})

    useEffect(() => {

        setLoading(true)

        getUser().then(data => {
            setUserData(data)
            setLoading(false)
        })
        
    },[setUserData])

    return { loading, userData, setUserData }
    
}