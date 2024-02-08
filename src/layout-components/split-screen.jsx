export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children
  return (
    <div className="flex">
      <div className={`bg-red-500`} style={{ flex: leftWidth }}>
        {left}
      </div>
      <div className={`bg-yellow-500`} style={{ flex: rightWidth }}>
        {right}
      </div>
    </div>
  )
}
