import MenuBasis from "./menu"

import { styled } from "styled-components"

import { spaceSchema } from "../common/spaces"

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
}

export const InlineBundle = styled.div`
  --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifySchema[props.justify] ?? justifySchema.start};
  align-items: ${(props) => justifySchema[props.align] ?? justifySchema.start};
`

const Menu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="xl" justify="end" align="center">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  )
}

export default Menu
