import PlatformEditRole from "components/platform/PlatformEditRole";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import React, { useEffect, useState } from "react";
import { getOneRole } from "services/Admin";
import Swal from "sweetalert2";

export default function PlatformEditRoleView({ params }) {

    const [role, setRole] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchRole = () => {
        setLoading(true)
        getOneRole(params.id).then(data => {
            if(data.message) {
                return Swal.fire(
                    'Lo sentimos',
                    'Hubo un error al intentar recuperarlo',
                    'error'
                )
            }

            setRole(data.role)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchRole()
    },[params.id])

    return (
        <div className="gridAdmin">
            <PlatformHeader />
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformEditRole type={"role"} role={role} loading={loading} setRole={setRole} />
            <BtnUp />
        </div>
    )
    
}