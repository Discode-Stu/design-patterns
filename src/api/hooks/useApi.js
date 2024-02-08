import { useState } from "react"
import { useApiStatus } from "./useApiStatus"
import { PENDING, SUCCESS } from "../../constants/api-status"

export function useApi(fn, config = {}) {
  const { initialData } = config
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const { status, setStatus, ...normalizedStatuses } = useApiStatus()

  const exec = async (...args) => {
    try {
      setStatus(PENDING)
      const data = await fn(...args)
      setData(data)
      setStatus(SUCCESS)
      return {
        data,
        error: null,
      }
    } catch (error) {
      setError(error)
      setStatus(error)
      return {
        data: null,
        error,
      }
    }
  }
  return {
    data,
    setData,
    status,
    setStatus,
    exec,
    ...normalizedStatuses,
  }
}
