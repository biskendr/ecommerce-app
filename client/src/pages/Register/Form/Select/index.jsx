export default function FormSelectOption({
  name,
  onChange,
  options,
  error,
  disabled,
}) {
  return (
    <label htmlFor={name} className={`register-form-select-${name}`}>
      <select name={name} onChange={onChange} disabled={disabled}>
        <option value="" hidden>
          Select a {name}
        </option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="register-form-error">*{error}</p>}
    </label>
  )
}
