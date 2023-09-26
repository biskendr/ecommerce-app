import { useState } from 'react'

const initialState = {
  category: [],
  price: 70,
  sort: null,
}

function useFilters() {
  const [inputs, setInputs] = useState(initialState)

  const handleChange = (event) => {
    const { name, value, checked } = event.target
    setInputs((prevInputs) => {
      if (name === 'category') {
        const updatedCategory = checked
          ? [...prevInputs.category, value]
          : prevInputs.category.filter((item) => item !== value)
        return { ...prevInputs, category: updatedCategory }
      }
      if (name === 'price') {
        return { ...prevInputs, [name]: value }
      }
      return { ...prevInputs, [name]: value }
    })
  }

  const resetFilters = () => {
    setInputs(initialState)
  }
  return [inputs, handleChange, resetFilters]
}

export default useFilters
