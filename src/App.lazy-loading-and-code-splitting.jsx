import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components"
// import Home from "./components-lazy-loading-and-code-splitting/home"
// import About from "./components-lazy-loading-and-code-splitting/about"
// import Contact from "./components-lazy-loading-and-code-splitting/contact"
import { Suspense, lazy } from "react"
import LazyLoader from "./components-lazy-loading-and-code-splitting/lazy-loader"

//lazy load has to be a default compomnent
//lazy load works with a Suspense component
//you should only use the suspence component where you want to see the loading indicator
const Home = lazy(() =>
  import("./components-lazy-loading-and-code-splitting/home")
)
const About = lazy(() =>
  import("./components-lazy-loading-and-code-splitting/about")
)
const Contact = lazy(() =>
  import("./components-lazy-loading-and-code-splitting/contact")
)

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`

const NavContainer = styled.div`
  margin-top: 8rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`

function AppLazyLoadingAndCodeSplitting() {
  return (
    <AppContainer>
      <Heading>Advanced React - Codelicks Academy</Heading>
      <NavContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </NavContainer>
      <Suspense fallback={<LazyLoader delay={500} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainer>
  )
}

export default AppLazyLoadingAndCodeSplitting
