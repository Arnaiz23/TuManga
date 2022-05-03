import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Slider() {
    return (
        <div className="slider">
            <button className="iconSlider iconSliderLeft" role="button"><i><FontAwesomeIcon icon={faAngleLeft} /></i></button>

            {/* Complete the slider */}
            <img src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" alt="imagenes slider mangas" />
            
            <button className="iconSlider iconSliderRight" role="button"><i><FontAwesomeIcon icon={faAngleRight} /></i></button>
        </div>
    )
}