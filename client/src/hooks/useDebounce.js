import { useState, useEffect } from 'react'

export default function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, 1000)
    return () => {
      clearTimeout(handler)
    }
  }, [value])
  return debouncedValue
}
