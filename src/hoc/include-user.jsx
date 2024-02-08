import axios from "axios"
import { useEffect, useState } from "react"

export const includeUser = (Component, userId) => {
  const WrappedComponent = (props) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const getUser = async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        )
        setUser(response.data)
      }
      getUser()
    }, [])

    return <Component {...props} user={user} />
  }

  WrappedComponent.displayName = `IncludeUser(${getDisplayName(Component)})`

  return WrappedComponent
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component"
}
