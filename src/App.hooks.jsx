import {
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react"
import Form from "./advanced-components/input"
import { Input } from "./advanced-components/input.forward-ref"
import HeavyComponent from "./advanced-components/heavy-component"
import { StyledButton } from "./advanced-components/use-transition/styled-elements"
import Cover from "./advanced-components/use-transition/cover"
import Reviews from "./advanced-components/use-transition/reviews"
import Writer from "./advanced-components/use-transition/writer"

function AppHooks() {
  //use layout effect
  // const [show, setShow] = useState(false)
  // const [top, setTop] = useState(0)
  // const buttonRef = useRef(null)

  // useLayoutEffect(() => {
  //   // use for synchronous
  //   // useEffect(() => {
  //   if (buttonRef.current === null || !show) return setTop(0)
  //   const { bottom } = buttonRef.current.getBoundingClientRect()
  //   setTop(bottom + 30)
  // }, [show])

  // const now = performance.now()
  // while (now > performance.now() - 100) {}
  // __________________

  //usecallback inside useRef
  // const [showInput, setShowInput] = useState(false)
  // const realInputRef = useRef()
  // const inputRef = useCallback((input) => {
  //   realInputRef.current = input

  //   if (input === null) return
  //   input.focus()
  // }, [])
  // // const inputRef = useRef(null)

  // // useEffect(() => {
  // //   inputRef.current.focus()
  // // }, [])

  // useImperativeHandle

  // const inputRef = useRef()

  // useDefferredValue
  // const [keyword, setKeyword] = useState("")

  // const deferredKeyword = useDeferredValue(keyword)

  //useTransition
  const [section, setSection] = useState("Cover")
  const [isPending, startTransition] = useTransition()

  const sectionHandler = (sec) => {
    startTransition(() => {
      setSection(sec)
    })
  }

  return (
    //uselayout effect
    // <>
    //   <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
    //     show
    //   </button>
    //   {show && (
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: top,
    //         left: 10,
    //         background: "red",
    //       }}
    //     >
    //       A sample message to show.
    //       <br />
    //       Click it to close.
    //     </div>
    //   )}
    // </>

    //useId
    // <>
    //   <Form />
    //   <p>
    //     It is a long established fact that a reader will be distracted by the
    //     readable content of a page when looking at its layout.
    //   </p>
    //   <Form />
    // </>

    // useCallback inside useRef
    // <>
    //   <button onClick={() => setShowInput((s) => !s)}>Switch</button>
    //   {showInput && <input type="text" ref={inputRef} />}
    // </>

    //useImperativeHandle with state
    // <>
    //   <Input type="text" ref={inputRef} />
    //   <button onClick={() => console.log(inputRef.current.value)}>Focus</button>
    // </>
    //useImperative handle with 2 refs
    // <>
    //   <Input type="text" ref={inputRef} />
    //   <button onClick={() => inputRef.current.input2.focus()}>Focus</button>
    // </>

    //useDefferredValue
    //the deferred value is the value that is going to be used in the next render. this can be used to optimize the performance of the app
    // <>
    //   <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
    //   <HeavyComponent keyword={deferredKeyword} />
    // </>

    //useTransition
    <>
      <StyledButton onClick={() => sectionHandler("Cover")}>
        Book Cover
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </StyledButton>
      {isPending && <p>Loading...</p>}

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  )
}

export default AppHooks
