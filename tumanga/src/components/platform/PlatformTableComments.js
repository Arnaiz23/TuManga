import React from "react";
import PlatformRowComment from "./PlatformRowComment";

export default function PlatformTableComments({ data, dataEmpty, titles }) {

    return (
        <div className="containerTable">
            {dataEmpty
                ? <h2>No hay usuarios para estas condiciones</h2>
                : <table>
                    <thead>
                        <tr>
                            {titles.map(title => <th key={title}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(comment => {
                            return (
                                <PlatformRowComment
                                    key={comment._id}
                                    comment={comment}
                                />
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )


}