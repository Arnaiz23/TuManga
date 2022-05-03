import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import Header from "../../components/Header/Header";
import Footer from "components/Footer/Footer";
import SocialNetwork from "components/SocialNetworks/SocialNetworks";
import Slider from "components/Slider/Slider";
import NewsProducts from "components/NewsProducts/NewsProducts";

export default function PublicHome() {

    const btnUpRef = React.createRef()

    window.onscroll = () => {
        var scroll = document.documentElement.scrollTop;
    
        if (scroll > 100) {
            btnUpRef.current.style.transform = "scale(1)";
        } else if (scroll < 100) {
            btnUpRef.current.style.transform = "scale(0)";
        }
    
    }

    const goUp = () => {
        var currentScroll = document.documentElement.scrollTop;
        
            if (currentScroll > 0) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
    }

    return (
        <>
            <Header />
            <Slider />
            <SocialNetwork />
            <NewsProducts />
            <button id="btn-up" onClick={goUp} ref={btnUpRef}><i><FontAwesomeIcon icon={faAngleUp} /></i></button>
            <Footer />
        </>
    )
}