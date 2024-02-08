// import SearchMeal from "./api-layer-components/search-meals"

import { QueryClient, QueryClientProvider } from "react-query"
import FetchTopQuotes from "./api-layer-components/top-quotes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UpdateQuotes from "./api-layer-components/update-quote"
import PaginatedQuotes from "./api-layer-components/paginated-quotes"
import InfiniteScrollQuotes from "./api-layer-components/infinite-scroll-quotes"
import QueryCancellationWithAbortSignal from "./api-layer-components/query-cancellation"
// import Users from "./api-layer-components/users"

const queryClient = new QueryClient()

export default function AppApiLayer() {
  // return <Users />
  // return <SearchMeal />
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <PaginatedQuotes /> */}
        {/* <InfiniteScrollQuotes /> */}
        <QueryCancellationWithAbortSignal />
        {/* <UpdateQuotes />
        <FetchTopQuotes /> */}
      </QueryClientProvider>
    </>
  )
}
