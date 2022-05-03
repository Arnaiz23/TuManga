import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import Header from "../../../components/publicFolder/Header/Header";
import Footer from "components/publicFolder/Footer/Footer";
import SocialNetwork from "components/publicFolder/SocialNetworks/SocialNetworks";

export default function Account() {
    return (
        <>
            <Header />
            <SocialNetwork />
            <h1>Account</h1>
            <button id="btn-up"><i><FontAwesomeIcon icon={faAngleUp} /></i></button>
            <Footer />
        </>
    )
}