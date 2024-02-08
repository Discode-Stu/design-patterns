import { styled } from "styled-components"
import { Layers } from "../1-layers-pattern/start"
import { Grid } from "../4-grid-pattern/start"
import { InlineBundle } from "../5-inline-bundle-pattern/start"
import { Bottom, Card, Description, Name, Price, Top } from "./component"
import { spaceSchema } from "../common/spaces"

export const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((paddingKey) => spaceSchema[paddingKey])
      .join(" ")
  }};
`

export const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["s", "l"],
}))`
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 4px;
`

const GiftCard = ({ amount }) => {
  return (
    <Card>
      <Pad padding="l">
        <Top>
          <Name>Gift Card</Name>
          <Description>This is one of our gift cards you can buy.</Description>
          <Price>{amount}</Price>
          <InlineBundle gutter="none" justify="center">
            <Button
              onClick={() =>
                alert(
                  `Thank you for shopping with LocalHost. Please wait 5 days for your card to arrive. Thank you.`
                )
              }
            >
              Buy
            </Button>
          </InlineBundle>
        </Top>
      </Pad>

      <Bottom>
        <Pad padding="l">
          <Layers gutter="m">
            <span>Includes:</span>
            <ul>
              <li>This is inclusion number 1</li>
              <li>
                This is inclusion number 2 which comes after inclusion number1
              </li>
              <li>This is inclusion number 3</li>
            </ul>
          </Layers>
        </Pad>
      </Bottom>
    </Card>
  )
}

const GiftCardList = () => {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <GiftCard amount="$100" />
      <GiftCard amount="$200" />
      <GiftCard amount="$500" />
      <GiftCard amount="$1000" />
    </Grid>
  )
}

export default GiftCardList
