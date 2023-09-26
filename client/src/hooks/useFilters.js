import { useCallback, useState } from 'react'

const initialState = {
  category: [],
  price: 70,
  sort: null,
}

function useFilters() {
  const [filters, setFilters] = useState(initialState)

  const handleChange = (event) => {
    const { name, value, checked } = event.target

    setFilters((prevFilters) => {
      if (name === 'category') {
        return {
          ...prevFilters,
          category: checked
            ? [...prevFilters.category, value]
            : prevFilters.category.filter((item) => item !== value),
        }
      }
      return { ...prevFilters, [name]: value }
    })
  }

  const resetFilters = useCallback(() => setFilters(initialState), [])

  return [filters, handleChange, resetFilters]
}

export default useFilters
