import { includeUpdatableResource } from "./include-updatable-resource"

export const BookInfoForm = includeUpdatableResource(
  ({ book, onChangeBook, onPostBook, onResetBook }) => {
    const { name, pages } = book || {}

    return book ? (
      <>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            value={pages}
            onChange={(e) => onChangeBook({ pages: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetBook}>Reset</button>
        <button onClick={onPostBook}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    )
  },
  "/books/2",
  "book"
)
