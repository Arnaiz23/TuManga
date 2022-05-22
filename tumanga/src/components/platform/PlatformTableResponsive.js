import React from "react";
import PlatformModalShow from "./PlatformModalShow";

export default function PlatformTableResponsive({ titles, users, showModalData, usersEmpty, roleArray }) {

    return (
        <>
            <div className="containerTableResponsive">
                {usersEmpty
                    ? <h2>No hay usuarios con esas condiciones</h2>
                    : <>
                        <header>
                            {titles.map(title => <b key={title}>{title}</b>)}
                        </header>
                        <section>
                            {users.map((user, index) => {
                                return (
                                    <PlatformModalShow
                                        user={user}
                                        key={user._id}
                                        roleName={roleArray[index]}
                                    />
                                )
                            })}
                        </section>
                    </>
                }
            </div>
        </>
    )

}