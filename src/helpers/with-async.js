export async function withAsync(fn) {
  try {
    if (typeof fn !== "function") {
      throw new Error("withAsync helper expects a function")
    }
    const { data } = await fn()
    return {
      response: data,
      error: null,
    }
  } catch (error) {
    return {
      response: null,
      error,
    }
  }
}
