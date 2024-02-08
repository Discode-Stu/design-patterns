import { defer } from "react-router-dom"
import delay from "../../util/delay"

export function loader() {
  return defer({ promise: delay("Fetched Data", 1000) }) //need to pass a promise to defer
}
