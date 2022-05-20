import PlatformEditForm from "components/platform/PlatformFormEdit";
import PlatformHeader from "components/platform/PlatformHeader";
import PlatformNav from "components/platform/PlatformNav";
import PlatformNavResponsive from "components/platform/PlatformNavResponsive";
import BtnUp from "components/publicFolder/BTN-UP/BTN-UP";
import React from "react";

export default function PlatformEditUser({ params }) {

    return (
        <div className="gridAdmin">
            <PlatformNav />
            <PlatformNavResponsive />
            <PlatformHeader />
            <PlatformEditForm title="Editar Usuario" type="user" data={params.id} />
            <BtnUp />
        </div>
    )

}