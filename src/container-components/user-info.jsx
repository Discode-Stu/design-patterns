// export const UserInfo = ({ user }) => {
// const { name, age, country, books } = user || {};

import axios from "axios"
import { useCurrentUser } from "../hooks/current-user.hook"
import { useDataSource } from "../hooks/data-source.hook"
import { useResource } from "../hooks/resource.hook"
import { useUser } from "../hooks/user.hook"
import { useCallback } from "react"

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(`http://localhost:9090${resourceUrl}`)
  return response.data
}

const getFromLocalStorage = (key) => () => {
  return localStorage.getItem(key)
}

export const UserInfo = ({ userId }) => {
  // const user = useUser(userId)
  // const user = useResource(`/users/${userId}`)
  console.log("hi")
  const callbackFetchFromServer = useCallback(
    fetchFromServer(`/users/${userId}`),
    [userId]
  )

  const callbackGetFromLocalStorage = useCallback(
    getFromLocalStorage("test"),
    []
  )

  const user = useDataSource(callbackFetchFromServer)

  const message = useDataSource(getFromLocalStorage("test"))
  console.log("🚀 ~ UserInfo ~ message:", message)

  const { name, age, country, books } = user || {}

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}
