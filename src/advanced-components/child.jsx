export const Child = () => {
  throw new Error("Error at Child Level")
  return (
    <>
      <h1>Child component</h1>
    </>
  )
}
