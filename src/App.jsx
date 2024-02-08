// import { authors } from "./data/authors"
// import { books } from "./data/books"
// import { Modal } from "./layout-components/Modal"
// import { LargeAuthorListItem } from "./layout-components/authors/LargeListItems"
// import { SmallAuthorListItem } from "./layout-components/authors/SmallListItems"
import { LargeBookListItem } from "./layout-components/books/LargeListItems"
// import { SmallBookListItem } from "./layout-components/books/SmallListItems"
// import { NumberedList } from "./layout-components/lists/Numbered"
// import { RegularList } from "./layout-components/lists/Regular"
// import { SplitScreen } from "./layout-components/split-screen"

import axios from "axios"
import { BookInfo } from "./container-components/book-info"
import { CurrentUserLoader } from "./container-components/current-user-loader"
import { DataSource } from "./container-components/data-source"
import { ReserourceLoader } from "./container-components/resource-loader"
import { UserInfo } from "./container-components/user-info"
import { UserLoader } from "./container-components/user-loader"
import { DataSourceWithRender } from "./container-components/data-source-with-render"
import { UncontrolledForm } from "./uncontrolled-components/uncontrolled-form"
import { ControlledForm } from "./controlled-components/controlled-form"
import { UncontrolledModal } from "./layout-components/uncontrolled-modal"
import { ControlledModal } from "./controlled-components/controlled-modal"
import { useState } from "react"
import { UncontrolledFlow } from "./uncontrolled-components/uncontrolled-flow"
import { ControlledFlow } from "./controlled-components/controlled-flow"
import { includeUser } from "./hoc/include-user"
import { UserInfoForm } from "./hoc/user-form"
import { BookInfoForm } from "./hoc/book-form"
// import { logProps } from "./hoc/log-props"

// const getDataFromServer = async (uri) => {
//   const response = await axios.get(uri)
//   return response.data
// }

// const getDataFromLocalStorage = (key) => () => {
//   return localStorage.getItem(key)
// }

// const Message = ({ msg }) => <h2 className="text-red-500">{msg}</h2>
// // const Comp = ({ title }) => <h2>{title}</h2>

// const StepOne = ({ goNext }) => {
//   return (
//     <>
//       <h1>Step #1: Enter your name:</h1>
//       <button onClick={() => goNext({ name: "Dan" })}>Next</button>
//     </>
//   )
// }

// const StepTwo = ({ goNext }) => {
//   return (
//     <>
//       <h1>Step #2: Enter your age:</h1>
//       <button onClick={() => goNext({ age: 27 })}>Next</button>
//     </>
//   )
// }

// const StepThree = ({ goNext }) => {
//   return (
//     <>
//       <h1>Congratulations! You qualify for the gift!</h1>
//       <button onClick={() => goNext({})}>Next</button>
//     </>
//   )
// }

// const StepFour = ({ goNext }) => {
//   return (
//     <>
//       <h1>Step #4: Enter your country:</h1>
//       <button onClick={() => goNext({ country: "USA" })}>Next</button>
//     </>
//   )
// }

// const UserInfoWrapper = logProps(UserInfo)

const UserInfoWithLoader = includeUser(UserInfo, "3")

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false)

  const [data, setData] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const goNext = (dataFromStep) => {
    setData({ ...data, dataFromStep })
    setCurrentStepIndex(currentStepIndex + 1)
  }

  return (
    // <SplitScreen leftWidth={2} rightWidth={3}>
    //   <Comp title="Left" />
    //   <Comp title="Right" />
    // </SplitScreen>
    <>
      {/* <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName="book"
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItem}
      /> */}
      {/* <UncontrolledModal> */}
      {/* <LargeBookListItem book={books[0]} /> */}
      {/* <p>hello uncontrolled modal</p>
      </UncontrolledModal> */}
      {/* <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <p>hello controlled modal</p>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide" : "Show"} Modal
      </button> */}

      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader> */}
      {/* <ReserourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ReserourceLoader>
      <ReserourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </ReserourceLoader> */}
      {/* <DataSource
        resourceName={"user"}
        // getData={async () =>
        //   (await axios.get("http://localhost:9090/users/2")).data
        // }
        getData={() => getDataFromServer("http://localhost:9090/users/2")}
      >
        <UserInfo />
      </DataSource> */}
      {/* <DataSourceWithRender
        getData={() => getDataFromServer("http://localhost:9090/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log(data)
          alert("Yaee, you made it to the final step!")
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}
      {/* <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow> */}
      {/* <UserInfoWrapper test="test" b="I am be" c={21} /> */}
      {/* <UserInfoWithLoader /> */}
      {/* <UserInfoForm /> */}
      {/* <BookInfoForm /> */}
      <UserInfo userId={"3"} />
      <UserInfo userId={"2"} />
      <UserInfo userId={"1"} />
      <BookInfo bookId={"1"} />
      <BookInfo bookId={"2"} />
      <BookInfo bookId={"3"} />
    </>
  )
}

export default App
