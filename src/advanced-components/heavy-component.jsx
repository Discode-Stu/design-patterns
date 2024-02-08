import { memo } from "react"

const Component = ({ keyword }) => {
  const init = performance.now()
  while (init > performance.now() - 200) {
    //slowing down the component on purpose
  }
  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  )
}

const HeavyComponent = memo(Component)

export default HeavyComponent
