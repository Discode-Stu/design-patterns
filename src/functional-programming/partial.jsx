export const partialComponent = (Component, partialProps) => {
  const PartialComponent = (props) => {
    return <Component {...partialProps} {...props} />
  }
  PartialComponent.displayName = `Partial(${
    Component.displayName || Component.name || "Component"
  })`
  return PartialComponent
}

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  )
}

export const RedButton = partialComponent(Button, { color: "crimson" })
export const SmallRedButton = partialComponent(RedButton, { size: "small" })

export const GreenSmallButton = partialComponent(Button, {
  color: "green",
  size: "small",
})
