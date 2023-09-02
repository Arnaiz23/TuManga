import { useEffect, useState } from "react"

export default function useToken() {
  const [tokenInfo, setTokenInfo] = useState(true)

  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token === undefined || token === null) {
      setTokenInfo(false)
    } else {
      setTokenInfo(true)
    }
  }, [token, setTokenInfo])

  return { tokenInfo, setTokenInfo }
}
