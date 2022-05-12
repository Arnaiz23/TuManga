import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { api_URL } from "services/config";

export default function Slider() {
    return (
        <div className="slider">
            <button className="iconSlider iconSliderLeft"><i><FontAwesomeIcon icon={faAngleLeft} /></i></button>

            {/* Complete the slider */}
            <img src={`${api_URL}/image/Slider1.png`} alt="imagenes slider mangas" />

            <button className="iconSlider iconSliderRight"><i><FontAwesomeIcon icon={faAngleRight} /></i></button>
        </div>
    )
}