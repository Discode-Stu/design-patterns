export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author
  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age} </p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  )
}
