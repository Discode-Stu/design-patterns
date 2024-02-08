import { GlobalStyle } from "./utils/index"
import { Button, PrimaryButton } from "./components/button"
import Modal from "./components/modal"

const AppExtensibleFoundations = () => {
  return (
    <>
      <h1>Lets build some components!</h1>
      <Button>Click me!</Button>
      <PrimaryButton className="large warning">Click me!</PrimaryButton>
      <Modal />
      <GlobalStyle />
    </>
  )
}

export default AppExtensibleFoundations
