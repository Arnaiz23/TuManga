import React from "react"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BtnUp() {
  const btnUpRef = React.createRef()

  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop

    if (scroll > 100) {
      btnUpRef.current.style.transform = "scale(1)"
    } else if (scroll < 100) {
      btnUpRef.current.style.transform = "scale(0)"
    }
  }

  const goUp = () => {
    const currentScroll = document.documentElement.scrollTop

    if (currentScroll > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <button id="btn-up" onClick={goUp} ref={btnUpRef}>
      <i>
        <FontAwesomeIcon icon={faAngleUp} />
      </i>
    </button>
  )
}
