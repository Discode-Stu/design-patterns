import { useLoaderData, defer, Await } from "react-router"
import delay from "../../util/delay"
import { MainContainer, MainHeading } from "./styled-elements"
import { Suspense } from "react"

const Main = () => {
  // const data = useLoaderData()
  const { promise } = useLoaderData()

  return (
    <MainContainer>
      <MainHeading>
        Main -{" "}
        <Suspense fallback={"Fetching..."}>
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
      {/* <MainHeading>Main - {data}</MainHeading> */}
    </MainContainer>
  )
}

// function loader() {
//   // async function loader() {
//   // return await delay("Fetched Data", 1000)
//   return defer({ promise: delay("Fetched Data", 1000) }) //need to pass a promise to defer
// }

// export const mainRoute = { element: <Main />, loader }
export default Main
