import React, { useContext, useState } from "react"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from "sweetalert2"
import { Link, useLocation } from "wouter"

import OrderContext from "@/context/OrderContext"
import useToken from "@/hooks/useToken"
import { register } from "@/services/Users"

export default function Register() {
  const inputPasswordRef = React.createRef()
  const inputPasswordRef2 = React.createRef()
  const showPasswordRef = React.createRef()
  const showPasswordRef2 = React.createRef()
  const hidePasswordRef = React.createRef()
  const hidePasswordRef2 = React.createRef()

  const setLocation = useLocation()[1]
  const { setTokenInfo } = useToken()

  const { setUser } = useContext(OrderContext)

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  })

  const handleForm = (e) => {
    e.preventDefault()

    const regex = /^[a-zA-Z0-9*/$^Ç]{6,16}$/

    if (
      userData.email === "" ||
      userData.password === "" ||
      userData.confirm_password === ""
    ) {
      return Swal.fire("Datos inválidos", "Rellene todos los datos", "warning")
    }

    if (userData.password !== userData.confirm_password) {
      return Swal.fire(
        "Datos inválidos",
        "Las contraseñas no coinciden",
        "error",
      )
    }

    if (!regex.test(userData.password)) {
      return Swal.fire(
        "Datos inválidos",
        "Las contraseñas no cumplen con los requisitos",
        "error",
      )
    }

    // ! Send data

    register(userData).then((data) => {
      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token))
        setTokenInfo(data.token)
        setUser(true)
        setLocation("/")
      } else {
        return Swal.fire(
          "Datos inválidos",
          "Email y/o datos no válidos",
          "error",
        )
      }
    })
  }

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const togglePassword = () => {
    const input = inputPasswordRef.current
    const hide = hidePasswordRef.current
    const show = showPasswordRef.current

    if (input.type === "text") {
      input.type = "password"
      show.classList.toggle("passwordShow")
      hide.classList.toggle("passwordShow")
    } else {
      input.type = "text"
      show.classList.toggle("passwordShow")
      hide.classList.toggle("passwordShow")
    }
  }

  const togglePassword2 = () => {
    const input = inputPasswordRef2.current
    const hide = hidePasswordRef2.current
    const show = showPasswordRef2.current

    if (input.type === "text") {
      input.type = "password"
      show.classList.toggle("passwordShow")
      hide.classList.toggle("passwordShow")
    } else {
      input.type = "text"
      show.classList.toggle("passwordShow")
      hide.classList.toggle("passwordShow")
    }
  }

  return (
    <div className="centerLog">
      <div className="containerCenter">
        <div className="containerLogLeft containerWhite">
          <div className="contentLog">
            <h2>Registrarse</h2>
            <form onSubmit={handleForm}>
              <div className="inputsLog">
                <input
                  type="email"
                  id=""
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                />
                <div className="inputPassword">
                  <input
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    ref={inputPasswordRef}
                    title={`Requisitos:\n* Letras mayúsculas, letras minúsculas y números\n* Caractéres: *,/,$,%,&,Ç\n* Longitud: mín 6 - máx 16`}
                  />
                  <i
                    className="passwordShow"
                    id="passwordShow"
                    onClick={togglePassword}
                    ref={showPasswordRef}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </i>
                  <i
                    id="passwordHide"
                    onClick={togglePassword}
                    ref={hidePasswordRef}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </i>
                </div>
                <div className="inputPassword">
                  <input
                    type="password"
                    id="inputPassword2"
                    placeholder="Confirmar Password"
                    onChange={handleChange}
                    name="confirm_password"
                    ref={inputPasswordRef2}
                    title={`Requisitos:\n* Letras mayúsculas, letras minúsculas y números\n* Caractéres: *,/,$,%,&,Ç\n* Longitud: mín 6 - máx 16`}
                  />
                  <i
                    className="passwordShow"
                    id="passwordShow2"
                    onClick={togglePassword2}
                    ref={showPasswordRef2}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </i>
                  <i
                    id="passwordHide2"
                    onClick={togglePassword2}
                    ref={hidePasswordRef2}
                  >
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </i>
                </div>
              </div>
              <button className="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
        <div className="containerLogRight containerColumn">
          <h2>¿Ya tienes cuenta?</h2>
          <Link to="/login">
            <button className="btn btn-light">Iniciar sesión</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
