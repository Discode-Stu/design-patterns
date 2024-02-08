import axios from "axios"
import { useState, useEffect } from "react"

export const useCurrentUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:9090/current-user")
      setUser(response.data)
    }
    fetchUser()
  }, [])

  return user
}
