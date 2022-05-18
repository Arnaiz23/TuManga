import { faBook, faBoxOpen, faClipboardList, faHome, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "wouter";

export default function PlatformNavResponsive() {

    return (
        <div className="smallNav">
            <header>
                <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                    alt="icon user" />
            </header>
            <ul>
                <li>
                    <Link to="/platform">
                        <i><FontAwesomeIcon icon={faHome} /></i>
                    </Link>
                </li>
                <li id="btnUser2">
                    <Link to="/platform/users">
                        <i><FontAwesomeIcon icon={faUser} /></i>
                    </Link>
                </li>
                <li>
                    <Link to="/platform/products">
                        <i><FontAwesomeIcon icon={faBook} /></i>
                    </Link>
                </li>
                <li>
                    <Link to="/platform/orders">
                        <i><FontAwesomeIcon icon={faBoxOpen} /></i>
                    </Link>
                </li>
                <li>
                    {/* ! If the user is admin */}
                    <Link to="/platform/roles">
                        <i><FontAwesomeIcon icon={faWrench} /></i>
                    </Link>
                </li>
                <li>
                    <Link to="/platform/comments">
                        <i><FontAwesomeIcon icon={faClipboardList} /></i>
                    </Link>
                </li>
            </ul>
        </div>
    )

}