import React from "react"

const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>➕</button>
      {count}
      <button onClick={() => setCount((c) => c - 1)}>➖</button>
    </>
  )
}

export default Counter
