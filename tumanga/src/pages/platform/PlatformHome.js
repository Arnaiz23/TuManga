import PlatformMain from "components/platform/PlatformMain";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import React, { useContext, useEffect } from "react";
import { getUser } from "services/Users";
import AdminContext from "context/AdminContext";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import Swal from "sweetalert2";

export default function PlatformHome() {

    const { setUserData } = useContext(AdminContext)

    let fetchDataUser = () => {
        getUser().then(data => {
            if(data.message) {
                return Swal.fire(
                    'Lo sentimos',
                    'Hubo un error al intentar recuperarlo',
                    'error'
                )
            }
            setUserData(data.userInfo)
        })
    }

    useEffect(() => {
        fetchDataUser()
    },[])

    return (
        <div className="gridAdmin">
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformHeader />
            <PlatformMain />
            <BtnUp />
        </div>
    )

}