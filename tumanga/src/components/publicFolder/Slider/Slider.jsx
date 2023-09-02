import React from "react";
import { api_URL } from "@/services/config.js";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Slider() {
    /* return (
        <div className="slider">
            <button className="iconSlider iconSliderLeft"><i><FontAwesomeIcon icon={faAngleLeft} /></i></button>

            <img src={`${api_URL}/image/Slider1.png`} alt="imagenes slider mangas" />

            <button className="iconSlider iconSliderRight"><i><FontAwesomeIcon icon={faAngleRight} /></i></button>
        </div>
    ) */


    const options = {
        type: "loop",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false
      };
    
      return (
        <Splide aria-labelledby="My Favorite Images" options={options} className="slider">
          <SplideSlide>
            <img
              src={`${api_URL}/image/Slider5.png`}
              alt="slider mangas"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={`${api_URL}/image/Slider6.png`}
              alt="slider mangas"
            />
          </SplideSlide>
        </Splide>
      );

}
