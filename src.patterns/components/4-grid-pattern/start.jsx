import { styled } from "styled-components";
import Card from "./card";
import { spaceSchema } from "../common/spaces";

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth ?? "310px"}, 100%), 1fr)
  );
`;

const Cards = () => {
  return (
    <Grid minItemWidth="24rem" gutter="xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Cards;
