import { useMemo, useState } from "react"
import { IDLE, defaultApiStatuses } from "../../constants/api-status"

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

//"ERROR" => 'error' => "Error" => isError

const prepareStatuses = (currentStatus) => {
  const statuses = {}

  for (const status of defaultApiStatuses) {
    const normalisedStatus = capitalize(status.toLowerCase())
    const normalizedStatusKey = `is${normalisedStatus}`

    statuses[normalizedStatusKey] = status === currentStatus
  }
  return statuses
}

export const useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus)
  const statuses = useMemo(() => prepareStatuses(status), [status])

  return { status, setStatus, ...statuses }
}
