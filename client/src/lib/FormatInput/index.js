export default function handleInputChange(data) {
  const { name, value, handleChange, formatFunction } = data
  const formattedValue = formatFunction(value.target.value)
  handleChange({
    ...value,
    target: { name, value: formattedValue },
  })
}
