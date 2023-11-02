import { useEffect, useState } from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme")
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    const root = document.documentElement

    if (theme === "light") {
      root.classList.remove("dark")
    } else {
      root.classList.add("dark")
    }

    localStorage.setItem("theme", theme)
  })

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
