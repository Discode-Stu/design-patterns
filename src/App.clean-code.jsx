import Button from "./clean-code.jsx/button.jsx"

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
}

function AppCleanCode() {
  return (
    <div style={style}>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button As="a" href="/">
        Link
      </Button>
      <Button As="input" type="text" />
    </div>
  )
}

export default AppCleanCode
