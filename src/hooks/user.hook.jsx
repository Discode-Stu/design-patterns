import axios from "axios"
import { useState, useEffect } from "react"

export const useUser = (userId) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`)
      setUser(response.data)
    }
    fetchUser()
  }, [userId])

  return user
}
