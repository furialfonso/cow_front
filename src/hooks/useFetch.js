import { useState, useEffect } from 'react'

export const useFetch = (url, body) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    if (body === null) {
      return;
    }
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)
    fetch(url, {
      signal: abortController.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error)
        }
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [body])


  const handleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError('Request cancelled')
    }
  }

  return { data, loading, error, handleCancelRequest }
}