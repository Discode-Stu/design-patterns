import React, { useEffect, useState } from "react"

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      console.log("🚀 ~ fetchData ~ response:", data)
      setResource(data)
    }
    fetchData()
  }, [getData])

  return render(resource)
}
