import { useState } from "react"

const ModalBackground = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-0 overflow-auto w-full h-full bg-black bg-opacity-50 backdrop-blur"
    >
      {children}
    </div>
  )
}

const ModalContent = ({ children, onClick }) => {
  return (
    <div
      onClick={(e) => onClick(e)}
      className="my-[12%] mx-auto p-24 bg-[wheat] w-1/2"
    >
      {children}
    </div>
  )
}

export const UncontrolledModal = ({ children }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground onClick={() => setShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}
