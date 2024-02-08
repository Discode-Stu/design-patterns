import React, { useEffect, useState } from "react"

export const DataSource = ({ getData = () => {}, children, resourceName }) => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      console.log("🚀 ~ fetchData ~ response:", data)
      setResource(data)
    }
    fetchData()
  }, [getData])

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
