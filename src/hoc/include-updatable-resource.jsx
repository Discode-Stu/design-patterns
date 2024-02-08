import axios from "axios"
import { useEffect, useState } from "react"

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const includeUpdatableResource = (
  Component,
  resourceUrl,
  resourceName
) => {
  const WrappedComponent = (props) => {
    const [initialResource, setInitialResource] = useState(null)
    const [resource, setResource] = useState(null)

    useEffect(() => {
      const getUser = async () => {
        const response = await axios.get(`http://localhost:9090${resourceUrl}`)
        setInitialResource(response.data)
        setResource(response.data)
      }
      getUser()
    }, [])

    const onChange = (updates) => {
      setResource({ ...resource, ...updates })
    }

    const onPost = async () => {
      const response = await axios.post(`http://localhost:9090${resourceUrl}`, {
        [resourceName]: resource,
      })
      setInitialResource(response.data)
      setResource(response.data)
    }

    const onReset = () => {
      setResource(initialResource)
    }

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
    }

    return <Component {...props} {...resourceProps} />
  }

  WrappedComponent.displayName = `IncludeUser(${getDisplayName(Component)})`

  return WrappedComponent
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component"
}
