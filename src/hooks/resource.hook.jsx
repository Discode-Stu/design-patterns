import axios from "axios"
import { useState, useEffect } from "react"

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchResource = async () => {
      const response = await axios.get(`http://localhost:9090${resourceUrl}`)
      setResource(response.data)
    }
    fetchResource()
  }, [resourceUrl])

  return resource
}
