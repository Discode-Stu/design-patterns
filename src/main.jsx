import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// import App from "./App.jsx"
import "./index.css"
// import FunctionalProgrammingApp from "./FunctionalProgrammingApp.jsx"
// import AdvancedApp from "./AdvancedApp.jsx"
import { ErrorBoundry } from "./advanced-components/error-boundry.jsx"
// import AppHooks from "./App.hooks.jsx"
// import AppCleanCode from "./App.clean-code.jsx"
// import AppApiLayer from "./App.api-layer"
import AppStateManagementPatterns from "./App.state-management-patterns"
import AppLazyLoadingAndCodeSplitting from "./App.lazy-loading-and-code-splitting"
import AppUseCallbackPreserveReferentialIntegrity from "./App.usecallback-preserve-referential-integrity"
import AppThrottlingAndDebouncing from "./App.throttling-and-debouncing"
import AppExtensibleFoundations from "../src.extensible-foundations/App.extensible-foundations"
import AppPatterns from "../src.patterns/App.patterns"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <FunctionalProgrammingApp /> */}
      <ErrorBoundry fallback={<h1>Error at App Level</h1>}>
        {/* <AdvancedApp /> */}
        {/* <AppHooks /> */}
        {/* <AppCleanCode /> */}
        {/* <AppApiLayer /> */}
        {/* <AppStateManagementPatterns /> */}
        {/* <AppLazyLoadingAndCodeSplitting /> */}
        {/* <AppUseCallbackPreserveReferentialIntegrity /> */}
        {/* <AppThrottlingAndDebouncing /> */}
        {/* <AppExtensibleFoundations /> */}

        <AppPatterns />
      </ErrorBoundry>
    </BrowserRouter>
  </React.StrictMode>
)

// //async-react-router
// import React, { lazy } from "react"
// import ReactDOM from "react-dom/client"
// import { RouterProvider, createBrowserRouter } from "react-router-dom"
// // import Nav from "./components/nav"
// // import { mainRoute } from "./components/main"
// // import { booksRoute } from "./components/books"
// // import Club from "./components/club"
// import Nav from "./advanced-components/async-react-router/nav"
// // import { mainRoute } from "./advanced-components/async-react-router/main"
// import { booksRoute } from "./advanced-components/async-react-router/books"
// import delay from "./util/delay"
// import { loader } from "./advanced-components/async-react-router/main-loader"
// // import Club from "./advanced-components/async-react-router/club"

// const Club = lazy(() =>
//   delay(import("./advanced-components/async-react-router/club"), 1000)
// )

// const Main = lazy(() =>
//   delay(import("./advanced-components/async-react-router/main"), 1000)
// )

// const router = createBrowserRouter([
//   {
//     element: <Nav />,
//     children: [
//       { index: true, loader: loader, element: <Main /> },
//       // { index: true, ...mainRoute },
//       { path: "/books", ...booksRoute },
//       { path: "/club", element: <Club /> },
//     ],
//   },
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )
