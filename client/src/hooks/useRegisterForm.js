import { useState } from 'react'
import validationRules from '@/json/validationRules.json'

const initialState = {
  username: '',
  email: '',
  password: '',
  country: '',
  city: '',
  address: '',
}

function useRegisterForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const error = {}

    Object.keys(validationRules).forEach((field) => {
      const {
        required,
        pattern,
        minLength,
        maxLength,
        minLengthError,
        maxLengthError,
        patternError,
      } = validationRules[field]
      const value = form[field]

      if (required && !value) {
        error[field] = required
      } else if (maxLength && value.length > maxLength) {
        error[field] = maxLengthError
      } else if (minLength && value.length < minLength) {
        error[field] = minLengthError
      } else if (pattern && !new RegExp(pattern).test(value)) {
        error[field] = patternError
      }
    })

    setErrors(error)
    return Object.keys(error).length === 0
  }

  return [form, handleChange, validateForm, errors]
}

export default useRegisterForm
