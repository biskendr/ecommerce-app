export const formatCardNumber = (value) => {
  const formattedValue = value.replace(/\D/g, '')

  if (formattedValue.length > 16) {
    return formattedValue.slice(0, 16)
  }

  return formattedValue.replace(/(\d{4})/g, '$1 ').trim()
}

export const formatExpirationDate = (value) => {
  const formattedValue = value.replace(/\D/g, '')

  if (formattedValue === '') {
    return ''
  }

  if (formattedValue.length >= 1) {
    const firstDigit = formattedValue.charAt(0)
    if (firstDigit !== '0' && firstDigit !== '1') {
      return `0${formattedValue.substring(0, 1)}/${formattedValue.substring(1)}`
    }
  }

  if (formattedValue.length >= 2) {
    const secondDigit = formattedValue.charAt(1)
    if (secondDigit < '0' || secondDigit > '9') {
      return `${formattedValue.charAt(0)}0/${formattedValue.substring(1)}`
    }
  }

  if (formattedValue.length > 2) {
    const month = formattedValue.substring(0, 2)
    if (month < '01') {
      return `01/${formattedValue.substring(2)}`
    }
    if (month > '12') {
      return `12/${formattedValue.substring(2)}`
    }

    if (formattedValue.length >= 4) {
      const currentYear = new Date().getFullYear() % 100
      const enteredYear = formattedValue.substring(2, 4)

      if (enteredYear < currentYear || enteredYear > currentYear + 10) {
        return `${month}/${currentYear.toString().padStart(2, '0')}`
      }
    }

    return `${month}/${formattedValue.substring(2, 4)}`
  }
  return formattedValue
}

export const formatCVV = (value) => {
  const formattedValue = value.replace(/\D/g, '')

  if (formattedValue.length > 4) {
    return formattedValue.slice(0, 4)
  }

  return formattedValue
}
