export default function TogglePassword({ togglePassword, onClick }) {
  const icon = togglePassword ? 'visibility' : 'visibility_off'
  return (
    <span
      className="material-symbols-sharp password"
      onClick={onClick}
      role="presentation"
    >
      {icon}
    </span>
  )
}
