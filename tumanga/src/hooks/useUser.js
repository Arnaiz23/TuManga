import React, { useContext, useEffect, useState } from "react";

import { getUser } from "services/Users";
import { useLocation } from "wouter";

export default function useUser() {

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({})
    const [location, setLocation] = useLocation()

    useEffect(() => {

        setLoading(true)

        getUser().then(data => {
            if (data.message) {
                setLocation("/login")
            } else {
                setUserData(data)
                setLoading(false)
            }
        })

    }, [setUserData])

    return { loading, userData, setUserData }

}