// import React from "react"
import { Cover } from "../10-cover-pattern/start"
// import { Inline } from "../6-inline-pattern/start"
import { InlineBundle } from "../5-inline-bundle/start"
import { Pad } from "../7-pad-pattern/start"
import styled from "styled-components"
// import { Split } from "../2-split-pattern/final"
import { Layers } from "../1-layers-pattern/start"

import { Inline } from "../6-inline-pattern/start"
import { Split } from "../2-split-pattern/start"
import { Center } from "../8-center-pattern/start"
import { Columns } from "../3-columns-pattern/start"

const Menu = styled(Inline).attrs(() => ({
  as: Pad,
  padding: ["l", "xl"],
  stretch: 1,
  gutter: "l",
  align: "center",
}))`
  background: #0f1623;
  color: white;
  border-block-end: 1px solid #303030;
`

const Link = styled(Pad).attrs(({ children }) => ({
  as: "a",
  padding: ["xs", "s"],
  // onClick: () => alert(`You clicked on ${children}`),
}))`
  font-size: 0.8rem;
  color: ${({ dark }) => (dark ? "black" : "white")};
  text-decoration: none;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    background-color: gray;
    border-radius: 0.2rem;

    transition: all 0.3s ease-in-out;
  }
`

const Logo = styled.div`
  --size: ${({ size }) => size ?? "2.2rem"};

  background-color: ${({ inverse }) => (inverse ? "black" : "white")};
  width: var(--size);
  height: var(--size);
  border-radius: ${({ rounded }) => (rounded ? "50%" : "0")};
`

const SearchBar = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  font-size: 0.8rem;
  height: 2rem;
  border-radius: 0.25rem;
  background: #1f2937;
  border: none;
  color: white;
`

const SettingsHeader = styled.header`
  color: white;
`

const Top = () => {
  return (
    <Menu>
      <Logo rounded />
      <nav>
        <Inline as="ul" gutter="s">
          <Link>Overview</Link>
          <Link>Position</Link>
          <Link>Candidates</Link>
          <Link>Employer</Link>
        </Inline>
      </nav>
      <SearchBar placeholder="Search" />
      <Logo size="1.4rem" />
      <Logo rounded size="1.8rem" />
    </Menu>
  )
}

const ContentContainer = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`

const SideMenu = styled(Layers).attrs(() => ({
  as: "ul",
  gutter: "m",
}))`
  list-style-type: none;
  padding-left: 0;
`

const SideMenuItem = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  padding: ["m", "l"],
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active &&
    `
      border-inline-start-color: #324972;
      background: #1f29371c;
    `}
  color: #1f2937;
  font-size: 0.8rem;
`

const SidePanel = () => {
  return (
    <Pad as="nav" padding={["xl", "none"]}>
      <SideMenu>
        <SideMenuItem active>
          <Logo inverse size="1rem" />
          Profile
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          Account
        </SideMenuItem>
        <SideMenuItem>
          <Logo rounded inverse size="1rem" />
          Password
        </SideMenuItem>
        <SideMenuItem>
          <Logo rounded inverse size="1rem" />
          Notifications
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          Billing
        </SideMenuItem>
        <SideMenuItem>
          <Logo rounded inverse size="1rem" />
          Integrations
        </SideMenuItem>
      </SideMenu>
    </Pad>
  )
}

const Form = styled.div`
  border-inline-start: 1px solid lightgrey;

  > * + * {
    border-block-start: 1px solid lightgrey;
  }

  color: black;
`

const Inputs = ({ label, children }) => {
  return (
    <Layers as="label" gutter="xs">
      {label}
      {children}
    </Layers>
  )
}

const SubLabel = styled.span`
  color: grey;
  font-size: 0.8rem;
`

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  color: #303030;
  height: 30px;
  background-color: white;
  font-size: 0.8rem;
`

const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: ${({ primary }) =>
    primary ? "1px solid transparent" : "1px solid black"};
  color: ${({ primary }) => (primary ? "white" : "black")};
  height: 30px;
  background-color: ${({ primary }) => (primary ? "black" : "white")};

  font-size: 0.8rem;
  display: flex;
  /* line-height: 0.8rem; */
  align-items: center;
  cursor: pointer;
`

const Buttons = () => {
  return (
    <Pad padding="l">
      <Inline justify="end">
        <Button>Cancel</Button>
        <Button primary>Save</Button>
      </Inline>
    </Pad>
  )
}

const RightSide = () => {
  return (
    <Form>
      <Pad padding="l">
        <Layers gutter="l">
          <Layers as="header" gutter="l">
            <h2>General Information</h2>
            <SubLabel>
              These information will be required for the basic varification of
              profile.
            </SubLabel>
          </Layers>

          <Split gutter="l" fraction="auto-end">
            <Layers gutter="l">
              <Inputs label="Username">
                <Input />
              </Inputs>
              <Inputs label="About">
                <Input as="textarea" />
                <SubLabel>
                  Tell a brief introduction of yourself. Is considered as a
                  personal bio.
                </SubLabel>
              </Inputs>
            </Layers>
            <label>
              Image
              <Logo inverse rounded size="8rem" />
            </label>
          </Split>

          <Columns gutter="l" columns={2}>
            <Inputs label="First Name">
              <Input />
            </Inputs>
            <Inputs label="Last Name">
              <Input />
            </Inputs>
            <Inputs label="LinkedIn Name">
              <Input />
            </Inputs>
            <Inputs label="Employer Name">
              <Input />
            </Inputs>
          </Columns>
        </Layers>
      </Pad>
      <Buttons />
    </Form>
  )
}

const Content = () => {
  return (
    <ContentContainer>
      <Center as={Layers} gutter="l" maxWidth="85rem">
        <SettingsHeader>
          <h1>Account Settings</h1>
        </SettingsHeader>
        <SettingsPane>
          <SidePanel />
          <RightSide />
        </SettingsPane>
      </Center>
    </ContentContainer>
  )
}

const FinalProject = () => {
  return (
    <>
      <Top />

      <Content />
    </>
  )
}

export default FinalProject
