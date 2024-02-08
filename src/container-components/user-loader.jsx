import axios from "axios"
import React, { useEffect, useState } from "react"

export const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`)
      console.log("🚀 ~ fetchData ~ response:", response)
      setUser(response.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {React.Children.map(children, (child) => {
        // this is a way to iterate over the children of a component
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user }) // this adds the user prop to the child
        }
        return child
      })}
    </>
  )
}
