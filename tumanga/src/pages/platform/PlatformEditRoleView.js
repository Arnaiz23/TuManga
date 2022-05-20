import PlatformEditRole from "components/platform/PlatformEditRole";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import React, { useEffect, useState } from "react";
import { getOneRole } from "services/Admin";

export default function PlatformEditRoleView({ params }) {

    const [role, setRole] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchRole = () => {
        setLoading(true)
        getOneRole(params.id).then(data => {
            if(data.message) return alert(data.message)

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
        </div>
    )
    
}