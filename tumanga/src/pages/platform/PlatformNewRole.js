import PlatformEditRole from "components/platform/PlatformEditRole";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import React from "react";

export default function PlatformNewRole({ params }) {

    return (
        <div className="gridAdmin">
            <PlatformHeader />
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformEditRole type={"newRole"} />
            <BtnUp />
        </div>
    )
    
}