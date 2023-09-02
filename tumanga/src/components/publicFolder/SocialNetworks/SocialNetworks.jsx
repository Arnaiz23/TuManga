import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function SocialNetwork() {
    return (
        <div id="redes">
            <a href="https://www.instagram.com" target="_blank" id="instagram" rel="noreferrer"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
            <a href="https://twitter.com" target="_blank" id="twitter" rel="noreferrer"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
            <a href="https://facebook.com/" target="_blank" id="facebook" rel="noreferrer"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
        </div>
    )
}