import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { postRegister } from '@/services/ApiInstance'
import useRegisterForm from '@/hooks/useRegisterForm'
import countryList from '@/json/Country.json'
import { useState } from 'react'
import FormInput from './Input'
import FormSelectOption from './Select'

export default function RegisterForm() {
  const [form, handleChange, validateForm, errors] = useRegisterForm()
  const [errorRegister, setErrorRegister] = useState(null)
  const { country } = form
  const navigate = useNavigate()

  const setToken = (data) => {
    Cookies.set('user', JSON.stringify(data), { expires: 1 })
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      try {
        postRegister(form)
          .then((res) => {
            setToken(res.data)
          })
          .catch((err) => setErrorRegister(err.response.data.error.message))
      } catch (error) {
        throw new Error('An error occurred:', error.response)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="username"
        type="text"
        placeholder="Name"
        icon="person"
        value={form.username}
        onChange={handleChange}
        error={errors.username}
      />
      <FormInput
        name="email"
        type="email"
        placeholder="E-mail"
        icon="mail"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        name="password"
        icon="lock"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />
      <FormSelectOption
        name="country"
        value={country}
        onChange={handleChange}
        options={countryList.map((item) => item.country)}
        error={errors.country}
      />
      <FormSelectOption
        name="city"
        value={form.city}
        onChange={handleChange}
        options={
          (countryList.find((item) => item.country === country) || {}).cities ||
          []
        }
        disabled={!country && country === ''}
        error={errors.city}
      />
      <FormInput
        name="address"
        type="text"
        placeholder="Address"
        icon="pin_drop"
        value={form.address}
        onChange={handleChange}
        error={errors.address}
      />
      {errorRegister !== null && (
        <p className="register-form-error">*{errorRegister}</p>
      )}
      <button type="submit">Register</button>
    </form>
  )
}
