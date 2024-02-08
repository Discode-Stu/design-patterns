import { useRef, useState } from "react"
import { createPortal } from "react-dom"

import "./App.css"
import { Input } from "./advanced-components/input.forward-ref"
import { Child } from "./advanced-components/child"
import { ErrorBoundry } from "./advanced-components/error-boundry"
import Counter from "./advanced-components/counter.keys"

function AdvancedApp() {
  const [show, setShow] = useState(false)

  // portal & event bubbling
  // return (
  //   <div onClickCapture={() => console.log("outer div")}>
  //     <h1>Other Content</h1>
  //     <button onClick={() => setShow(true)}>Show Message</button>
  //     <Alert show={show} onClose={() => setShow(false)}>
  //       A sample message to show.
  //       <br />
  //       Click it to close.
  //     </Alert>
  //   </div>
  // )

  // const inputRef = useRef()

  // function submitHandler(e) {
  //   e.preventDefault()
  //   console.log(inputRef.current.value)
  // }

  // forward ref
  // return (
  //   <div>
  //     <form onSubmit={submitHandler}>
  //       <Input type="text" ref={inputRef} />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // )

  // error boundry
  // return (
  //   <>
  //     <h1>Parent component</h1>
  //     <ErrorBoundry fallback={<h1>Error at Child</h1>}>
  //       <Child />
  //     </ErrorBoundry>
  //   </>
  // )

  // keys
  // const [changeShirts, setChangeShirts] = useState(false)
  // return (
  //   <div>
  //     {changeShirts ? (
  //       <span>Shirts counts: </span>
  //     ) : (
  //       <span>Shoes counts: </span>
  //     )}
  //     <br />
  //     <input type="number" key={changeShirts ? "shirts" : "shoes"} />
  //     <br />
  //     <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
  //   </div>
  // )
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return

  return createPortal(
    <div
      className="alert"
      onClickCapture={() => {
        onClose()
        console.log("inner div")
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-holder")
  )
}

export default AdvancedApp
