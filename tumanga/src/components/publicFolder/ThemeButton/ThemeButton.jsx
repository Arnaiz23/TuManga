import { useState } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeButton = () => {
  const [theme, setTheme] = useState("light")

  const changeTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <button className="themeButton" onClick={changeTheme}>
      <i>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        )}
      </i>
    </button>
  )
}

export default ThemeButton
