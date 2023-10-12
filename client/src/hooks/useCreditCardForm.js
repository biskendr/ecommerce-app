import { useState } from 'react'
import ValidationsCreditCard from '@/json/Validation/CreditCard.json'

const initialState = {
  cardNumber: '',
  expirationDate: '',
  cvv: '',
}

function useCreditCardForm() {
  const [cardInfo, setCardInfo] = useState(initialState)
  const [errors, setErrors] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target

    setCardInfo((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const error = {}

    Object.keys(ValidationsCreditCard).forEach((field) => {
      const { required, pattern, patternError } = ValidationsCreditCard[field]
      const value = cardInfo[field]

      if (required && !value) {
        error[field] = required
      } else if (pattern && !new RegExp(pattern).test(value)) {
        error[field] = patternError
      }
    })

    setErrors(error)
    return Object.keys(error).length === 0
  }

  return [cardInfo, handleChange, validateForm, errors]
}

export default useCreditCardForm
