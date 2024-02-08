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

export const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}
