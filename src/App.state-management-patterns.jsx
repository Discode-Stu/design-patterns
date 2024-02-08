// import TasksBoard from "./state-management-patterns/tasks-board"
import styled from "styled-components"
import ShoppingList from "./use-immer-reducer-components/shopping-list"
const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 25px;
  padding-right: 25px;
`
export default function AppStateManagementPatterns() {
  return (
    <>
      {/* <TasksBoard /> */}
      <StyledApp>
        <ShoppingList />
      </StyledApp>
    </>
  )
}
