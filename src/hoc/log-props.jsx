export const logProps = (Component) => {
  const WrappedComponent = (props) => {
    console.log(props)
    return <Component {...props} />
  }

  WrappedComponent.displayName = `LogProps(${getDisplayName(Component)})`

  return WrappedComponent
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component"
}
