import React from "react"

export class ErrorBoundry extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
