import axios from "axios"
import React, { useEffect, useState } from "react"

export const ReserourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:9090${resourceUrl}`)
      console.log("🚀 ~ fetchData ~ response:", response)
      setResource(response.data)
    }
    fetchData()
  }, [resourceUrl])

  return (
    <>
      {React.Children.map(children, (child) => {
        // this is a way to iterate over the children of a component
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource }) // this adds the user prop to the child
        }
        return child
      })}
    </>
  )
}
