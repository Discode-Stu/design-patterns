import { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { searchMeals } from "../api/mealApi"
import { didAbort } from "../api/api"

const useFetchMeals = () => {
  const [meals, setMeals] = useState([])
  const abortRef = useRef({})

  const handleQuoteError = (error) => {
    if (didAbort(error)) {
      //Request aborted!
      toast.error("Request aborted!")
    } else {
      // Oh nooo, error!
      toast.error("Oh nooo, error!")
    }
  }

  const fetchMeals = async (query) => {
    try {
      abortRef.current.abort?.()

      const newMeals = await searchMeals(query, {
        abort: (abort) => (abortRef.current.abort = abort),
      })
      setMeals(newMeals)
    } catch (error) {
      handleQuoteError(error)
    }
  }

  return {
    meals,
    fetchMeals,
  }
}

const SearchMeal = () => {
  const [query, setQuery] = useState("")

  const { meals, fetchMeals } = useFetchMeals()

  useEffect(() => {
    fetchMeals(query)
  }, [query])

  return (
    <div>
      <ToastContainer />
      <label
        htmlFor="search-meal"
        style={{ display: "block", marginBottom: "1rem" }}
      >
        Search meal:
      </label>

      <input
        id="search-meal"
        type="text"
        className="mb-4"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <ul>
        {meals &&
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)}
      </ul>
    </div>
  )
}

export default SearchMeal
