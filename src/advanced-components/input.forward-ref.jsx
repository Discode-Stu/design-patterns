import { forwardRef, useImperativeHandle, useRef, useState } from "react"

// useImperativeHandle example with state
const CustomInput = (props, ref) => {
  const [value, setValue] = useState("")
  useImperativeHandle(
    ref,
    () => {
      return { value }
    },
    [value]
  )

  return (
    <div className="flex gap-2 w-1/3 mx-auto mb-2">
      <input
        type="text"
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export const Input = forwardRef(CustomInput)

// // useImperativeHandle example with 2
// const CustomInput = (props, ref) => {
//   const inputRef = useRef()
//   const inputRef2 = useRef()
//   useImperativeHandle(ref, () => {
//     return {
//       input1: inputRef.current,
//       input2: inputRef2.current,
//     }
//   })

//   return (
//     <div className="flex gap-2 w-1/3 mx-auto mb-2">
//       <input type="text" {...props} ref={inputRef} />
//       <input type="text" {...props} ref={inputRef2} />
//     </div>
//   )
// }

// export const Input = forwardRef(CustomInput)
// // useImperativeHandle example
// const CustomInput = (props, ref) => {
//   const inputRef = useRef()
//   useImperativeHandle(ref, () => {
//     return {
//       // sayHello: () => alert("Hello from input"),
//       focus: () => inputRef.current.focus(),
//     }
//   })

//   return <input type="text" {...props} ref={inputRef} />
// }

// export const Input = forwardRef(CustomInput)

//original
// const CustomInput = (props, ref) => <input type="text" {...props} ref={ref} />

// export const Input = forwardRef(CustomInput)
