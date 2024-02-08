import axios from "axios"
import { useEffect, useState } from "react"

export const includeUpdatableUser = (Component, userId) => {
  const WrappedComponent = (props) => {
    const [initialUser, setInitialUser] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
      const getUser = async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        )
        setInitialUser(response.data)
        setUser(response.data)
      }
      getUser()
    }, [])

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates })
    }

    const onPostUser = async () => {
      const response = await axios.post(
        `http://localhost:9090/users/${userId}`,
        { user }
      )
      setInitialUser(response.data)
      setUser(response.data)
    }

    const onResetUser = () => {
      setUser(initialUser)
    }

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    )
  }

  WrappedComponent.displayName = `IncludeUser(${getDisplayName(Component)})`

  return WrappedComponent
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component"
}
