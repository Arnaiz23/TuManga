import PlatformEditForm from "components/platform/PlatformFormEdit";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import React from "react";

export default function PlatformEditUser({ params }) {

    return (
        <div className="gridAdmin">
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformHeader />
            <PlatformEditForm title="Usuario" type="user" data={params.id} />
        </div>
    )

}