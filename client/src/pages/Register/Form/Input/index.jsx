import { useState } from 'react'
import TogglePassword from './TogglePassword'

export default function FormInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  error,
}) {
  const [togglePassword, setTogglePassword] = useState(false)
  const inputType = type === 'password' && togglePassword ? 'text' : type

  return (
    <label htmlFor={name}>
      <span className="material-symbols-sharp">{icon}</span>
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {name === 'password' && (
        <TogglePassword
          togglePassword={togglePassword}
          onClick={() => setTogglePassword(!togglePassword)}
        />
      )}
      {error && <p className="register-form-error">{error}</p>}
    </label>
  )
}
