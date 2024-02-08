import { useState, useEffect } from "react"

export const useDataSource = (getData) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchResource = async () => {
      const data = await getData()
      setResource(data)
    }
    fetchResource()
  }, [getData])

  return resource
}
